import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Chip",
  categories: ["selection"],
  visualTraits: [
    "Small pill/chip shape",
    "Can be selected/deselected",
    "Often has remove/close button",
    "Used for tags or filter selections",
  ],
  useWhen: [
    "Tag selection/removal",
    "Filter chips",
    "Selected items display",
    "Multi-select with visual chips",
  ],
  notUseWhen: [
    "Display-only tags (use Tag)",
    "Single selection (use RadioGroup)",
    "Form checkboxes (use CheckboxGroup)",
  ],
  similarComponents: [
    {
      component: "Tag",
      difference: "Tag is display-only, Chip is interactive",
    },
  ],
});
