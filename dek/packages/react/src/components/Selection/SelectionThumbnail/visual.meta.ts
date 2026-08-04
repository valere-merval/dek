import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionThumbnail",
  categories: ["selection", "product"],
  visualTraits: [
    "Horizontal row of small thumbnail images",
    "Each thumbnail shows a different product view (front, side, back)",
    "Selected thumbnail has highlighted border or visual emphasis",
    "Compact image previews for navigation between product angles",
    "Used as navigation controls within CarouselProductImage",
  ],
  useWhen: [
    "Navigating between different product image views in CarouselProductImage",
    "Providing thumbnail-based image selection in a product gallery",
    "Allowing users to quickly switch between product angles (front, side, back views)",
  ],
  notUseWhen: [
    "Standalone image selection outside of CarouselProductImage context",
    "Non-image based selection is needed",
    "Arrow or dot-based carousel navigation is preferred",
  ],
  similarComponents: [
    {
      component: "CarouselProductImage",
      difference: "Parent component that contains SelectionThumbnail",
    },
  ],
});
