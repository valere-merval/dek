import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StickyBoxSideActivation",
  categories: ["checkout", "pricing"],
  visualTraits: [
    "Sticky summary panel fixed in a side column",
    "Desktop-oriented activation summary with persistent vertical layout",
    "Shows plan name, pricing, and activation details in a taller side card",
    "Keeps the activation action visible while users browse the page",
  ],
  useWhen: [
    "A prepaid activation summary should remain visible on desktop screens",
    "Checkout actions need to stay in a side rail while content scrolls",
    "Activation details are better suited to a desktop side panel than a bottom drawer",
  ],
  notUseWhen: [
    "The summary is for mobile bottom-stickiness",
    "A non-sticky or inline summary is sufficient",
  ],
  similarComponents: [
    {
      component: "StickyBoxActivation",
      difference:
        "StickyBoxActivation describes the shared activation pattern, this variant is specifically the side desktop layout",
    },
    {
      component: "StickyBoxBottomActivation",
      difference:
        "StickyBoxBottomActivation is optimized for mobile bottom placement instead of desktop side placement",
    },
  ],
});
