import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./RadioGroup.stories";
import { composeBrandBackgroundColorStories } from "../../../../.storybook/utils/composeBrandBackgroundColorStories";
import { composeBackgroundColorStoriesWithError } from "../../../../.storybook/utils/composeBackgroundColorStories";

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories(stories.Default, meta),
  ...composeBackgroundColorStoriesWithError(stories.WithError, meta),
};
