import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./TabList.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  tabListPage: {
    page: Page;
    root: Locator;
    tab1: Locator;
    tab2: Locator;
    tab3: Locator;
    tabPanel1: Locator;
    tabPanel2: Locator;
    tabPanel3: Locator;
    tabHighlights: Locator;
    tabShippingInfo: Locator;
    tabTechnicalData: Locator;
    tabContentOfDelivery: Locator;
    tabPanelHighlights: Locator;
    tabPanelShippingInfo: Locator;
    tabPanelTechnicalData: Locator;
    tabPanelContentOfDelivery: Locator;
  };
}>({
  tabListPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const tab1 = root.getByRole("tab", { name: "Tab 1" });
    const tab2 = root.getByRole("tab", { name: "Tab 2" });
    const tab3 = root.getByRole("tab", { name: "Tab 3" });

    const tabPanel1 = root.getByRole("tabpanel", { name: "Tab 1" });
    const tabPanel2 = root.getByRole("tabpanel", { name: "Tab 2" });
    const tabPanel3 = root.getByRole("tabpanel", { name: "Tab 3" });
    const tabHighlights = root.getByRole("tab", { name: "Highlights" });
    const tabShippingInfo = root.getByRole("tab", {
      name: "Versandinformationen",
    });
    const tabTechnicalData = root.getByRole("tab", {
      name: "Technische Daten",
    });
    const tabContentOfDelivery = root.getByRole("tab", {
      name: "Lieferumfang",
    });
    const tabPanelHighlights = root.getByRole("tabpanel", {
      name: "Highlights",
    });
    const tabPanelShippingInfo = root.getByRole("tabpanel", {
      name: "Versandinformationen",
    });
    const tabPanelTechnicalData = root.getByRole("tabpanel", {
      name: "Technische Daten",
    });
    const tabPanelContentOfDelivery = root.getByRole("tabpanel", {
      name: "Lieferumfang",
    });

    await use({
      page,
      root,
      tab1,
      tab2,
      tab3,
      tabPanel1,
      tabPanel2,
      tabPanel3,
      tabHighlights,
      tabShippingInfo,
      tabTechnicalData,
      tabContentOfDelivery,
      tabPanelHighlights,
      tabPanelShippingInfo,
      tabPanelTechnicalData,
      tabPanelContentOfDelivery,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render TabList`, async ({ mount, tabListPage }) => {
      await mount(<BackgroundStory />);
      await expect(tabListPage.root).toBeVisible();
      await expect(tabListPage.tab1).toBeVisible();
      await expect(tabListPage.tab2).toBeVisible();
      await expect(tabListPage.tab3).toBeVisible();
      await expect(tabListPage.tabPanel1).toBeVisible();
      await expect(tabListPage.tabPanel2).not.toBeVisible();
      await expect(tabListPage.tabPanel3).not.toBeVisible();
      await expect(tabListPage.root).toHaveScreenshot();
    });
    test(`Should render TabList with focused state on second tab`, async ({
      mount,
      tabListPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(tabListPage.root).toBeVisible();
      await expect(tabListPage.tab1).toBeVisible();
      await expect(tabListPage.tab2).toBeVisible();
      await expect(tabListPage.tab3).toBeVisible();
      await tabListPage.tab2.focus();
      await expect(tabListPage.tabPanel1).toBeVisible();
      await expect(tabListPage.tabPanel2).not.toBeVisible();
      await expect(tabListPage.tabPanel3).not.toBeVisible();
      await expect(tabListPage.root).toHaveScreenshot();
    });
    test("Should render sticky tablist", async ({ mount, tabListPage }) => {
      await mount(<BackgroundStory sticky defaultValue="tab-3" />);
      await tabListPage.page.mouse.wheel(0, 300);
      await expect(tabListPage.root).toBeVisible();
      await expect(tabListPage.tab1).toBeVisible();
      await expect(tabListPage.tab2).toBeVisible();
      await expect(tabListPage.tab3).toBeVisible();
      await expect(tabListPage.tabPanel1).not.toBeVisible();
      await expect(tabListPage.tabPanel2).not.toBeVisible();
      await expect(tabListPage.tabPanel3).toBeVisible();
      await tabListPage.page.waitForTimeout(1000);
      await expect(tabListPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, tabListPage }) => {
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });

  test("Should render sticky tablist", async ({ mount, tabListPage }) => {
    await mount(<stories.Sticky defaultValue="tab-2" />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).not.toBeVisible();
    await expect(tabListPage.tabPanel2).toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await tabListPage.page.waitForTimeout(1000);
    await tabListPage.page.mouse.wheel(0, 100);
    await tabListPage.page.waitForTimeout(1000);
    await expect(tabListPage.root).toHaveScreenshot();
  });
  test("Should render with tabs on multiple lines", async ({
    mount,
    tabListPage,
  }) => {
    await mount(<stories.DeviceHighlights />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tabHighlights).toBeVisible();
    await expect(tabListPage.tabShippingInfo).toBeVisible();
    await expect(tabListPage.tabTechnicalData).toBeVisible();
    await expect(tabListPage.tabContentOfDelivery).toBeVisible();
    await expect(tabListPage.tabPanelHighlights).toBeVisible();
    await expect(tabListPage.tabPanelShippingInfo).not.toBeVisible();
    await expect(tabListPage.tabPanelTechnicalData).not.toBeVisible();
    await expect(tabListPage.tabPanelContentOfDelivery).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render", async ({ mount, tabListPage }) => {
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });
  test("Should render with defaultValue on second Tab", async ({
    mount,
    tabListPage,
  }) => {
    await mount(<stories.Default defaultValue="tab-2" />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).not.toBeVisible();
    await expect(tabListPage.tabPanel2).toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });
});
test.describe("Controlled TabList", () => {
  test("Should render tablist and change tab on click", async ({
    mount,
    tabListPage,
  }) => {
    await mount(<stories.ControlledTabs />);

    await expect(tabListPage.tabPanel1).toBeVisible();
    await tabListPage.tab2.click();

    await expect(tabListPage.tabPanel1).not.toBeVisible();
    await expect(tabListPage.tabPanel2).toBeVisible();
  });
});

test.describe("Accessibility on large viewport", () => {
  test("highContrast and light mode", async ({ mount, tabListPage }) => {
    await tabListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, tabListPage }) => {
    await tabListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    tabListPage,
  }) => {
    await tabListPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, tabListPage }) => {
    await tabListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, tabListPage }) => {
    await tabListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    tabListPage,
  }) => {
    await tabListPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(tabListPage.root).toBeVisible();
    await expect(tabListPage.tab1).toBeVisible();
    await expect(tabListPage.tab2).toBeVisible();
    await expect(tabListPage.tab3).toBeVisible();
    await expect(tabListPage.tabPanel1).toBeVisible();
    await expect(tabListPage.tabPanel2).not.toBeVisible();
    await expect(tabListPage.tabPanel3).not.toBeVisible();
    await expect(tabListPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, tabListPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: tabListPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
