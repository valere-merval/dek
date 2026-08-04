import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "IconTile",
  categories: ["misc"],
  visualTraits: [
    "Icon with background container",
    "Circular or rounded square shape",
    "Icon centered in tile",
    "Often used as visual anchor",
  ],
  useWhen: [
    "Feature icons in cards",
    "Navigation items with icons",
    "Visual anchors for sections",
    "Avatar-like icon displays",
  ],
  notUseWhen: [
    "Inline icons (use icons directly)",
    "Button icons (use Button variants)",
  ],
  similarComponents: [],
});
