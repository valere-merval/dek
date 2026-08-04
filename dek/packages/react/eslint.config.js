import { defineConfig, globalIgnores } from "eslint/config";
import { base, react, a11y } from "eslint-config-custom";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  { extends: [base] },
  { extends: [react] },
  { extends: [a11y] },
  { extends: [storybook.configs["flat/recommended"]] },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      "react/prop-types": "off",
      "no-console": ["error", { allow: ["warn", "error", "info", "trace"] }],
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true, varsIgnorePattern: "^React$" },
      ],
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/no-autofocus": "off",
    },
  },
  {
    files: ["**/*.mock.tsx", "**/*.stories.tsx"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["**/*.test-visual-ct.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
  globalIgnores(["dist/**", "storybook-static/**", "playwright/**"]),
]);
