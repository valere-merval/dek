import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./Switch.stories";
import {
  composeBackgroundColorStories,
  composeBackgroundColorStoriesWithError,
} from "../../../../.storybook/utils/composeBackgroundColorStories";

export default {
  ...composeStories(stories),
  ...composeBackgroundColorStories(stories.Default, meta),
  ...composeBackgroundColorStoriesWithError(stories.WithError, meta),
};
