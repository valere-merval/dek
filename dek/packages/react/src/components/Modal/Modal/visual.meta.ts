import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Modal",
  categories: ["overlay"],
  visualTraits: [
    "Centered overlay dialog",
    "Backdrop/overlay behind",
    "Card-like container with content",
    "Close button typically in corner",
    "Blocks interaction with page behind",
  ],
  useWhen: [
    "Important confirmations",
    "Forms requiring focus",
    "Detail views without navigation",
    "Actions requiring user attention",
  ],
  notUseWhen: [
    "Non-blocking notifications (use Toast)",
    "Simple confirmations (use inline UI)",
    "Navigation-based content (use pages)",
  ],
  similarComponents: [],
});
