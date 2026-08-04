import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Text",
  categories: ["typography"],
  visualTraits: [
    "Body text / paragraph text",
    "Regular font weight",
    "Standard line height for readability",
    "Various sizes available",
  ],
  useWhen: [
    "Body paragraphs",
    "Descriptions",
    "Any general text content",
    "Inline text elements",
  ],
  notUseWhen: [
    "Headings (use Headline)",
    "Form labels (use Label)",
    "Badges or tags (use Tag or LabelPromoted)",
  ],
  similarComponents: [
    {
      component: "Headline",
      difference: "Headline is for headings, Text for body content",
    },
    {
      component: "Label",
      difference: "Label is smaller descriptor text, Text is body content",
    },
  ],
});
