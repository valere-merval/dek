import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./PriceRange.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  priceRangePage: {
    page: Page;
    priceRange: Locator;
    root: Locator;
  };
}>({
  priceRangePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const priceRange = page.getByText("15 bis 20€ pro 6 Monate");
    await use({
      page,
      priceRange,
      root,
    });
  },
});
test.describe("Background Color Price Range", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render priceRange on ${colorName} background`, async ({
        mount,
        priceRangePage,
      }) => {
        await mount(
          <BackgroundStory size={{ mobile: "large", desktop: "large" }} />,
        );
        await expect(priceRangePage.priceRange).toBeVisible();
        await expect(priceRangePage.root).toHaveScreenshot();
      });
    },
  );
});

const responsiveViewports = [
  {
    viewport: viewports.sm,
    name: "small",
    variant: "small",
  },
  {
    viewport: viewports.md,
    name: "medium",
    variant: "medium",
  },
];

test.describe(`responsive behavior`, () => {
  responsiveViewports.map((viewport) => {
    test.describe(`${viewport.variant} variant on  ${viewport.name} viewport`, () => {
      test.use(viewport.viewport);

      test("Should render PriceRange", async ({ mount, priceRangePage }) => {
        await mount(<stories.Default />);
        await expect(priceRangePage.priceRange).toBeVisible();
        await expect(priceRangePage.root).toHaveScreenshot();
      });

      test("Should render PriceRange with footnote", async ({
        mount,
        priceRangePage,
      }) => {
        await mount(<stories.WithFootnotes />);
        await expect(priceRangePage.priceRange).toBeVisible();
        await expect(priceRangePage.root).toHaveScreenshot();
      });

      test("Should render PriceRange without BillingPeriod", async ({
        mount,
        priceRangePage,
      }) => {
        await mount(<stories.WithoutBillingperiod />);
        await expect(priceRangePage.root).toBeVisible();
        await expect(priceRangePage.page.getByText("15 bis 20€")).toBeVisible();
        await expect(priceRangePage.root).toHaveScreenshot();
      });

      test("should render a suffix", async ({ mount, priceRangePage }) => {
        await mount(<stories.WithSuffix footnotes={[]} />);
        await expect(
          priceRangePage.page.getByText("zzgl. 50,00 € Bereitstellungspreis"),
        ).toBeVisible();
        await expect(priceRangePage.priceRange).toBeVisible();
        await expect(priceRangePage.root).toHaveScreenshot();
      });
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, priceRangePage }) => {
    await priceRangePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(priceRangePage.priceRange).toBeVisible();
    await expect(priceRangePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, priceRangePage }) => {
    await priceRangePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(priceRangePage.priceRange).toBeVisible();
    await expect(priceRangePage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    priceRangePage,
  }) => {
    await priceRangePage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(priceRangePage.priceRange).toBeVisible();
    await expect(priceRangePage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, priceRangePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: priceRangePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
