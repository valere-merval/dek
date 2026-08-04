import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./BoxDevice.stories.portable";
import { BackgroundColor } from "../../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  boxDevicePage: {
    page: Page;
    root: Locator;
    button: Locator;
    img: Locator;
  };
}>({
  boxDevicePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = root.getByRole("button", { name: "Zum Gerät" });
    const img = page.locator('img[alt=""]');
    await use({
      page,
      root,
      button,
      img,
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
        boxDevicePage,
      }) => {
        await mount(<BackgroundStory backgroundColor="lightGrey" />);
        await expect(boxDevicePage.root).toBeVisible();
        await expect(boxDevicePage.root).toHaveScreenshot();
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
        boxDevicePage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(boxDevicePage.root).toBeVisible();
        await expect(boxDevicePage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render a slim BoxDevice", async ({ mount, boxDevicePage }) => {
    await mount(<stories.Default />);
    await expect(boxDevicePage.button).toBeVisible();
    await expect(boxDevicePage.img).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });

  test(`Should render multiple boxDevices`, async ({
    mount,
    boxDevicePage,
  }) => {
    await mount(<stories.Grid />);
    await expect(boxDevicePage.root).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render a wide BoxDevice", async ({ mount, boxDevicePage }) => {
    await mount(<stories.Default />);
    await expect(boxDevicePage.button).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });
  test(`Should render multiple boxDevices`, async ({
    mount,
    boxDevicePage,
  }) => {
    await mount(<stories.Grid />);
    await expect(boxDevicePage.root).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });
  test(`Should render multiple boxDevices with headlineLevel h4`, async ({
    mount,
    boxDevicePage,
  }) => {
    await mount(<stories.WithDifferentHeadlineLevel />);
    await expect(boxDevicePage.root).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });
});

test.describe("Special Cases", () => {
  test("should render with forward Trade in", async ({
    mount,
    boxDevicePage,
  }) => {
    await mount(<stories.WithBringback />);
    await expect(boxDevicePage.root).toHaveScreenshot();
  });

  test("should render with long bringback info text", async ({
    mount,
    boxDevicePage,
  }) => {
    await mount(<stories.WithLongBringbackInfoText />);
    await expect(boxDevicePage.root).toHaveScreenshot();
  });

  test("should render with pib", async ({ mount, boxDevicePage }) => {
    await mount(<stories.WithPib />);
    await expect(boxDevicePage.root).toHaveScreenshot();
  });

  test("should render terabyte price with number input", async ({
    mount,
    boxDevicePage,
  }) => {
    await mount(<stories.Default memorySizes={[256, 512, 1]} />);
    await expect(
      boxDevicePage.page.getByText("256 GB | 512 GB | 1 TB"),
    ).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, boxDevicePage }) => {
    await boxDevicePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(boxDevicePage.root).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, boxDevicePage }) => {
    await boxDevicePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(boxDevicePage.root).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    boxDevicePage,
  }) => {
    await boxDevicePage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(boxDevicePage.root).toBeVisible();
    await expect(boxDevicePage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, boxDevicePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: boxDevicePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
