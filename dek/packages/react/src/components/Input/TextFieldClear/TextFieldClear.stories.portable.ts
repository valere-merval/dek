import { composeStories } from "@storybook/react-vite";

import * as stories from "./TextFieldClear.stories";

export default {
  ...composeStories(stories),
};
