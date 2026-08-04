import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxBottomPlanSelection",
  categories: ["checkout", "pricing", "selection"],
  visualTraits: [
    "Bottom sticky summary for plan selection flows",
    "Mobile-friendly compact bar that summarizes the selected plan and price",
    "Expandable area keeps selection context visible while browsing options",
    "Contains call-to-action for continuing with the chosen plan",
  ],
  useWhen: [
    "Users compare plans on mobile and need the current choice pinned to the bottom",
    "Plan selection should remain actionable while scrolling long option lists",
    "A compact sticky checkout entry point is required on small screens",
  ],
  notUseWhen: [
    "A desktop side summary is more appropriate",
    "The sticky summary is for activation or shopping cart rather than plan selection",
  ],
  similarComponents: [
    {
      component: "StickyBoxPlanSelection",
      difference:
        "StickyBoxPlanSelection describes the shared pattern, this variant is the bottom mobile layout",
    },
    {
      component: "StickyBoxSidePlanSelection",
      difference:
        "StickyBoxSidePlanSelection is the desktop side-panel variant",
    },
  ],
});
