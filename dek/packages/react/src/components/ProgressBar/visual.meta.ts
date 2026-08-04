import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ProgressBar",
  categories: ["feedback"],
  visualTraits: [
    "Horizontal bar showing progress",
    "Filled portion indicates completion",
    "Track/background with fill overlay",
    "May show percentage label",
  ],
  useWhen: [
    "Progress indication",
    "Loading states with known progress",
    "Quota/usage display",
    "Step progress in wizards",
  ],
  notUseWhen: [
    "Unknown/indeterminate loading (use LoaderSpinner)",
    "Step-by-step navigation (use Stepper)",
  ],
  similarComponents: [
    {
      component: "LoaderSpinner",
      difference:
        "LoaderSpinner is for indeterminate loading, ProgressBar shows actual progress",
    },
    {
      component: "StepperHorizontal",
      difference: "Stepper shows discrete steps, ProgressBar is continuous",
    },
  ],
});
