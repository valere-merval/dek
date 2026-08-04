import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import { BackgroundColor } from "../../../theme/theme";
import stories from "./ButtonMoreDetails.stories.portable";
import { FunctionComponent } from "react";

const test = base.extend<{
  buttonMoreDetailsPage: {
    page: Page;
    root: Locator;
    button: Locator;
    buttonAlternate: Locator;
  };
}>({
  buttonMoreDetailsPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = page.getByRole("button", { name: "Mehr Details" });
    const buttonAlternate = page.getByRole("button", {
      name: "Zum Router Check",
    });
    await use({
      page,
      root,
      button,
      buttonAlternate,
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
      test(`Should render buttonMoreDetails on ${colorName} background`, async ({
        mount,
        buttonMoreDetailsPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonMoreDetailsPage.button).toBeVisible();
        await expect(buttonMoreDetailsPage.button).toHaveScreenshot();
      });

      test(`Should render buttonMoreDetails on ${colorName} background in hover state`, async ({
        mount,
        buttonMoreDetailsPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonMoreDetailsPage.button).toBeVisible();
        await buttonMoreDetailsPage.button.hover();
        await expect(buttonMoreDetailsPage.button).toHaveScreenshot();
      });
    },
  );
});

test("Should render with alternate Text", async ({
  buttonMoreDetailsPage,
  mount,
}) => {
  await mount(<stories.AlternateLinkText />);
  await expect(buttonMoreDetailsPage.buttonAlternate).toBeVisible();
  await expect(buttonMoreDetailsPage.buttonAlternate).toHaveScreenshot();
});

test("Should render with inherited size", async ({
  buttonMoreDetailsPage,
  mount,
}) => {
  await mount(<stories.InheritedSize />);
  await expect(buttonMoreDetailsPage.button).toBeVisible();
  await expect(buttonMoreDetailsPage.button).toHaveScreenshot();
});
