import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ProductOverviewItem.stories.portable";
import { viewports } from "../../../playwright/fixtures";
import { BackgroundColor } from "../../theme/theme";
import { FunctionComponent } from "react";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  productOverviewItemPage: {
    page: Page;
    root: Locator;
    iPhoneHeadline: Locator;
    productSpecsGB: Locator;
    productSpecsTB: Locator;
    iPhoneDescription: Locator;
    moreDetailsButton: Locator;
  };
}>({
  productOverviewItemPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const iPhoneHeadline = page.getByRole("heading", { name: "iPhone 16" });
    const productSpecsGB = page.getByText("Space Gray | 256 GB");
    const productSpecsTB = page.getByText("Gold Dust | 1 TB");
    const iPhoneDescription = page.getByText("Lieferbar ab 16.10.2024");
    const moreDetailsButton = page.getByRole("button", {
      name: "Mehr Details",
    });
    await use({
      page,
      root,
      iPhoneHeadline,
      productSpecsGB,
      productSpecsTB,
      iPhoneDescription,
      moreDetailsButton,
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
      test(`Should render MessageInfo on ${colorName} background`, async ({
        mount,
        productOverviewItemPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          productOverviewItemPage.page.getByRole("heading", { name: "eSIM" }),
        ).toBeVisible();
        await expect(productOverviewItemPage.moreDetailsButton).toBeVisible();
        await expect(productOverviewItemPage.page).toHaveScreenshot();
      });
    },
  );
});

test.describe("different products", () => {
  test("Should render product overview item with multiple description lines", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await mount(<stories.MultipleDescriptionLines />);
    await expect(
      productOverviewItemPage.page.getByRole("heading", {
        name: "AVM FRITZ!Box 7530 AX",
      }),
    ).toBeVisible();
    await expect(
      productOverviewItemPage.page.getByText("WIFI 6 Standard"),
    ).toBeVisible();
    await expect(
      productOverviewItemPage.page.getByText("Lieferbar ab 24.07.2024"),
    ).toBeVisible();
    await expect(productOverviewItemPage.moreDetailsButton).toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });

  test("Should render product overview item without link", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await mount(<stories.WithoutLink />);
    await expect(productOverviewItemPage.moreDetailsButton).not.toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });
});

test.describe("With Product Specs", () => {
  test("Should render product specs", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await mount(<stories.WithProductSpecs />);
    await expect(productOverviewItemPage.iPhoneHeadline).toBeVisible();
    await expect(productOverviewItemPage.productSpecsGB).toBeVisible();
    await expect(productOverviewItemPage.iPhoneDescription).toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });

  test("Should render product specs with TB memory", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await mount(<stories.WithProductSpecsTB />);
    await expect(productOverviewItemPage.iPhoneHeadline).toBeVisible();
    await expect(productOverviewItemPage.productSpecsTB).toBeVisible();
    await expect(productOverviewItemPage.iPhoneDescription).toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await mount(<stories.WithProductSpecs />);
    await expect(productOverviewItemPage.root).toBeVisible();
    await expect(productOverviewItemPage.iPhoneHeadline).toBeVisible();
    await expect(productOverviewItemPage.productSpecsGB).toBeVisible();
    await expect(productOverviewItemPage.iPhoneDescription).toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await productOverviewItemPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithProductSpecs />);
    await expect(productOverviewItemPage.root).toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await productOverviewItemPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithProductSpecs />);
    await expect(productOverviewItemPage.root).toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    productOverviewItemPage,
  }) => {
    await productOverviewItemPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.WithProductSpecs />);
    await expect(productOverviewItemPage.root).toBeVisible();
    await expect(productOverviewItemPage.page).toHaveScreenshot();
  });

  test("axe report", async ({ mount, productOverviewItemPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: productOverviewItemPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
