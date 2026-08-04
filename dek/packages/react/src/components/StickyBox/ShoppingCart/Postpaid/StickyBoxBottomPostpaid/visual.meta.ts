import { defineVisualMeta } from "../../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxBottomPostpaid",
  categories: ["checkout", "cart", "pricing"],
  visualTraits: [
    "Bottom sticky shopping cart summary for postpaid checkout",
    "Compact mobile layout with expandable cart totals and payment method area",
    "Displays recurring and one-time prices in a condensed sticky container",
    "Keeps checkout action visible while the user scrolls on small screens",
  ],
  useWhen: [
    "Postpaid cart totals need to stay accessible on mobile devices",
    "Recurring charges, one-time fees, and checkout action should live in a bottom sticky summary",
    "The cart summary must collapse and expand in a mobile-first flow",
  ],
  notUseWhen: [
    "A desktop side sticky cart summary is needed",
    "The checkout flow is prepaid rather than postpaid",
  ],
  similarComponents: [
    {
      component: "StickyBoxSidePostpaid",
      difference:
        "StickyBoxSidePostpaid is the desktop side-column variant instead of the bottom mobile variant",
    },
    {
      component: "StickyBoxBottomPrepaid",
      difference:
        "StickyBoxBottomPrepaid summarizes prepaid checkout instead of postpaid cart totals",
    },
  ],
});
