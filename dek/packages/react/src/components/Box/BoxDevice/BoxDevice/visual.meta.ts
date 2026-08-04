import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "BoxDevice",
  categories: ["product"],
  visualTraits: [
    "Dark rectangular card with product image prominently displayed",
    "Device title/name as headline",
    "Optional promotion label (e.g., discount badge) in pink or black",
    "Optional EU energy efficiency label (A, B, C, etc.)",
    "Color selection dots showing available device colors",
    "Memory size options (e.g., 128, 256, 512 GB)",
    "Price display with optional prefix, suffix, and strikethrough price",
    "Primary action button at the bottom",
    "Can be arranged in a grid layout via BoxDevice.Grid",
  ],
  useWhen: [
    "Displaying smartphone or device product cards in a catalog",
    "Showing device options with color and memory variants",
    "Product listings where device-only purchase is available",
    "Grid-based device overview pages",
    "Used within CarouselBoxDevice for horizontal device browsing",
  ],
  notUseWhen: [
    "Device is bundled with a tariff plan (use BoxDevicePlan instead)",
    "Displaying tariff/plan-only products (use BoxPlan instead)",
    "Detailed device specification page is needed",
  ],
  similarComponents: [
    {
      component: "BoxDevicePlan",
      difference: "For device + plan bundle cards",
    },
    {
      component: "BoxPlan",
      difference: "For tariff/plan-only cards without device",
    },
    {
      component: "ProductOverviewItem",
      difference: "Simpler product display without variant selection",
    },
  ],
});
