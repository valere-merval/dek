import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ButtonPrimary",
  categories: ["actions"],
  visualTraits: [
    "Solid filled background (typically brand color)",
    "High contrast text on colored background",
    "Rounded corners (border-radius)",
    "Prominent visual weight - draws attention",
    "Shadow or elevation effect",
    "Hover state with darker/lighter background",
  ],
  useWhen: [
    "Primary call-to-action (CTA) on a page or section",
    "The most important action in a form (e.g., Submit, Save, Continue)",
    "Actions that move the user forward in a flow",
    "Only ONE primary action should be visible in a given context",
  ],
  notUseWhen: [
    "Secondary or less important actions (use ButtonSecondary instead)",
    "Multiple equally important actions in the same area",
    "Destructive actions like delete (use destructive button variant)",
    "Navigation or back actions",
  ],
  similarComponents: [
    {
      component: "ButtonSecondary",
      difference:
        "ButtonSecondary has no outlined/border style , used for secondary actions",
    },
    {
      component: "ButtonPrimaryCircle",
      difference:
        "ButtonPrimaryCircle is circular/icon-only, used when space is limited or for icon actions",
    },
  ],
});
