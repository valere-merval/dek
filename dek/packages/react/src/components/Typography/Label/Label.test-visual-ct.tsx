import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Label.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import { LabelSize } from "./Label.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  labelPage: {
    page: Page;
    root: Locator;
    text: Locator;
  };
}>({
  labelPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const text = page.getByText("Aktion");
    await use({
      page,
      root,
      text,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render label on ${colorName} background`, async ({
        mount,
        labelPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(labelPage.text).toBeVisible();
        await expect(labelPage.text).toHaveScreenshot();
      });
    },
  );
});

const labelSizes: Record<LabelSize, LabelSize> = {
  small: "small",
  medium: "medium",
  large: "large",
  extraLarge: "extraLarge",
};

test.describe("viewport", () => {
  Object.entries(viewports).map(([viewportName, viewport]) =>
    test.describe(`on a ${viewportName} viewport`, () => {
      test.use(viewport);

      Object.entries(labelSizes).map(([sizeName, size]) => {
        test(`Should render label of the size ${sizeName}}`, async ({
          mount,
          labelPage,
        }) => {
          await mount(<stories.Default size={size} />);
          await expect(labelPage.text).toBeVisible();
          await expect(labelPage.text).toHaveScreenshot();
        });
      });
    }),
  );
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, labelPage }) => {
    await labelPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(labelPage.text).toBeVisible();
    await expect(labelPage.text).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, labelPage }) => {
    await labelPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(labelPage.text).toBeVisible();
    await expect(labelPage.text).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    labelPage,
  }) => {
    await labelPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(labelPage.text).toBeVisible();
    await expect(labelPage.text).toHaveScreenshot();
  });

  test("axe report", async ({ mount, labelPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: labelPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
