import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./RadioGroup.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  radioGroupPage: {
    page: Page;
    root: Locator;
    group: Locator;
    item1: Locator;
    item2: Locator;
    errorMessage: Locator;
  };
}>({
  radioGroupPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const group = page.getByRole("radiogroup");
    const item1 = page.getByLabel("Prepaid-Vertrag (Zahlung via Guthaben)");
    const item2 = page.getByLabel("Mobilfunkvertrag (Zahlung auf Rechnung)");
    const errorMessage = page.getByText("Es muss eine Option ausgewählt sein");
    await use({
      page,
      root,
      group,
      item1,
      item2,
      errorMessage,
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
      white: stories.WithCongstarAppWhiteBackground,
      lightGrey: stories.WithCongstarAppLightGreyBackground,
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
    test(`Should render radioGroup`, async ({ mount, radioGroupPage }) => {
      await mount(<BackgroundStory />);
      await expect(radioGroupPage.root).toBeVisible();
      await expect(radioGroupPage.item1).toBeVisible();
      await expect(radioGroupPage.item2).toBeVisible();
      await expect(radioGroupPage.root).toHaveScreenshot();
    });

    test(`Should render radioGroup with hidden Label`, async ({
      mount,
      radioGroupPage,
    }) => {
      await mount(<BackgroundStory hideLabel description={null} />);
      await expect(radioGroupPage.root).toBeVisible();
      await expect(radioGroupPage.item1).toBeVisible();
      await expect(radioGroupPage.item2).toBeVisible();
      await expect(radioGroupPage.root).toHaveScreenshot();
    });

    test(`Should render radioGroup in hover state`, async ({
      mount,
      radioGroupPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(radioGroupPage.root).toBeVisible();
      await expect(radioGroupPage.item2).toBeVisible();
      await radioGroupPage.item2.hover({ force: true });
      await expect(radioGroupPage.root).toHaveScreenshot();
    });

    test(`Should render radioGroup in focus state`, async ({
      mount,
      radioGroupPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(radioGroupPage.root).toBeVisible();
      await expect(radioGroupPage.item2).toBeVisible();
      await radioGroupPage.item2.focus();
      await expect(radioGroupPage.root).toHaveScreenshot();
    });

    test(`Should render radioGroup in disabled state`, async ({
      mount,
      radioGroupPage,
    }) => {
      await mount(<BackgroundStory isDisabled />);
      await expect(radioGroupPage.root).toBeVisible();
      await expect(radioGroupPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous radio`, async ({
      mount,
      radioGroupPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es muss eine Option ausgewählt sein", type: "error" },
          ]}
        />,
      );
      await expect(radioGroupPage.root).toBeVisible();
      await expect(radioGroupPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous radio in hover state`, async ({
      mount,
      radioGroupPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            { message: "Es muss eine Option ausgewählt sein", type: "error" },
          ]}
        />,
      );
      await expect(radioGroupPage.root).toBeVisible();
      await radioGroupPage.item2.hover({ force: true });
      await expect(radioGroupPage.root).toHaveScreenshot();
    });
    test(`Should render a erroneous radio in focus state`, async ({
      mount,
      radioGroupPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            { message: "Es muss eine Option ausgewählt sein", type: "error" },
          ]}
        />,
      );
      await expect(radioGroupPage.root).toBeVisible();
      await radioGroupPage.item2.focus();
      await expect(radioGroupPage.root).toHaveScreenshot();
    });
  },
);

test("Should render only one disabled item", async ({
  mount,
  radioGroupPage,
}) => {
  await mount(<stories.OneItemDisabled />);
  await expect(radioGroupPage.root).toBeVisible();
  await expect(radioGroupPage.root).toHaveScreenshot();
});

test("Should render horizontal", async ({ mount, radioGroupPage }) => {
  await mount(<stories.Default orientation="horizontal" />);
  await expect(radioGroupPage.root).toBeVisible();
  await expect(radioGroupPage.item1).toBeVisible();
  await expect(radioGroupPage.item2).toBeVisible();
  await expect(radioGroupPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, radioGroupPage }) => {
    await mount(<stories.Default />);
    await expect(radioGroupPage.root).toBeVisible();
    await expect(radioGroupPage.item1).toBeVisible();
    await expect(radioGroupPage.item2).toBeVisible();
    await expect(radioGroupPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, radioGroupPage }) => {
    await radioGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });

    await mount(<stories.Default />);
    await expect(radioGroupPage.item1).toBeVisible();
    await expect(radioGroupPage.item2).toBeVisible();
    await radioGroupPage.item2.focus();
    await expect(radioGroupPage.root).toBeVisible();
    await expect(radioGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, radioGroupPage }) => {
    await radioGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(radioGroupPage.item1).toBeVisible();
    await expect(radioGroupPage.item2).toBeVisible();
    await radioGroupPage.item2.focus();
    await expect(radioGroupPage.root).toBeVisible();
    await expect(radioGroupPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    radioGroupPage,
  }) => {
    await radioGroupPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });

    await mount(<stories.Default />);
    await expect(radioGroupPage.item1).toBeVisible();
    await expect(radioGroupPage.item2).toBeVisible();
    await radioGroupPage.item2.focus();
    await expect(radioGroupPage.root).toBeVisible();
    await expect(radioGroupPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification with error", async ({
    mount,
    radioGroupPage,
  }) => {
    await radioGroupPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });

    await mount(<stories.WithError />);
    await expect(radioGroupPage.item1).toBeVisible();
    await expect(radioGroupPage.item2).toBeVisible();
    await radioGroupPage.item2.focus();
    await expect(radioGroupPage.root).toBeVisible();
    await expect(radioGroupPage.root).toHaveScreenshot();
  });

  test("radiogroup has accessible description ", async ({
    mount,
    radioGroupPage,
  }) => {
    await mount(<stories.Default />);

    await expect(radioGroupPage.group).toHaveAccessibleDescription(
      "Wähle deine gewünschte Option aus:",
    );
  });

  test("radiogroup has accessible error-message ", async ({
    mount,
    radioGroupPage,
  }) => {
    await mount(<stories.WithError />);

    await expect(radioGroupPage.group).toHaveAccessibleErrorMessage(
      "Es muss eine Option ausgewählt sein",
    );
  });

  test("axe report", async ({ mount, radioGroupPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: radioGroupPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
