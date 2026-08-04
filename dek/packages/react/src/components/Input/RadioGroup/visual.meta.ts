import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "RadioGroup",
  categories: ["forms", "selection"],
  visualTraits: [
    "Group of circular radio buttons",
    "Only one can be selected at a time",
    "Filled circle indicator when selected",
    "Labels next to each option",
  ],
  useWhen: [
    "Single selection from multiple options",
    "Mutually exclusive choices",
    "When all options should be visible",
  ],
  notUseWhen: [
    "Multiple selections (use CheckboxGroup)",
    "Many options (use Select or ComboBox)",
    "Binary on/off (use Checkbox or Switch)",
  ],
  similarComponents: [
    {
      component: "CheckboxGroup",
      difference: "CheckboxGroup allows multiple selections",
    },
    {
      component: "Select",
      difference: "Select is a dropdown, RadioGroup shows all options visible",
    },
  ],
});
