import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ButtonMicroIcon.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  buttonMicroIconPage: {
    page: Page;
    root: Locator;
    wrapper: Locator;
    button: Locator;
  };
}>({
  buttonMicroIconPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const wrapper = page.locator("#button-micro-icon");
    const button = page.getByLabel("Mehr Details");
    await use({
      page,
      root,
      wrapper,
      button,
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
    test(`Should render ButtonMicroIcon`, async ({
      mount,
      buttonMicroIconPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonMicroIconPage.button).toBeVisible();
      await expect(buttonMicroIconPage.button).toHaveScreenshot();
    });

    test(`Should render ButtonMicroIcon in hover state`, async ({
      mount,
      buttonMicroIconPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonMicroIconPage.button).toBeVisible();
      await buttonMicroIconPage.button.hover();
      await expect(buttonMicroIconPage.button).toHaveScreenshot();
    });

    test(`Should render ButtonMicroIcon in focus state`, async ({
      mount,
      buttonMicroIconPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonMicroIconPage.button).toBeVisible();
      await buttonMicroIconPage.button.focus();
      await expect(buttonMicroIconPage.wrapper).toHaveScreenshot();
    });
  },
);

test("Should render with different Icon", async ({
  buttonMicroIconPage,
  mount,
}) => {
  await mount(<stories.WithDifferentIcon />);
  await expect(buttonMicroIconPage.button).toBeVisible();
  await expect(buttonMicroIconPage.button).toHaveScreenshot();
});

test("Should render within Text", async ({ buttonMicroIconPage, mount }) => {
  await mount(<stories.WithinText />);
  await expect(buttonMicroIconPage.button).toBeVisible();
  await buttonMicroIconPage.button.focus();
  await expect(buttonMicroIconPage.wrapper).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    buttonMicroIconPage,
  }) => {
    await buttonMicroIconPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(buttonMicroIconPage.button).toBeVisible();
    await buttonMicroIconPage.button.focus();
    await expect(buttonMicroIconPage.wrapper).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, buttonMicroIconPage }) => {
    await buttonMicroIconPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(buttonMicroIconPage.button).toBeVisible();
    await buttonMicroIconPage.button.focus();
    await expect(buttonMicroIconPage.wrapper).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    buttonMicroIconPage,
  }) => {
    await buttonMicroIconPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(buttonMicroIconPage.button).toBeVisible();
    await expect(buttonMicroIconPage.wrapper).toHaveScreenshot();
  });

  test("axe report", async ({ mount, buttonMicroIconPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: buttonMicroIconPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
