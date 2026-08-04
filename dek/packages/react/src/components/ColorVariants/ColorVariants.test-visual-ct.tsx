import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ColorVariants.stories.portable";
import { BackgroundColor } from "../../theme/theme";
import { FunctionComponent } from "react";
import React from "react";
import { viewports } from "../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  colorVariantsPage: {
    page: Page;
    root: Locator;
    extra: Locator;
  };
}>({
  colorVariantsPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const extra = page.getByText("+");
    await use({
      page,
      root,
      extra,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render 4 variants and display the rest as a count on ${colorName} background`, async ({
        mount,
        colorVariantsPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(colorVariantsPage.extra).toBeVisible();
        await expect(colorVariantsPage.root).toHaveScreenshot();
      });
    },
  );
});

test("Should render colorVariants", async ({ mount, colorVariantsPage }) => {
  await mount(<stories.Default />);
  await expect(colorVariantsPage.root).toBeVisible();
  await expect(colorVariantsPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, colorVariantsPage }) => {
    await colorVariantsPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(colorVariantsPage.root).toBeVisible();
    await expect(colorVariantsPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, colorVariantsPage }) => {
    await colorVariantsPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(colorVariantsPage.root).toBeVisible();
    await expect(colorVariantsPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    colorVariantsPage,
  }) => {
    await colorVariantsPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.WithExtraColors />);
    await expect(colorVariantsPage.extra).toBeVisible();
    await expect(colorVariantsPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, colorVariantsPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: colorVariantsPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
