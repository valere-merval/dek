import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CheckboxGroup",
  categories: ["forms", "selection"],
  visualTraits: [
    "Group of checkboxes together",
    "Vertical or horizontal layout",
    "Multiple selections allowed",
    "Group label/legend",
  ],
  useWhen: [
    "Multiple selections from a list",
    "Feature or option multi-select",
    "Filter options",
  ],
  notUseWhen: [
    "Single checkbox (use Checkbox)",
    "Single selection required (use RadioGroup)",
    "Large visual selection cards (use SelectionBox)",
  ],
  similarComponents: [
    {
      component: "Checkbox",
      difference:
        "Checkbox is a single control, CheckboxGroup manages multiple",
    },
    {
      component: "RadioGroup",
      difference: "RadioGroup only allows single selection",
    },
  ],
});
