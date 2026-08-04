import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "SelectionBoxSwitch",
  categories: ["forms", "selection"],
  visualTraits: [
    "Card-like option rows with an integrated switch control",
    "Binary on or off state is emphasized inside a larger selection tile",
    "May include additional explanatory text or pricing context",
    "Looks like a richer settings or add-on toggle than a plain switch row",
  ],
  useWhen: [
    "Enabling or disabling add-ons with a strong card presentation",
    "Binary options need supporting text, badges, or pricing details",
    "Toggle controls should align visually with other selection boxes",
  ],
  notUseWhen: [
    "A simple inline switch without rich content is enough",
    "Users must choose between mutually exclusive options",
  ],
  similarComponents: [
    {
      component: "Switch",
      difference:
        "Switch is a compact control, SelectionBoxSwitch embeds the toggle in a larger selectable card",
    },
    {
      component: "SelectionBoxCheckbox",
      difference:
        "SelectionBoxCheckbox uses checkbox semantics rather than a switch toggle",
    },
  ],
});
