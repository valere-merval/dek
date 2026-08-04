import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./Divider.stories";
import {
  capitalizeFirstLetter,
  composeBrandBackgroundColorStories,
  composeBrandBackgroundColorStoriesGeneric,
} from "../../../.storybook/utils/composeBrandBackgroundColorStories";
import { BackgroundColor, Brand } from "../../theme/theme";

type StoryNameWithVerticalDivider =
  `WithVerticalDividerOn${Capitalize<Brand>}${Capitalize<BackgroundColor>}Background`;
const createStoryNameWithVerticalDivider = (
  brand: Brand,
  backgroundColor: BackgroundColor,
): StoryNameWithVerticalDivider =>
  `WithVerticalDividerOn${capitalizeFirstLetter(brand)}${capitalizeFirstLetter(backgroundColor)}Background`;

type StoryNameWithText =
  `WithTextOn${Capitalize<Brand>}${Capitalize<BackgroundColor>}Background`;
const createStoryNameWithText = (
  brand: Brand,
  backgroundColor: BackgroundColor,
): StoryNameWithText =>
  `WithTextOn${capitalizeFirstLetter(brand)}${capitalizeFirstLetter(backgroundColor)}Background`;

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories(stories.Default, meta),
  ...composeBrandBackgroundColorStoriesGeneric(
    stories.Vertical,
    meta,
    createStoryNameWithVerticalDivider,
  ),
  ...composeBrandBackgroundColorStoriesGeneric(
    stories.WithText,
    meta,
    createStoryNameWithText,
  ),
};
