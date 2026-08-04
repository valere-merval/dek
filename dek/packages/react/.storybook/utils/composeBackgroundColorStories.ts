import { BackgroundColor, backgroundColors } from "../../src/theme/theme";
import { composeStory } from "@storybook/react-vite";
import { ComponentType } from "react";
import { setInitialGlobals } from "../globals";

export const capitalizeFirstLetter = <S extends string>(name: S) =>
  `${name.charAt(0).toUpperCase()}${name.slice(1)}` as Capitalize<S>;

type Any = any;

type ComposedStory<TArgs extends Record<string, Any> = Record<string, Any>> =
  ReturnType<typeof composeStory<TArgs>>;

type ComponentMeta<TArgs extends Record<string, Any>> = {
  component?: ComponentType<TArgs>;
  [key: string]: Any;
};

export const composeBackgroundColorStory = <TArgs extends Record<string, Any>>(
  defaultStory: Any,
  meta: ComponentMeta<TArgs>,
  backgroundColor: BackgroundColor,
) =>
  composeStory(defaultStory, meta, {
    initialGlobals: setInitialGlobals({ backgroundColor }),
  }) as ComposedStory<TArgs>;

type StoryName = `With${Capitalize<BackgroundColor>}Background`;
export type Return<TArgs extends Record<string, Any> = Record<string, Any>> =
  Record<StoryName, ComposedStory<TArgs>>;

export const composeBackgroundColorStoriesGeneric = <
  StoryNameSpecific extends string,
  TArgs extends Record<string, Any>,
>(
  story: Any,
  meta: ComponentMeta<TArgs>,
  createStoryNameFunction: (
    backgroundColor: BackgroundColor,
  ) => StoryNameSpecific,
) =>
  backgroundColors.reduce<Record<StoryNameSpecific, ComposedStory<TArgs>>>(
    (accumulator, backgroundColor) => {
      const storyName = createStoryNameFunction(backgroundColor);
      accumulator[storyName] = composeBackgroundColorStory<TArgs>(
        story,
        meta,
        backgroundColor,
      );
      return accumulator;
    },
    {} as Record<StoryNameSpecific, ComposedStory<TArgs>>,
  );

const createStoryName = (backgroundColor: BackgroundColor): StoryName =>
  `With${capitalizeFirstLetter(backgroundColor)}Background`;

/**
 * Creates Storybook Stories for all backgroundColors
 *
 * @deprecated use composeBrandBackgroundColorStories instead
 *
 * @param story Should be the Storybook Story which the background color stories are based on
 * @param meta Should be the meta export from a Storybook file
 * @return Object with members for all background colors
 */
export const composeBackgroundColorStories = <
  TArgs extends Record<string, Any>,
>(
  story: Any,
  meta: ComponentMeta<TArgs>,
) =>
  composeBackgroundColorStoriesGeneric<StoryName, TArgs>(
    story,
    meta,
    createStoryName,
  ) as Return<TArgs>;

type StoryNameWithError = `WithErrorOn${Capitalize<BackgroundColor>}Background`;
const createStoryNameWithError = (
  backgroundColor: BackgroundColor,
): StoryNameWithError =>
  `WithErrorOn${capitalizeFirstLetter(backgroundColor)}Background`;

/**
 * Creates Storybook Stories for all backgroundColors
 *
 * @deprecated use composeBrandBackgroundColorStoriesWithError instead
 *
 * @param story Should be the Storybook Story which the background color stories are based on
 * @param meta Should be the meta export from a Storybook file
 * @return Object with members for all background colors
 */
export const composeBackgroundColorStoriesWithError = <
  TArgs extends Record<string, Any>,
>(
  story: Any,
  meta: ComponentMeta<TArgs>,
) =>
  composeBackgroundColorStoriesGeneric<StoryNameWithError, TArgs>(
    story,
    meta,
    createStoryNameWithError,
  );
