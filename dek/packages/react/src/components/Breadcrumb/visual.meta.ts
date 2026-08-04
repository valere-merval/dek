import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

/**
 * Visual metadata for AI component recognition.
 * This helps LLMs identify when to use this component based on visual designs.
 *
 * @see /packages/react/scripts/storybook-llms-extractor/types.ts for VisualMeta type
 */
export default defineVisualMeta({
  component: "Breadcrumb",
  categories: ["navigation"],
  visualTraits: [
    "Single horizontal row of links",
    "Leading house icon representing the home/start page",
    "Slash separators between items",
    "Last item is bold and not a link (current page)",
    "Optional ellipsis placeholder for collapsed segments",
  ],
  useWhen: [
    "Showing the hierarchical location of the current page within a site",
    "Providing quick navigation back to parent pages/categories",
    "Deep product or category paths that may need to be collapsed on small screens",
  ],
  notUseWhen: [
    "For primary site navigation, use a navigation/menu component instead",
    "For switching between sibling views at the same level, use Tabs instead",
  ],
  similarComponents: [
    {
      component: "Tabs",
      difference:
        "Tabs switch between sibling views; Breadcrumb reflects the hierarchical path to the current page.",
    },
  ],
});
