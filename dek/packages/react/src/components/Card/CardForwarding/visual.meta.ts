import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CardForwarding",
  categories: ["navigation"],
  visualTraits: [
    "Card with clickable/button behavior",
    "Chevron or arrow indicating navigation",
    "Title and optional description",
    "Optional price display",
    "Hover state indicating interactivity",
  ],
  useWhen: [
    "Navigation cards that link to detail pages",
    "Product/plan selection cards",
    "Clickable list items with card styling",
    "Category or section navigation",
  ],
  notUseWhen: [
    "Static content display (use CardFilled)",
    "Content without navigation purpose",
    "Forms or interactive inputs within the card",
  ],
  similarComponents: [
    {
      component: "CardFilled",
      difference: "CardFilled is for static content display, not navigation",
    },
    {
      component: "Link",
      difference:
        "Link is text-only navigation, CardForwarding is a full card layout",
    },
  ],
});
