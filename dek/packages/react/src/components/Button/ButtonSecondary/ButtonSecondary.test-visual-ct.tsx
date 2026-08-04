import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ButtonSecondary.stories.portable";
import AxeBuilder from "@axe-core/playwright";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";

const test = base.extend<{
  buttonSecondaryPage: {
    page: Page;
    root: Locator;
    link: Locator;
    button: Locator;
  };
}>({
  buttonSecondaryPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = page.getByRole("button", { name: "Click me" });
    const link = page.getByRole("link", { name: "Click me" });
    await use({
      page,
      root,
      button,
      link,
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
      blue: stories.WithCongstarAppBlueBackground,
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
    test(`Should render buttonSecondary`, async ({
      mount,
      buttonSecondaryPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonSecondaryPage.button).toBeVisible();
      await expect(buttonSecondaryPage.button).toHaveScreenshot();
    });

    test(`Should render buttonSecondary in hover state`, async ({
      mount,
      buttonSecondaryPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonSecondaryPage.button).toBeVisible();
      await buttonSecondaryPage.button.hover();
      await expect(buttonSecondaryPage.button).toHaveScreenshot();
    });

    test(`Should render buttonSecondary in focus state`, async ({
      mount,
      buttonSecondaryPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonSecondaryPage.button).toBeVisible();
      await buttonSecondaryPage.button.focus();
      await expect(buttonSecondaryPage.page).toHaveScreenshot();
    });
  },
);

test("Should render a ButtonSecondary with a starting-icon", async ({
  mount,
  buttonSecondaryPage,
}) => {
  await mount(<stories.WithStartIcon />);
  await expect(buttonSecondaryPage.button).toBeVisible();
  await expect(buttonSecondaryPage.button).toHaveScreenshot();
});

test("Should render a ButtonSecondary with an ending-icon without Text", async ({
  mount,
  buttonSecondaryPage,
}) => {
  await mount(<stories.NoTextEndIcon />);
  await expect(buttonSecondaryPage.button).toBeVisible();
  await expect(buttonSecondaryPage.button).toHaveScreenshot();
});

test("Should render the same when used as an Anchor", async ({
  mount,
  buttonSecondaryPage,
}) => {
  await mount(<stories.AsAnchor />);
  await expect(buttonSecondaryPage.link).toBeVisible();
  await expect(buttonSecondaryPage.link).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    buttonSecondaryPage,
  }) => {
    await buttonSecondaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(buttonSecondaryPage.button).toBeVisible();
    await expect(buttonSecondaryPage.button).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, buttonSecondaryPage }) => {
    await buttonSecondaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(buttonSecondaryPage.button).toBeVisible();
    await expect(buttonSecondaryPage.button).toHaveScreenshot();
  });
  test("axe report", async ({ mount, buttonSecondaryPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: buttonSecondaryPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
