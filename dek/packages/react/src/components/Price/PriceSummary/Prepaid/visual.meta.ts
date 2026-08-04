import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "PriceSummaryPrepaid",
  deprecated: {
    replacement: "PriceSummary",
    message: "Use PriceSummary with additionalSection of type prepaid instead.",
  },
});
