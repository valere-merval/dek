import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CardOutlined",
  categories: ["layout"],
  visualTraits: [
    "Border/outline style (not filled)",
    "Transparent or subtle background",
    "Rounded corners",
    "Lower visual prominence than CardFilled",
    "Clean, minimal appearance",
  ],
  useWhen: [
    "Subtle content grouping",
    "When filled cards would be too heavy",
    "Secondary information display",
    "Lists of similar items where contrast isn't needed",
  ],
  notUseWhen: [
    "Highlighting important content (use CardFilled)",
    "Primary feature cards",
    "When high visual contrast is needed",
  ],
  similarComponents: [
    {
      component: "CardFilled",
      difference: "CardFilled has solid background, higher visual prominence",
    },
  ],
});
