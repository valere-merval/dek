import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StepperCheckout.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  stepperCheckoutPage: {
    page: Page;
    root: Locator;
    list: Locator;
    stepItem1Label: Locator;
    stepItem2Label: Locator;
  };
}>({
  stepperCheckoutPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const list = page.getByRole("list");
    const stepItem1Label = page.getByLabel(
      "Schritt 1 von 5: abgeschlossen, Bestellübersicht",
    );
    const stepItem2Label = page.getByLabel(
      "Schritt 1 von 5: abgeschlossen, Persönliche Daten",
    );

    await use({
      page,
      root,
      list,
      stepItem1Label,
      stepItem2Label,
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
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
    },
  },
  (BackgroundStory) => {
    test("Should render stepper checkout", async ({
      mount,
      stepperCheckoutPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(stepperCheckoutPage.list).toBeVisible();
      await expect(stepperCheckoutPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    stepperCheckoutPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stepperCheckoutPage.list).toBeVisible();
    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });

  test("Should show clickable items", async ({
    mount,
    stepperCheckoutPage,
  }) => {
    await mount(<stories.WithClickableItems />);
    await expect(stepperCheckoutPage.list).toBeVisible();
    const links = stepperCheckoutPage.page.getByRole("link");
    await expect(links).toHaveCount(2);

    await links.nth(0).focus();
    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    stepperCheckoutPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stepperCheckoutPage.list).toBeVisible();
    await expect(stepperCheckoutPage.stepItem1Label).toBeVisible();

    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });
  test("Should hide labels", async ({ mount, stepperCheckoutPage }) => {
    await mount(<stories.WithHiddenLabels />);
    await expect(stepperCheckoutPage.list).toBeVisible();
    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });

  test("Should show clickable items", async ({
    mount,
    stepperCheckoutPage,
  }) => {
    await mount(<stories.WithClickableItems />);
    await expect(stepperCheckoutPage.list).toBeVisible();
    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    stepperCheckoutPage,
  }) => {
    await stepperCheckoutPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(stepperCheckoutPage.root).toBeVisible();
    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, stepperCheckoutPage }) => {
    await stepperCheckoutPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(stepperCheckoutPage.root).toBeVisible();
    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });

  test.use(viewports.sm);
  test("lineHeight and letterSpacing modification", async ({
    mount,
    stepperCheckoutPage,
  }) => {
    await stepperCheckoutPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(stepperCheckoutPage.root).toBeVisible();
    await expect(stepperCheckoutPage.root).toHaveScreenshot();
  });

  test.describe("large viewport", () => {
    test.use(viewports.lg);
    test("lineHeight and letterSpacing modification", async ({
      mount,
      stepperCheckoutPage,
    }) => {
      await stepperCheckoutPage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(stepperCheckoutPage.root).toBeVisible();
      await expect(stepperCheckoutPage.root).toHaveScreenshot();
    });
  });

  test("axe report", async ({ mount, stepperCheckoutPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: stepperCheckoutPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
