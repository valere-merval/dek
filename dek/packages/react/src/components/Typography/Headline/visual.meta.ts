import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Headline",
  categories: ["typography"],
  visualTraits: [
    "Large, bold text",
    "Semantic heading levels (h1-h6)",
    "Prominent font weight",
    "Used for section or page titles",
  ],
  useWhen: [
    "Page titles (h1)",
    "Section headings (h2-h4)",
    "Card titles",
    "Any content that needs hierarchical structure",
  ],
  notUseWhen: [
    "Body text (use Text)",
    "Form labels (use Label)",
    "Decorative text without semantic meaning",
  ],
  similarComponents: [
    {
      component: "HeadlineHighlighted",
      difference: "HeadlineHighlighted has visual emphasis/highlight styling",
    },
    {
      component: "Text",
      difference: "Text is for body/paragraph content, Headline for headings",
    },
  ],
});
