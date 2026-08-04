import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Typography",
  categories: ["typography"],
  visualTraits: [
    "Low-level text primitive driven by typography design-token variants",
    "Can render many visual text styles from small labels to large display text",
    "Visual appearance depends primarily on the selected typography variant",
    "Often used as a building block beneath higher-level text components",
  ],
  useWhen: [
    "A precise typography token variant must be applied directly",
    "Building custom text compositions beyond the predefined text wrappers",
    "Rendering text with full control over semantic element and variant mapping",
  ],
  notUseWhen: [
    "A semantic higher-level component such as Headline, Text, Label, or Tag already fits the need",
    "The design should avoid direct token-level typography decisions in feature code",
  ],
  similarComponents: [
    {
      component: "Text",
      difference:
        "Text is a higher-level textual component, Typography is the low-level primitive for token-based text styling",
    },
    {
      component: "Headline",
      difference:
        "Headline targets headline patterns, Typography can represent many different text styles",
    },
  ],
});
