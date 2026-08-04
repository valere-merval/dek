import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "BoxPlan",
  categories: ["product"],
  visualTraits: [
    "Dark rectangular card for tariff/plan display",
    "Colored plan title (e.g., yellow text for plan name)",
    "Optional promotion label (e.g., discount badge) in pink or black",
    "Data contingent display with amount and unit (e.g., 15 GB)",
    "Supports range display for flexible plans (e.g., 5-20 GB)",
    "Price display with billing period (monthly/one-time)",
    "Optional USP bullet points listing plan features",
    "Link to product information sheet (PIB)",
    "Primary action button at the bottom",
    "Can be arranged in a grid layout via BoxPlan.Grid",
  ],
  useWhen: [
    "Displaying mobile tariff or plan cards",
    "Showing data plan options with contingent and pricing",
    "Tariff comparison or selection pages",
    "Fixed-line or home spot product offerings",
    "Plans with flexible/configurable data volumes",
  ],
  notUseWhen: [
    "Displaying device products (use BoxDevice instead)",
    "Device + plan bundles (use BoxDevicePlan instead)",
    "Simple pricing display without plan details",
  ],
  similarComponents: [
    { component: "BoxDevice", difference: "For device-only product cards" },
    {
      component: "BoxDevicePlan",
      difference: "For device + plan bundle cards",
    },
    {
      component: "ProductOverviewItem",
      difference: "Simpler product display for general products",
    },
  ],
});
