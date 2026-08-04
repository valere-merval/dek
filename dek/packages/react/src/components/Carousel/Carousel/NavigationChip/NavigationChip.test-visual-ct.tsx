import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./NavigationChip.stories.portable";
import { BackgroundColor } from "../../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  navigationChipPage: {
    page: Page;
    root: Locator;
    navigationChip: Locator;
  };
}>({
  navigationChipPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const navigationChip = page.getByRole("button", { name: "50 MB/s 15 €" });
    await use({
      page,
      root,
      navigationChip,
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
      test(`Should render navigationChip on ${colorName} background`, async ({
        mount,
        navigationChipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(navigationChipPage.navigationChip).toBeVisible();
        await expect(navigationChipPage.navigationChip).toHaveScreenshot();
      });

      test(`Should render navigationChip on ${colorName} background in hover state`, async ({
        mount,
        navigationChipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(navigationChipPage.navigationChip).toBeVisible();
        await navigationChipPage.navigationChip.hover();
        await expect(navigationChipPage.navigationChip).toHaveScreenshot();
      });

      test(`Should render navigationChip on ${colorName} background in checked state`, async ({
        mount,
        navigationChipPage,
      }) => {
        await mount(<BackgroundStory checked />);
        await expect(navigationChipPage.navigationChip).toBeVisible();
        await expect(navigationChipPage.navigationChip).toHaveScreenshot();
      });

      test(`Should render navigationChip on ${colorName} background in checked hover state`, async ({
        mount,
        navigationChipPage,
      }) => {
        await mount(<BackgroundStory checked />);
        await expect(navigationChipPage.navigationChip).toBeVisible();
        await navigationChipPage.navigationChip.hover();
        await expect(navigationChipPage.navigationChip).toHaveScreenshot();
      });

      test(`Should render navigationChip on ${colorName} background in focus state`, async ({
        mount,
        navigationChipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(navigationChipPage.navigationChip).toBeVisible();
        await navigationChipPage.navigationChip.focus();
        await expect(navigationChipPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, navigationChipPage }) => {
    await navigationChipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(navigationChipPage.navigationChip).toBeVisible();
    await expect(navigationChipPage.root).toHaveScreenshot();
  });
  test("highContrast and dark mode", async ({ mount, navigationChipPage }) => {
    await navigationChipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(navigationChipPage.navigationChip).toBeVisible();
    await expect(navigationChipPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and checked state", async ({
    mount,
    navigationChipPage,
  }) => {
    await navigationChipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default checked />);
    await expect(navigationChipPage.navigationChip).toBeVisible();
    await expect(navigationChipPage.root).toHaveScreenshot();
  });
  test("highContrast and dark mode and checked state", async ({
    mount,
    navigationChipPage,
  }) => {
    await navigationChipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default checked />);
    await expect(navigationChipPage.navigationChip).toBeVisible();
    await expect(navigationChipPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    navigationChipPage,
  }) => {
    await navigationChipPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(navigationChipPage.navigationChip).toBeVisible();
    await expect(navigationChipPage.navigationChip).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test("axe report", async ({ mount, navigationChipPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: navigationChipPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
