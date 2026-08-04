#!/usr/bin/env node

/**
 * Custom storybook-llms-extractor CLI
 * Based on @fluentui/storybook-llms-extractor (MIT License)
 * @see https://github.com/microsoft/fluentui/tree/master/tools/storybook-llms-extractor
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

import type { Args, StorybookRef } from "./types.js";
import {
  extractStorybookData,
  writeSummaryFile,
  writeFullDocsFiles,
} from "./utils.js";

console.info(`━━ Storybook LLM Docs Generator ━━`);

void main().catch((error: unknown) => {
  console.error("Failed to generate Storybook LLM docs.", error);
  process.exit(1);
});

async function main() {
  const args = processArgs();

  console.info(`ℹ️ Storybook dist path: ${args.distPath}`);

  const data = await extractStorybookData(args);

  // Write summary/llms.txt file
  await writeSummaryFile(args, data);

  // Write per component/page files
  await writeFullDocsFiles(args, data);

  console.info(`✅ LLMs docs generation complete.`);
  console.info(
    `ℹ️ You can find the generated files in the Storybook dist folder: ${args.distPath}`,
  );
}

/**
 * Type guard for StorybookRef
 */
function isStorybookRef(obj: unknown): obj is StorybookRef {
  return (
    !!obj &&
    typeof obj === "object" &&
    "title" in obj &&
    typeof obj.title === "string" &&
    "url" in obj &&
    typeof obj.url === "string"
  );
}

/**
 * Parses refs from config.
 */
function parseRefs(refs: unknown[]): StorybookRef[] {
  if (Array.isArray(refs)) {
    return refs
      .map((ref) => {
        if (typeof ref === "string") {
          try {
            return JSON.parse(ref);
          } catch {
            return null;
          }
        }
        return ref;
      })
      .filter(isStorybookRef);
  }

  return [];
}

/**
 * Processes arguments from the JSON config file.
 *
 * Usage: tsx scripts/storybook-llms-extractor/cli.ts --config llms.config.json
 */
function processArgs(): Required<Args> {
  const configFlagIndex = process.argv.indexOf("--config");

  if (configFlagIndex === -1 || !process.argv[configFlagIndex + 1]) {
    console.error(
      "Usage: tsx scripts/storybook-llms-extractor/cli.ts --config <path-to-config.json>",
    );
    process.exit(1);
  }

  const configPath = process.argv[configFlagIndex + 1];

  let config: Record<string, unknown>;
  try {
    const raw = readFileSync(configPath, "utf-8");
    config = JSON.parse(raw);
  } catch (err) {
    console.error(`Invalid JSON config file: ${configPath}`, err);
    process.exit(1);
  }

  if (!config.distPath || typeof config.distPath !== "string") {
    console.error('Config must include a "distPath" string property.');
    process.exit(1);
  }

  return {
    distPath: join(cwd(), config.distPath),
    summaryBaseUrl:
      process.env.SUMMARY_BASE_URL || (config.summaryBaseUrl as string) || "/",
    summaryTitle: (config.summaryTitle as string) || "Summary",
    summaryDescription: (config.summaryDescription as string) || "",
    refs: parseRefs((config.refs as unknown[]) || []),
    tokensPath: config.tokensPath
      ? join(cwd(), config.tokensPath as string)
      : "",
  };
}
