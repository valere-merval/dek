import { defineConfig, globalIgnores } from "eslint/config";
import { base } from "eslint-config-custom";
import globals from "globals";

export default defineConfig([
  { extends: [base] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  globalIgnores(["build/**"]),
]);
