import { composeStories } from "@storybook/react-vite";

import meta, * as stories from "./ModalFootnotes.stories";
import {
  capitalizeFirstLetter,
  composeBrandBackgroundColorStories,
  composeBrandBackgroundColorStoriesGeneric,
} from "../../../../.storybook/utils/composeBrandBackgroundColorStories";
import { ModalFootnotesProps } from "./ModalFootnotes.types";
import { BackgroundColor, Brand } from "../../../theme/theme";

type StoryNameWithMultipleFootnotes =
  `WithMultipleFootnotesOn${Capitalize<Brand>}${Capitalize<BackgroundColor>}Background`;
const createStoryNameWithVerticalDivider = (
  brand: Brand,
  backgroundColor: BackgroundColor,
): StoryNameWithMultipleFootnotes =>
  `WithMultipleFootnotesOn${capitalizeFirstLetter(brand)}${capitalizeFirstLetter(backgroundColor)}Background`;

export default {
  ...composeStories(stories),
  ...composeBrandBackgroundColorStories<ModalFootnotesProps>(
    stories.Default,
    meta,
  ),
  ...composeBrandBackgroundColorStoriesGeneric(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore The type intersection of ModalFootnotesProps is not compatible with the types of composeBrandBackgroundColorStories, because the types that are necessary are not export
    stories.WithMultipleFootnotes,
    meta,
    createStoryNameWithVerticalDivider,
  ),
};
