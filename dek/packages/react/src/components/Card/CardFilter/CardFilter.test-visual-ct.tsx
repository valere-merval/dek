import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CardFilter.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  cardFilterPage: {
    page: Page;
    root: Locator;
    heading: Locator;
    description: Locator;
    detailsButton: Locator;
    icon: Locator;
    switch: Locator;
  };
}>({
  cardFilterPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const heading = page.getByRole("heading", {
      name: "congstar Rücknahmedeal",
    });
    const description = page.getByText(
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    );
    const detailsButton = page.getByRole("button", {
      name: "Details und Rücknahmekonditionen",
    });
    const icon = root.locator("svg");
    const toggle = page.getByRole("switch");

    await use({
      page,
      root,
      heading,
      description,
      detailsButton,
      icon,
      switch: toggle,
    });
  },
});

test.describe("Background Color", () => {
  test.describe("With Icon", () => {
    const supportedBackgroundStories = {
      black: stories.WithBlackBackground,
    } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

    Object.entries(supportedBackgroundStories).map(
      ([colorName, BackgroundStory]) => {
        test(`Should render CardFilter on ${colorName} background`, async ({
          mount,
          cardFilterPage,
        }) => {
          await mount(<BackgroundStory />);
          await expect(cardFilterPage.root).toBeVisible();
          await expect(cardFilterPage.heading).toBeVisible();
          await expect(cardFilterPage.icon).toBeVisible();
          await expect(cardFilterPage.detailsButton).toBeVisible();
          await expect(cardFilterPage.description).toBeVisible();
          await expect(cardFilterPage.switch).toBeVisible();
          await expect(cardFilterPage.root).toHaveScreenshot();
        });

        test(`Should render CardFilter with switch toggled on, on ${colorName} background`, async ({
          mount,
          cardFilterPage,
        }) => {
          await mount(<BackgroundStory />);

          await cardFilterPage.switch.click();

          await expect(cardFilterPage.root).toBeVisible();
          await expect(cardFilterPage.heading).toBeVisible();
          await expect(cardFilterPage.icon).toBeVisible();
          await expect(cardFilterPage.detailsButton).toBeVisible();
          await expect(cardFilterPage.description).toBeVisible();
          await expect(cardFilterPage.switch).toBeVisible();
          await expect(cardFilterPage.root).toHaveScreenshot();
        });
      },
    );
  });

  test.describe("Without Icon", () => {
    const supportedBackgroundStories = {
      black: stories.WithoutIcon,
    } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

    Object.entries(supportedBackgroundStories).map(
      ([colorName, BackgroundStory]) => {
        test(`Should render CardFilter on ${colorName} background`, async ({
          mount,
          cardFilterPage,
        }) => {
          await mount(<BackgroundStory />);
          await expect(cardFilterPage.root).toBeVisible();
          await expect(cardFilterPage.heading).toBeVisible();

          await expect(cardFilterPage.icon).not.toBeVisible();

          await expect(cardFilterPage.detailsButton).toBeVisible();
          await expect(cardFilterPage.description).toBeVisible();
          await expect(cardFilterPage.switch).toBeVisible();
          await expect(cardFilterPage.root).toHaveScreenshot();
        });
      },
    );
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, cardFilterPage }) => {
    await mount(<stories.Default />);
    await expect(cardFilterPage.root).toBeVisible();
    await expect(cardFilterPage.heading).toBeVisible();
    await expect(cardFilterPage.icon).toBeVisible();
    await expect(cardFilterPage.detailsButton).toBeVisible();
    await expect(cardFilterPage.description).toBeVisible();
    await expect(cardFilterPage.switch).toBeVisible();
    await expect(cardFilterPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({ mount, cardFilterPage }) => {
    await mount(<stories.Default />);
    await expect(cardFilterPage.root).toBeVisible();
    await expect(cardFilterPage.heading).toBeVisible();
    await expect(cardFilterPage.icon).toBeVisible();
    await expect(cardFilterPage.detailsButton).toBeVisible();
    await expect(cardFilterPage.description).toBeVisible();
    await expect(cardFilterPage.switch).toBeVisible();
    await expect(cardFilterPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, cardFilterPage }) => {
    await cardFilterPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(cardFilterPage.root).toBeVisible();
    await expect(cardFilterPage.heading).toBeVisible();
    await expect(cardFilterPage.icon).toBeVisible();
    await expect(cardFilterPage.detailsButton).toBeVisible();
    await expect(cardFilterPage.description).toBeVisible();
    await expect(cardFilterPage.switch).toBeVisible();
    await expect(cardFilterPage.root).toBeVisible();
    await expect(cardFilterPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, cardFilterPage }) => {
    await cardFilterPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(cardFilterPage.root).toBeVisible();
    await expect(cardFilterPage.heading).toBeVisible();
    await expect(cardFilterPage.icon).toBeVisible();
    await expect(cardFilterPage.detailsButton).toBeVisible();
    await expect(cardFilterPage.description).toBeVisible();
    await expect(cardFilterPage.switch).toBeVisible();
    await expect(cardFilterPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    cardFilterPage,
  }) => {
    await cardFilterPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(cardFilterPage.root).toBeVisible();
    await expect(cardFilterPage.heading).toBeVisible();
    await expect(cardFilterPage.icon).toBeVisible();
    await expect(cardFilterPage.detailsButton).toBeVisible();
    await expect(cardFilterPage.description).toBeVisible();
    await expect(cardFilterPage.switch).toBeVisible();
    await expect(cardFilterPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, cardFilterPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: cardFilterPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
