import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "AppTabs",
  categories: ["navigation"],
  visualTraits: [
    "App-style tab bar",
    "Often at bottom of screen (mobile pattern)",
    "Icon and/or text labels",
    "Section navigation within app",
  ],
  useWhen: [
    "App-level section navigation",
    "Mobile bottom navigation",
    "Main app sections",
  ],
  notUseWhen: [
    "Content tabs within a page (use Tabs)",
    "Desktop primary navigation",
  ],
  similarComponents: [
    {
      component: "Tabs",
      difference:
        "Tabs is for content switching, AppTabs for app section navigation",
    },
  ],
});
