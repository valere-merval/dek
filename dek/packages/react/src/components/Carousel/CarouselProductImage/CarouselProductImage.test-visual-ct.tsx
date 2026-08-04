import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CarouselProductImage.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  carouselProductImagePage: {
    page: Page;
    root: Locator;
    carouselFrontViewImage: Locator;
    thumbnailFrontViewImage: Locator;
    carouselSideViewImage: Locator;
    thumbnailSideViewImage: Locator;
    carouselBackViewImage: Locator;
    thumbnailBackViewImage: Locator;
    previous: Locator;
    next: Locator;
  };
}>({
  carouselProductImagePage: async ({ page }, use) => {
    const root = page.locator("#root");

    const carouselFrontViewImage = root.getByRole("img", {
      name: "Google Pixel 7a von vorne",
    });
    const thumbnailFrontViewImage = root.getByRole("img", {
      name: "Vorschau Google Pixel 7a Frontansicht",
    });
    const carouselSideViewImage = root.getByRole("img", {
      name: "Google Pixel 7a seitlich",
    });
    const thumbnailSideViewImage = root.getByRole("img", {
      name: "Vorschau Google Pixel 7a Seitenansicht",
    });
    const carouselBackViewImage = root.getByRole("img", {
      name: "Google Pixel 7a hinten",
    });
    const thumbnailBackViewImage = root.getByRole("img", {
      name: "Vorschau Google Pixel 7a Rückansicht",
    });

    const previous = page.getByRole("button", { name: "Vorherige Kachel" });
    const next = page.getByRole("button", { name: "Nächste Kachel" });

    await use({
      page,
      root,
      carouselFrontViewImage,
      thumbnailFrontViewImage,
      carouselSideViewImage,
      thumbnailSideViewImage,
      carouselBackViewImage,
      thumbnailBackViewImage,
      previous,
      next,
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
      test(`Should render carouselProductImage on ${colorName} background`, async ({
        mount,
        carouselProductImagePage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          carouselProductImagePage.carouselFrontViewImage,
        ).toBeVisible();
        await expect(
          carouselProductImagePage.thumbnailFrontViewImage,
        ).toBeVisible();
        await expect(
          carouselProductImagePage.thumbnailSideViewImage,
        ).toBeVisible();
        await expect(
          carouselProductImagePage.thumbnailBackViewImage,
        ).toBeVisible();
        await expect(carouselProductImagePage.root).toBeVisible();
        await expect(carouselProductImagePage.root).toHaveScreenshot();
      });
    },
  );
});

const accessibilityTests = () =>
  test.describe("Accessibility", () => {
    test("highContrast and light mode", async ({
      mount,
      carouselProductImagePage,
    }) => {
      await carouselProductImagePage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(
        carouselProductImagePage.carouselFrontViewImage,
      ).toBeVisible();
      await expect(carouselProductImagePage.root).toBeVisible();
      await expect(carouselProductImagePage.root).toHaveScreenshot();
    });

    test("highContrast and dark mode", async ({
      mount,
      carouselProductImagePage,
    }) => {
      await carouselProductImagePage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(
        carouselProductImagePage.carouselFrontViewImage,
      ).toBeVisible();
      await expect(carouselProductImagePage.root).toBeVisible();
      await expect(carouselProductImagePage.root).toHaveScreenshot();
    });
    test("lineHeight and letterSpacing modification", async ({
      mount,
      carouselProductImagePage,
    }) => {
      await carouselProductImagePage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(
        carouselProductImagePage.carouselFrontViewImage,
      ).toBeVisible();
      await expect(carouselProductImagePage.root).toBeVisible();
      await expect(carouselProductImagePage.root).toHaveScreenshot();
    });

    test("axe report", async ({ mount, carouselProductImagePage }) => {
      await mount(<stories.Default />);

      const accessibilityScanResults = await new AxeBuilder({
        page: carouselProductImagePage.page,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport and behave like a normal carousel", async ({
    mount,
    carouselProductImagePage,
  }) => {
    await mount(<stories.Default />);
    await expect(carouselProductImagePage.carouselFrontViewImage).toBeVisible();
    await expect(carouselProductImagePage.next).toBeVisible();
    await expect(carouselProductImagePage.previous).toBeVisible();
    await expect(carouselProductImagePage.root).toBeVisible();
    await expect(carouselProductImagePage.root).toHaveScreenshot();

    await carouselProductImagePage.next.click();
    await expect(carouselProductImagePage.carouselSideViewImage).toBeVisible();

    await expect(carouselProductImagePage.root).toHaveScreenshot();
  });

  accessibilityTests();
});

test.describe("Large Viewport", () => {
  test.use("512px");

  test("Should render clickable thumbnails", async ({
    mount,
    carouselProductImagePage,
  }) => {
    await mount(<stories.Default />);
    await expect(carouselProductImagePage.carouselFrontViewImage).toBeVisible();
    await expect(
      carouselProductImagePage.thumbnailFrontViewImage,
    ).toBeVisible();
    await expect(carouselProductImagePage.thumbnailSideViewImage).toBeVisible();
    await expect(carouselProductImagePage.thumbnailBackViewImage).toBeVisible();
    await expect(carouselProductImagePage.root).toBeVisible();
    await expect(carouselProductImagePage.root).toHaveScreenshot();

    await carouselProductImagePage.thumbnailSideViewImage.click();
    await expect(carouselProductImagePage.carouselSideViewImage).toBeVisible();

    await expect(carouselProductImagePage.root).toHaveScreenshot();
  });

  accessibilityTests();
});
