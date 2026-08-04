import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "MessageStatus",
  categories: ["feedback"],
  visualTraits: [
    "Status alert/banner with color coding",
    "Success (green), Error (red), Warning (yellow/orange)",
    "Status icon matching the type",
    "Clear visual distinction by color",
  ],
  useWhen: [
    "Form validation feedback",
    "Success confirmations",
    "Error notifications",
    "Warning alerts",
  ],
  notUseWhen: [
    "Neutral information (use MessageInfo)",
    "Promotional content (use MessageDiscount)",
  ],
  similarComponents: [
    {
      component: "MessageInfo",
      difference: "MessageInfo is neutral/informational without status color",
    },
  ],
});
