import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Checkbox.stories.portable";

import AxeBuilder from "@axe-core/playwright";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../../playwright/fixtures";

const test = base.extend<{
  checkboxPage: {
    page: Page;
    root: Locator;
    checkbox: Locator;
    errorMessage: Locator;
  };
}>({
  checkboxPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const checkbox = page.getByLabel(
      "Die Datenschutzhinweise nehme ich zur Kenntnis.",
    );
    const errorMessage = page.getByText("Diese Option muss ausgewählt werden.");
    await use({
      page,
      root,
      checkbox,
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
    test(`Should render checkbox`, async ({ mount, checkboxPage }) => {
      await mount(<BackgroundStory />);

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await expect(checkboxPage.errorMessage).not.toBeVisible();
      await expect(checkboxPage.root).toHaveScreenshot();
    });

    test(`Should render checkbox in hover state`, async ({
      mount,
      checkboxPage,
    }) => {
      await mount(<BackgroundStory />);

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await checkboxPage.checkbox.hover({ force: true });
      await expect(checkboxPage.root).toHaveScreenshot();
    });

    test(`Should render checkbox in focus state`, async ({
      mount,
      checkboxPage,
    }) => {
      await mount(<BackgroundStory />);

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await checkboxPage.checkbox.focus();
      await expect(checkboxPage.root).toHaveScreenshot();
    });

    test(`Should render checkbox in disabled state`, async ({
      mount,
      checkboxPage,
    }) => {
      await mount(<BackgroundStory isDisabled />);

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await expect(checkboxPage.checkbox).toBeDisabled();
      await expect(checkboxPage.root).toHaveScreenshot();
    });

    test(`Should render checkbox in error state`, async ({
      mount,
      checkboxPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: "Diese Option muss ausgewählt werden.",
              type: "error",
            },
          ]}
        />,
      );

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await expect(checkboxPage.errorMessage).toBeVisible();
      await expect(checkboxPage.root).toHaveScreenshot();
    });

    test(`Should render erroneous checkbox in hover state`, async ({
      mount,
      checkboxPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: "Diese Option muss ausgewählt werden.",
              type: "error",
            },
          ]}
        />,
      );

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await checkboxPage.checkbox.hover({ force: true });
      await expect(checkboxPage.errorMessage).toBeVisible();
      await expect(checkboxPage.root).toHaveScreenshot();
    });

    test(`Should render erroneous checkbox in focus state`, async ({
      mount,
      checkboxPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: "Diese Option muss ausgewählt werden.",
              type: "error",
            },
          ]}
        />,
      );

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await checkboxPage.checkbox.focus();
      await expect(checkboxPage.errorMessage).toBeVisible();
      await expect(checkboxPage.root).toHaveScreenshot();
    });

    test(`Should render checkbox in checked state`, async ({
      mount,
      checkboxPage,
    }) => {
      await mount(<BackgroundStory defaultSelected />);

      await expect(checkboxPage.root).toBeVisible();
      await expect(checkboxPage.checkbox).toBeVisible();
      await expect(checkboxPage.checkbox).toBeChecked();
      await expect(checkboxPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render checkbox", async ({ mount, checkboxPage }) => {
    await mount(<stories.Default />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.errorMessage).not.toBeVisible();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test(`Should render checkbox in error state`, async ({
    mount,
    checkboxPage,
  }) => {
    await mount(<stories.WithError />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.errorMessage).toBeVisible();
    await expect(checkboxPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render checkbox", async ({ mount, checkboxPage }) => {
    await mount(<stories.Default />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.errorMessage).not.toBeVisible();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test(`Should render checkbox in error state`, async ({
    mount,
    checkboxPage,
  }) => {
    await mount(<stories.WithError />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.errorMessage).toBeVisible();
    await expect(checkboxPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, checkboxPage }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await checkboxPage.checkbox.focus();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and checked state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default isSelected />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeChecked();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and disabled state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default isDisabled />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeDisabled();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and disabled and checked state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default isDisabled isSelected />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeDisabled();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and error state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default isInvalid />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and error and checked state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default isInvalid isSelected />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeChecked();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and hover state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await checkboxPage.checkbox.hover({ force: true });
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, checkboxPage }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await checkboxPage.checkbox.focus();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and checked state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default isSelected />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeChecked();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and disabled state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default isDisabled />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeDisabled();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and disabled and checked state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default isDisabled isSelected />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeDisabled();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and error state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default isInvalid />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and error and checked state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default isInvalid isSelected />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toBeChecked();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and hover state", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await checkboxPage.checkbox.hover({ force: true });
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);

    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await checkboxPage.checkbox.focus();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification with error", async ({
    mount,
    checkboxPage,
  }) => {
    await checkboxPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });

    await mount(<stories.WithError />);
    await expect(checkboxPage.root).toBeVisible();
    await expect(checkboxPage.checkbox).toBeVisible();
    await checkboxPage.checkbox.focus();
    await expect(checkboxPage.errorMessage).toBeVisible();
    await expect(checkboxPage.root).toHaveScreenshot();
  });

  test("checkbox has accessible description ", async ({
    mount,
    checkboxPage,
  }) => {
    await mount(<stories.WithError />);
    await expect(checkboxPage.checkbox).toBeVisible();
    await expect(checkboxPage.checkbox).toHaveAccessibleDescription(
      "Diese Option muss ausgewählt werden.",
    );
  });

  test("axe report", async ({ mount, checkboxPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: checkboxPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
