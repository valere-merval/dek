import { defineVisualMeta } from "../../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxBottomPrepaid",
  categories: ["checkout", "cart", "pricing"],
  visualTraits: [
    "Bottom sticky shopping cart summary for prepaid checkout",
    "Compact mobile summary with prepaid plan and price elements",
    "Expandable bottom bar that keeps checkout action visible on small screens",
    "Often shows prepaid-specific plan structure instead of postpaid recurring totals",
  ],
  useWhen: [
    "Prepaid checkout needs a persistent mobile cart summary",
    "Users should keep access to prepaid totals and checkout while scrolling",
    "A mobile-first sticky summary is required for prepaid cart flows",
  ],
  notUseWhen: [
    "The cart summary should appear in a desktop side rail",
    "The product flow uses postpaid pricing instead of prepaid",
  ],
  similarComponents: [
    {
      component: "StickyBoxSidePrepaid",
      difference:
        "StickyBoxSidePrepaid is the desktop side-column variant instead of the bottom mobile variant",
    },
    {
      component: "StickyBoxBottomPostpaid",
      difference:
        "StickyBoxBottomPostpaid is tailored to postpaid cart totals rather than prepaid cart content",
    },
  ],
});
