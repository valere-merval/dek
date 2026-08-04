import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ButtonAsterisk.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import React from "react";

const test = base.extend<{
  buttonAsteriskPage: {
    page: Page;
    root: Locator;
    button: Locator;
  };
}>({
  buttonAsteriskPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = page.getByLabel("Mehr Details");
    await use({
      page,
      root,
      button,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render buttonAsterisk on ${colorName} background`, async ({
        mount,
        buttonAsteriskPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonAsteriskPage.button).toBeVisible();
        await expect(buttonAsteriskPage.button).toHaveScreenshot();
      });

      test(`Should render buttonAsterisk on ${colorName} background in hover state`, async ({
        mount,
        buttonAsteriskPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonAsteriskPage.button).toBeVisible();
        await buttonAsteriskPage.button.hover();
        await expect(buttonAsteriskPage.button).toHaveScreenshot();
      });
    },
  );
});

test("Should contain all elements", async ({ buttonAsteriskPage, mount }) => {
  await mount(<stories.Default />);
  await expect(buttonAsteriskPage.button).toBeVisible();
  await expect(buttonAsteriskPage.button).toBeVisible();
});
