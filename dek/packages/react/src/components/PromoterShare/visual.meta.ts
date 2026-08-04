import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "PromoterShare",
  categories: ["data-display"],
  visualTraits: [
    "Dark card with subtle gradient background",
    "Orange branded badge/icon on the left side (e.g., NPS SCORE)",
    "Large percentage headline displaying recommendation rate",
    "Description text below the headline",
    "More details link at the bottom",
  ],
  useWhen: [
    "Displaying customer satisfaction or recommendation scores (NPS-style)",
    "Showcasing social proof with percentage-based metrics",
    "Highlighting brand trust indicators like 'Happy Score'",
    "Presenting testimonial or rating summaries",
  ],
  notUseWhen: [
    "Detailed breakdown of ratings or reviews is needed",
    "Non-percentage based metrics should be displayed",
    "Simple text-only satisfaction statements are sufficient",
  ],
  similarComponents: [],
});
