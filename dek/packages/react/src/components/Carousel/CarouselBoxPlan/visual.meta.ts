import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CarouselBoxPlan",
  categories: ["product", "layout"],
  visualTraits: [
    "BoxPlans displayed in a horizontal carousel",
    "scrollable content",
    "navigation arrows for scrolling",
  ],
  useWhen: [
    "display BoxPlans in a carousel format",
    "when you want to show multiple BoxPlans in a limited space",
    "when you want to allow users to scroll through BoxPlans horizontally",
  ],
  notUseWhen: [
    "when you want to display a single BoxPlan",
    "when you want to display BoxPlans in a grid layout",
  ],
  similarComponents: [
    {
      component: "Carousel",
      difference:
        "CarouselBoxPlan is specifically for displaying BoxPlans, while Carousel can be used for various types of content.",
    },
    {
      component: "CarouselBoxDevice",
      difference:
        "CarouselBoxDevice is specifically for displaying BoxDevices, while CarouselBoxPlan is for displaying BoxPlans.",
    },
  ],
});
