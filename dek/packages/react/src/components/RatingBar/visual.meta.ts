import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "RatingBar",
  categories: ["data-display"],
  visualTraits: [
    "Dark horizontal bar container",
    "Optional icon on the left side (e.g., thumbs up)",
    "Label text next to the icon",
    "Horizontal progress bar with teal/mint fill color",
    "Numeric rating value displayed on the right (e.g., 4,1)",
  ],
  useWhen: [
    "Displaying rating scores visually with a progress bar",
    "Showing category-specific ratings (e.g., Fairness, Service)",
    "Presenting ratings with both visual bar and numeric value",
    "Rating breakdowns in review or feedback sections",
  ],
  notUseWhen: [
    "Star-based ratings are required",
    "Simple numeric display without visual bar is sufficient",
    "Multiple ratings need to be compared in a chart format",
  ],
  similarComponents: [],
});
