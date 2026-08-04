import { composeStories } from "@storybook/react-vite";

import * as stories from "./TextFieldCopy.stories";
import { composeBackgroundColorStories } from "../../../../.storybook/utils/composeBackgroundColorStories";
import meta from "./TextFieldCopy.stories";

export default {
  ...composeStories(stories),
  ...composeBackgroundColorStories(stories.Default, meta),
};
