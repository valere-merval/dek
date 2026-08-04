import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ButtonMicroIcon",
  categories: ["actions"],
  visualTraits: [
    "Very small/compact size",
    "Icon-only, no text",
    "Minimal or transparent background",
    "Low visual prominence",
    "Often used inline with other content",
  ],
  useWhen: [
    "Small inline actions (edit, delete, copy icons)",
    "Table row actions",
    "Card actions in corners",
    "When space is very limited",
    "Supplementary actions that shouldn't dominate",
  ],
  notUseWhen: [
    "Primary call-to-action (use ButtonPrimary)",
    "Action needs text explanation",
    "Action requires high visibility",
  ],
  similarComponents: [
    {
      component: "ButtonPrimaryCircle",
      difference:
        "ButtonPrimaryCircle is larger with filled background, higher prominence",
    },
    {
      component: "ButtonMoreDetails",
      difference:
        "ButtonMoreDetails is specifically for 'show more' actions with chevron",
    },
  ],
});
