import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TextFieldCopy",
  categories: ["forms"],
  visualTraits: [
    "Text input with copy button",
    "Copy icon/button on the right",
    "Copies field value to clipboard on click",
    "Often read-only",
  ],
  useWhen: [
    "Share links or codes",
    "Copy-to-clipboard functionality",
    "Display values that need to be copied",
  ],
  notUseWhen: [
    "Regular editable text input (use TextField)",
    "Fields needing clear button (use TextFieldClear)",
  ],
  similarComponents: [
    {
      component: "TextField",
      difference: "TextField has no copy functionality",
    },
    {
      component: "TextFieldClear",
      difference: "TextFieldClear has clear button instead of copy",
    },
  ],
});
