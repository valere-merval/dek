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
    stepItem1Title: Locator;
    stepItem1Subtitle: Locator;
    stepItem2: Locator;
    stepItem2Title: Locator;
    stepItem2Subtitle: Locator;
    stepItem3: Locator;
    stepItem3Title: Locator;
    stepItem3Subtitle: Locator;
    stepItemError: Locator;
    stepItemErrorTitle: Locator;
    stepItemErrorSubtitle: Locator;
    stepItemPending: Locator;
    stepItemPendingTitle: Locator;
    stepItemPendingSubtitle: Locator;
    stepItem4: Locator;
    stepItem4Title: Locator;
    stepItem4Subtitle: Locator;
  };
}>({
  stepperVerticalPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const list = page.getByRole("list");
    const stepItem1 = page.getByLabel(
      "Schritt 1 von 4, abgeschlossen, Auftragseingang",
    );
    const stepItem2 = page.getByLabel(
      "Schritt 2 von 4, abgeschlossen, Anbieterwechsel",
    );
    const stepItem3 = page.getByLabel(
      "Schritt 3 von 4, Aktueller Schritt, Auftragsbestätigung",
    );
    const stepItem4 = page.getByLabel("Schritt 4 von 4, offen, Starttermin");
    const stepItemError = page.getByLabel(
      "Schritt 3 von 4, Fehler, Router-Versand",
    );
    const stepItemPending = page.getByLabel(
      "Schritt 3 von 4, ausstehend, Versandvorbereitung",
    );
    const stepItem1Title = page.getByText("Auftragseingang", { exact: true });
    const stepItem2Title = page.getByText("Anbieterwechsel", { exact: true });
    const stepItem3Title = page.getByText("Auftragsbestätigung", {
      exact: true,
    });
    const stepItem4Title = page.getByText("Starttermin", { exact: true });
    const stepItemErrorTitle = page.getByText("Router-Versand", {
      exact: true,
    });
    const stepItemPendingTitle = page.getByText("Versandvorbereitung", {
      exact: true,
    });
    const stepItem1Subtitle = page.getByText(
      "Dein Auftrag ist am 13.05.2024 bei uns eingegangen.",
      { exact: true },
    );
    const stepItem2Subtitle = page.getByText(
      "NetCologne hat deinen Wechsel zum 01.06.2024 bestätigt.",
      { exact: true },
    );
    const stepItem3Subtitle = page.getByText(
      "Wir haben deinen Wechsel bei NetCologne angefragt.",
      { exact: true },
    );
    const stepItemErrorSubtitle = page.getByText(
      "Bitte melde dich bei der Service Hotline",
      { exact: true },
    );
    const stepItemPendingSubtitle = page.getByText(
      "Leider verzögert sich der Versand deiner Bestellung.",
      { exact: true },
    );
    const stepItem4Subtitle = page.getByText(
      "Wir bestätigen deinen Starttermin mit Technikereinsatz am 01.06.2024.",
      { exact: true },
    );
    await use({
      page,
      root,
      list,
      stepItem1,
      stepItem1Title,
      stepItem1Subtitle,
      stepItem2,
      stepItem2Title,
      stepItem2Subtitle,
      stepItem3,
      stepItem3Title,
      stepItem3Subtitle,
      stepItemError,
      stepItemErrorTitle,
      stepItemErrorSubtitle,
      stepItemPending,
      stepItemPendingTitle,
      stepItemPendingSubtitle,
      stepItem4,
      stepItem4Title,
      stepItem4Subtitle,
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
      await expect(stepperVerticalPage.stepItem1Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem2Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem3Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem4Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem1Subtitle).toBeVisible();
      await expect(stepperVerticalPage.stepItem2Subtitle).toBeVisible();
      await expect(stepperVerticalPage.stepItem3Subtitle).toBeVisible();
      await expect(stepperVerticalPage.stepItem4Subtitle).toBeVisible();

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
    await expect(stepperVerticalPage.stepItem1Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem2Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem3Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem4Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem1Subtitle).toBeVisible();
    await expect(stepperVerticalPage.stepItem2Subtitle).toBeVisible();
    await expect(stepperVerticalPage.stepItem3Subtitle).toBeVisible();
    await expect(stepperVerticalPage.stepItem4Subtitle).toBeVisible();
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
    await expect(stepperVerticalPage.stepItem1Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem2Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem3Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem4Title).toBeVisible();
    await expect(stepperVerticalPage.stepItem1Subtitle).toBeVisible();
    await expect(stepperVerticalPage.stepItem2Subtitle).toBeVisible();
    await expect(stepperVerticalPage.stepItem3Subtitle).toBeVisible();
    await expect(stepperVerticalPage.stepItem4Subtitle).toBeVisible();

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
      await expect(stepperVerticalPage.stepItem1Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem2Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem3Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem4Title).toBeVisible();
      await expect(stepperVerticalPage.stepItem1Subtitle).toBeVisible();
      await expect(stepperVerticalPage.stepItem2Subtitle).toBeVisible();
      await expect(stepperVerticalPage.stepItem3Subtitle).toBeVisible();
      await expect(stepperVerticalPage.stepItem4Subtitle).toBeVisible();

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
  await expect(stepperVerticalPage.stepItem1Title).toBeVisible();
  await expect(stepperVerticalPage.stepItem2Title).toBeVisible();
  await expect(stepperVerticalPage.stepItemErrorTitle).toBeVisible();
  await expect(stepperVerticalPage.stepItem4Title).toBeVisible();
  await expect(stepperVerticalPage.stepItem1Subtitle).toBeVisible();
  await expect(stepperVerticalPage.stepItem2Subtitle).toBeVisible();
  await expect(stepperVerticalPage.stepItemErrorSubtitle).toBeVisible();
  await expect(stepperVerticalPage.stepItem4Subtitle).toBeVisible();

  await expect(stepperVerticalPage.root).toHaveScreenshot();
});

test("Should render StepperVertical with Pending State", async ({
  mount,
  stepperVerticalPage,
}) => {
  await mount(<stories.WithPendingState />);
  await expect(stepperVerticalPage.list).toBeVisible();
  await expect(stepperVerticalPage.stepItemPending).toBeVisible();
  await expect(stepperVerticalPage.stepItemPendingTitle).toBeVisible();
  await expect(stepperVerticalPage.stepItemPendingSubtitle).toBeVisible();

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
      .disableRules("aria-prohibited-attr")
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
