import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ComboBox",
  categories: ["forms", "selection"],
  visualTraits: [
    "Text input combined with dropdown",
    "Type-ahead/autocomplete functionality",
    "Suggestions appear while typing",
    "Can select from list or type custom value",
  ],
  useWhen: [
    "Search within options",
    "Autocomplete fields",
    "When options list is very long",
    "Address or location inputs",
  ],
  notUseWhen: [
    "Simple fixed selection (use Select)",
    "No search needed (use Select)",
    "Free text without suggestions (use TextField)",
  ],
  similarComponents: [
    {
      component: "Select",
      difference: "Select has no typing/search capability",
    },
    {
      component: "TextField",
      difference: "TextField has no dropdown suggestions",
    },
  ],
});
