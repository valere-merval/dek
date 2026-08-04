import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./DatePicker.stories";
import { composeBackgroundColorStoriesWithError } from "../../../../.storybook/utils/composeBackgroundColorStories";

export default {
  ...composeStories(stories),
  ...composeBackgroundColorStoriesWithError(stories.WithError, meta),
};
