import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "NavigationChip",
  categories: ["navigation", "selection"],
  visualTraits: [
    "Small pill-shaped chip used as carousel navigation",
    "Compact label inside a rounded interactive chip",
    "Selected state highlights the active slide or section",
    "Appears as part of a horizontal carousel control set",
  ],
  useWhen: [
    "Navigating between carousel items or grouped slides",
    "Showing a compact chip-based selection inside carousel controls",
    "Providing a more descriptive alternative to simple dots",
  ],
  notUseWhen: [
    "Standard content chips unrelated to carousel navigation are needed",
    "A full tab interface with panels is required",
  ],
  similarComponents: [
    {
      component: "Carousel",
      difference:
        "Carousel is the full scrolling component, NavigationChip is one of its navigation controls",
    },
    {
      component: "Tabs",
      difference:
        "Tabs control persistent content panels, NavigationChip targets carousel slide navigation",
    },
  ],
});
