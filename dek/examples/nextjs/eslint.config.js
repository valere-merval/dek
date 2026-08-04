import { defineConfig, globalIgnores } from "eslint/config";
import { base, react } from "eslint-config-custom";
import globals from "globals";

export default defineConfig([
  { extends: [base] },
  { extends: [react] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts"]),
]);
