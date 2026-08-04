import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CardFilled",
  categories: ["layout"],
  visualTraits: [
    "Solid background color (filled)",
    "Rounded corners",
    "Contains content like text, images, actions",
    "Elevated or contained appearance",
    "Clear visual boundary",
  ],
  useWhen: [
    "Grouping related content together",
    "Highlighting important information",
    "Creating visual separation between sections",
    "Displaying product or feature cards",
    "Use for base layouts",
  ],
  notUseWhen: [
    "Subtle content grouping (use CardOutlined)",
    "Interactive navigation cards (use CardForwarding)",
    "Filter/toggle cards (use CardFilter)",
  ],
  similarComponents: [
    {
      component: "CardOutlined",
      difference:
        "CardOutlined has border/outline instead of filled background, more subtle",
    },
    {
      component: "CardForwarding",
      difference:
        "CardForwarding is clickable and navigates somewhere, has chevron",
    },
  ],
});
