import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ProductOverviewItem",
  categories: ["product", "checkout", "cart"],
  visualTraits: [
    "Dark product card with rounded corners",
    "Product image on the left side",
    "Title/product name prominently displayed to the right of the image",
    "Optional product specifications for color or specs(uses ColorVariants internally)",
    "Optional availability date",
    "More details link below the product information",
  ],
  useWhen: [
    "Displaying products in an overview list (e.g., smartphones, SIM cards)",
    "Showing product variants with selection options",
    "Presenting telecommunication products with availability dates",
    "Compact product presentation with essential information is needed",
    "used in checkout table for showing product summary with image and details",
  ],
  notUseWhen: [
    "A detailed product page with all specifications is needed",
    "Products should be displayed in a grid layout without selection options",
    "Simple text lists without visual product representation are sufficient",
  ],
  similarComponents: [],
});
