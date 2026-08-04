import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ButtonMoreDetails",
  categories: ["actions", "navigation"],
  visualTraits: [
    "Text link style with chevron/arrow icon",
    "Usually positioned below content",
    "Chevron indicates expandable or navigable action",
    "Lower visual weight than primary/secondary buttons",
  ],
  useWhen: [
    "Show more/less toggle actions",
    "Expand collapsed content",
    "Navigate to detail views",
    "Read more links",
  ],
  notUseWhen: [
    "Primary form submission (use ButtonPrimary)",
    "Standalone navigation (use Link component)",
    "Icon-only actions (use ButtonMicroIcon)",
  ],
  similarComponents: [
    {
      component: "Link",
      difference: "Link is for navigation without expand/collapse semantics",
    },
    {
      component: "Accordion",
      difference:
        "Accordion is a full container component, ButtonMoreDetails is just the trigger",
    },
  ],
});
