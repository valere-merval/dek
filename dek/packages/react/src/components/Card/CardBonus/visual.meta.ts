import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CardBonus",
  categories: ["pricing", "product"],
  visualTraits: [
    "Card presenting bonus totals and bonus line items",
    "Prominent amount summary with optional outlined or filled styling",
    "Expandable or detailed explanatory text about discount distribution",
    "Focus on monetary savings rather than base product features",
  ],
  useWhen: [
    "Showing welcome bonuses or promotional savings",
    "Breaking down bonus amounts into multiple items",
    "Explaining how discounts are applied over time",
  ],
  notUseWhen: [
    "A generic product card without pricing incentives is needed",
    "Only a single price should be shown without bonus breakdown",
  ],
  similarComponents: [
    {
      component: "PriceSummary",
      difference:
        "PriceSummary covers full checkout pricing, CardBonus focuses on bonus amounts and savings",
    },
    {
      component: "CardFilled",
      difference:
        "CardFilled is a generic card surface, CardBonus is specialized around bonus information",
    },
  ],
});
