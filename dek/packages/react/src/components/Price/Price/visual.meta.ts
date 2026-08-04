import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Price",
  categories: ["pricing"],
  visualTraits: [
    "display of a price",
    "optional show old price with strikethrough",
    "show billing period or footnotes",
  ],
  useWhen: ["when you want to display the price of a device or tariff or plan"],
  notUseWhen: [],
  similarComponents: [
    {
      component: "PriceRange",
      difference:
        "PriceRange is for showing a range of prices, Price is for a single price",
    },
  ],
});
