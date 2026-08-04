import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxPlanSelection",
  categories: ["checkout", "selection", "pricing"],
  visualTraits: [
    "Sticky container that can appear at bottom (mobile) or side (desktop)",
    "Selected plan summary with title, contingent, and price",
    "Link to product information sheet (PIB)",
    "Radio group for selecting between available plans",
    "Each plan option shows contingent and monthly price",
    "Expandable/collapsible on mobile viewports",
  ],
  useWhen: [
    "Allowing users to select between multiple tariff plans",
    "Sticky plan comparison during checkout flow",
    "Displaying plan options with data contingent and pricing",
    "Both mobile (bottom) and desktop (side) layouts needed",
  ],
  notUseWhen: [
    "Activation summary without plan selection (use StickyBoxActivation instead)",
    "Full-page plan comparison table is preferred",
    "Single plan without selection options",
  ],
  similarComponents: [
    {
      component: "StickyBoxActivation",
      difference: "For activation summary, not plan selection",
    },
    {
      component: "BoxPlan",
      difference: "Standalone plan cards, not sticky selection UI",
    },
  ],
});
