import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CardLinkList",
  categories: ["navigation", "actions"],
  visualTraits: [
    "Card container with a vertical list of link-like rows or buttons",
    "Each row acts as a clear navigational or action item",
    "Optional header above the list",
    "May include trailing icons such as external-link indicators",
  ],
  useWhen: [
    "Grouping several related navigation targets inside one card",
    "Displaying service shortcuts or action lists",
    "Combining links and button actions in a compact list layout",
  ],
  notUseWhen: [
    "Only a single standalone button is needed",
    "Content is primarily descriptive instead of action-oriented",
  ],
  similarComponents: [
    {
      component: "List",
      difference:
        "List is a general content list, CardLinkList is optimized for actionable rows inside a card",
    },
    {
      component: "CardService",
      difference:
        "CardService presents service information, CardLinkList emphasizes a set of links or actions",
    },
  ],
});
