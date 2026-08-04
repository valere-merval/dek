import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CardService.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  cardServicePage: {
    page: Page;
    root: Locator;
  };
}>({
  cardServicePage: async ({ page }, use) => {
    const root = page.locator("#root");
    await use({
      page,
      root,
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
    test(`Should render cardService`, async ({ mount, cardServicePage }) => {
      await mount(<BackgroundStory />);
      await expect(cardServicePage.root).toBeVisible();
      await expect(cardServicePage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, cardServicePage }) => {
    await mount(<stories.Default />);
    await expect(cardServicePage.root).toBeVisible();
    await expect(cardServicePage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render", async ({ mount, cardServicePage }) => {
    await mount(<stories.Default />);
    await expect(cardServicePage.root).toBeVisible();
    await expect(cardServicePage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, cardServicePage }) => {
    await cardServicePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(cardServicePage.root).toBeVisible();
    await expect(cardServicePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, cardServicePage }) => {
    await cardServicePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(cardServicePage.root).toBeVisible();
    await expect(cardServicePage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    cardServicePage,
  }) => {
    await cardServicePage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(cardServicePage.root).toBeVisible();
    await expect(cardServicePage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, cardServicePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: cardServicePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
