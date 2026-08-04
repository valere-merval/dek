import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./DateField.stories";
import {
  composeBrandBackgroundColorStories,
  composeBrandBackgroundColorStoriesWithError,
} from "../../../../.storybook/utils/composeBrandBackgroundColorStories";

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories(stories.Default, meta),
  ...composeBrandBackgroundColorStoriesWithError(stories.WithError, meta),
};
