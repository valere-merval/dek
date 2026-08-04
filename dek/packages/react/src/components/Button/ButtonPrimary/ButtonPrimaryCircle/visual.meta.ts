import { defineVisualMeta } from "../../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ButtonPrimaryCircle",
  categories: ["actions"],
  visualTraits: [
    "Circular/round shape (equal width and height)",
    "Solid filled background (brand color)",
    "Contains only an icon, no text",
    "Compact size for tight spaces",
    "High visual prominence like ButtonPrimary",
  ],
  useWhen: [
    "Icon-only primary action in constrained spaces",
    "Floating action buttons (FAB)",
    "Toolbar icon buttons with primary importance",
    "When the icon meaning is universally understood",
  ],
  notUseWhen: [
    "Action requires text label for clarity",
    "Secondary actions (use secondary button variants)",
    "Multiple primary actions in same area",
  ],
  similarComponents: [
    {
      component: "ButtonPrimary",
      difference:
        "ButtonPrimary is rectangular with text, used for labeled actions",
    },
    {
      component: "ButtonMicroIcon",
      difference:
        "ButtonMicroIcon is smaller and minimal, used for subtle icon actions",
    },
  ],
});
