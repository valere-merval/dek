import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ColorVariants",
  categories: ["product", "selection"],
  visualTraits: [
    "simple visualization of device colors",
    "color swatches representing different device colors",
  ],
  useWhen: [
    "when you want to display different color options for a device",
    "when you want to allow users to select a color variant",
  ],
  notUseWhen: ["when you want to display colors in a non-interactive format"],
  similarComponents: [],
});
