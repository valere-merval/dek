import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "HeadlineHighlighted",
  categories: ["typography"],
  visualTraits: [
    "Headline with visual highlight/emphasis",
    "May have background color or underline",
    "Draws extra attention to the heading",
    "Decorative styling on text",
  ],
  useWhen: [
    "Promotional headlines",
    "Featured section titles",
    "Marketing or campaign headings",
    "When extra visual emphasis is needed",
  ],
  notUseWhen: [
    "Regular page structure headings (use Headline)",
    "Subtle section headings",
    "Body text (use Text)",
  ],
  similarComponents: [
    {
      component: "Headline",
      difference: "Headline is standard heading without decorative emphasis",
    },
  ],
});
