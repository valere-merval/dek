import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "LoaderSkeleton",
  categories: ["feedback"],
  visualTraits: [
    "Placeholder shapes mimicking content",
    "Gray/neutral color with shimmer animation",
    "Represents loading content structure",
    "Multiple skeleton elements for different content types",
  ],
  useWhen: [
    "Content loading states",
    "Placeholder while fetching data",
    "Perceived performance improvement",
    "When content structure is known",
  ],
  notUseWhen: [
    "Quick loading operations (use LoaderSpinner)",
    "Unknown content structure",
    "Actions in progress (use loading buttons)",
  ],
  similarComponents: [
    {
      component: "LoaderSpinner",
      difference:
        "LoaderSpinner is a spinning indicator, Skeleton mimics content shape",
    },
  ],
});
