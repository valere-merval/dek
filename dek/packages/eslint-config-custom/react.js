import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

/**
 * React ESLint flat config: React recommended + JSX runtime + React Hooks + browser globals.
 * Use this in addition to `base` for React packages.
 * @type {import("eslint").Linter.Config[]}
 */
export const react = [
  ...fixupConfigRules({
    ...reactPlugin.configs.flat.recommended,
    settings: { react: { version: "detect" } },
  }),
  ...fixupConfigRules(reactPlugin.configs.flat["jsx-runtime"]),
  {
    plugins: { "react-hooks": fixupPluginRules(reactHooksPlugin) },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
];
