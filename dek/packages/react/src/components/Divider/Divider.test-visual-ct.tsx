import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Divider.stories.portable";
import { BackgroundColor } from "../../theme/theme";
import { DividerColor } from "./Divider.types";
import AxeBuilder from "@axe-core/playwright";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../playwright/fixtures";

const test = base.extend<{
  dividerPage: {
    page: Page;
    root: Locator;
    divider: Locator;
    text: Locator;
  };
}>({
  dividerPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const divider = page.getByRole("separator");
    const text = page.getByText("oder");
    await use({
      page,
      root,
      divider,
      text,
    });
  },
});

const supportedDividerColorsOnBackgroundCongstar: Record<
  BackgroundColor,
  (DividerColor | undefined)[]
> = {
  black: ["darkGrey", "lightGrey"],
  white: ["darkGrey", "lightGrey", "black"],
  blue: ["black"],
  lightGrey: ["darkGrey", "lightGrey", "black"],
  darkGrey: ["darkGrey", "lightGrey", "black"],
  jaAgave20: [undefined],
  jaAgave80: [undefined],
  jaAgaveOutlinesSecondary: [undefined],
  jaGeneralWhite: [undefined],
  pennyNeutralLightGrey: [undefined],
  pennyNeutralWhite: [undefined],
  pennyRed: [undefined],
  pennyRedDark: [undefined],
};

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
  (BackgroundStory, brand, backgroundColor) => {
    const dividerColors =
      supportedDividerColorsOnBackgroundCongstar[backgroundColor];

    dividerColors?.map((dividerColor) => {
      test(`Should render default divider with ${dividerColor} color`, async ({
        mount,
        dividerPage,
      }) => {
        await mount(<BackgroundStory color={dividerColor} />);
        await expect(dividerPage.root).toBeVisible();
        await expect(dividerPage.root).toHaveScreenshot();
      });

      test(`Should render no gap divider with ${dividerColor} color`, async ({
        mount,
        dividerPage,
      }) => {
        await mount(<BackgroundStory color={dividerColor} noGap />);
        await expect(dividerPage.root).toBeVisible();
        await expect(dividerPage.root).toHaveScreenshot();
      });

      test(`Should render divider with text and with ${dividerColor} color`, async ({
        mount,
        dividerPage,
      }) => {
        await mount(<BackgroundStory color={dividerColor} text="oder" noGap />);
        await expect(dividerPage.root).toBeVisible();
        await expect(dividerPage.text).toBeVisible();
        await expect(dividerPage.root).toHaveScreenshot();
      });
    });
  },
);

test.describe("Vertical", () => {
  testDescribeAllowedBackgrounds(
    test,
    {
      congstarWeb: {
        black: stories.WithVerticalDividerOnCongstarWebBlackBackground,
        white: stories.WithVerticalDividerOnCongstarWebWhiteBackground,
        lightGrey: stories.WithVerticalDividerOnCongstarWebLightGreyBackground,
        darkGrey: stories.WithVerticalDividerOnCongstarWebDarkGreyBackground,
        blue: stories.WithVerticalDividerOnCongstarWebBlueBackground,
      },
      congstarApp: {
        black: stories.WithVerticalDividerOnCongstarAppBlackBackground,
        white: stories.WithVerticalDividerOnCongstarAppWhiteBackground,
        lightGrey: stories.WithVerticalDividerOnCongstarAppLightGreyBackground,
        darkGrey: stories.WithVerticalDividerOnCongstarAppDarkGreyBackground,
      },
      ja: {
        jaAgave20: stories.WithVerticalDividerOnJaJaAgave20Background,
        jaAgave80: stories.WithVerticalDividerOnJaJaAgave80Background,
        jaGeneralWhite: stories.WithVerticalDividerOnJaJaGeneralWhiteBackground,
        jaAgaveOutlinesSecondary:
          stories.WithVerticalDividerOnJaJaAgaveOutlinesSecondaryBackground,
      },
      penny: {
        pennyRed: stories.WithVerticalDividerOnPennyPennyRedBackground,
        pennyRedDark: stories.WithVerticalDividerOnPennyPennyRedDarkBackground,
        pennyNeutralWhite:
          stories.WithVerticalDividerOnPennyPennyNeutralWhiteBackground,
        pennyNeutralLightGrey:
          stories.WithVerticalDividerOnPennyPennyNeutralLightGreyBackground,
      },
    },
    (BackgroundStory, brand, backgroundColor) => {
      const dividerColors =
        supportedDividerColorsOnBackgroundCongstar[backgroundColor];

      dividerColors?.map((dividerColor) => {
        test(`Should render default divider with ${dividerColor} color`, async ({
          mount,
          dividerPage,
        }) => {
          await mount(<BackgroundStory color={dividerColor} />);
          await expect(dividerPage.root).toBeVisible();
          await expect(dividerPage.root).toHaveScreenshot();
        });

        test(`Should render no gap divider with ${dividerColor} color`, async ({
          mount,
          dividerPage,
        }) => {
          await mount(<BackgroundStory color={dividerColor} noGap />);
          await expect(dividerPage.root).toBeVisible();
          await expect(dividerPage.root).toHaveScreenshot();
        });
      });
    },
  );
});

test(`Should render`, async ({ mount, dividerPage }) => {
  await mount(<stories.Default />);
  await expect(dividerPage.root).toBeVisible();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render in small viewport", async ({ mount, dividerPage }) => {
    await mount(<stories.WithText />);
    await expect(dividerPage.text).toBeVisible();
    await expect(dividerPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, dividerPage }) => {
    await dividerPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(dividerPage.root).toBeVisible();
    await expect(dividerPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, dividerPage }) => {
    await dividerPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(dividerPage.root).toBeVisible();
    await expect(dividerPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode with text", async ({
    mount,
    dividerPage,
  }) => {
    await dividerPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithText />);
    await expect(dividerPage.root).toBeVisible();
    await expect(dividerPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode with text", async ({
    mount,
    dividerPage,
  }) => {
    await dividerPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithText />);
    await expect(dividerPage.root).toBeVisible();
    await expect(dividerPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, dividerPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: dividerPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
