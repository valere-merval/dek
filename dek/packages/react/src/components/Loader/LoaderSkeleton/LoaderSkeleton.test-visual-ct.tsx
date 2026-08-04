import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./LoaderSkeleton.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";

const test = base.extend<{
  loaderSkeletonPage: {
    page: Page;
    root: Locator;
  };
}>({
  loaderSkeletonPage: async ({ page }, use) => {
    const root = page.locator("#root");
    await use({
      page,
      root,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render loaderSkeleton on ${colorName} background`, async ({
        mount,
        loaderSkeletonPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(loaderSkeletonPage.root).toBeVisible();
        await expect(loaderSkeletonPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("With fixed width", () => {
  test.use(viewports.sm);

  test("Should adjust width", async ({ mount, loaderSkeletonPage }) => {
    await mount(<stories.WithFixedWidth />);
    await expect(loaderSkeletonPage.root).toBeVisible();
    await expect(loaderSkeletonPage.root).toHaveScreenshot({
      maxDiffPixelRatio: 0.001,
      threshold: 0.001,
    });
  });
});

test.describe("With element in the Background", () => {
  test.use(viewports.md);

  test("Should not be tranparent", async ({ mount, loaderSkeletonPage }) => {
    await mount(<stories.WithBackground />);
    await expect(loaderSkeletonPage.root).toBeVisible();
    await expect(loaderSkeletonPage.root).toHaveScreenshot();
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    loaderSkeletonPage,
  }) => {
    await mount(<stories.Default />);
    await expect(loaderSkeletonPage.root).toBeVisible();
    await expect(loaderSkeletonPage.root).toHaveScreenshot();
  });
});

test.describe("Medium Viewport", () => {
  test.use(viewports.md);

  test("Should wrap in medium viewport", async ({
    mount,
    loaderSkeletonPage,
  }) => {
    await mount(<stories.Default />);
    await expect(loaderSkeletonPage.root).toBeVisible();
    await expect(loaderSkeletonPage.root).toHaveScreenshot();
  });
});
