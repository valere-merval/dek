/**
 * ESLint Config Module Tests
 *
 * Verifies that every error-level rule from each config module (base, react, a11y)
 * actually fires when linting a fixture with intentional violations.
 *
 * This ensures:
 * 1. No rule is silently broken after upgrades
 * 2. Adding a new rule forces you to add a fixture violation (test fails otherwise)
 * 3. Removing a rule is detected (unexpected rule fires → update expected set)
 *
 * Run: node --test __tests__/eslint-config.test.js
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ESLint } from "eslint";
import { base } from "../base.js";
import { react } from "../react.js";
import { a11y } from "../a11y.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixturesDir = path.join(__dirname, "fixtures");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Lint a fixture file with the given config and return the set of fired rule IDs.
 */
async function getFiredRules(config, fixture) {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  });
  const filePath = path.join(fixturesDir, fixture);
  const results = await eslint.lintFiles([filePath]);
  return new Set(
    results.flatMap((r) => r.messages.map((m) => m.ruleId)).filter(Boolean),
  );
}

/**
 * Get all error-level rule IDs from the resolved config for a fixture file.
 */
async function getActiveErrorRules(config, fixture) {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  });
  const filePath = path.join(fixturesDir, fixture);
  const resolved = await eslint.calculateConfigForFile(filePath);
  return Object.entries(resolved.rules || {})
    .filter(([, value]) => {
      const severity = Array.isArray(value) ? value[0] : value;
      return severity === "error" || severity === 2;
    })
    .map(([name]) => name)
    .sort();
}

// ---------------------------------------------------------------------------
// Rules that are active but structurally cannot produce errors in fixtures
// ---------------------------------------------------------------------------

/**
 * Rules that are structurally untestable in fixtures:
 *
 * react/jsx-uses-vars:
 *   Helper rule that marks variables referenced in JSX as "used" for
 *   @typescript-eslint/no-unused-vars. It never reports errors itself.
 *
 * no-nonoctal-decimal-escape:
 *   The TypeScript parser rejects escape sequences like '\8' at the parsing
 *   stage, before any lint rules can fire. Cannot be tested in .ts files.
 *
 * no-octal:
 *   The TypeScript parser rejects legacy octal literals like 071 at the
 *   parsing stage, before any lint rules can fire. Cannot be tested in .ts files.
 */
const UNTESTABLE_RULES = new Set([
  "react/jsx-uses-vars",
  "no-nonoctal-decimal-escape",
  "no-octal",
]);

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("eslint-config-custom", () => {
  describe("base module (typescript-eslint + eslint core)", () => {
    const config = [...base];
    const fixture = "base-violations.ts";

    it("triggers all error-level rules", async () => {
      const activeRules = await getActiveErrorRules(config, fixture);
      const firedRules = await getFiredRules(config, fixture);

      const untestedRules = activeRules.filter(
        (r) => !firedRules.has(r) && !UNTESTABLE_RULES.has(r),
      );

      assert.deepStrictEqual(
        untestedRules,
        [],
        `${untestedRules.length} error rule(s) did not fire.\n` +
          `Add violations to __tests__/fixtures/${fixture}:\n` +
          untestedRules.map((r) => `  - ${r}`).join("\n"),
      );
    });

    it("has no unexpected rules firing", async () => {
      const activeRules = new Set(await getActiveErrorRules(config, fixture));
      const firedRules = await getFiredRules(config, fixture);

      const unexpected = [...firedRules].filter((r) => !activeRules.has(r));

      assert.deepStrictEqual(
        unexpected,
        [],
        `${unexpected.length} rule(s) fired but are not in the config at error level.\n` +
          `This may indicate a config change:\n` +
          unexpected.map((r) => `  - ${r}`).join("\n"),
      );
    });
  });

  describe("react module (react + react-hooks)", () => {
    const config = [...base, ...react];
    const fixture = "react-violations.tsx";

    it("triggers all react/react-hooks error-level rules", async () => {
      const activeRules = await getActiveErrorRules(config, fixture);
      const reactRules = activeRules.filter(
        (r) => r.startsWith("react/") || r.startsWith("react-hooks/"),
      );
      const firedRules = await getFiredRules(config, fixture);

      const untestedRules = reactRules.filter(
        (r) => !firedRules.has(r) && !UNTESTABLE_RULES.has(r),
      );

      assert.deepStrictEqual(
        untestedRules,
        [],
        `${untestedRules.length} react rule(s) did not fire.\n` +
          `Add violations to __tests__/fixtures/${fixture}:\n` +
          untestedRules.map((r) => `  - ${r}`).join("\n"),
      );
    });
  });

  describe("a11y module (jsx-a11y)", () => {
    const config = [...base, ...react, ...a11y];
    const fixture = "a11y-violations.tsx";

    it("triggers all jsx-a11y error-level rules", async () => {
      const activeRules = await getActiveErrorRules(config, fixture);
      const a11yRules = activeRules.filter((r) => r.startsWith("jsx-a11y/"));
      const firedRules = await getFiredRules(config, fixture);

      const untestedRules = a11yRules.filter(
        (r) => !firedRules.has(r) && !UNTESTABLE_RULES.has(r),
      );

      assert.deepStrictEqual(
        untestedRules,
        [],
        `${untestedRules.length} a11y rule(s) did not fire.\n` +
          `Add violations to __tests__/fixtures/${fixture}:\n` +
          untestedRules.map((r) => `  - ${r}`).join("\n"),
      );
    });
  });
});
