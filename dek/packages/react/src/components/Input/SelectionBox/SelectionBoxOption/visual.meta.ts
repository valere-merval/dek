import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionBoxOption",
  deprecated: {
    replacement:
      "SelectionBoxRadio, SelectionBoxCheckbox, or SelectionBoxPayment",
    message:
      "Use the dedicated SelectionBoxRadio, SelectionBoxCheckbox, and SelectionBoxPayment components instead.",
  },
});
