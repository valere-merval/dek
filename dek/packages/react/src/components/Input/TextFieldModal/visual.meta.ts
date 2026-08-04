import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TextFieldModal",
  categories: ["forms", "overlay"],
  visualTraits: [
    "Text field augmented with a modal-based information or help affordance",
    "Looks like a regular input but can open additional explanatory content",
    "Combines form entry with a secondary overlay interaction",
    "Useful where inline space is insufficient for long hints",
  ],
  useWhen: [
    "A text input needs extra information shown in a modal",
    "Validation or helper content is too long for inline text",
    "Users may need contextual details before filling the field",
  ],
  notUseWhen: [
    "A plain text field without extra overlay content is enough",
    "The additional information should remain permanently visible inline",
  ],
  similarComponents: [
    {
      component: "TextField",
      difference:
        "TextFieldModal adds modal-based supporting content, TextField is a standard input",
    },
    {
      component: "Modal",
      difference:
        "Modal is the generic overlay container, TextFieldModal is a form field pattern that invokes one",
    },
  ],
});
