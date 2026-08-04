import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StepperVertical",
  categories: ["navigation"],
  visualTraits: [
    "Vertical progress steps",
    "Steps stacked vertically",
    "Active step highlighted",
    "Completed steps marked",
    "Connector lines between steps",
  ],
  useWhen: [
    "Vertical wizard layouts",
    "Timeline-style progress",
    "When horizontal space is limited",
    "Detailed step descriptions needed",
  ],
  notUseWhen: [
    "Horizontal layout preferred (use StepperHorizontal)",
    "Simple progress (use ProgressBar)",
  ],
  similarComponents: [
    {
      component: "StepperHorizontal",
      difference: "StepperHorizontal is oriented horizontally",
    },
  ],
});
