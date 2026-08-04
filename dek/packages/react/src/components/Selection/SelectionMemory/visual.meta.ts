import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionMemory",
  categories: ["selection", "product"],
  visualTraits: [
    "Label displaying current selection (e.g., 'Speicher: 64 GB')",
    "Horizontal row of rounded rectangular pill buttons",
    "Selected option has filled/highlighted background with contrasting text",
    "Unselected options have outlined border style",
    "Disabled/unavailable options shown with strikethrough text",
    "Text-based selection for storage or capacity values",
  ],
  useWhen: [
    "Users need to select storage or memory capacity options",
    "Product configuration with predefined capacity choices",
    "Single-select from a limited set of text-based options",
    "Some options may be unavailable and need visual indication",
  ],
  notUseWhen: [
    "Free-form numeric input for capacity is required",
    "Options need detailed descriptions beyond simple labels",
    "More than ~6 options need to be displayed",
  ],
  similarComponents: [
    {
      component: "SelectionColor",
      difference: "For color-based visual selection with swatches",
    },
  ],
});
