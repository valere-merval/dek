import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CardBonus.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  cardBonusPage: {
    page: Page;
    root: Locator;
    headline: Locator;
    accordionTrigger: Locator;
    detailsButton: Locator;
  };
}>({
  cardBonusPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const headline = page.getByRole("heading", { name: "Dein Bonus" });
    const accordionTrigger = page.getByRole("button", {
      name: "Summe Bonus",
    });
    const detailsButton = page.getByRole("button", {
      name: "Details zur Bonus Summe",
    });
    await use({
      page,
      root,
      headline,
      accordionTrigger,
      detailsButton,
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
    },
  },
  (BackgroundStory) => {
    test("should render CardBonus", async ({ mount, cardBonusPage }) => {
      await mount(<BackgroundStory />);
      await expect(cardBonusPage.headline).toBeVisible();
      await expect(cardBonusPage.root).toHaveScreenshot();
    });

    test("should render outlined CardBonus", async ({
      mount,
      cardBonusPage,
    }) => {
      await mount(<stories.Outlined />);
      await expect(cardBonusPage.headline).toBeVisible();
      await expect(cardBonusPage.root).toHaveScreenshot();
    });
  },
);

test("should open the details modal when clicking the details button", async ({
  mount,
  cardBonusPage,
}) => {
  await mount(<stories.Default />);
  await expect(cardBonusPage.detailsButton).toBeVisible();
  await cardBonusPage.detailsButton.click();
  await expect(
    cardBonusPage.page.getByRole("heading", {
      name: "Details zur Bonus Summe",
    }),
  ).toBeVisible();
  await expect(cardBonusPage.page).toHaveScreenshot();
});

test("should not render a details button when detailTexts is null", async ({
  mount,
  cardBonusPage,
}) => {
  await mount(<stories.WithoutDetails />);
  await expect(cardBonusPage.detailsButton).not.toBeVisible();
  await expect(cardBonusPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("should render", async ({ mount, cardBonusPage }) => {
    await mount(<stories.Default />);
    await expect(cardBonusPage.headline).toBeVisible();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });

  test("should render outlined variant", async ({ mount, cardBonusPage }) => {
    await mount(<stories.Outlined />);
    await expect(cardBonusPage.headline).toBeVisible();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });

  test("should render CardBonus with expanded accordion", async ({
    mount,
    cardBonusPage,
  }) => {
    await mount(<stories.Default />);
    await expect(cardBonusPage.accordionTrigger).toBeVisible();
    await cardBonusPage.accordionTrigger.click();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("should render", async ({ mount, cardBonusPage }) => {
    await mount(<stories.Default />);
    await expect(cardBonusPage.headline).toBeVisible();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });

  test("should render outlined variant", async ({ mount, cardBonusPage }) => {
    await mount(<stories.Outlined />);
    await expect(cardBonusPage.headline).toBeVisible();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });

  test("should render CardBonus with expanded accordion", async ({
    mount,
    cardBonusPage,
  }) => {
    await mount(<stories.Default />);
    await expect(cardBonusPage.accordionTrigger).toBeVisible();
    await cardBonusPage.accordionTrigger.click();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, cardBonusPage }) => {
    await cardBonusPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(cardBonusPage.headline).toBeVisible();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, cardBonusPage }) => {
    await cardBonusPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(cardBonusPage.headline).toBeVisible();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    cardBonusPage,
  }) => {
    await cardBonusPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(cardBonusPage.headline).toBeVisible();
    await expect(cardBonusPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, cardBonusPage }) => {
    await mount(<stories.Default />);
    await expect(cardBonusPage.headline).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({
      page: cardBonusPage.page,
    })
      .include("#root")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
