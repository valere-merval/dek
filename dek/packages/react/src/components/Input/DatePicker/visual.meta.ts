import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "DatePicker",
  categories: ["forms"],
  visualTraits: [
    "Input field with calendar popup",
    "Calendar icon trigger",
    "Visual month/year calendar grid",
    "Day selection with visual feedback",
  ],
  useWhen: [
    "Date selection with visual calendar",
    "When users need to see calendar context",
    "Booking or scheduling interfaces",
  ],
  notUseWhen: [
    "Known exact dates (use DateField)",
    "Date range selection (if not supported)",
  ],
  similarComponents: [
    {
      component: "DateField",
      difference: "DateField is text-only without calendar popup",
    },
  ],
});
