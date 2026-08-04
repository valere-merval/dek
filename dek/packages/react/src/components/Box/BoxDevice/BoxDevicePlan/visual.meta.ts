import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "BoxDevicePlan",
  categories: ["product"],
  visualTraits: [
    "Dark rectangular card combining device and plan information",
    "Device image prominently displayed",
    "Device title/name as headline",
    "Optional promotion label (e.g., discount badge) in pink or black",
    "Color selection dots for available device colors",
    "Memory size options (e.g., 128, 256, 512 GB)",
    "Combined price display for device + plan bundle",
    "Primary action button at the bottom",
    "Can be arranged in a grid layout via BoxDevicePlan.Grid",
  ],
  useWhen: [
    "Displaying device + tariff bundle offers",
    "Showing smartphone with contract deals",
    "Product listings where device is sold with a plan subscription",
    "Grid-based device-with-plan overview pages",
  ],
  notUseWhen: [
    "Device is sold standalone without plan (use BoxDevice instead)",
    "Displaying tariff/plan-only products (use BoxPlan instead)",
    "Detailed device specification page is needed",
  ],
  similarComponents: [
    {
      component: "BoxDevice",
      difference: "For device-only cards without plan",
    },
    {
      component: "BoxPlan",
      difference: "For tariff/plan-only cards without device",
    },
  ],
});
