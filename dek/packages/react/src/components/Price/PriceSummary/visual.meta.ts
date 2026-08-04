import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "PriceSummary",
  categories: ["pricing", "cart"],
  visualTraits: [
    "summary of prices for a device or tariff or plan",
    "used fo detailed price of information before adding it to the cart",
    "can show addditonal infor based on type of product(prepaid or postpaid)",
  ],
  useWhen: [
    "when you want to show a summary of prices before adding a device or plan to the cart",
  ],
  notUseWhen: [
    "when you only need to display a single price or a range of prices without a summary",
  ],
  similarComponents: [
    {
      component: "Price",
      difference:
        "Price is for showing a single price, PriceSummary is for showing a summary of prices",
    },
    {
      component: "PriceRange",
      difference:
        "PriceRange is for showing a range of prices, PriceSummary is for showing a summary of prices",
    },
  ],
});
