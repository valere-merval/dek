import { defineConfig, globalIgnores } from "eslint/config";
import { base, react } from "eslint-config-custom";
import globals from "globals";

export default defineConfig([
  { extends: [base] },
  { extends: [react] },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true, varsIgnorePattern: "^React$" },
      ],
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
  },
  globalIgnores(["dist/**"]),
]);
