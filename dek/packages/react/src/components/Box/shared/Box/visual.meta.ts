import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Box",
  categories: ["layout"],
  visualTraits: [
    "Simple rectangular content container",
    "Optional promotion label or discount text at the edge",
    "Padded surface for grouping content",
    "Used as a neutral wrapper without strong component-specific styling",
  ],
  useWhen: [
    "Grouping related content inside a bounded surface",
    "Creating reusable card-like wrappers for custom compositions",
    "Mainly for creating internal components inside fair components",
    "Showing optional promotion labels above generic content blocks",
  ],
  notUseWhen: [
    "As layout component for the whole page or large sections",
    "A fully specialized product or plan card is needed",
    "Content should stay inline without a boxed container",
  ],
  similarComponents: [
    {
      component: "CardFilled",
      difference:
        "CardFilled is a finished card pattern, Box is a generic wrapper",
    },
    {
      component: "BoxPlan",
      difference: "BoxPlan is specialized for tariff or plan presentation",
    },
  ],
});
