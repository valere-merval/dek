import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "MessageInfo",
  categories: ["feedback"],
  visualTraits: [
    "Banner/alert box with info styling",
    "Info icon (i or lightbulb)",
    "Usually blue or neutral color",
    "Contains informational text",
  ],
  useWhen: [
    "Informational messages",
    "Helpful tips or hints",
    "Non-critical notices",
    "General announcements",
  ],
  notUseWhen: [
    "Error messages (use error variant)",
    "Success confirmations (use success variant)",
    "Warnings (use warning variant)",
  ],
  similarComponents: [
    {
      component: "MessageStatus",
      difference: "MessageStatus shows success/error/warning states",
    },
    {
      component: "MessageDiscount",
      difference: "MessageDiscount is for promotional/discount information",
    },
  ],
});
