import { composeStories } from "@storybook/react-vite";
import {
  composeBrandBackgroundColorStories,
  composeBrandBackgroundColorStoriesWithError,
} from "../../../../../.storybook/utils/composeBrandBackgroundColorStories";
import meta, * as stories from "./CheckboxGroup.stories";

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories(stories.Default, meta),
  ...composeBrandBackgroundColorStoriesWithError(stories.ItemWithError, meta),
};
