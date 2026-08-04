import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxActivation",
  categories: ["checkout", "pricing"],
  visualTraits: [
    "Sticky container that can appear at bottom (mobile) or side (desktop)",
    "Header displaying plan name (e.g., Prepaid Allnet M)",
    "Price display with billing period (e.g., 10 EUR per 4 weeks)",
    "List items explaining prepaid activation details",
    "Bold text highlighting for important information",
    "Expandable/collapsible on mobile viewports",
    "Action button for proceeding with activation",
  ],
  useWhen: [
    "Presenting prepaid tariff activation summary",
    "Explaining prepaid billing and credit information",
    "Sticky summary during prepaid checkout flow",
    "Both mobile (bottom) and desktop (side) layouts needed",
  ],
  notUseWhen: [
    "Plan selection is needed (use StickyBoxPlanSelection instead)",
    "Non-prepaid tariff checkout flows",
    "Simple price display without activation details",
  ],
  similarComponents: [
    {
      component: "StickyBoxPlanSelection",
      difference: "For selecting between plans, not activation summary",
    },
    { component: "ShoppingCart", difference: "Full cart with multiple items" },
  ],
});
