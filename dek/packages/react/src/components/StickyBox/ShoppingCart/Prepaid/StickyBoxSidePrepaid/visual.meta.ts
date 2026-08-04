import { defineVisualMeta } from "../../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxSidePrepaid",
  categories: ["checkout", "cart", "pricing"],
  visualTraits: [
    "Side sticky shopping cart summary for prepaid checkout",
    "Desktop side-panel card that keeps prepaid totals visible while scrolling",
    "Shows prepaid plan and price elements in a persistent summary layout",
    "Supports checkout action and payment method visibility in a side rail",
  ],
  useWhen: [
    "Prepaid cart totals should stay visible on desktop screens",
    "A side summary supports conversion while users review checkout details",
    "Desktop layouts require more persistent prepaid context than a bottom bar",
  ],
  notUseWhen: [
    "A mobile bottom sticky summary is needed",
    "The checkout flow uses postpaid pricing structures",
  ],
  similarComponents: [
    {
      component: "StickyBoxBottomPrepaid",
      difference:
        "StickyBoxBottomPrepaid is optimized for mobile bottom placement instead of desktop side placement",
    },
    {
      component: "StickyBoxSidePostpaid",
      difference:
        "StickyBoxSidePostpaid is for postpaid cart totals instead of prepaid cart content",
    },
  ],
});
