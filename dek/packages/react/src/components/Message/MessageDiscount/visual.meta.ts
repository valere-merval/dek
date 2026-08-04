import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "MessageDiscount",
  categories: ["feedback"],
  visualTraits: [
    "Promotional message banner",
    "Often has brand/accent color",
    "May include discount percentage or offer",
    "Eye-catching promotional styling",
  ],
  useWhen: [
    "Discount announcements",
    "Special offers",
    "Promotional information",
    "Sale banners",
  ],
  notUseWhen: [
    "Error/warning messages (use MessageStatus)",
    "General information (use MessageInfo)",
  ],
  similarComponents: [
    {
      component: "MessageInfo",
      difference: "MessageInfo is neutral informational, not promotional",
    },
    {
      component: "LabelPromoted",
      difference:
        "LabelPromoted is a small badge, MessageDiscount is a full banner",
    },
  ],
});
