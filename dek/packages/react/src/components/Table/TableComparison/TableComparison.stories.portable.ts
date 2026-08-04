import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./TableComparison.stories";
import {
  capitalizeFirstLetter,
  composeBackgroundColorStories,
  composeBackgroundColorStoriesGeneric,
} from "../../../../.storybook/utils/composeBackgroundColorStories";
import { BackgroundColor } from "../../../theme/theme";

type StoryNameWithOnlyTwoPlans =
  `WithOnlyTwoPlansOn${Capitalize<BackgroundColor>}Background`;
const createStoryNameWithOnlyTwoPlans = (
  backgroundColor: BackgroundColor,
): StoryNameWithOnlyTwoPlans =>
  `WithOnlyTwoPlansOn${capitalizeFirstLetter(backgroundColor)}Background`;

export default {
  ...composeStories(stories),
  ...composeBackgroundColorStories(stories.Default, meta),
  ...composeBackgroundColorStoriesGeneric(
    stories.WithOnlyTwoPlans,
    meta,
    createStoryNameWithOnlyTwoPlans,
  ),
};
