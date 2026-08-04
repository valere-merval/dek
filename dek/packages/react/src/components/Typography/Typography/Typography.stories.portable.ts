import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./Typography.stories";
import { composeBackgroundColorStories } from "../../../../.storybook/utils/composeBackgroundColorStories";

export default {
  ...composeStories(stories),
  ...composeBackgroundColorStories(stories.Default, meta),
};
