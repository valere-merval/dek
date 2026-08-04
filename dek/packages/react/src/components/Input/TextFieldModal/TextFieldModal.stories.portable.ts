import { composeStories } from "@storybook/react-vite";

import * as stories from "./TextFieldModal.stories";

export default {
  ...composeStories(stories),
};
