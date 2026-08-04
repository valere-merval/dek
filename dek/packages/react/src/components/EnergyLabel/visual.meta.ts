import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "EnergyLabel",
  categories: ["product", "data-display"],
  visualTraits: [
    "show energy efficiency rating of a device",
    "visual representation of energy efficiency",
  ],
  useWhen: [
    "when you want to display the energy efficiency rating of a device",
  ],
  notUseWhen: ["when you want to display other types of device information"],
  similarComponents: [],
});
