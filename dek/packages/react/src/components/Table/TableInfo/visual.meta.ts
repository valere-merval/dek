import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TableInfo",
  categories: ["data-display", "product"],
  visualTraits: ["basic table with lines separating rows"],
  useWhen: [
    "Displaying tabular data",
    "text based data that needs to be organized in rows and columns",
  ],
  notUseWhen: [
    "for comparing product features",
    "for complex data visualizations",
    "for data that requires sorting or filtering",
  ],
  similarComponents: [
    {
      component: "TableComparison",
      difference:
        "TableComparison is used for comparing two product side by side, while TableInfo is for displaying basic tabular data.",
    },
  ],
});
