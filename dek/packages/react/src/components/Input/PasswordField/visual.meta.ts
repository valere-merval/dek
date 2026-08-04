import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "PasswordField",
  categories: ["forms"],
  visualTraits: [
    "Text input with masked/hidden characters",
    "Show/hide password toggle button",
    "Dot or asterisk characters visible when typing",
    "Same styling as TextField",
  ],
  useWhen: [
    "Password entry fields",
    "PIN or secret code inputs",
    "Any sensitive text that should be hidden",
  ],
  notUseWhen: [
    "Regular text input (use TextField)",
    "Non-sensitive information",
  ],
  similarComponents: [
    {
      component: "TextField",
      difference: "TextField shows text in plain, PasswordField masks it",
    },
  ],
});
