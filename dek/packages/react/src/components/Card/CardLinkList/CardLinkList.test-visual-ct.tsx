import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CardLinkList.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  cardLinkListPage: {
    page: Page;
    root: Locator;
    list: Locator;
    listItem: Locator;
    divider: Locator;
    headline: Locator;
    otherButton: Locator;
  };
}>({
  cardLinkListPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const list = page.getByRole("list");
    const listItem = page.getByRole("listitem");
    const headline = page.getByRole("heading");
    const divider = page.locator("hr").locator("visible=true");
    const otherButton = page.getByRole("button", {
      name: "Button",
    });

    await use({
      page,
      root,
      list,
      listItem,
      headline,
      divider,
      otherButton,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render CardLinkList`, async ({ mount, cardLinkListPage }) => {
      await mount(<BackgroundStory />);
      await expect(cardLinkListPage.list).toBeVisible();
      await expect(cardLinkListPage.root).toHaveScreenshot();
    });
    test(`Should render CardLinkList with focused item`, async ({
      mount,
      cardLinkListPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(cardLinkListPage.list).toBeVisible();
      await cardLinkListPage.listItem.first().getByRole("link").focus();
      await expect(cardLinkListPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render CardLinkList", async ({ mount, cardLinkListPage }) => {
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });
  test("Should render CardLinkList with focused item", async ({
    mount,
    cardLinkListPage,
  }) => {
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await cardLinkListPage.listItem.first().getByRole("link").focus();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });
  test("Should render CardLinkList with other Elements", async ({
    mount,
    cardLinkListPage,
  }) => {
    await mount(<stories.WithOtherElements />);
    await expect(cardLinkListPage.headline).toBeVisible();
    await expect(cardLinkListPage.list).toBeVisible();
    await expect(cardLinkListPage.listItem).toHaveCount(5);
    await expect(cardLinkListPage.divider).toHaveCount(4);
    await expect(cardLinkListPage.otherButton).toBeVisible();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render CardLinkList", async ({ mount, cardLinkListPage }) => {
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });
  test("Should render CardLinkList with focused item", async ({
    mount,
    cardLinkListPage,
  }) => {
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await cardLinkListPage.listItem.first().getByRole("link").focus();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });
  test("Should render CardLinkList with other Elements", async ({
    mount,
    cardLinkListPage,
  }) => {
    await mount(<stories.WithOtherElements />);
    await expect(cardLinkListPage.headline).toBeVisible();
    await expect(cardLinkListPage.list).toBeVisible();
    await expect(cardLinkListPage.listItem).toHaveCount(5);
    await expect(cardLinkListPage.divider).toHaveCount(4);
    await expect(cardLinkListPage.otherButton).toBeVisible();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, cardLinkListPage }) => {
    await cardLinkListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode with focused item", async ({
    mount,
    cardLinkListPage,
  }) => {
    await cardLinkListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await cardLinkListPage.listItem.first().getByRole("link").focus();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, cardLinkListPage }) => {
    await cardLinkListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode with focused item", async ({
    mount,
    cardLinkListPage,
  }) => {
    await cardLinkListPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await cardLinkListPage.listItem.first().getByRole("link").focus();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    cardLinkListPage,
  }) => {
    await cardLinkListPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(cardLinkListPage.list).toBeVisible();
    await expect(cardLinkListPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, cardLinkListPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: cardLinkListPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
