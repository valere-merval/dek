import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Tabs.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { container } from "../../../../playwright/fixtures";

const test = base.extend<{
  tabsPage: {
    page: Page;
    root: Locator;
    highlightsTab: Locator;
    highlightsTabpanel: Locator;

    technicalDataTab: Locator;
    technicalDataTabpanel: Locator;

    contentOfDeliveryTab: Locator;
    contentOfDeliveryTabpanel: Locator;

    shippingInfoTab: Locator;
    shippingInfoTabpanel: Locator;

    mobileOpenTabListButton: Locator;

    modalTrigger: Locator;
    modalDialog: Locator;
    modalCloseButton: Locator;
  };
}>({
  tabsPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const highlightsTab = page.getByRole("tab", {
      name: "Highlights",
    });
    const highlightsTabpanel = page.getByRole("tabpanel", {
      name: "Highlights",
    });

    const technicalDataTab = page.getByRole("tab", {
      name: "Technische Daten",
    });
    const technicalDataTabpanel = page.getByRole("tabpanel", {
      name: "Technische Daten",
    });

    const contentOfDeliveryTab = page.getByRole("tab", {
      name: "Lieferumfang",
    });
    const contentOfDeliveryTabpanel = page.getByRole("tabpanel", {
      name: "Lieferumfang",
    });

    const shippingInfoTab = page.getByRole("tab", {
      name: "Versandinformation",
    });
    const shippingInfoTabpanel = page.getByRole("tabpanel", {
      name: "Versandinformation",
    });

    const mobileOpenTabListButton = page.getByRole("button", {
      name: "Öffne Tabsliste",
    });

    const modalTrigger = page.getByRole("button", { name: "Mehr Details" });
    const modalDialog = page.getByRole("dialog", { name: "eSIM" });
    const modalCloseButton = page.getByRole("button", {
      name: "Schließen",
    });
    await use({
      page,
      root,
      highlightsTab,
      highlightsTabpanel,
      technicalDataTab,
      technicalDataTabpanel,
      contentOfDeliveryTab,
      contentOfDeliveryTabpanel,
      shippingInfoTab,
      shippingInfoTabpanel,
      mobileOpenTabListButton,
      modalTrigger,
      modalDialog,
      modalCloseButton,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render tabs on ${colorName} Background`, async ({
        mount,
        tabsPage,
      }) => {
        await mount(<BackgroundStory defaultValue="shipping-info" />);
        await expect(tabsPage.highlightsTab).toBeVisible();
        await expect(tabsPage.technicalDataTab).toBeVisible();
        await expect(tabsPage.contentOfDeliveryTab).toBeVisible();
        await expect(tabsPage.shippingInfoTab).toBeVisible();

        await expect(tabsPage.shippingInfoTabpanel).toBeVisible();

        await expect(tabsPage.highlightsTabpanel).not.toBeVisible();
        await expect(tabsPage.technicalDataTabpanel).not.toBeVisible();
        await expect(tabsPage.contentOfDeliveryTabpanel).not.toBeVisible();

        await expect(tabsPage.mobileOpenTabListButton).not.toBeVisible();

        await expect(tabsPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(container(350, 768));

  test("Should open tabslist", async ({ mount, tabsPage }) => {
    await mount(<stories.Default defaultValue="shipping-info" />);
    await tabsPage.shippingInfoTab.click();

    await expect(tabsPage.highlightsTab).toBeVisible();
    await expect(tabsPage.technicalDataTab).toBeVisible();
    await expect(tabsPage.contentOfDeliveryTab).toBeVisible();
    await expect(tabsPage.shippingInfoTab).toBeVisible();

    await expect(tabsPage.root).toHaveScreenshot();
  });

  test("Should open tabslist even with no Content", async ({
    mount,
    tabsPage,
  }) => {
    await mount(<stories.EmptyTabContent defaultValue="shipping-info" />);
    await tabsPage.shippingInfoTab.click();

    await expect(tabsPage.highlightsTab).toBeVisible();
    await expect(tabsPage.technicalDataTab).toBeVisible();
    await expect(tabsPage.contentOfDeliveryTab).toBeVisible();
    await expect(tabsPage.shippingInfoTab).toBeVisible();

    await expect(tabsPage.page).toHaveScreenshot();
  });

  test("Should switch to another tabpanel", async ({ mount, tabsPage }) => {
    await mount(<stories.Default defaultValue="shipping-info" />);
    await expect(tabsPage.shippingInfoTabpanel).toBeVisible();
    await expect(tabsPage.technicalDataTabpanel).not.toBeVisible();

    await tabsPage.mobileOpenTabListButton.click();
    await tabsPage.technicalDataTab.click();

    await expect(tabsPage.shippingInfoTabpanel).not.toBeVisible();
    await expect(tabsPage.technicalDataTabpanel).toBeVisible();

    await expect(tabsPage.root).toHaveScreenshot();
  });
  test.describe("Tabs in Modal", () => {
    test("Should render tabs", async ({ mount, tabsPage }) => {
      await mount(<stories.WithModal defaultValue="shipping-info" />);
      await tabsPage.modalTrigger.click();

      await expect(tabsPage.mobileOpenTabListButton).toBeVisible();
      await expect(tabsPage.shippingInfoTab).toBeVisible();
      await expect(tabsPage.shippingInfoTabpanel).toBeVisible();

      await expect(tabsPage.modalDialog).toHaveScreenshot();
    });

    test("Should open tabslist", async ({ mount, tabsPage }) => {
      await mount(<stories.WithModal defaultValue="shipping-info" />);

      await tabsPage.modalTrigger.click();

      await tabsPage.shippingInfoTab.click();

      await expect(tabsPage.highlightsTab).toBeVisible();
      await expect(tabsPage.technicalDataTab).toBeVisible();
      await expect(tabsPage.contentOfDeliveryTab).toBeVisible();
      await expect(tabsPage.shippingInfoTab).toBeVisible();

      await expect(tabsPage.modalDialog).toHaveScreenshot();
    });
  });
});

test.describe("Wide viewport", () => {
  test.use(container(900, 768));
  test("Should render tabs", async ({ mount, tabsPage }) => {
    await mount(<stories.Default defaultValue="shipping-info" />);
    await expect(tabsPage.highlightsTab).toBeVisible();
    await expect(tabsPage.technicalDataTab).toBeVisible();
    await expect(tabsPage.contentOfDeliveryTab).toBeVisible();
    await expect(tabsPage.shippingInfoTab).toBeVisible();

    await expect(tabsPage.shippingInfoTabpanel).toBeVisible();

    await expect(tabsPage.highlightsTabpanel).not.toBeVisible();
    await expect(tabsPage.technicalDataTabpanel).not.toBeVisible();
    await expect(tabsPage.contentOfDeliveryTabpanel).not.toBeVisible();

    await expect(tabsPage.mobileOpenTabListButton).not.toBeVisible();

    await expect(tabsPage.root).toHaveScreenshot();
  });

  test("Should switch to another tabpanel", async ({ mount, tabsPage }) => {
    await mount(<stories.Default defaultValue="shipping-info" />);
    await expect(tabsPage.shippingInfoTabpanel).toBeVisible();
    await expect(tabsPage.technicalDataTabpanel).not.toBeVisible();

    await tabsPage.technicalDataTab.click();

    await expect(tabsPage.shippingInfoTabpanel).not.toBeVisible();
    await expect(tabsPage.technicalDataTabpanel).toBeVisible();

    await expect(tabsPage.root).toHaveScreenshot();
  });

  test.describe("Tabs in Modal", () => {
    test("Should render tabs", async ({ mount, tabsPage }) => {
      await mount(<stories.WithModal defaultValue="shipping-info" />);
      await tabsPage.modalTrigger.click();

      await expect(tabsPage.highlightsTab).toBeVisible();
      await expect(tabsPage.technicalDataTab).toBeVisible();
      await expect(tabsPage.contentOfDeliveryTab).toBeVisible();
      await expect(tabsPage.shippingInfoTab).toBeVisible();

      await expect(tabsPage.shippingInfoTabpanel).toBeVisible();

      await expect(tabsPage.highlightsTabpanel).not.toBeVisible();
      await expect(tabsPage.technicalDataTabpanel).not.toBeVisible();
      await expect(tabsPage.contentOfDeliveryTabpanel).not.toBeVisible();

      await expect(tabsPage.mobileOpenTabListButton).not.toBeVisible();

      await expect(tabsPage.modalDialog).toHaveScreenshot();
    });
  });
});
