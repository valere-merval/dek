import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CarouselProductImage",
  categories: ["product", "layout"],
  visualTraits: [
    "Product images displayed on a center stage with thumbnails on the right",
    "vertical carousel for thumbnails",
    "scrollable content",
    "navigation arrows for scrolling",
  ],
  useWhen: [
    "display product images in a carousel format",
    "when you want to show multiple product images in a limited space",
    "when you want to allow users to scroll through product images horizontally",
  ],
  notUseWhen: [
    "when you want to display a single product image",
    "when you want to display product images in a grid layout",
  ],
  similarComponents: [
    {
      component: "Carousel",
      difference:
        "CarouselProductImage is specifically for displaying product images, while Carousel can be used for various types of content.",
    },
    {
      component: "CarouselBoxDevice",
      difference:
        "CarouselBoxDevice is specifically for displaying BoxDevices, while CarouselProductImage is for displaying product images.",
    },
    {
      component: "CarouselBoxPlan",
      difference:
        "CarouselBoxPlan is specifically for displaying BoxPlans, while CarouselProductImage is for displaying product images.",
    },
  ],
});
