import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./AvailabilityCheckStart.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { viewports } from "../../../../playwright/fixtures";
import { FunctionComponent } from "react";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  availabilityCheckStartPage: {
    page: Page;
    root: Locator;
    text: Locator;
    button: Locator;
  };
}>({
  availabilityCheckStartPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const text = page.getByText("Ist der Tarif bei dir verfügbar?");
    const button = page.getByRole("button", {
      name: "Ist der Tarif bei dir verfügbar?",
    });
    await use({
      page,
      root,
      text,
      button,
    });
  },
});

test.describe("Background Color in small", () => {
  test.use(viewports.sm);

  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render availabilityCheckStart on ${colorName} background`, async ({
        mount,
        availabilityCheckStartPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(availabilityCheckStartPage.text).toBeVisible();
        await expect(availabilityCheckStartPage.button).toBeVisible();
        await expect(availabilityCheckStartPage.root).toHaveScreenshot();
      });

      test(`Should render darkgrey availabilityCheckStart on ${colorName} background`, async ({
        mount,
        availabilityCheckStartPage,
      }) => {
        await mount(<BackgroundStory backgroundColor="darkGrey" />);
        await expect(availabilityCheckStartPage.text).toBeVisible();
        await expect(availabilityCheckStartPage.button).toBeVisible();
        await expect(availabilityCheckStartPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    availabilityCheckStartPage,
  }) => {
    await mount(<stories.Default />);
    await expect(availabilityCheckStartPage.text).toBeVisible();
    await expect(availabilityCheckStartPage.button).toBeVisible();
    await expect(availabilityCheckStartPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.lg);

  test("highContrast and light mode", async ({
    mount,
    availabilityCheckStartPage,
  }) => {
    await availabilityCheckStartPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(availabilityCheckStartPage.root).toBeVisible();
    await expect(availabilityCheckStartPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    availabilityCheckStartPage,
  }) => {
    await availabilityCheckStartPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(availabilityCheckStartPage.root).toBeVisible();
    await expect(availabilityCheckStartPage.root).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    availabilityCheckStartPage,
  }) => {
    await availabilityCheckStartPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(availabilityCheckStartPage.root).toBeVisible();
    await expect(availabilityCheckStartPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, availabilityCheckStartPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: availabilityCheckStartPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
