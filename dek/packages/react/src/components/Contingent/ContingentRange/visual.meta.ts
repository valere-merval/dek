import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ContingentRange",
  categories: ["data-display"],
  visualTraits: [
    "shows a range of bandwidth or data plan in a visual format",
    "visual representation of a range of values",
  ],
  useWhen: [
    "when you want to display a range of bandwidth or data plan visually",
  ],
  notUseWhen: [
    "when you want to display a single value of bandwidth or data plan",
  ],
  similarComponents: [
    {
      component: "Contingent",
      difference:
        "Contingent is used for displaying a single value, while ContingentRange is used for displaying a range of values.",
    },
  ],
});
