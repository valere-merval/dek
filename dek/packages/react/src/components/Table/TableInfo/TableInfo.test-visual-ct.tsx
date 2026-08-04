import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./TableInfo.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  tableInfoPage: {
    page: Page;
    root: Locator;
    table: Locator;
    infoIconButton: Locator;
  };
}>({
  tableInfoPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const table = page.getByRole("table", {
      name: "Anschlüsse & Schnittstellen",
    });
    const infoIconButton = page.getByRole("button", {
      name: "Mehr Details zu DSL-Anschluss",
    });
    await use({
      page,
      root,
      table,
      infoIconButton,
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
    test(`Should render tableInfo`, async ({ mount, tableInfoPage }) => {
      await mount(<BackgroundStory />);
      await expect(tableInfoPage.table).toBeVisible();
      await expect(tableInfoPage.table).toHaveScreenshot();
    });

    test.describe("Small Viewport", () => {
      test.use(viewports.sm);

      test(`Should render tableInfo`, async ({ mount, tableInfoPage }) => {
        await mount(<BackgroundStory />);
        await expect(tableInfoPage.table).toBeVisible();
        await expect(tableInfoPage.table).toHaveScreenshot();
      });
    });
  },
);

test.describe("Without head", () => {
  test("Should render the table without head", async ({
    mount,
    tableInfoPage,
  }) => {
    await mount(<stories.WithoutHead />);
    await expect(tableInfoPage.table).toBeVisible();
    await expect(tableInfoPage.table).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("focus info icon", async ({ mount, tableInfoPage }) => {
    await mount(<stories.Default />);
    await expect(tableInfoPage.table).toBeVisible();
    await tableInfoPage.infoIconButton.focus();
    await expect(tableInfoPage.infoIconButton).toBeFocused();
    await expect(tableInfoPage.table).toHaveScreenshot();
  });

  test("highContrast and light mode", async ({ mount, tableInfoPage }) => {
    await tableInfoPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(tableInfoPage.table).toBeVisible();
    await expect(tableInfoPage.table).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, tableInfoPage }) => {
    await tableInfoPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(tableInfoPage.table).toBeVisible();
    await expect(tableInfoPage.table).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    tableInfoPage,
  }) => {
    await tableInfoPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(tableInfoPage.table).toBeVisible();
    await expect(tableInfoPage.table).toHaveScreenshot();
  });

  test("axe report", async ({ mount, tableInfoPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: tableInfoPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
