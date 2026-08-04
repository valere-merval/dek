import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxSidePlanSelection",
  categories: ["checkout", "pricing", "selection"],
  visualTraits: [
    "Side sticky summary for plan selection flows",
    "Desktop-oriented summary card pinned in a side column",
    "Shows the selected plan context and price while comparison content scrolls",
    "Provides a prominent action area for continuing with the current choice",
  ],
  useWhen: [
    "Plan selection should remain visible on desktop while users scroll comparisons",
    "A side rail summary supports conversion during plan exploration",
    "Selection context needs more room than a mobile bottom bar provides",
  ],
  notUseWhen: [
    "A mobile bottom sticky summary is needed",
    "The sticky summary is for shopping cart totals instead of plan selection",
  ],
  similarComponents: [
    {
      component: "StickyBoxPlanSelection",
      difference:
        "StickyBoxPlanSelection describes the shared pattern, this variant is the side desktop layout",
    },
    {
      component: "StickyBoxBottomPlanSelection",
      difference: "StickyBoxBottomPlanSelection is the mobile bottom variant",
    },
  ],
});
