import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Text.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import { TextSize } from "./Text.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  textPage: {
    page: Page;
    root: Locator;
    text: Locator;
    loremText: Locator;
    styledText: Locator;
  };
}>({
  textPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const text = page.getByText("Wir und unsere Drittanbieter nutzen");
    const loremText = page.getByText("Lorem, ipsum dolor sit amet");
    const styledText = page.getByText("ein b-Tag");
    await use({
      page,
      root,
      text,
      loremText,
      styledText,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
      blue: stories.WithCongstarWebBlueBackground,
      lightGrey: stories.WithCongstarWebLightGreyBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      white: stories.WithCongstarAppWhiteBackground,
      blue: stories.WithCongstarAppBlueBackground,
      lightGrey: stories.WithCongstarAppLightGreyBackground,
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
    test(`should render Text`, async ({ mount, textPage }) => {
      await mount(<BackgroundStory />);
      await expect(textPage.styledText).toBeVisible();
      await expect(textPage.root).toHaveScreenshot();
    });
    test(`should render bold Text`, async ({ mount, textPage }) => {
      await mount(<BackgroundStory variant="bold" />);
      await expect(textPage.styledText).toBeVisible();
      await expect(textPage.root).toHaveScreenshot();
    });
  },
);

const TextSizes: Record<TextSize, TextSize> = {
  small: "small",
  medium: "medium",
  large: "large",
};

test.describe(`responsive behavior`, () => {
  Object.entries(viewports).map(([viewportName, viewport]) => {
    test.describe(`on ${viewportName} viewport`, () => {
      test.use(viewport);
      testDescribeAllowedBackgrounds(
        test,
        {
          congstarWeb: {
            black: stories.WithResponsiveTextOnCongstarWebBlackBackground,
          },
          congstarApp: {
            black: stories.WithResponsiveTextOnCongstarAppBlackBackground,
          },
          ja: {
            jaAgave20: stories.WithResponsiveTextOnJaJaAgave20Background,
          },
          penny: {
            pennyRed: stories.WithResponsiveTextOnPennyPennyRedBackground,
          },
        },
        (BackgroundStory) => {
          Object.entries(TextSizes).map(([sizeName, size]) => {
            test(`Should render Text of size ${sizeName}`, async ({
              mount,
              textPage,
            }) => {
              await mount(<BackgroundStory size={size} />);
              await expect(textPage.text).toBeVisible();
              await expect(textPage.text).toHaveScreenshot();
            });

            test(`Should render a bold Text of the size ${sizeName}`, async ({
              mount,
              textPage,
            }) => {
              await mount(<BackgroundStory size={size} variant="bold" />);

              await expect(textPage.text).toBeVisible();
              await expect(textPage.text).toHaveScreenshot();
            });
          });
        },
      );
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, textPage }) => {
    await textPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(textPage.text).toBeVisible();
    await expect(textPage.text).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, textPage }) => {
    await textPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(textPage.text).toBeVisible();
    await expect(textPage.text).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    textPage,
  }) => {
    await textPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(textPage.text).toBeVisible();
    await expect(textPage.text).toHaveScreenshot();
  });

  test("axe report", async ({ mount, textPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: textPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
