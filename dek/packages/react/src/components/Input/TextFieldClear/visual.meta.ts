import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TextFieldClear",
  categories: ["forms"],
  visualTraits: [
    "Text input with clear/X button",
    "Clear button appears when field has value",
    "One-click to empty the field",
  ],
  useWhen: [
    "Search fields",
    "Filters that need quick clearing",
    "Any text input where quick reset is useful",
  ],
  notUseWhen: [
    "Fields where clearing isn't common (use TextField)",
    "Password fields (use PasswordField)",
  ],
  similarComponents: [
    {
      component: "TextField",
      difference: "TextField has no clear button",
    },
    {
      component: "TextFieldCopy",
      difference: "TextFieldCopy has copy button instead of clear",
    },
  ],
});
