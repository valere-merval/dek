import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StepperVertical.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import { StepperSize } from "../shared/Stepper.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  stepperVerticalPage: {
    page: Page;
    root: Locator;
    list: Locator;
    stepItem1: Locator;
    stepItem1Content: Locator;
    stepItem2: Locator;
    stepItem2Content: Locator;
    stepItem3: Locator;
    stepItem3Content: Locator;
    stepItemError: Locator;
    stepItemErrorContent: Locator;
    stepItemPending: Locator;
    stepItemPendingContent: Locator;
    stepItem4: Locator;
    stepItem4Content: Locator;
  };
}>({
  stepperVerticalPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const list = page.getByRole("list");
    const stepItem1 = page.getByRole("listitem", {
      name: "Schritt 1 von 4, abgeschlossen, Auftragseingang",
    });
    const stepItem2 = page.getByRole("listitem", {
      name: "Schritt 2 von 4, abgeschlossen, Anbieterwechsel",
    });
    const stepItem3 = page.getByRole("listitem", {
      name: "Schritt 3 von 4, Aktueller Schritt, Auftragsbestätigung",
    });
    const stepItem4 = page.getByRole("listitem", {
      name: "Schritt 4 von 4, offen, Starttermin",
    });
    const stepItemError = page.getByRole("listitem", {
      name: "Schritt 3 von 4, Fehler, Router-Versand",
    });
    const stepItemPending = page.getByRole("listitem", {
      name: "Schritt 3 von 4, ausstehend, Versandvorbereitung",
    });
    const stepItem1Content = page.getByText("Dein Auftrag");
    const stepItem2Content = page.getByText("NetCologne hat deinen Wechsel");
    const stepItem3Content = page.getByText("Wir haben deinen Wechsel");
    const stepItemErrorContent = page.getByText("Bitte melde dich");
    const stepItemPendingContent = page.getByText(
      "Leider verzögert sich der Versand deiner Bestellung.",
    );
    const stepItem4Content = page.getByText(
      "Wir bestätigen deinen Starttermin",
    );
    await use({
      page,
      root,
      list,
      stepItem1,
      stepItem1Content,
      stepItem2,
      stepItem2Content,
      stepItem3,
      stepItem3Content,
      stepItemError,
      stepItemErrorContent,
      stepItemPending,
      stepItemPendingContent,
      stepItem4,
      stepItem4Content,
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
    test(`Should render stepperVertical`, async ({
      mount,
      stepperVerticalPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(stepperVerticalPage.list).toBeVisible();
      await expect(stepperVerticalPage.stepItem1).toBeVisible();
      await expect(stepperVerticalPage.stepItem2).toBeVisible();
      await expect(stepperVerticalPage.stepItem3).toBeVisible();
      await expect(stepperVerticalPage.stepItem4).toBeVisible();
      await expect(stepperVerticalPage.stepItem1Content).toBeVisible();
      await expect(stepperVerticalPage.stepItem2Content).toBeVisible();
      await expect(stepperVerticalPage.stepItem3Content).toBeVisible();
      await expect(stepperVerticalPage.stepItem4Content).toBeVisible();

      await expect(stepperVerticalPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    stepperVerticalPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stepperVerticalPage.list).toBeVisible();
    await expect(stepperVerticalPage.stepItem1).toBeVisible();
    await expect(stepperVerticalPage.stepItem2).toBeVisible();
    await expect(stepperVerticalPage.stepItem3).toBeVisible();
    await expect(stepperVerticalPage.stepItem4).toBeVisible();
    await expect(stepperVerticalPage.stepItem1Content).toBeVisible();
    await expect(stepperVerticalPage.stepItem2Content).toBeVisible();
    await expect(stepperVerticalPage.stepItem3Content).toBeVisible();
    await expect(stepperVerticalPage.stepItem4Content).toBeVisible();
    await expect(stepperVerticalPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    stepperVerticalPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stepperVerticalPage.list).toBeVisible();
    await expect(stepperVerticalPage.stepItem1).toBeVisible();
    await expect(stepperVerticalPage.stepItem2).toBeVisible();
    await expect(stepperVerticalPage.stepItem3).toBeVisible();
    await expect(stepperVerticalPage.stepItem4).toBeVisible();
    await expect(stepperVerticalPage.stepItem1Content).toBeVisible();
    await expect(stepperVerticalPage.stepItem2Content).toBeVisible();
    await expect(stepperVerticalPage.stepItem3Content).toBeVisible();
    await expect(stepperVerticalPage.stepItem4Content).toBeVisible();

    await expect(stepperVerticalPage.root).toHaveScreenshot();
  });
});

const supportedManualSizes: StepperSize[] = ["medium", "large"];
supportedManualSizes.map((size) => {
  test.describe(`StepperVertical manual set to ${size}`, () => {
    test("should render", async ({ mount, stepperVerticalPage }) => {
      await mount(<stories.Default size={size} />);
      await expect(stepperVerticalPage.list).toBeVisible();
      await expect(stepperVerticalPage.stepItem1).toBeVisible();
      await expect(stepperVerticalPage.stepItem2).toBeVisible();
      await expect(stepperVerticalPage.stepItem3).toBeVisible();
      await expect(stepperVerticalPage.stepItem4).toBeVisible();
      await expect(stepperVerticalPage.stepItem1Content).toBeVisible();
      await expect(stepperVerticalPage.stepItem2Content).toBeVisible();
      await expect(stepperVerticalPage.stepItem3Content).toBeVisible();
      await expect(stepperVerticalPage.stepItem4Content).toBeVisible();

      await expect(stepperVerticalPage.root).toHaveScreenshot();
    });
  });
});

test("Should render StepperVertical with Error", async ({
  mount,
  stepperVerticalPage,
}) => {
  await mount(<stories.WithError />);
  await expect(stepperVerticalPage.list).toBeVisible();
  await expect(stepperVerticalPage.stepItem1).toBeVisible();
  await expect(stepperVerticalPage.stepItem2).toBeVisible();
  await expect(stepperVerticalPage.stepItemError).toBeVisible();
  await expect(stepperVerticalPage.stepItem4).toBeVisible();
  await expect(stepperVerticalPage.stepItem1Content).toBeVisible();
  await expect(stepperVerticalPage.stepItem2Content).toBeVisible();
  await expect(stepperVerticalPage.stepItemErrorContent).toBeVisible();
  await expect(stepperVerticalPage.stepItem4Content).toBeVisible();

  await expect(stepperVerticalPage.root).toHaveScreenshot();
});

test("Should render StepperVertical with Pending State", async ({
  mount,
  stepperVerticalPage,
}) => {
  await mount(<stories.WithPendingState />);
  await expect(stepperVerticalPage.list).toBeVisible();
  await expect(stepperVerticalPage.stepItemPending).toBeVisible();
  await expect(stepperVerticalPage.stepItemPendingContent).toBeVisible();

  await expect(stepperVerticalPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    stepperVerticalPage,
  }) => {
    await stepperVerticalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(stepperVerticalPage.root).toBeVisible();
    await expect(stepperVerticalPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, stepperVerticalPage }) => {
    await stepperVerticalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(stepperVerticalPage.root).toBeVisible();
    await expect(stepperVerticalPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    stepperVerticalPage,
  }) => {
    await stepperVerticalPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(stepperVerticalPage.root).toBeVisible();
    await expect(stepperVerticalPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, stepperVerticalPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: stepperVerticalPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
