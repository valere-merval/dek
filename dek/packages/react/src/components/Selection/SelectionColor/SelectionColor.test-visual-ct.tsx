import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./SelectionColor.stories.portable";
import { viewports } from "../../../../playwright/fixtures";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  selectionColorPage: {
    page: Page;
    root: Locator;
    selectionColorItem1: Locator;
    selectionColorItem2: Locator;
    selectionColorItem3: Locator;
    selectionColorItem4: Locator;
    selectionColorItem5: Locator;
    selectionColorSelectedValue: Locator;
    selectionColorInitialValue: Locator;
  };
}>({
  selectionColorPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const selectionColorInitialValue = page.getByText("Farbe: Rot");
    const selectionColorSelectedValue = page.getByText("Farbe: Hellgrün");
    const selectionColorItem1 = page.locator('[aria-label="Rot"]');
    const selectionColorItem2 = page.locator('[aria-label="Hellgrün"]');
    const selectionColorItem3 = page.locator('[aria-label="Pink"]');
    const selectionColorItem4 = page.locator('[aria-label="Dunkelblau"]');
    const selectionColorItem5 = page.locator('[aria-label="Schwarz"]');
    await use({
      page,
      root,
      selectionColorItem1,
      selectionColorItem2,
      selectionColorItem3,
      selectionColorItem4,
      selectionColorItem5,
      selectionColorSelectedValue,
      selectionColorInitialValue,
    });
  },
});

