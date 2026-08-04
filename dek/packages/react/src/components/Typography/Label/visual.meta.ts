import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Label",
  categories: ["typography"],
  visualTraits: [
    "Small, secondary text",
    "Often uppercase or semi-bold",
    "Used above form fields or as descriptors",
    "Smaller than body text",
  ],
  useWhen: [
    "Form field labels",
    "Category labels",
    "Metadata display (dates, authors)",
    "Small descriptive text above content",
  ],
  notUseWhen: [
    "Body paragraphs (use Text)",
    "Headings (use Headline)",
    "Promotional badges (use LabelPromoted or Tag)",
  ],
  similarComponents: [
    {
      component: "LabelPromoted",
      difference: "LabelPromoted has promotional/badge styling with background",
    },
    {
      component: "Text",
      difference: "Text is for body content, Label for small descriptors",
    },
  ],
});
