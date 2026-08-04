import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionColor",
  categories: ["selection", "product"],
  visualTraits: [
    "Label displaying current selection (e.g., 'Farbe: Rot')",
    "Horizontal row of circular color swatches",
    "Selected color has checkmark icon and highlighted ring border",
    "Unselected colors show as simple filled circles",
    "Supports multiple color options in a compact layout",
  ],
  useWhen: [
    "Users need to select a product color variant",
    "Color selection for customization options (e.g., phone colors)",
    "Visual color picker where colors should be displayed as actual swatches",
    "Single-select color choices with clear visual feedback",
  ],
  notUseWhen: [
    "Color should be selected from a dropdown or text list",
    "Custom color input or color picker wheel is needed",
    "More than ~8 colors need to be displayed (consider alternative layout)",
  ],
  similarComponents: [],
});
