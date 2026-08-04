import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "Contingent",
  categories: ["data-display"],
  visualTraits: ["shows bandwidth or data plan in a visual format"],
  useWhen: ["when you want to display bandwidth or data plan visually"],
  notUseWhen: [],
  similarComponents: [
    {
      component: "ContingentRange",
      difference:
        "ContingentRange is used for displaying a range of values, while Contingent is used for displaying a single value.",
    },
  ],
});
