import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "DateField",
  categories: ["forms"],
  visualTraits: [
    "Text input for date entry",
    "Formatted date display",
    "May have date format placeholder",
    "Calendar icon optional",
  ],
  useWhen: [
    "Date input without calendar picker",
    "When users know exact date",
    "Compact date entry",
  ],
  notUseWhen: [
    "Visual calendar selection needed (use DatePicker)",
    "Date range selection",
  ],
  similarComponents: [
    {
      component: "DatePicker",
      difference: "DatePicker has visual calendar popup for selection",
    },
    {
      component: "TextField",
      difference: "TextField is generic text, DateField is date-specific",
    },
  ],
});
