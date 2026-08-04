import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ContingentRange.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  contingentRangePage: {
    page: Page;
    root: Locator;
    contingentRange: Locator;
  };
}>({
  contingentRangePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const contingentRange = page.getByText("5 - 20 Gigabyte");
    await use({
      page,
      root,
      contingentRange,
    });
  },
});
test.describe("Background Color ContingentRange", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render large ContingentRange on ${colorName} background`, async ({
        mount,
        contingentRangePage,
      }) => {
        await mount(
          <BackgroundStory
            unit="MB"
            size={{ mobile: "large", desktop: "large" }}
          />,
        );
        await expect(
          contingentRangePage.page.getByText("5 - 20 Megabyte"),
        ).toBeVisible();
        await expect(contingentRangePage.root).toHaveScreenshot();
      });
    },
  );
});

const responsiveViewports = [
  {
    viewport: viewports.sm,
    name: "small",
    variant: "small",
  },
  {
    viewport: viewports.md,
    name: "medium",
    variant: "medium",
  },
];

test.describe(`responsive behavior`, () => {
  responsiveViewports.map((viewport) => {
    test.describe(`${viewport.variant} variant on  ${viewport.name} viewport`, () => {
      test.use(viewport.viewport);

      test("with Megabyte", async ({ mount, contingentRangePage }) => {
        await mount(<stories.Default unit="MB" />);
        await expect(
          contingentRangePage.page.getByText("5 - 20 Megabyte"),
        ).toBeVisible();
        await expect(contingentRangePage.root).toHaveScreenshot();
      });

      test("with AmountRange", async ({ mount, contingentRangePage }) => {
        await mount(<stories.Bandwidth />);
        await expect(
          contingentRangePage.page.getByText("5 - 20 Megabit pro Sekunde"),
        ).toBeVisible();
        await expect(
          contingentRangePage.page.getByText("Download"),
        ).toBeVisible();
        await expect(contingentRangePage.root).toHaveScreenshot();
      });
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    contingentRangePage,
  }) => {
    await contingentRangePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(contingentRangePage.contingentRange).toBeVisible();
    await expect(contingentRangePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, contingentRangePage }) => {
    await contingentRangePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(contingentRangePage.contingentRange).toBeVisible();
    await expect(contingentRangePage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    contingentRangePage,
  }) => {
    await contingentRangePage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(contingentRangePage.contingentRange).toBeVisible();
    await expect(contingentRangePage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, contingentRangePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: contingentRangePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
