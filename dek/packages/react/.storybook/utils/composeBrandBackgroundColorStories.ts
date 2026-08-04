import {
  BackgroundColor,
  Brand,
  brandBackgroundColorMap,
} from "../../src/theme/theme";
import { composeStory, Meta } from "@storybook/react-vite";
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

export const composeBrandBackgroundColorStory = <
  TArgs extends Record<string, Any>,
>(
  defaultStory: Any,
  meta: ComponentMeta<TArgs>,
  brand: Brand,
  backgroundColor: BackgroundColor,
): ComposedStory<TArgs> =>
  composeStory(defaultStory, meta as Meta<TArgs>, {
    initialGlobals: setInitialGlobals({ backgroundColor, brand }),
  }) as ComposedStory<TArgs>;

type StoryName =
  `With${Capitalize<Brand>}${Capitalize<BackgroundColor>}Background`;
export type Return<TArgs extends Record<string, Any> = Record<string, Any>> =
  Record<StoryName, ComposedStory<TArgs>>;

export const composeBrandBackgroundColorStoriesGeneric = <
  StoryNameSpecific extends string,
  TArgs extends Record<string, Any>,
>(
  story: Any,
  meta: ComponentMeta<TArgs>,
  createStoryNameFunction: (
    brand: Brand,
    backgroundColor: BackgroundColor,
  ) => StoryNameSpecific,
) => {
  const brandBackgroundColorStories = {} as Record<
    StoryNameSpecific,
    ComposedStory<TArgs>
  >;

  Object.entries(brandBackgroundColorMap).forEach(
    ([brand, backgroundColors]) => {
      backgroundColors.forEach((backgroundColor: BackgroundColor) => {
        const storyName = createStoryNameFunction(
          brand as Brand,
          backgroundColor,
        );
        brandBackgroundColorStories[storyName] =
          composeBrandBackgroundColorStory<TArgs>(
            story,
            meta,
            brand as Brand,
            backgroundColor,
          );
      });
    },
  );

  return brandBackgroundColorStories;
};

const createStoryName = (
  brand: Brand,
  backgroundColor: BackgroundColor,
): StoryName =>
  `With${capitalizeFirstLetter(brand)}${capitalizeFirstLetter(backgroundColor)}Background`;

/**
 * Creates Storybook Stories for all backgroundColors
 *
 * @param story Should be the Storybook Story which the background color stories are based on
 * @param meta Should be the meta export from a Storybook file
 * @return Object with members for all background colors
 */

export const composeBrandBackgroundColorStories = <
  TArgs extends Record<string, Any>,
>(
  story: Any,
  meta: ComponentMeta<TArgs>,
) =>
  composeBrandBackgroundColorStoriesGeneric<StoryName, TArgs>(
    story,
    meta,
    createStoryName,
  ) as Return<TArgs>;

type StoryNameWithError =
  `WithErrorOn${Capitalize<Brand>}${Capitalize<BackgroundColor>}Background`;

const createStoryNameWithError = (
  brand: Brand,
  backgroundColor: BackgroundColor,
): StoryNameWithError =>
  `WithErrorOn${capitalizeFirstLetter(brand)}${capitalizeFirstLetter(backgroundColor)}Background`;

/**
 * Creates Storybook Stories for all backgroundColors
 *
 * @param story Should be the Storybook Story which the background color stories are based on
 * @param meta Should be the meta export from a Storybook file
 * @return Object with members for all background colors
 */
export const composeBrandBackgroundColorStoriesWithError = <
  TArgs extends Record<string, Any>,
>(
  story: Any,
  meta: ComponentMeta<TArgs>,
) =>
  composeBrandBackgroundColorStoriesGeneric<StoryNameWithError, TArgs>(
    story,
    meta,
    createStoryNameWithError,
  );
