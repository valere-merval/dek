import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Switch",
  categories: ["forms"],
  visualTraits: [
    "Toggle slider/track",
    "Thumb/knob that slides left/right",
    "On/off visual states",
    "Often has different colors for states",
  ],
  useWhen: [
    "Binary on/off toggles",
    "Settings that take immediate effect",
    "Enable/disable features",
    "Dark mode toggles",
  ],
  notUseWhen: [
    "Form submissions that require save button (use Checkbox)",
    "Multiple selections (use CheckboxGroup)",
    "Selection from options (use RadioGroup)",
  ],
  similarComponents: [
    {
      component: "Checkbox",
      difference: "Checkbox is a checkmark box, Switch is a sliding toggle",
    },
  ],
});
