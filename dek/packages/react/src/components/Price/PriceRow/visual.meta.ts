import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "PriceRow",
  categories: ["pricing"],
  visualTraits: [
    "special visualization for showing a price with i a table like row",
    "can show left and right price or one of theme",
  ],
  useWhen: [
    "want to show a monthly and one time price for a device or tariff or plan in a table like row",
  ],
  notUseWhen: [],
  similarComponents: [],
});
