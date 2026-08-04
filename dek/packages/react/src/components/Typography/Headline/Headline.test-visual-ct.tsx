import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Headline.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import { headlineSizes } from "./Headline.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  headlinePage: {
    page: Page;
    root: Locator;
    text: Locator;
  };
}>({
  headlinePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const text = page.getByRole("heading", {
      name: "Der neue congstar Prepaid Tarif",
    });
    await use({
      page,
      root,
      text,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
      lightGrey: stories.WithCongstarWebLightGreyBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
      blue: stories.WithCongstarWebBlueBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      white: stories.WithCongstarAppWhiteBackground,
      lightGrey: stories.WithCongstarAppLightGreyBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
      jaAgave80: stories.WithJaJaAgave80Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
      jaAgaveOutlinesSecondary:
        stories.WithJaJaAgaveOutlinesSecondaryBackground,
    },
    penny: {
      pennyRed: stories.WithPennyPennyRedBackground,
      pennyRedDark: stories.WithPennyPennyRedDarkBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test("Should render Headline", async ({ mount, headlinePage }) => {
      await mount(<BackgroundStory />);
      await expect(headlinePage.text).toBeVisible();
      await expect(headlinePage.text).toHaveScreenshot();
    });
  },
);

test.describe(`responsive behavior`, () => {
  Object.entries(viewports).map(([viewportName, viewport]) => {
    test.describe(`on a ${viewportName} viewport`, () => {
      test.use(viewport);

      headlineSizes.map((size) => {
        test(`Should render Headline of the size ${size}`, async ({
          mount,
          headlinePage,
        }) => {
          await mount(<stories.Default size={size} />);
          await expect(headlinePage.text).toBeVisible();
          await expect(headlinePage.text).toHaveScreenshot();
        });

        test(`Should render a bold Headline of the size ${size}`, async ({
          mount,
          headlinePage,
        }) => {
          await mount(<stories.Default size={size} variant="bold" />);

          await expect(headlinePage.text).toBeVisible();
          await expect(headlinePage.text).toHaveScreenshot();
        });
      });
    });
  });
});

test.describe("Accessibility", () => {
  test("highContrast and light mode", async ({ mount, headlinePage }) => {
    await headlinePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(headlinePage.root).toBeVisible();
    await expect(headlinePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, headlinePage }) => {
    await headlinePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(headlinePage.root).toBeVisible();
    await expect(headlinePage.root).toHaveScreenshot();
  });

  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("lineHeight and letterSpacing modification", async ({
      mount,
      headlinePage,
    }) => {
      await headlinePage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(headlinePage.root).toBeVisible();
      await expect(headlinePage.root).toHaveScreenshot();
    });
  });

  test.describe("large viewport", () => {
    test.use(viewports.lg);
    test("lineHeight and letterSpacing modification", async ({
      mount,
      headlinePage,
    }) => {
      await headlinePage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(headlinePage.root).toBeVisible();
      await expect(headlinePage.root).toHaveScreenshot();
    });
  });

  test("axe report", async ({ mount, headlinePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: headlinePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
