import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TableComparison",
  categories: ["data-display", "product"],
  visualTraits: [
    "select field in header row to compare two products",
    "if more than two products, select field will be shown, otherwise there will be a text header with product name",
  ],
  useWhen: [
    "Comparing two products side by side",
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
        "TableInfo is used for displaying basic tabular data, while TableComparison is for comparing two products side by side.",
    },
  ],
});
