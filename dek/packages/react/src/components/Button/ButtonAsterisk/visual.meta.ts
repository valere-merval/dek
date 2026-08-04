import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ButtonAsterisk",
  deprecated: {
    replacement: "ButtonMicroIcon",
    message: "Use ButtonMicroIcon instead.",
  },
});
