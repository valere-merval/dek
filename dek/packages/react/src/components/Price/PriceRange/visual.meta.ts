import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "PriceRange",
  categories: ["pricing"],
  visualTraits: [
    "display of a range of prices",
    "optional show old price with strikethrough",
    "show billing period or footnotes",
  ],
  useWhen: [
    "when you want to display a range of prices for a device or tariff or plan",
  ],
  notUseWhen: ["when you only need to display a single price"],
  similarComponents: [
    {
      component: "Price",
      difference:
        "Price is for showing a single price, PriceRange is for showing a range of prices",
    },
  ],
});
