import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./Text.stories";
import {
  capitalizeFirstLetter,
  composeBrandBackgroundColorStories,
  composeBrandBackgroundColorStoriesGeneric,
} from "../../../../.storybook/utils/composeBrandBackgroundColorStories";
import { BackgroundColor, Brand } from "../../../theme/theme";

type StoryNameWithResponsiveText =
  `WithResponsiveTextOn${Capitalize<Brand>}${Capitalize<BackgroundColor>}Background`;
const createStoryNameWithResponsiveText = (
  brand: Brand,
  backgroundColor: BackgroundColor,
): StoryNameWithResponsiveText =>
  `WithResponsiveTextOn${capitalizeFirstLetter(brand)}${capitalizeFirstLetter(backgroundColor)}Background`;

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories(stories.BasicTextStylesLight, meta),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore The type intersection of HeadlineProps is not compatible with the types of composeBrandBackgroundColorStories, because the types that are necessary are not exported from storybook
  ...composeBrandBackgroundColorStoriesGeneric(
    stories.Default,
    meta,
    createStoryNameWithResponsiveText,
  ),
};
