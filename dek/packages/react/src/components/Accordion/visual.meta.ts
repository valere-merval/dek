import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Accordion",
  categories: ["layout"],
  visualTraits: [
    "Expandable/collapsible sections",
    "Header with expand/collapse indicator (chevron)",
    "Content revealed when expanded",
    "Multiple items can be stacked",
  ],
  useWhen: [
    "FAQ sections",
    "Collapsible content sections",
    "Space-saving for long content",
    "Progressive disclosure of information",
  ],
  notUseWhen: [
    "Always-visible content",
    "Tab-based navigation (use Tabs)",
    "Simple show/hide toggle (use Collapsible or ButtonMoreDetails)",
  ],
  similarComponents: [
    {
      component: "Tabs",
      difference:
        "Tabs show one panel at a time horizontally, Accordion expands vertically",
    },
  ],
});
