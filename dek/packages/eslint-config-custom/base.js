import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * Base ESLint flat config: ESLint recommended + TypeScript ESLint recommended + Prettier.
 * Use this as the foundation for all packages.
 *
 * Order matters:
 * 1. eslint.configs.recommended — core JS rules (no-debugger, no-empty, use-isnan, etc.)
 * 2. tseslint.configs.recommended — TS parser + TS rules + disables core rules that TS handles
 * 3. eslintConfigPrettier — disables formatting rules that conflict with Prettier
 * @type {import("eslint").Linter.Config[]}
 */
export const base = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
