import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./CardBonus.stories";
import { composeBrandBackgroundColorStories } from "../../../../.storybook/utils/composeBrandBackgroundColorStories";
import { CardBonusProps } from "./CardBonus.types";

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories<CardBonusProps>(stories.Default, meta),
};
