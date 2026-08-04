import { composeStories } from "@storybook/react-vite";

import { composeBackgroundColorStories } from "../../../../.storybook/utils/composeBackgroundColorStories";
import meta, * as stories from "./ButtonMoreDetails.stories";

export default {
  ...composeStories(stories),
  ...composeBackgroundColorStories(stories.Default, meta),
};
