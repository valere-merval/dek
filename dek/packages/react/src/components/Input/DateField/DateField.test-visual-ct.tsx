import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./DateField.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  dateFieldPage: {
    page: Page;
    root: Locator;
    readonly placeholder: Locator;
    readonly input: Locator;
    readonly inputWrapper: Locator;
    readonly inputSegmentDays: Locator;
    readonly inputSegmentMonths: Locator;
    readonly inputSegmentYears: Locator;
  };
}>({
  dateFieldPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const placeholder = page.getByText("Datum auswählen");
    const input = page.getByRole("group");
    const inputWrapper = input.locator("..");
    const inputSegmentDays = page.getByRole("spinbutton").nth(0);
    const inputSegmentMonths = page.getByRole("spinbutton").nth(1);
    const inputSegmentYears = page.getByRole("spinbutton").nth(2);
    await use({
      page,
      root,
      placeholder,
      input,
      inputWrapper,
      inputSegmentDays,
      inputSegmentMonths,
      inputSegmentYears,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
      lightGrey: stories.WithCongstarWebLightGreyBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
      jaAgave80: stories.WithJaJaAgave80Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
      jaAgaveOutlinesSecondary:
        stories.WithJaJaAgaveOutlinesSecondaryBackground,
    },
    penny: {
      pennyRed: stories.WithPennyPennyRedBackground,
      pennyRedDark: stories.WithPennyPennyRedDarkBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render DateField`, async ({ mount, dateFieldPage }) => {
      await mount(<BackgroundStory />);
      await expect(dateFieldPage.input).toBeVisible();
      await expect(dateFieldPage.placeholder).toBeVisible();
      await expect(dateFieldPage.root).toHaveScreenshot();
    });

    test(`Should render DateField in focus state`, async ({
      mount,
      dateFieldPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(dateFieldPage.input).toBeVisible();
      await dateFieldPage.inputSegmentDays.focus();
      await expect(dateFieldPage.inputSegmentDays).toBeVisible();
      await expect(dateFieldPage.placeholder).toBeVisible();
      await expect(dateFieldPage.root).toHaveScreenshot();
    });

    test(`Should render DateField in disabled state`, async ({
      mount,
      dateFieldPage,
    }) => {
      await mount(<BackgroundStory disabled />);
      await expect(dateFieldPage.input).toBeVisible();
      await expect(dateFieldPage.placeholder).toBeVisible();
      await expect(dateFieldPage.root).toHaveScreenshot();
    });

    test(`Should render DateField in error state`, async ({
      mount,
      dateFieldPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: "Deine Angabe ist ungültig.",
              type: "error",
            },
          ]}
        />,
      );
      await expect(dateFieldPage.input).toBeVisible();
      await expect(dateFieldPage.placeholder).toBeVisible();
      await expect(
        dateFieldPage.page.getByText("Deine Angabe ist ungültig."),
      ).toBeVisible();
      await expect(dateFieldPage.root).toHaveScreenshot();
    });

    test(`Should render erroneous DateField in focus state`, async ({
      mount,
      dateFieldPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: "Deine Angabe ist ungültig.",
              type: "error",
            },
          ]}
        />,
      );
      await expect(dateFieldPage.input).toBeVisible();
      await dateFieldPage.inputSegmentDays.focus();
      await expect(dateFieldPage.placeholder).toBeVisible();
      await expect(
        dateFieldPage.page.getByText("Deine Angabe ist ungültig."),
      ).toBeVisible();
      await expect(dateFieldPage.root).toHaveScreenshot();
    });
  },
);

test("Should render a filled DateField", async ({ mount, dateFieldPage }) => {
  await mount(<stories.Default />);
  await expect(dateFieldPage.input).toBeVisible();
  await dateFieldPage.inputSegmentDays.fill("11");
  await dateFieldPage.inputSegmentMonths.fill("11");
  await dateFieldPage.inputSegmentYears.fill("2011");
  await expect(dateFieldPage.inputSegmentDays).toBeVisible();
  await expect(dateFieldPage.inputSegmentMonths).toBeVisible();
  await expect(dateFieldPage.inputSegmentYears).toBeVisible();
  await expect(dateFieldPage.placeholder).toBeVisible();
  await expect(dateFieldPage.root).toHaveScreenshot();
});

test(`Should render a required DateField`, async ({ mount, dateFieldPage }) => {
  await mount(<stories.Default required />);
  await expect(dateFieldPage.input).toBeVisible();
  await expect(dateFieldPage.placeholder).toBeVisible();
  await expect(dateFieldPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, dateFieldPage }) => {
    await mount(<stories.Default />);
    await expect(dateFieldPage.root).toBeVisible();
    await expect(dateFieldPage.root).toHaveScreenshot();
  });
});

test.describe("Medium Viewport", () => {
  test.use(viewports.md);

  test("Should wrap in small viewport", async ({ mount, dateFieldPage }) => {
    await mount(<stories.Default />);
    await expect(dateFieldPage.root).toBeVisible();
    await expect(dateFieldPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({ mount, dateFieldPage }) => {
    await mount(<stories.Default />);
    await expect(dateFieldPage.root).toBeVisible();
    await expect(dateFieldPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  // ToDo: Tests für die verschiedenen Zustände (analog zu testDescribeAllowedBackgrounds) sollten für den Hochkontrastmodus ergänzt werden.
  test("highContrast and light mode", async ({ mount, dateFieldPage }) => {
    await dateFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithPrefilledDate />);
    await expect(dateFieldPage.root).toBeVisible();
    await expect(dateFieldPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, dateFieldPage }) => {
    await dateFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithPrefilledDate />);
    await expect(dateFieldPage.root).toBeVisible();
    await expect(dateFieldPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    dateFieldPage,
  }) => {
    await dateFieldPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.WithPrefilledDate />);
    await expect(dateFieldPage.root).toBeVisible();
    await expect(dateFieldPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, dateFieldPage }) => {
    await mount(<stories.WithPrefilledDate />);

    const accessibilityScanResults = await new AxeBuilder({
      page: dateFieldPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
