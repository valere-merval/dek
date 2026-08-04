import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./AppTabs.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  appTabsPage: {
    page: Page;
    root: Locator;
    manualTab: Locator;
    manualTabpanel: Locator;
    qrCodeTab: Locator;
    qrCodeTabpanel: Locator;

    dslTab: Locator;
    dslTabpanel: Locator;
    prepaidTab: Locator;
    postpaidTab: Locator;
  };
}>({
  appTabsPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const manualTab = page.getByRole("tab", { name: "Manuell" });
    const manualTabpanel = page.getByRole("tabpanel", { name: "Manuell" });
    const qrCodeTab = page.getByRole("tab", { name: "QR-Code" });
    const qrCodeTabpanel = page.getByRole("tabpanel", { name: "QR-Code" });
    const dslTab = page.getByRole("tab", { name: "DSL" });
    const dslTabpanel = page.getByRole("tabpanel", { name: "DSL" });
    const prepaidTab = page.getByRole("tab", { name: "Prepaid" });
    const postpaidTab = page.getByRole("tab", { name: "Postpaid" });
    await use({
      page,
      root,
      manualTab,
      manualTabpanel,
      qrCodeTab,
      qrCodeTabpanel,
      dslTab,
      dslTabpanel,
      prepaidTab,
      postpaidTab,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
    },
  },
  (BackgroundStory) => {
    test.use(viewports.sm);

    test(`Should render appTabs`, async ({ mount, appTabsPage }) => {
      await mount(<BackgroundStory />);

      await expect(appTabsPage.manualTab).toBeVisible();
      await expect(appTabsPage.manualTabpanel).toBeVisible();
      await expect(appTabsPage.qrCodeTab).toBeVisible();
      await expect(appTabsPage.qrCodeTabpanel).not.toBeVisible();
      await expect(appTabsPage.root).toHaveScreenshot();
    });

    test("Should render three tabs", async ({ mount, appTabsPage }) => {
      await mount(<stories.ThreeTabs />);

      await expect(appTabsPage.dslTab).toBeVisible();
      await expect(appTabsPage.dslTabpanel).toBeVisible();
      await expect(appTabsPage.prepaidTab).toBeVisible();
      await expect(appTabsPage.postpaidTab).toBeVisible();

      await expect(appTabsPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Behavior", () => {
  test.use(viewports.sm);

  test("Should switch to another tabpanel", async ({ mount, appTabsPage }) => {
    await mount(<stories.Default />);
    await expect(appTabsPage.manualTab).toBeVisible();
    await expect(appTabsPage.manualTabpanel).toBeVisible();
    await expect(appTabsPage.qrCodeTab).toBeVisible();
    await expect(appTabsPage.qrCodeTabpanel).not.toBeVisible();

    await appTabsPage.qrCodeTab.click();
    await expect(appTabsPage.manualTab).toBeVisible();
    await expect(appTabsPage.manualTabpanel).not.toBeVisible();
    await expect(appTabsPage.qrCodeTab).toBeVisible();
    await expect(appTabsPage.qrCodeTabpanel).toBeVisible();
    await expect(appTabsPage.root).toHaveScreenshot();
  });

  test("Should respect default value", async ({ mount, appTabsPage }) => {
    await mount(<stories.Default defaultValue="qrcode" />);

    await expect(appTabsPage.manualTab).toBeVisible();
    await expect(appTabsPage.manualTabpanel).not.toBeVisible();
    await expect(appTabsPage.qrCodeTab).toBeVisible();
    await expect(appTabsPage.qrCodeTabpanel).toBeVisible();
    await expect(appTabsPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, appTabsPage }) => {
    await appTabsPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(appTabsPage.manualTab).toBeVisible();
    await expect(appTabsPage.manualTabpanel).toBeVisible();
    await expect(appTabsPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, appTabsPage }) => {
    await appTabsPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(appTabsPage.manualTab).toBeVisible();
    await expect(appTabsPage.manualTabpanel).toBeVisible();
    await expect(appTabsPage.root).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    appTabsPage,
  }) => {
    await appTabsPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(appTabsPage.manualTab).toBeVisible();
    await expect(appTabsPage.manualTabpanel).toBeVisible();
    await expect(appTabsPage.root).toHaveScreenshot();
  });

  test("focus outline", async ({ mount, appTabsPage }) => {
    await mount(<stories.Default />);
    await expect(appTabsPage.manualTab).toBeVisible();
    await expect(appTabsPage.manualTabpanel).toBeVisible();
    await appTabsPage.manualTab.focus();
    await expect(appTabsPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, appTabsPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: appTabsPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
