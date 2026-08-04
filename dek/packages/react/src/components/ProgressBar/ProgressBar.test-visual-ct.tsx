import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ProgressBar.stories.portable";
import { BackgroundColor } from "../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";
import { ProgressBarColor } from "./ProgressBar.types";

const test = base.extend<{
  progressBarPage: {
    page: Page;
    root: Locator;
    progressBar: Locator;
  };
}>({
  progressBarPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const progressBar = page.getByRole("presentation");
    await use({
      page,
      root,
      progressBar,
    });
  },
});

const colorParams: ProgressBarColor[] = [
  "yellow",
  "orange",
  "green",
  "red",
  "lime",
  "purple",
];

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render a ProgressBar on ${colorName} background`, async ({
        mount,
        progressBarPage,
      }) => {
        await mount(<BackgroundStory color="purple" />);
        await expect(progressBarPage.progressBar).toBeVisible();
        await expect(progressBarPage.root).toHaveScreenshot();
      });
    },
  );
});

test("Should render ProgressBar in empty state", async ({
  mount,
  progressBarPage,
}) => {
  await mount(<stories.Empty />);
  await expect(progressBarPage.progressBar).toBeVisible();
  await expect(progressBarPage.root).toHaveScreenshot();
});

test("Should render ProgressBar in filled state", async ({
  mount,
  progressBarPage,
}) => {
  await mount(<stories.Filled />);
  await expect(progressBarPage.progressBar).toBeVisible();
  await expect(progressBarPage.root).toHaveScreenshot();
});

test("Should render ProgressBar with context", async ({
  mount,
  progressBarPage,
}) => {
  await mount(<stories.WithContext />);
  await expect(progressBarPage.progressBar).toBeVisible();
  await expect(progressBarPage.root).toHaveScreenshot();
});

test.describe("Should render ProgressBar with", () => {
  colorParams.map((color) => {
    test(`color ${color}`, async ({ mount, progressBarPage }) => {
      await mount(<stories.Default color={color} />);
      await expect(progressBarPage.progressBar).toBeVisible();
      await expect(progressBarPage.root).toHaveScreenshot();
    });
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, progressBarPage }) => {
    await mount(<stories.Default />);
    await expect(progressBarPage.progressBar).toBeVisible();
    await expect(progressBarPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({ mount, progressBarPage }) => {
    await mount(<stories.Default />);
    await expect(progressBarPage.progressBar).toBeVisible();
    await expect(progressBarPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, progressBarPage }) => {
    await progressBarPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(progressBarPage.progressBar).toBeVisible();
    await expect(progressBarPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, progressBarPage }) => {
    await progressBarPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(progressBarPage.progressBar).toBeVisible();
    await expect(progressBarPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, progressBarPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: progressBarPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
