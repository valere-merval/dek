import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StepperHorizontal",
  categories: ["navigation"],
  visualTraits: [
    "Horizontal progress steps",
    "Numbered or labeled steps",
    "Active step highlighted",
    "Completed steps marked with checkmark",
    "Connector lines between steps",
  ],
  useWhen: [
    "Multi-step forms or wizards",
    "Checkout processes",
    "Onboarding flows",
    "Any sequential process visualization",
  ],
  notUseWhen: [
    "Vertical space preferred (use StepperVertical)",
    "Simple progress (use ProgressBar)",
  ],
  similarComponents: [
    {
      component: "StepperVertical",
      difference: "StepperVertical is oriented vertically",
    },
    {
      component: "ProgressBar",
      difference:
        "ProgressBar shows continuous progress, Stepper shows discrete steps",
    },
  ],
});
