import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "List",
  categories: ["layout"],
  visualTraits: [
    "Vertical list of items",
    "Consistent item styling",
    "has bullets",
    "Stacked vertically",
  ],
  useWhen: [
    "Displaying lists of items",
    "Feature lists",
    "only for unordered lists",
  ],
  notUseWhen: ["Grid layouts", "Complex card arrangements", "numbered lists"],
  similarComponents: [],
});
