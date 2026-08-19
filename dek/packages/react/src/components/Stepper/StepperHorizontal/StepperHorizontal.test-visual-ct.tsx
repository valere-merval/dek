import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StepperHorizontal.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import { StepperSize } from "../shared/Stepper.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  stepperHorizontalPage: {
    page: Page;
    root: Locator;
    list: Locator;
    stepItem1: Locator;
    stepItem2: Locator;
    stepItem3: Locator;
    stepItem4: Locator;
    stepContent: Locator;
    stepContentHeadline: Locator;
    stepItemError: Locator;
    stepContentError: Locator;
    stepItemPending: Locator;
    stepItemPendingContent: Locator;
    stepContentHeadlineError: Locator;
  };
}>({
  stepperHorizontalPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const list = page.getByRole("list");

    const stepItem1 = page.getByLabel("Schritt 1 von 4: abgeschlossen");
    const stepItem2 = page.getByLabel("Schritt 2 von 4: abgeschlossen");
    const stepItem3 = page.getByLabel("Schritt 3 von 4: Aktueller Schritt");
    const stepItem4 = page.getByLabel("Schritt 4 von 4: offen");
    const stepContentHeadline = page.getByRole("heading", {
      name: "Auftragsbestätigung",
    });
    const stepContent = page.getByText("Wir haben deinen Wechsel");
    const stepItemError = page.getByLabel("Schritt 3 von 4: Fehler");
    const stepContentError = page.getByText("Bitte melde dich");
    const stepItemPending = page.getByLabel("Schritt 3 von 4: ausstehend");
    const stepItemPendingContent = page.getByText(
      "Leider verzögert sich der Versand deiner Bestellung. Wir bitten dich noch um ein wenig Geduld.",
    );
    const stepContentHeadlineError = page.getByRole("heading", {
      name: "Router-Versand",
    });

    await use({
      page,
      root,
      list,
      stepItem1,
      stepItem2,
      stepItem3,
      stepItem4,
      stepContent,
      stepContentHeadline,
      stepItemError,
      stepContentError,
      stepContentHeadlineError,
      stepItemPending,
      stepItemPendingContent,
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
    test(`Should render stepperHorizontal`, async ({
      mount,
      stepperHorizontalPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(stepperHorizontalPage.list).toBeVisible();
      await expect(stepperHorizontalPage.stepItem1).toBeVisible();
      await expect(stepperHorizontalPage.stepItem2).toBeVisible();
      await expect(stepperHorizontalPage.stepItem3).toBeVisible();
      await expect(stepperHorizontalPage.stepItem4).toBeVisible();
      await expect(stepperHorizontalPage.stepContent).toBeVisible();
      await expect(stepperHorizontalPage.stepContentHeadline).toBeVisible();

      await expect(stepperHorizontalPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    stepperHorizontalPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stepperHorizontalPage.list).toBeVisible();
    await expect(stepperHorizontalPage.stepItem1).toBeVisible();
    await expect(stepperHorizontalPage.stepItem2).toBeVisible();
    await expect(stepperHorizontalPage.stepItem3).toBeVisible();
    await expect(stepperHorizontalPage.stepItem4).toBeVisible();
    await expect(stepperHorizontalPage.stepContent).toBeVisible();
    await expect(stepperHorizontalPage.stepContentHeadline).toBeVisible();

    await expect(stepperHorizontalPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    stepperHorizontalPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stepperHorizontalPage.list).toBeVisible();
    await expect(stepperHorizontalPage.stepItem1).toBeVisible();
    await expect(stepperHorizontalPage.stepItem2).toBeVisible();
    await expect(stepperHorizontalPage.stepItem3).toBeVisible();
    await expect(stepperHorizontalPage.stepItem4).toBeVisible();
    await expect(stepperHorizontalPage.stepContent).toBeVisible();
    await expect(stepperHorizontalPage.stepContentHeadline).toBeVisible();

    await expect(stepperHorizontalPage.root).toHaveScreenshot();
  });
});

const supportedManualSizes: StepperSize[] = ["medium", "large"];
supportedManualSizes.map((size) => {
  test.describe(`StepperHorizontal manual set to ${size}`, () => {
    test.use(viewports.sm);
    test("should render", async ({ mount, stepperHorizontalPage }) => {
      await mount(<stories.Default size={size} />);
      await expect(stepperHorizontalPage.list).toBeVisible();
      await expect(stepperHorizontalPage.stepItem1).toBeVisible();
      await expect(stepperHorizontalPage.stepItem2).toBeVisible();
      await expect(stepperHorizontalPage.stepItem3).toBeVisible();
      await expect(stepperHorizontalPage.stepItem4).toBeVisible();
      await expect(stepperHorizontalPage.stepContent).toBeVisible();
      await expect(stepperHorizontalPage.stepContentHeadline).toBeVisible();

      await expect(stepperHorizontalPage.root).toHaveScreenshot();
    });
  });
});

test("Should render StepperHorizontal with Error", async ({
  mount,
  stepperHorizontalPage,
}) => {
  await mount(<stories.WithError />);
  await expect(stepperHorizontalPage.list).toBeVisible();
  await expect(stepperHorizontalPage.stepItem1).toBeVisible();
  await expect(stepperHorizontalPage.stepItem2).toBeVisible();
  await expect(stepperHorizontalPage.stepItemError).toBeVisible();
  await expect(stepperHorizontalPage.stepItem4).toBeVisible();
  await expect(stepperHorizontalPage.stepContentError).toBeVisible();
  await expect(stepperHorizontalPage.stepContentHeadlineError).toBeVisible();

  await expect(stepperHorizontalPage.root).toHaveScreenshot();
});

test("Should render StepperHorizontal with Pending State", async ({
  mount,
  stepperHorizontalPage,
}) => {
  await mount(<stories.WithPendingState />);
  await expect(stepperHorizontalPage.list).toBeVisible();
  await expect(stepperHorizontalPage.stepItemPending).toBeVisible();
  await expect(stepperHorizontalPage.stepItemPendingContent).toBeVisible();

  await expect(stepperHorizontalPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    stepperHorizontalPage,
  }) => {
    await stepperHorizontalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(stepperHorizontalPage.root).toBeVisible();
    await expect(stepperHorizontalPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    stepperHorizontalPage,
  }) => {
    await stepperHorizontalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(stepperHorizontalPage.root).toBeVisible();
    await expect(stepperHorizontalPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    stepperHorizontalPage,
  }) => {
    await stepperHorizontalPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(stepperHorizontalPage.root).toBeVisible();
    await expect(stepperHorizontalPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, stepperHorizontalPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: stepperHorizontalPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules("aria-prohibited-attr")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
