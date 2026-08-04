import { defineConfig, globalIgnores } from "eslint/config";
import { base } from "eslint-config-custom";

export default defineConfig([
  { extends: [base] },
  globalIgnores([
    "packages/*/dist/**",
    "examples/*/.next/**",
    "**/node_modules/**",
    "**/storybook-static/**",
    "packages/eslint-config-custom/__tests__/fixtures/**",
  ]),
]);
