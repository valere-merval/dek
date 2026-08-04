import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ButtonPayment.stories.portable";

import AxeBuilder from "@axe-core/playwright";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";

const test = base.extend<{
  buttonPaymentPage: {
    page: Page;
    root: Locator;
    button: Locator;
  };
}>({
  buttonPaymentPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = page.getByRole("button");
    await use({
      page,
      root,
      button,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render ButtonPayment`, async ({
      mount,
      buttonPaymentPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });

    test("Should render ButtonPayment in focus state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.focus();
      await expect(buttonPaymentPage.root).toHaveScreenshot();
    });

    test("Should render ButtonPayment in hover state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.hover();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });

    test("Should render ButtonPayment in disabled state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await mount(<BackgroundStory disabled />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.hover();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    buttonPaymentPage,
  }) => {
    await mount(<stories.FullWidth />);
    await expect(buttonPaymentPage.button).toBeVisible();
    await expect(buttonPaymentPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    buttonPaymentPage,
  }) => {
    await mount(<stories.FullWidth />);
    await expect(buttonPaymentPage.button).toBeVisible();
    await expect(buttonPaymentPage.root).toHaveScreenshot();
  });
});

test.describe("dynamic full width", () => {
  const fullWidth = { mobile: true, desktop: false };

  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("Should render button with dynamic full width on mobile", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await mount(<stories.Default fullWidth={fullWidth} />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });
  });

  test.describe("large viewport", () => {
    test.use(viewports.lg);
    test("Should render button with dynamic full width on desktop", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await mount(<stories.Default fullWidth={fullWidth} />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test.describe("highContrast and light mode", () => {
    test(`ButtonPayment default`, async ({ mount, buttonPaymentPage }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });

    test("ButtonPayment in focus state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.focus();
      await expect(buttonPaymentPage.root).toHaveScreenshot();
    });

    test("ButtonPayment in hover state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.hover();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });

    test("ButtonPayment in disabled state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default disabled />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.hover();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });
  });

  test.describe("highContrast and dark mode", () => {
    test(`ButtonPayment default`, async ({ mount, buttonPaymentPage }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });

    test("ButtonPayment in focus state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.focus();
      await expect(buttonPaymentPage.root).toHaveScreenshot();
    });

    test("ButtonPayment in hover state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.hover();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });

    test("ButtonPayment in disabled state", async ({
      mount,
      buttonPaymentPage,
    }) => {
      await buttonPaymentPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default disabled />);
      await expect(buttonPaymentPage.button).toBeVisible();
      await buttonPaymentPage.button.hover();
      await expect(buttonPaymentPage.button).toHaveScreenshot();
    });
  });

  test("axe report", async ({ mount, buttonPaymentPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: buttonPaymentPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
