import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionBoxDuration",
  deprecated: {
    replacement: "SelectionBoxRadio",
    message:
      "Use SelectionBoxRadio with the dedicated duration property instead.",
  },
});
