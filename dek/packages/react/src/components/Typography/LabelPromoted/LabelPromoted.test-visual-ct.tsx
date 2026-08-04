import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./LabelPromoted.stories.portable";
import AxeBuilder from "@axe-core/playwright";
import { testDescribeAllowedBackgrounds } from "../../../../playwright/fixtures";

const test = base.extend<{
  labelPromotedPage: {
    page: Page;
    root: Locator;
    wrapper: Locator;
    text: Locator;
  };
}>({
  labelPromotedPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const wrapper = page.getByTestId("labelPromotedWrapper");
    const text = page.getByText("PROMOTION LABEL DEFAULT");
    await use({
      page,
      root,
      wrapper,
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
      blue: stories.WithCongstarWebBlueBackground,
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
    test(`Should render labelPromoted`, async ({
      mount,
      labelPromotedPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(labelPromotedPage.text).toBeVisible();
      await expect(labelPromotedPage.wrapper).toHaveScreenshot();
    });
  },
);

test(`Should render labelPromoted with set decorative color`, async ({
  mount,
  labelPromotedPage,
}) => {
  await mount(<stories.Default decorativeColor="black" />);
  await expect(labelPromotedPage.text).toBeVisible();
  await expect(labelPromotedPage.wrapper).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test("highContrast and light mode", async ({ mount, labelPromotedPage }) => {
    await labelPromotedPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(labelPromotedPage.text).toBeVisible();
    await expect(labelPromotedPage.wrapper).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, labelPromotedPage }) => {
    await labelPromotedPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(labelPromotedPage.text).toBeVisible();
    await expect(labelPromotedPage.wrapper).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    labelPromotedPage,
  }) => {
    await labelPromotedPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(labelPromotedPage.text).toBeVisible();
    await expect(labelPromotedPage.wrapper).toHaveScreenshot();
  });

  test("axe report", async ({ mount, labelPromotedPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: labelPromotedPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
