import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Contingent.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  contingentPage: {
    page: Page;
    root: Locator;
    contingent: Locator;
    contingentStrikeThrough: Locator;
  };
}>({
  contingentPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const contingent = page.getByText("16 Gigabyte");
    const contingentStrikeThrough = page.getByText("15");
    await use({
      page,
      root,
      contingent,
      contingentStrikeThrough,
    });
  },
});

test.describe("Background Color Contingent", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render large Contingent on ${colorName} background`, async ({
        mount,
        contingentPage,
      }) => {
        await mount(
          <BackgroundStory size={{ mobile: "large", desktop: "large" }} />,
        );
        await expect(contingentPage.contingent).toBeVisible();
        await expect(contingentPage.root).toHaveScreenshot();
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

      test("Should render Contingent", async ({ mount, contingentPage }) => {
        await mount(<stories.Default />);
        await expect(contingentPage.contingent).toBeVisible();
        await expect(contingentPage.root).toHaveScreenshot();
      });

      test("Should render Contingent with Bandwidth", async ({
        mount,
        contingentPage,
      }) => {
        await mount(<stories.Bandwidth />);
        await expect(
          contingentPage.page.getByText("16 Megabit pro Sekunde"),
        ).toBeVisible();
        await expect(contingentPage.root).toHaveScreenshot();
      });

      test("Should render Contingent with prefix and strikethrough volume", async ({
        mount,
        contingentPage,
      }) => {
        await mount(<stories.WithStrikeThroughAmount />);
        await expect(contingentPage.contingentStrikeThrough).toBeVisible();
        await expect(contingentPage.root).toHaveScreenshot();
      });
      test("should not display strikethrough if its bigger actual amount", async ({
        mount,
        contingentPage,
      }) => {
        await mount(
          <stories.Default amount={16} unit="GB" strikeThroughAmount={25} />,
        );
        await expect(contingentPage.contingentStrikeThrough).not.toBeVisible();
        await expect(contingentPage.root).toHaveScreenshot();
      });
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, contingentPage }) => {
    await contingentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(contingentPage.root).toBeVisible();
    await expect(contingentPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, contingentPage }) => {
    await contingentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(contingentPage.contingent).toBeVisible();
    await expect(contingentPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    contingentPage,
  }) => {
    await contingentPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(contingentPage.contingent).toBeVisible();
    await expect(contingentPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, contingentPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: contingentPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
