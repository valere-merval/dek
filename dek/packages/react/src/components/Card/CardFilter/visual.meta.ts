import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CardFilter",
  categories: ["forms"],
  visualTraits: [
    "Card with integrated Switch/toggle",
    "Icon tile on the left",
    "Title and description",
    "Toggle control for on/off state",
    "Used for filter or setting options",
  ],
  useWhen: [
    "Filter options with on/off toggle",
    "Feature toggles in settings",
    "Option cards with switch controls",
    "Enabling/disabling features",
  ],
  notUseWhen: [
    "Static content display (use CardFilled)",
    "Selection from multiple options (use RadioGroup or SelectionBox)",
    "Navigation cards (use CardForwarding)",
  ],
  similarComponents: [
    {
      component: "Switch",
      difference:
        "Switch is the toggle control alone, CardFilter is a full card layout with Switch",
    },
    {
      component: "CardFilled",
      difference:
        "CardFilled is for static content, CardFilter has interactive toggle",
    },
  ],
});
