import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./BoxDevicePlan.stories.portable";
import { BackgroundColor } from "../../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../../playwright/fixtures";

const test = base.extend<{
  boxDevicePlanPage: {
    page: Page;
    root: Locator;
    img: Locator;
    pib: Locator;
    title: Locator;
    price: Locator;
    button: Locator;
  };
}>({
  boxDevicePlanPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const img = page.getByRole("img", { name: "Fairphone 4" });
    const pib = page.getByRole("link", { name: "Produktinformationsblatt" });
    const price = page.getByText("ab20€ mtl. statt 40,00 €");
    const title = page.getByRole("heading", { name: "Fairphone 4" });
    const button = page.getByRole("button", { name: "Zum Gerät" });
    await use({
      page,
      root,
      img,
      pib,
      price,
      title,
      button,
    });
  },
});

test.describe("Background Color for light grey box", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render boxDevice on ${colorName} background`, async ({
        mount,
        boxDevicePlanPage,
      }) => {
        await mount(<BackgroundStory backgroundColor="lightGrey" />);
        await expect(boxDevicePlanPage.root).toBeVisible();
        await expect(boxDevicePlanPage.img).toBeVisible();
        await expect(boxDevicePlanPage.pib).toBeVisible();
        await expect(boxDevicePlanPage.title).toBeVisible();
        await expect(boxDevicePlanPage.price).toBeVisible();
        await expect(boxDevicePlanPage.button).toBeVisible();
        await expect(boxDevicePlanPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Background Color for dark grey box", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render boxDevice on ${colorName} background`, async ({
        mount,
        boxDevicePlanPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(boxDevicePlanPage.root).toBeVisible();
        await expect(boxDevicePlanPage.img).toBeVisible();
        await expect(boxDevicePlanPage.pib).toBeVisible();
        await expect(boxDevicePlanPage.title).toBeVisible();
        await expect(boxDevicePlanPage.price).toBeVisible();
        await expect(boxDevicePlanPage.button).toBeVisible();
        await expect(boxDevicePlanPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render a slim BoxDevice", async ({
    mount,
    boxDevicePlanPage,
  }) => {
    await mount(<stories.Default />);
    await expect(boxDevicePlanPage.root).toBeVisible();
    await expect(boxDevicePlanPage.button).toBeVisible();
    await expect(boxDevicePlanPage.img).toBeVisible();
    await expect(boxDevicePlanPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render a wide BoxDevice", async ({
    mount,
    boxDevicePlanPage,
  }) => {
    await mount(<stories.Default />);
    await expect(boxDevicePlanPage.button).toBeVisible();
    await expect(boxDevicePlanPage.img).toBeVisible();
    await expect(boxDevicePlanPage.root).toBeVisible();
    await expect(boxDevicePlanPage.root).toHaveScreenshot();
  });

  test("Should render with headlineLevel h4", async ({
    mount,
    boxDevicePlanPage,
  }) => {
    await mount(<stories.WithDifferentHeadlineLevel />);
    await expect(boxDevicePlanPage.root).toBeVisible();
    await expect(boxDevicePlanPage.root).toHaveScreenshot();
  });
});

test.describe("Special Cases", () => {
  test("should not render strikeThrough prices if they are equal to the price", async ({
    mount,
    boxDevicePlanPage,
  }) => {
    await mount(<stories.WithEqualStrikeThroughAndPrice />);
    await expect(boxDevicePlanPage.page.getByText("statt")).not.toBeVisible();
  });
});
