import { fixupConfigRules } from "@eslint/compat";
import jsxA11y from "eslint-plugin-jsx-a11y";

/**
 * Accessibility (a11y) ESLint flat config: jsx-a11y recommended rules.
 * Add this to any package that renders JSX to enforce accessibility best practices.
 * @type {import("eslint").Linter.Config[]}
 */
export const a11y = [...fixupConfigRules(jsxA11y.flatConfigs.recommended)];
