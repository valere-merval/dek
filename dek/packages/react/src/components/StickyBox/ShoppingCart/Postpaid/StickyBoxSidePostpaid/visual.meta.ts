import { defineVisualMeta } from "../../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxSidePostpaid",
  categories: ["checkout", "cart", "pricing"],
  visualTraits: [
    "Side sticky shopping cart summary for postpaid checkout",
    "Desktop side-panel layout with recurring and one-time pricing details",
    "Persistent cart card keeps totals and checkout action visible during scrolling",
    "Often includes payment method icons and optional bonus or trade-in information",
  ],
  useWhen: [
    "Postpaid cart totals should remain visible on desktop layouts",
    "A side rail summary helps users review pricing while browsing checkout content",
    "The shopping cart needs a persistent desktop checkout entry point",
  ],
  notUseWhen: [
    "A mobile bottom sticky cart summary is needed",
    "The checkout scenario is prepaid instead of postpaid",
  ],
  similarComponents: [
    {
      component: "StickyBoxBottomPostpaid",
      difference:
        "StickyBoxBottomPostpaid is optimized for mobile bottom placement instead of desktop side placement",
    },
    {
      component: "StickyBoxSidePrepaid",
      difference:
        "StickyBoxSidePrepaid summarizes prepaid shopping cart content rather than postpaid totals",
    },
  ],
});
