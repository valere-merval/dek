import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CarouselBoxDevice",
  categories: ["product", "layout"],
  visualTraits: [
    "BoxDevices displayed in a horizontal carousel",
    "scrollable content",
    "navigation arrows for scrolling",
  ],
  useWhen: [
    "display BoxDevices in a carousel format",
    "when you want to show multiple BoxDevices in a limited space",
    "when you want to allow users to scroll through BoxDevices horizontally",
  ],
  notUseWhen: [
    "when you want to display a single BoxDevice",
    "when you want to display BoxDevices in a grid layout",
  ],
  similarComponents: [
    {
      component: "Carousel",
      difference:
        "CarouselBoxDevice is specifically for displaying BoxDevices, while Carousel can be used for various types of content.",
    },
    {
      component: "CarouselBoxPlan",
      difference:
        "CarouselBoxPlan is specifically for displaying BoxPlans, while CarouselBoxDevice is for displaying BoxDevices.",
    },
  ],
});
