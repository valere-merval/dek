import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TextField",
  categories: ["forms"],
  visualTraits: [
    "Single-line text input field",
    "Border/outline around input area",
    "Placeholder text when empty",
    "Label above or floating",
    "Optional helper text below",
  ],
  useWhen: [
    "Single-line text input (names, emails, short text)",
    "Form fields requiring user text entry",
    "Search inputs",
  ],
  notUseWhen: [
    "Multi-line text (use Textarea)",
    "Password entry (use PasswordField)",
    "Date input (use DateField or DatePicker)",
    "Selection from options (use Select or ComboBox)",
  ],
  similarComponents: [
    {
      component: "PasswordField",
      difference: "PasswordField masks input and has show/hide toggle",
    },
    {
      component: "TextFieldClear",
      difference: "TextFieldClear has a clear button to empty the field",
    },
    {
      component: "ComboBox",
      difference: "ComboBox combines text input with dropdown suggestions",
    },
  ],
});
