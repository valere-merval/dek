import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./RatingBar.stories.portable";
import { FunctionComponent } from "react";
import AxeBuilder from "@axe-core/playwright";
import { BackgroundColor } from "../../theme/theme";
import { viewports } from "../../../playwright/fixtures";

const test = base.extend<{
  ratingBarPage: {
    page: Page;
    root: Locator;
    icon: Locator;
    ratingText: Locator;
    progressBar: Locator;
    ratingNumber: Locator;
  };
}>({
  ratingBarPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const icon = page.locator("svg").first();
    const ratingText = root.getByText("Fairness");
    const progressBar = root.getByRole("presentation").nth(0);
    const ratingNumber = root.getByText("4,1");
    await page.waitForTimeout(1000);
    await use({
      page,
      root,
      icon,
      ratingText,
      progressBar,
      ratingNumber,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render ratingBar on ${colorName} background`, async ({
        mount,
        ratingBarPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(ratingBarPage.root).toBeVisible();
        await expect(ratingBarPage.icon).toBeVisible();
        await expect(ratingBarPage.ratingText).toBeVisible();
        await expect(ratingBarPage.progressBar).toBeVisible();
        await expect(ratingBarPage.ratingNumber).toBeVisible();
        await expect(ratingBarPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("should render", async ({ mount, ratingBarPage }) => {
    await mount(<stories.Default />);
    await expect(ratingBarPage.root).toBeVisible();
    await expect(ratingBarPage.icon).not.toBeVisible();
    await expect(ratingBarPage.ratingText).toBeVisible();
    await expect(ratingBarPage.progressBar).toBeVisible();
    await expect(ratingBarPage.ratingNumber).toBeVisible();
    await expect(ratingBarPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render", async ({ mount, ratingBarPage }) => {
    await mount(<stories.Default />);
    await expect(ratingBarPage.root).toBeVisible();
    await expect(ratingBarPage.icon).toBeVisible();
    await expect(ratingBarPage.ratingText).toBeVisible();
    await expect(ratingBarPage.progressBar).toBeVisible();
    await expect(ratingBarPage.ratingNumber).toBeVisible();
    await expect(ratingBarPage.root).toHaveScreenshot();
  });

  test("Should render without icon", async ({ mount, ratingBarPage }) => {
    await mount(<stories.WithoutIcon />);
    await expect(ratingBarPage.root).toBeVisible();
    await expect(ratingBarPage.icon).not.toBeVisible();
    await expect(ratingBarPage.ratingText).toBeVisible();
    await expect(ratingBarPage.progressBar).toBeVisible();
    await expect(ratingBarPage.ratingNumber).toBeVisible();
    await expect(ratingBarPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test("highContrast and light mode", async ({ mount, ratingBarPage }) => {
    await ratingBarPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(ratingBarPage.root).toBeVisible();
    await expect(ratingBarPage.icon).toBeVisible();
    await expect(ratingBarPage.ratingText).toBeVisible();
    await expect(ratingBarPage.progressBar).toBeVisible();
    await expect(ratingBarPage.ratingNumber).toBeVisible();
    await expect(ratingBarPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, ratingBarPage }) => {
    await ratingBarPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(ratingBarPage.root).toBeVisible();
    await expect(ratingBarPage.icon).toBeVisible();
    await expect(ratingBarPage.ratingText).toBeVisible();
    await expect(ratingBarPage.progressBar).toBeVisible();
    await expect(ratingBarPage.ratingNumber).toBeVisible();
    await expect(ratingBarPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    ratingBarPage,
  }) => {
    await ratingBarPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(ratingBarPage.root).toBeVisible();
    await expect(ratingBarPage.icon).toBeVisible();
    await expect(ratingBarPage.ratingText).toBeVisible();
    await expect(ratingBarPage.progressBar).toBeVisible();
    await expect(ratingBarPage.ratingNumber).toBeVisible();
    await expect(ratingBarPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, ratingBarPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: ratingBarPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
