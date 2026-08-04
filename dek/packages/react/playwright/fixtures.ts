import type { Locator } from "@playwright/test";
//do not change this line, shortening the import will break the file
import { mediaBreakpoints } from "../src/theme/mappings/mediaBreakpoints";
import type { BackgroundColor, Brand } from "../src/theme/theme";
import type { Browser } from "./environments-ct/base";
import type { FunctionComponent } from "react";
import type { TestType } from "@playwright/experimental-ct-core";

export const container = (width: number, height: number) => ({
  viewport: {
    width,
    height,
  },
});

export type ViewportSize = keyof typeof mediaBreakpoints;

export interface ViewportObject {
  viewport: { width: number; height: number };
}

type Viewports = {
  [Property in ViewportSize]: ViewportObject;
};

export const viewports = Object.entries(mediaBreakpoints).reduce<Viewports>(
  (acc, [key, breakpoint]) => ({
    ...acc,
    [key]: {
      viewport: {
        width: Math.max(Number(breakpoint.slice(0, -2)), 360),
        height: 1100,
      },
    },
  }),
  {} as Viewports,
);

export const viewportWithAlteredHeight = (
  size: ViewportSize,
  heightInPixel: number,
) => ({
  viewport: {
    width: viewports[size].viewport.width,
    height: heightInPixel,
  },
});

export const browser: Browser[] = ["chromium", "firefox"];

/**
 * @deprecated use backgroundColors from theme instead
 */
export const backgrounds: BackgroundColor[] = [
  "black",
  "lightGrey",
  "darkGrey",
  "blue",
  "white",
];

export { expect } from "@playwright/experimental-ct-react";

export const scrollListBoxToTop = async (listBox: Locator) => {
  await listBox.press("ArrowDown");
  await listBox.press("ArrowUp");
  await listBox.press("ArrowUp");
  await listBox.press("ArrowUp");
};

export const getAllowedBackgroundsDescribeString = (
  brand: Brand,
  backgroundColor: BackgroundColor,
) => `${brand} on ${backgroundColor} background`;

export const testDescribeAllowedBackgrounds = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  BackgroundComponent extends FunctionComponent<any>,
  ComponentFixtures,
>(
  test: TestType<ComponentFixtures>,
  supportedBackgroundStories: Partial<
    Record<Brand, Partial<Record<BackgroundColor, BackgroundComponent>>>
  >,
  /**
   * Function where you can put your background color specific tests
   */
  callback: (
    BackgroundStory: BackgroundComponent,
    brand: Brand,
    backgroundColor: BackgroundColor,
  ) => void,
) => {
  Object.entries(supportedBackgroundStories).map(([brand, backgroundColors]) =>
    Object.entries(backgroundColors).map(
      ([backgroundColor, BackgroundStory]) => {
        test.describe(
          getAllowedBackgroundsDescribeString(
            brand as Brand,
            backgroundColor as BackgroundColor,
          ),
          () => {
            callback(
              BackgroundStory,
              brand as Brand,
              backgroundColor as BackgroundColor,
            );
          },
        );
      },
    ),
  );
};
