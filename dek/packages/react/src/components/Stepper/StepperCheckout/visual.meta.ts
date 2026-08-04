import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "StepperCheckout",
  categories: ["navigation", "checkout"],
  visualTraits: [
    "Checkout-specific stepper design",
    "Often shows cart, shipping, payment steps",
    "Optimized for e-commerce flows",
    "May have specific checkout iconography",
  ],
  useWhen: [
    "E-commerce checkout flows",
    "Purchase processes",
    "When checkout-specific styling is needed",
  ],
  notUseWhen: [
    "Generic multi-step forms (use StepperHorizontal)",
    "Non-commerce wizards",
  ],
  similarComponents: [
    {
      component: "StepperHorizontal",
      difference:
        "StepperHorizontal is generic, StepperCheckout is checkout-specific",
    },
  ],
});
