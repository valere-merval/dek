import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./IconTile.stories.portable";
import { BackgroundColor } from "../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";
import {
  IconTileColor,
  IconTileMediaSize,
  IconTileSize,
  IconTileVariant,
} from "./IconTile.types";

const test = base.extend<{
  iconTilePage: {
    page: Page;
    root: Locator;
    tile: Locator;
  };
}>({
  iconTilePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const tile = root.locator("svg");
    await use({
      page,
      root,
      tile,
    });
  },
});

const variants: IconTileVariant[] = ["filled", "outlined"];

const colorParams: IconTileColor[] = [
  "yellow",
  "orange",
  "green",
  "red",
  "lime",
  "purple",
  "black",
  "white",
];
const iconTileSizes: Record<IconTileSize, IconTileMediaSize> = {
  extraSmall: {
    minAvailableSpace: "extraSmall",
    maxAvailableSpace: "extraSmall",
  },
  small: { minAvailableSpace: "small", maxAvailableSpace: "small" },
  medium: { minAvailableSpace: "medium", maxAvailableSpace: "medium" },
  large: { minAvailableSpace: "large", maxAvailableSpace: "large" },
  extraLarge: {
    minAvailableSpace: "extraLarge",
    maxAvailableSpace: "extraLarge",
  },
};

test.describe("Alterations", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;
  Object.entries(supportedBackgroundStories).map(
    ([backgroundColorName, BackgroundStory]) => {
      variants.map((variant) => {
        test.describe(`Should render IconTile with variant ${variant} on ${backgroundColorName} background`, () => {
          colorParams.map((color) => {
            if (backgroundColorName !== color) {
              test(`with color ${color}`, async ({ mount, iconTilePage }) => {
                await mount(
                  <BackgroundStory color={color} variant={variant} />,
                );
                await expect(iconTilePage.tile).toBeVisible();
                await expect(iconTilePage.root).toHaveScreenshot();
              });
            }
          });
        });
      });
    },
  );
});

test.describe("Sizes", () => {
  variants.map((variant) => {
    test.describe(`Should render IconTile with variant ${variant}`, () => {
      Object.entries(iconTileSizes).map(([sizeName, size]) => {
        test(`with size ${sizeName}`, async ({ mount, iconTilePage }) => {
          await mount(<stories.Default size={size} variant={variant} />);
          await expect(iconTilePage.tile).toBeVisible();
          await expect(iconTilePage.root).toHaveScreenshot();
        });
      });
    });
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, iconTilePage }) => {
    await mount(<stories.Default />);
    await expect(iconTilePage.tile).toBeVisible();
    await expect(iconTilePage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({ mount, iconTilePage }) => {
    await mount(<stories.Default />);
    await expect(iconTilePage.tile).toBeVisible();
    await expect(iconTilePage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, iconTilePage }) => {
    await iconTilePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(iconTilePage.tile).toBeVisible();
    await expect(iconTilePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, iconTilePage }) => {
    await iconTilePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(iconTilePage.tile).toBeVisible();
    await expect(iconTilePage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    iconTilePage,
  }) => {
    await iconTilePage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(iconTilePage.tile).toBeVisible();
    await expect(iconTilePage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, iconTilePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: iconTilePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
