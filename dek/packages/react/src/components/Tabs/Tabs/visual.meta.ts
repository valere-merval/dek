import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Tabs",
  deprecated: {
    replacement: "TabList",
    message: "Use TabList instead.",
  },
});
