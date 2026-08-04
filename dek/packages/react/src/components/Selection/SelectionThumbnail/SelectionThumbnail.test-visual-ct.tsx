import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./SelectionThumbnail.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  selectionThumbnailPage: {
    page: Page;
    root: Locator;
    thumbnailItem1: Locator;
    thumbnailItem2: Locator;
    thumbnailItem3: Locator;
  };
}>({
  selectionThumbnailPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const thumbnailItem1 = page.getByRole("radio", { name: "Frontansicht" });
    const thumbnailItem2 = page.getByRole("radio", { name: "Seitansicht" });
    const thumbnailItem3 = page.getByRole("radio", { name: "Rückansicht" });
    await use({
      page,
      root,
      thumbnailItem1,
      thumbnailItem2,
      thumbnailItem3,
    });
  },
});

test.describe("selectionThumbnail", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render selectionThumbnail on ${colorName} background`, async ({
        mount,
        selectionThumbnailPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(selectionThumbnailPage.thumbnailItem1).toBeVisible();
        await expect(selectionThumbnailPage.thumbnailItem2).toBeVisible();
        await expect(selectionThumbnailPage.thumbnailItem3).toBeVisible();
        await expect(selectionThumbnailPage.root).toHaveScreenshot();
      });

      test(`Should render selectionThumbnail on ${colorName} background click on item 2`, async ({
        mount,
        selectionThumbnailPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(selectionThumbnailPage.thumbnailItem1).toBeVisible();
        await expect(selectionThumbnailPage.thumbnailItem2).toBeVisible();
        await expect(selectionThumbnailPage.thumbnailItem3).toBeVisible();
        await selectionThumbnailPage.thumbnailItem2.click();
        await expect(selectionThumbnailPage.root).toHaveScreenshot();
      });

      test(`Should render selectionThumbnail on ${colorName} background hover over item 2`, async ({
        mount,
        selectionThumbnailPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(selectionThumbnailPage.thumbnailItem1).toBeVisible();
        await expect(selectionThumbnailPage.thumbnailItem2).toBeVisible();
        await expect(selectionThumbnailPage.thumbnailItem3).toBeVisible();
        await selectionThumbnailPage.thumbnailItem2.hover();
        await expect(selectionThumbnailPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("SelectionColorThumbnail", async ({ mount, selectionThumbnailPage }) => {
    await mount(<stories.Default />);
    await expect(selectionThumbnailPage.root).toBeVisible();
  });
});

test("Should render SelectionThumbnail with a value", async ({
  mount,
  selectionThumbnailPage,
}) => {
  await mount(<stories.Default value="back" />);
  await expect(selectionThumbnailPage.thumbnailItem1).toBeVisible();
  await expect(selectionThumbnailPage.thumbnailItem2).toBeVisible();
  await expect(selectionThumbnailPage.thumbnailItem3).toBeVisible();
  await expect(selectionThumbnailPage.root).toHaveScreenshot();
});

test("that deselecting an already selected item is not possible", async ({
  mount,
  selectionThumbnailPage,
}) => {
  await mount(<stories.Default />);
  await expect(selectionThumbnailPage.thumbnailItem1).toBeVisible();
  await expect(selectionThumbnailPage.thumbnailItem2).toBeVisible();
  await expect(selectionThumbnailPage.thumbnailItem3).toBeVisible();
  await selectionThumbnailPage.thumbnailItem1.click();
  await expect(selectionThumbnailPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    selectionThumbnailPage,
  }) => {
    await selectionThumbnailPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(selectionThumbnailPage.root).toBeVisible();
    await expect(selectionThumbnailPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    selectionThumbnailPage,
  }) => {
    await selectionThumbnailPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(selectionThumbnailPage.root).toBeVisible();
    await expect(selectionThumbnailPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    selectionThumbnailPage,
  }) => {
    await selectionThumbnailPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(selectionThumbnailPage.root).toBeVisible();
    await expect(selectionThumbnailPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, selectionThumbnailPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: selectionThumbnailPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
