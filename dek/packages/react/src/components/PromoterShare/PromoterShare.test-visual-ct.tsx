import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./PromoterShare.stories.portable";
import { FunctionComponent } from "react";
import AxeBuilder from "@axe-core/playwright";
import { BackgroundColor } from "../../theme/theme";
import { viewports } from "../../../playwright/fixtures";

const test = base.extend<{
  promoterSharePage: {
    page: Page;
    root: Locator;
    graphic: Locator;
    title: Locator;
    description: Locator;
    button: Locator;
  };
}>({
  promoterSharePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const graphic = root.locator("img");
    const title = root.getByText("93 % Weiterempfehlung");
    const description = root.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    );
    const button = page.getByRole("button");
    await use({
      page,
      root,
      graphic,
      title,
      description,
      button,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render promoterShare on ${colorName} background`, async ({
        mount,
        promoterSharePage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(promoterSharePage.root).toBeVisible();

        await expect(promoterSharePage.graphic).toBeVisible();
        await expect(promoterSharePage.title).toBeVisible();
        await expect(promoterSharePage.description).toBeVisible();
        await expect(promoterSharePage.button).toBeVisible();

        await expect(promoterSharePage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    promoterSharePage,
  }) => {
    await mount(<stories.Default />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).toBeVisible();
    await expect(promoterSharePage.button).toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });

  test("Should render in small viewport without button", async ({
    mount,
    promoterSharePage,
  }) => {
    await mount(<stories.WithoutButton />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).toBeVisible();
    await expect(promoterSharePage.button).not.toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });

  test("Should render in small viewport without description", async ({
    mount,
    promoterSharePage,
  }) => {
    await mount(<stories.WithoutDescription />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).not.toBeVisible();
    await expect(promoterSharePage.button).toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    promoterSharePage,
  }) => {
    await mount(<stories.Default />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).toBeVisible();
    await expect(promoterSharePage.button).toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });

  test("Should render in large viewport without button", async ({
    mount,
    promoterSharePage,
  }) => {
    await mount(<stories.WithoutButton />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).toBeVisible();
    await expect(promoterSharePage.button).not.toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });

  test("Should render in large viewport without description", async ({
    mount,
    promoterSharePage,
  }) => {
    await mount(<stories.WithoutDescription />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).not.toBeVisible();
    await expect(promoterSharePage.button).toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, promoterSharePage }) => {
    await promoterSharePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).toBeVisible();
    await expect(promoterSharePage.button).toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, promoterSharePage }) => {
    await promoterSharePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).toBeVisible();
    await expect(promoterSharePage.button).toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    promoterSharePage,
  }) => {
    await promoterSharePage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(promoterSharePage.root).toBeVisible();

    await expect(promoterSharePage.graphic).toBeVisible();
    await expect(promoterSharePage.title).toBeVisible();
    await expect(promoterSharePage.description).toBeVisible();
    await expect(promoterSharePage.button).toBeVisible();

    await expect(promoterSharePage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, promoterSharePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: promoterSharePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
