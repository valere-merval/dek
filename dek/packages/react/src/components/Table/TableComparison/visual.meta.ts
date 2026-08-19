import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TableComparison",
  categories: ["data-display", "product"],
  visualTraits: [
    "header row for comparing two products by default, or three with showThirdColumn",
    "if more than two products, select field will be shown, otherwise there will be a text header with product name",
  ],
  useWhen: [
    "Comparing two products side by side by default, or three with showThirdColumn",
    "Displaying product features in a table format",
  ],
  notUseWhen: [
    "Displaying basic tabular data",
    "For complex data visualizations",
    "For data that requires sorting or filtering",
  ],
  similarComponents: [
    {
      component: "TableInfo",
      difference:
        "TableInfo displays basic tabular data, while TableComparison compares two products by default or three with showThirdColumn.",
    },
  ],
});
