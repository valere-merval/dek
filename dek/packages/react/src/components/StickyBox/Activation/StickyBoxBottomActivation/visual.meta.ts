import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxBottomActivation",
  categories: ["checkout", "pricing"],
  visualTraits: [
    "Sticky summary panel anchored to the bottom of the viewport",
    "Mobile-oriented activation summary with expandable or collapsible behavior",
    "Shows plan name, pricing, and activation details in a compact bottom bar format",
    "Includes action area for continuing the activation flow",
  ],
  useWhen: [
    "A prepaid activation summary must remain visible on mobile screens",
    "Checkout actions should stay accessible from a bottom sticky container",
    "Activation details need a condensed mobile-first presentation",
  ],
  notUseWhen: [
    "The summary should be placed in a side column on larger screens",
    "No sticky checkout summary is required",
  ],
  similarComponents: [
    {
      component: "StickyBoxActivation",
      difference:
        "StickyBoxActivation describes the shared activation pattern, this variant is specifically the bottom mobile layout",
    },
    {
      component: "StickyBoxSideActivation",
      difference:
        "StickyBoxSideActivation is the desktop side-panel variant rather than the bottom mobile variant",
    },
  ],
});
