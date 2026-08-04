import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./Accordion.stories";
import { composeBrandBackgroundColorStories } from "../../../.storybook/utils/composeBrandBackgroundColorStories";

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories(stories.Default, meta),
};
