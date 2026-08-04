import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Tag",
  categories: ["typography"],
  visualTraits: [
    "Small pill or chip shape",
    "Background color (often subtle/gray)",
    "Used for categorization or filtering",
    "Compact inline element",
  ],
  useWhen: [
    "Category tags",
    "Filter labels",
    "Keyword display",
    "Status indicators without promotional aspect",
  ],
  notUseWhen: [
    "Promotional badges (use LabelPromoted)",
    "Form labels (use Label)",
    "Interactive filter chips (use Chip)",
  ],
  similarComponents: [
    {
      component: "LabelPromoted",
      difference: "LabelPromoted is for promotional content with brand styling",
    },
    {
      component: "Chip",
      difference:
        "Chip is interactive (can be selected/removed), Tag is display-only",
    },
  ],
});
