import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ButtonSecondary",
  categories: ["actions"],
  visualTraits: [
    "Lower visual weight compared to primary button",
    "no outlined/border style",
    "no rounded corners ",
    "no solid background",
    "Hover state fills background slightly",
  ],
  useWhen: [
    "Secondary actions that complement a primary action",
    "Cancel, Back, or navigation actions",
    "Alternative options in a group of actions",
    "When you need a button but don't want to draw too much attention",
    "Paired alongside a ButtonPrimary for action pairs (e.g., Save/Cancel)",
  ],
  notUseWhen: [
    "The main call-to-action (use ButtonPrimary instead)",
    "Actions that should draw immediate attention",
    "The only action available - consider if ButtonPrimary is more appropriate",
  ],
  similarComponents: [
    {
      component: "ButtonPrimary",
      difference:
        "ButtonPrimary has solid filled background and higher visual prominence, used for primary CTAs",
    },
  ],
});
