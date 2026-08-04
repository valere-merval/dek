import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./HeadlineHighlighted.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import {
  HeadlineHighlightedColor,
  HeadlineHighlightedSize,
} from "./HeadlineHighlighted.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  headlineHighlightedPage: {
    page: Page;
    root: Locator;
    text: Locator;
  };
}>({
  headlineHighlightedPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const text = page.getByRole("heading");
    await use({
      page,
      root,
      text,
    });
  },
});

const colorParams: HeadlineHighlightedColor[] = [
  "yellow",
  "orange",
  "green",
  "red",
  "lime",
  "purple",
];

const tagSizes: HeadlineHighlightedSize[] = [
  "extraSmall",
  "small",
  "medium",
  "large",
];

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
      jaAgave80: stories.WithJaJaAgave80Background,
      jaAgaveOutlinesSecondary:
        stories.WithJaJaAgaveOutlinesSecondaryBackground,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
      pennyRed: stories.WithPennyPennyRedBackground,
      pennyRedDark: stories.WithPennyPennyRedDarkBackground,
    },
  },
  (BackgroundStory) => {
    test("Should render headlineHighlighted", async ({
      mount,
      headlineHighlightedPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(headlineHighlightedPage.text).toBeVisible();
      await expect(headlineHighlightedPage.root).toHaveScreenshot();
    });
  },
);

test.describe("viewport", () => {
  Object.entries(viewports).map(([viewportName, viewport]) =>
    test.describe(`on a ${viewportName} viewport`, () => {
      test.use(viewport);

      tagSizes.map((size) => {
        test(`Should render label of the size ${size}}`, async ({
          mount,
          headlineHighlightedPage,
        }) => {
          await mount(<stories.Default size={size} />);
          await expect(headlineHighlightedPage.text).toBeVisible();
          await expect(headlineHighlightedPage.text).toHaveScreenshot();
        });
      });
    }),
  );
});

colorParams.map((decorativeColor) => {
  test(`with ${decorativeColor}`, async ({
    mount,
    headlineHighlightedPage,
  }) => {
    await mount(<stories.Default decorativeColor={decorativeColor} />);
    await expect(headlineHighlightedPage.text).toBeVisible();
    await expect(headlineHighlightedPage.text).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    headlineHighlightedPage,
  }) => {
    await headlineHighlightedPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });

    await mount(<stories.Default />);
    await expect(headlineHighlightedPage.text).toBeVisible();
    await expect(headlineHighlightedPage.text).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    headlineHighlightedPage,
  }) => {
    await headlineHighlightedPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });

    await mount(<stories.Default />);
    await expect(headlineHighlightedPage.text).toBeVisible();
    await expect(headlineHighlightedPage.text).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    headlineHighlightedPage,
  }) => {
    await headlineHighlightedPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });

    await mount(<stories.Default />);
    await expect(headlineHighlightedPage.text).toBeVisible();
    await expect(headlineHighlightedPage.text).toHaveScreenshot();
  });

  test("axe report", async ({ mount, headlineHighlightedPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: headlineHighlightedPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
