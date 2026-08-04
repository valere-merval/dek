import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Select",
  categories: ["forms", "selection"],
  visualTraits: [
    "Dropdown/select field with arrow indicator",
    "Shows selected value in closed state",
    "Opens dropdown list on click",
    "Options list appears below the field",
  ],
  useWhen: [
    "Single selection from predefined options",
    "When options list is long",
    "Space-constrained layouts",
    "Form fields with fixed choices",
  ],
  notUseWhen: [
    "Few options that should be visible (use RadioGroup)",
    "Search/filter needed (use ComboBox)",
    "Multiple selections (use CheckboxGroup or multi-select)",
  ],
  similarComponents: [
    {
      component: "ComboBox",
      difference: "ComboBox allows typing to filter options",
    },
    {
      component: "RadioGroup",
      difference: "RadioGroup shows all options visible without dropdown",
    },
  ],
});
