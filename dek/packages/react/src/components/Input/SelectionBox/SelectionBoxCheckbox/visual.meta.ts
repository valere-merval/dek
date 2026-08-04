import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionBoxCheckbox",
  categories: ["forms", "selection"],
  visualTraits: [
    "Large selectable cards with checkbox selection behavior",
    "Each option can show price, subtext, badges, or rich supporting content",
    "Multiple options can be selected at the same time",
    "Designed as visually prominent selection tiles rather than plain form rows",
  ],
  useWhen: [
    "Multi-select option groups need strong visual emphasis",
    "Tariffs, add-ons, or product choices should appear as cards",
    "Each selectable item includes rich content beyond a short label",
  ],
  notUseWhen: [
    "A compact standard checkbox group is sufficient",
    "Only one option should be selected",
  ],
  similarComponents: [
    {
      component: "CheckboxGroup",
      difference:
        "CheckboxGroup uses standard checkboxes, SelectionBoxCheckbox uses large card-like options",
    },
    {
      component: "SelectionBoxRadio",
      difference:
        "SelectionBoxRadio is for single selection instead of multiple selection",
    },
  ],
});
