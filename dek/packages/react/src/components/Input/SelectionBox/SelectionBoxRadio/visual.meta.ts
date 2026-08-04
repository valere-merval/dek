import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionBoxRadio",
  categories: ["forms", "selection"],
  visualTraits: [
    "Large selectable cards with radio-style single selection",
    "Exactly one visually prominent tile can be active",
    "Cards may include pricing, labels, and descriptive details",
    "More expressive than a standard radio group row layout",
  ],
  useWhen: [
    "Users must select exactly one plan or option from rich cards",
    "Single-choice options need stronger visual hierarchy",
    "Each option needs more space than a regular radio label",
  ],
  notUseWhen: [
    "Multiple options may be selected",
    "A compact radio group is sufficient",
  ],
  similarComponents: [
    {
      component: "RadioGroup",
      difference:
        "RadioGroup presents simple rows, SelectionBoxRadio uses larger card-like choices",
    },
    {
      component: "SelectionBoxCheckbox",
      difference:
        "SelectionBoxCheckbox supports multiple selections, SelectionBoxRadio supports only one",
    },
  ],
});
