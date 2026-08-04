import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "LabelPromoted",
  categories: ["typography"],
  visualTraits: [
    "Badge-like appearance",
    "Background color (often brand color)",
    "Small, prominent text",
    "Used for promotions or highlights",
    "Rounded or pill shape",
  ],
  useWhen: [
    "Sale or discount badges",
    "New/Featured labels",
    "Promotional callouts",
    "Status indicators on cards",
  ],
  notUseWhen: [
    "Form field labels (use Label)",
    "Regular text content (use Text)",
    "Categorization tags without promotion aspect (use Tag)",
  ],
  similarComponents: [
    {
      component: "Label",
      difference: "Label is plain text without badge styling",
    },
    {
      component: "Tag",
      difference: "Tag is for categorization, LabelPromoted for promotions",
    },
  ],
});
