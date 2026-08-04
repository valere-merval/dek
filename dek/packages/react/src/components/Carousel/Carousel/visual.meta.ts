import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Carousel",
  categories: ["layout"],
  visualTraits: [
    "content displayed in a horizontal carousel",
    "scrollable content",
    "navigation arrows for scrolling",
  ],
  useWhen: [
    "display content in a carousel format",
    "when you want to show multiple items in a limited space",
    "when you want to allow users to scroll through items horizontally",
  ],
  notUseWhen: [
    "when you want to display a single item",
    "when you want to display items in a grid layout",
  ],
  similarComponents: [
    {
      component: "CarouselBoxDevice",
      difference:
        "CarouselBoxDevice is specifically for displaying BoxDevices, while Carousel can be used for various types of content.",
    },
  ],
});
