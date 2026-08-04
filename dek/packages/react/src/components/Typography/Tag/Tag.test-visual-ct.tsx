import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Tag.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import { TagSize } from "./Tag.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  tagPage: {
    page: Page;
    root: Locator;
    text: Locator;
  };
}>({
  tagPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const text = page.getByText("Der neue congstar Prepaid Tarif");
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
      test(`Should render tag on ${colorName} background`, async ({
        mount,
        tagPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(tagPage.text).toBeVisible();
        await expect(tagPage.text).toHaveScreenshot();
      });
    },
  );
});

const tagSizes: Record<TagSize, TagSize> = {
  small: "small",
  medium: "medium",
  large: "large",
};

test.describe("viewport", () => {
  Object.entries(viewports).map(([viewportName, viewport]) =>
    test.describe(`on a ${viewportName} viewport`, () => {
      test.use(viewport);

      Object.entries(tagSizes).map(([sizeName, size]) => {
        test(`Should render label of the size ${sizeName}}`, async ({
          mount,
          tagPage,
        }) => {
          await mount(<stories.Default size={size} />);
          await expect(tagPage.text).toBeVisible();
          await expect(tagPage.text).toHaveScreenshot();
        });
      });
    }),
  );
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, tagPage }) => {
    await tagPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(tagPage.text).toBeVisible();
    await expect(tagPage.text).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, tagPage }) => {
    await tagPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(tagPage.text).toBeVisible();
    await expect(tagPage.text).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    tagPage,
  }) => {
    await tagPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(tagPage.text).toBeVisible();
    await expect(tagPage.text).toHaveScreenshot();
  });

  test("axe report", async ({ mount, tagPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: tagPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
