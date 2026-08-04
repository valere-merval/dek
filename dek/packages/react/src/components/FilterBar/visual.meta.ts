import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "FilterBar",
  categories: ["navigation"],
  visualTraits: [
    "provides a set of filters for refining search results or content",
    "typically displayed as a horizontal  bar with filter options",
    "on mobile it shrinks to two buttons, one for filters and one for sorting",
    "mobile it opens a modal with filter options",
  ],
  useWhen: ["when you want to provide users with the option to filter devices"],
  notUseWhen: [],
  similarComponents: [],
});
