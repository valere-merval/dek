import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Divider",
  categories: ["layout"],
  visualTraits: [
    "Horizontal or vertical line",
    "Separates content sections",
    "Thin, subtle appearance",
    "May have text label in middle",
  ],
  useWhen: [
    "Separating content sections",
    "Visual breaks between groups",
    "List item separators",
  ],
  notUseWhen: [
    "Heavy visual separation needed (use spacing or cards)",
    "Navigation separators (use proper nav styling)",
  ],
  similarComponents: [],
});
