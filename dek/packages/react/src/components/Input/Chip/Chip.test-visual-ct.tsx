import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Chip.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  chipPage: {
    page: Page;
    root: Locator;
    chip: Locator;
  };
}>({
  chipPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const chip = page.getByRole("button", { name: "Für Zuhause" });
    await use({
      page,
      root,
      chip,
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
      test(`Should render chip on ${colorName} background`, async ({
        mount,
        chipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(chipPage.chip).toBeVisible();
        await expect(chipPage.chip).toHaveScreenshot();
      });

      test(`Should render chip on ${colorName} background in hover state`, async ({
        mount,
        chipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(chipPage.chip).toBeVisible();
        await chipPage.chip.hover();
        await expect(chipPage.chip).toHaveScreenshot();
      });

      test(`Should render chip on ${colorName} background in focused state`, async ({
        mount,
        chipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(chipPage.chip).toBeVisible();
        await chipPage.chip.focus();
        await expect(chipPage.root).toHaveScreenshot();
      });

      test(`Should render chip on ${colorName} background in selected state`, async ({
        mount,
        chipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(chipPage.chip).toBeVisible();
        await chipPage.chip.click();
        await chipPage.root.click(); // stop hovering chip after click
        await expect(chipPage.root).toHaveScreenshot(); //screenshot turns out weird when it's taken from the button itself
      });

      test(`Should render chip on ${colorName} background in selected hover state`, async ({
        mount,
        chipPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(chipPage.chip).toBeVisible();
        await chipPage.chip.click();
        await chipPage.chip.hover();
        await expect(chipPage.root).toHaveScreenshot(); //screenshot turns out weird when it's taken from the button itself
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, chipPage }) => {
    await mount(<stories.Default />);
    await expect(chipPage.chip).toBeVisible();
    await expect(chipPage.chip).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test("lineHeight and letterSpacing modification", async ({
    mount,
    chipPage,
  }) => {
    await chipPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await expect(chipPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification and selected", async ({
    mount,
    chipPage,
  }) => {
    await chipPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await chipPage.chip.click();
    await chipPage.root.click();
    await expect(chipPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, chipPage }) => {
    await chipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await expect(chipPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and selected", async ({
    mount,
    chipPage,
  }) => {
    await chipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await chipPage.chip.click();
    await chipPage.root.click();
    await expect(chipPage.root).toHaveScreenshot();
  });
  test("highContrast and dark mode and focused", async ({
    mount,
    chipPage,
  }) => {
    await chipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await chipPage.chip.focus();
    await expect(chipPage.root).toHaveScreenshot();
  });

  test("lightMode and dark mode", async ({ mount, chipPage }) => {
    await chipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await expect(chipPage.root).toHaveScreenshot();
  });

  test("lightMode and dark mode and selected", async ({ mount, chipPage }) => {
    await chipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await chipPage.chip.click();
    await chipPage.root.click();
    await expect(chipPage.root).toHaveScreenshot();
  });

  test("lightMode and dark mode and focused", async ({ mount, chipPage }) => {
    await chipPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(chipPage.root).toBeVisible();
    await chipPage.chip.focus();
    await expect(chipPage.root).toHaveScreenshot();
  });
  test("axe report", async ({ mount, chipPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: chipPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
