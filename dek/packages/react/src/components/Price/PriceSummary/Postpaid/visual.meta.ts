import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "PriceSummaryPostpaid",
  deprecated: {
    replacement: "PriceSummary",
    message:
      "Use PriceSummary instead. For bringback, use additionalSection with type bringback.",
  },
});
