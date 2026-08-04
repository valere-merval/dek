import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "TabList",
  categories: ["navigation"],
  visualTraits: [
    "Row of tab buttons",
    "Active state indicator",
    "Controls external content",
    "Standalone tab strip without panels",
  ],
  useWhen: [
    "Tab navigation controlling external content",
    "When tab panels are rendered separately",
    "Custom tab implementations",
  ],
  notUseWhen: [
    "Standard tab UI with panels (use Tabs)",
    "Full tab component needed",
  ],
  similarComponents: [
    {
      component: "Tabs",
      difference: "Tabs includes both tab strip and panels",
    },
  ],
});
