import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Checkbox",
  categories: ["forms"],
  visualTraits: [
    "Small square box that can be checked",
    "Checkmark icon when selected",
    "Label text next to the checkbox",
    "Can have indeterminate state",
  ],
  useWhen: [
    "Binary yes/no selections",
    "Multiple selections from a list (use CheckboxGroup)",
    "Terms and conditions acceptance",
    "Feature toggles in forms",
  ],
  notUseWhen: [
    "Single selection from options (use RadioGroup)",
    "On/off toggle with immediate effect (use Switch)",
    "Large interactive toggles (use SelectionBox)",
  ],
  similarComponents: [
    {
      component: "Switch",
      difference:
        "Switch is a toggle slider, typically for immediate on/off actions",
    },
    {
      component: "RadioGroup",
      difference: "RadioGroup allows only single selection from options",
    },
  ],
});
