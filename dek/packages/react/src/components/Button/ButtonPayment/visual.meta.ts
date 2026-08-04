import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ButtonPayment",
  categories: ["actions", "checkout"],
  visualTraits: [
    "Rectangular payment button that shows a payment provider logo instead of a text label",
    "Designed for ony black backgrounds",
    "Branded visual appearance tied to a specific payment method like PayPal or Google Pay",
    "Available in medium or large size and optionally full-width layout",
    "Looks like an express checkout or payment continuation button rather than a generic CTA",
  ],
  useWhen: [
    "Offering a direct checkout action for a specific payment provider",
    "Express payment flows where the provider brand should be immediately recognizable",
    "Checkout areas that present one or more branded payment actions side by side",
    "When users should continue directly to PayPal, Google Pay, or another supported payment method",
  ],
  notUseWhen: [
    "A generic primary action without payment branding is needed",
    "Users are choosing between payment methods rather than triggering one directly",
    "The layout requires a text-based button label instead of a provider logo",
  ],
  similarComponents: [
    {
      component: "ButtonPrimary",
      difference:
        "ButtonPrimary is a general-purpose text CTA, ButtonPayment is a branded payment action",
    },
    {
      component: "SelectionBoxPayment",
      difference:
        "SelectionBoxPayment is for selecting a payment method, ButtonPayment is for triggering checkout with one",
    },
  ],
});
