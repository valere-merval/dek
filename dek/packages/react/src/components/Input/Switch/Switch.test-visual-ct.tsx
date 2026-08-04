import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Switch.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  switchPage: {
    page: Page;
    root: Locator;
    switchLocator: Locator;
    switchErrorMessage: Locator;
  };
}>({
  switchPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const switchLocator = page.getByRole("switch", {
      name: "Einmalpreis anzeigen",
    });
    const switchErrorMessage = page.getByText(
      "bitte akzeptiere die Pflicht Option",
    );
    await use({
      page,
      root,
      switchLocator,
      switchErrorMessage,
    });
  },
});

test.describe("Background Color for Switch", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test.describe(`on a ${colorName} background`, () => {
        test("Should render a unchecked switch", async ({
          mount,
          switchPage,
        }) => {
          await mount(<BackgroundStory />);
          await expect(switchPage.switchLocator).toBeVisible();
          await expect(switchPage.root).toHaveScreenshot();
        });
        test("Should render a checked switch", async ({
          mount,
          switchPage,
        }) => {
          await mount(<BackgroundStory />);
          await expect(switchPage.switchLocator).toBeVisible();

          await switchPage.switchLocator.click();
          await expect(switchPage.switchLocator).toBeChecked();
          await expect(switchPage.root).toHaveScreenshot();
        });

        if (colorName !== "blue") {
          test("Should render a disabled switch", async ({
            mount,
            switchPage,
          }) => {
            await mount(<BackgroundStory disabled />);
            await expect(switchPage.switchLocator).toBeVisible();
            await expect(switchPage.switchLocator).toBeDisabled();
            await expect(switchPage.root).toHaveScreenshot();
          });
        }
      });
    },
  );
});

test.describe("Error State", () => {
  const supportedBackgroundStories = {
    black: stories.WithErrorOnBlackBackground,
    white: stories.WithErrorOnWhiteBackground,
    blue: stories.WithErrorOnBlueBackground,
    lightGrey: stories.WithErrorOnLightGreyBackground,
    darkGrey: stories.WithErrorOnDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundErrorStory]) => {
      if (colorName !== "blue") {
        test(`Should render a Switch on ${colorName} background`, async ({
          mount,
          switchPage,
        }) => {
          await mount(<BackgroundErrorStory />);
          await expect(switchPage.switchLocator).toBeVisible();
          await expect(switchPage.switchErrorMessage).toBeVisible();
          await expect(switchPage.root).toHaveScreenshot();
        });

        test(`Should render a checked Switch on ${colorName} background`, async ({
          mount,
          switchPage,
        }) => {
          await mount(<BackgroundErrorStory />);
          await expect(switchPage.switchLocator).toBeVisible();
          await expect(switchPage.switchErrorMessage).toBeVisible();
          await switchPage.switchLocator.click();
          await expect(switchPage.switchLocator).toBeChecked();
          await expect(switchPage.root).toHaveScreenshot();
        });

        test(`Should render a Switch on ${colorName} background in hover state`, async ({
          mount,
          switchPage,
        }) => {
          await mount(<BackgroundErrorStory />);
          await expect(switchPage.switchLocator).toBeVisible();
          await expect(switchPage.switchErrorMessage).toBeVisible();
          await switchPage.switchLocator.hover();
          await expect(switchPage.root).toHaveScreenshot();
        });
      }
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, switchPage }) => {
    await mount(<stories.Default />);
    await expect(switchPage.switchLocator).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, switchPage }) => {
    await switchPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(switchPage.root).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode checked Switch", async ({
    mount,
    switchPage,
  }) => {
    await switchPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(switchPage.switchLocator).toBeVisible();
    await switchPage.switchLocator.click();
    await expect(switchPage.switchLocator).toBeChecked();
    await expect(switchPage.root).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, switchPage }) => {
    await switchPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(switchPage.root).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode checked Switch", async ({
    mount,
    switchPage,
  }) => {
    await switchPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(switchPage.switchLocator).toBeVisible();
    await switchPage.switchLocator.click();
    await expect(switchPage.switchLocator).toBeChecked();
    await expect(switchPage.root).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode disabled switch", async ({
    mount,
    switchPage,
  }) => {
    await switchPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default disabled />);
    await expect(switchPage.switchLocator).toBeVisible();
    await expect(switchPage.switchLocator).toBeDisabled();
    await expect(switchPage.root).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode switch with Error", async ({
    mount,
    switchPage,
  }) => {
    await switchPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithError />);
    await expect(switchPage.switchLocator).toBeVisible();
    await expect(switchPage.switchErrorMessage).toBeVisible();
    await expect(switchPage.root).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    switchPage,
  }) => {
    await switchPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);

    await expect(switchPage.root).toBeVisible();
    await expect(switchPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, switchPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: switchPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
