import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionBoxPayment",
  categories: ["forms", "selection", "checkout"],
  visualTraits: [
    "Selectable payment method cards with payment brand logos",
    "Single-choice card list for checkout payment selection",
    "Each option highlights a payment provider or method",
    "Error states can appear at group level when no payment is chosen",
  ],
  useWhen: [
    "Letting users choose a payment method during checkout",
    "Displaying recognizable payment brands inside selectable tiles",
    "Making payment choice more prominent than a plain radio list",
  ],
  notUseWhen: [
    "Selection does not involve payment methods",
    "A standard radio group without visual branding is enough",
  ],
  similarComponents: [
    {
      component: "SelectionBoxRadio",
      difference:
        "SelectionBoxRadio is generic single-choice selection, SelectionBoxPayment is specialized for payment methods",
    },
    {
      component: "RadioGroup",
      difference:
        "RadioGroup is a simpler form control without branded card presentation",
    },
  ],
});