test.describe("SelectionColor", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render on ${colorName} background`, async ({
        mount,
        selectionColorPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          selectionColorPage.selectionColorInitialValue,
        ).toBeVisible();
        await expect(selectionColorPage.selectionColorItem1).toBeVisible();
        await expect(selectionColorPage.selectionColorItem2).toBeVisible();
        await expect(selectionColorPage.selectionColorItem3).toBeVisible();
        await expect(selectionColorPage.selectionColorItem4).toBeVisible();
        await expect(selectionColorPage.root).toHaveScreenshot();
      });

      test(`Focus selected Item 1 render on ${colorName} background`, async ({
        mount,
        selectionColorPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          selectionColorPage.selectionColorInitialValue,
        ).toBeVisible();
        await expect(selectionColorPage.selectionColorItem1).toBeVisible();
        await selectionColorPage.selectionColorItem1.focus();
        await expect(selectionColorPage.selectionColorItem2).toBeVisible();
        await expect(selectionColorPage.selectionColorItem3).toBeVisible();
        await expect(selectionColorPage.selectionColorItem4).toBeVisible();
        await expect(selectionColorPage.root).toHaveScreenshot();
      });

      test(`Select Item 2 on ${colorName} background`, async ({
        mount,
        selectionColorPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          selectionColorPage.selectionColorInitialValue,
        ).toBeVisible();
        await expect(selectionColorPage.selectionColorItem1).toBeVisible();
        await expect(selectionColorPage.selectionColorItem3).toBeVisible();
        await expect(selectionColorPage.selectionColorItem4).toBeVisible();
        await expect(selectionColorPage.selectionColorItem5).toBeVisible();
        await selectionColorPage.selectionColorItem2.click();
        await expect(
          selectionColorPage.selectionColorSelectedValue,
        ).toBeVisible();
        await expect(selectionColorPage.root).toHaveScreenshot();
      });
      test(`Focus unselected Item 2 on ${colorName} background`, async ({
        mount,
        selectionColorPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          selectionColorPage.selectionColorInitialValue,
        ).toBeVisible();
        await expect(selectionColorPage.selectionColorItem1).toBeVisible();
        await expect(selectionColorPage.selectionColorItem3).toBeVisible();
        await expect(selectionColorPage.selectionColorItem4).toBeVisible();
        await expect(selectionColorPage.selectionColorItem5).toBeVisible();
        await selectionColorPage.selectionColorItem2.focus();

        await expect(selectionColorPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("SelectionColor default ", async ({ mount, selectionColorPage }) => {
    await mount(<stories.Default />);
    await expect(selectionColorPage.selectionColorInitialValue).toBeVisible();
    await expect(selectionColorPage.selectionColorItem1).toBeVisible();
    await expect(selectionColorPage.selectionColorItem2).toBeVisible();
    await expect(selectionColorPage.selectionColorItem3).toBeVisible();
    await expect(selectionColorPage.selectionColorItem4).toBeVisible();
    await expect(selectionColorPage.selectionColorItem5).toBeVisible();
    await expect(selectionColorPage.root).toHaveScreenshot();
  });
});
test.describe("Variations", () => {
  test("Should render SelectionColor with a light color value", async ({
    mount,
    selectionColorPage,
  }) => {
    await mount(<stories.Default value="Hellgrün" />);
    await expect(selectionColorPage.selectionColorSelectedValue).toBeVisible();
    await expect(selectionColorPage.selectionColorItem1).toBeVisible();
    await expect(selectionColorPage.selectionColorItem2).toBeVisible();
    await expect(selectionColorPage.selectionColorItem3).toBeVisible();
    await expect(selectionColorPage.selectionColorItem4).toBeVisible();
    await expect(selectionColorPage.selectionColorItem5).toBeVisible();
    await expect(selectionColorPage.root).toHaveScreenshot();
  });

  test("Should render SelectionColor with a dark color value and a white Check Icon", async ({
    mount,
    selectionColorPage,
  }) => {
    await mount(<stories.Default value="Hellgrün" />);
    await expect(selectionColorPage.selectionColorSelectedValue).toBeVisible();
    await expect(selectionColorPage.selectionColorItem2).toBeVisible();
    await expect(selectionColorPage.selectionColorItem3).toBeVisible();
    await expect(selectionColorPage.selectionColorItem4).toBeVisible();
    await selectionColorPage.selectionColorItem5.click();
    await expect(selectionColorPage.selectionColorItem5).toBeVisible();
    await expect(selectionColorPage.root).toHaveScreenshot();
  });
});

test("that deselecting an already selected item is not possible", async ({
  mount,
  selectionColorPage,
}) => {
  await mount(<stories.Default />);
  await expect(selectionColorPage.selectionColorInitialValue).toBeVisible();
  await selectionColorPage.selectionColorItem1.click();
  await expect(selectionColorPage.selectionColorItem1).toBeVisible();
  await expect(selectionColorPage.selectionColorItem2).toBeVisible();
  await expect(selectionColorPage.selectionColorItem3).toBeVisible();
  await expect(selectionColorPage.selectionColorItem4).toBeVisible();
  await expect(selectionColorPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, selectionColorPage }) => {
    await selectionColorPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(selectionColorPage.selectionColorInitialValue).toBeVisible();
    await expect(selectionColorPage.selectionColorItem1).toBeVisible();
    await expect(selectionColorPage.selectionColorItem2).toBeVisible();
    await expect(selectionColorPage.selectionColorItem3).toBeVisible();
    await expect(selectionColorPage.selectionColorItem4).toBeVisible();
    await expect(selectionColorPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, selectionColorPage }) => {
    await selectionColorPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(selectionColorPage.selectionColorInitialValue).toBeVisible();
    await expect(selectionColorPage.selectionColorItem1).toBeVisible();
    await expect(selectionColorPage.selectionColorItem2).toBeVisible();
    await expect(selectionColorPage.selectionColorItem3).toBeVisible();
    await expect(selectionColorPage.selectionColorItem4).toBeVisible();
    await expect(selectionColorPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    selectionColorPage,
  }) => {
    await selectionColorPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(selectionColorPage.selectionColorInitialValue).toBeVisible();
    await expect(selectionColorPage.selectionColorItem1).toBeVisible();
    await expect(selectionColorPage.selectionColorItem2).toBeVisible();
    await expect(selectionColorPage.selectionColorItem3).toBeVisible();
    await expect(selectionColorPage.selectionColorItem4).toBeVisible();
    await expect(selectionColorPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, selectionColorPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: selectionColorPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
