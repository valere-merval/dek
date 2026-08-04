import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CheckboxGroup.stories.portable";

import AxeBuilder from "@axe-core/playwright";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../../playwright/fixtures";

const test = base.extend<{
  checkboxGroupPage: {
    page: Page;
    root: Locator;
    group: Locator;
    label: Locator;
    description: Locator;
    item1: Locator;
    item2: Locator;
    item3: Locator;
    errorMessage: Locator;
  };
}>({
  checkboxGroupPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const group = page.getByRole("group").first();
    const label = page.getByText("Rechtliche Hinweise");
    const description = page.getByText(
      "Hier findest du die vorvertraglichen Informationen und die Vertragszusammenfassung.",
    );
    const item1 = page.getByLabel(
      "Ich möchte zur monatlichen Rechnung einen Einzelverbindungsnachweis (EVN) über meine kostenpflichtigen Verbindungen für die obige Rufnummer erhalten.",
    );
    const item2 = page.getByLabel(
      "Ich akzeptiere die Allgemeinen Geschäftsbedingungen.",
    );
    const item3 = page.getByLabel(
      "Die Datenschutzhinweise nehme ich zur Kenntnis.",
    );
    const errorMessage = page.getByText("Du musst jedem Punkt zustimmen.");

    await use({
      page,
      root,
      group,
      label,
      description,
      item1,
      item2,
      item3,
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
    test(`Should render checkboxGroup`, async ({
      mount,
      checkboxGroupPage,
    }) => {
      await mount(<BackgroundStory />);

      await expect(checkboxGroupPage.root).toBeVisible();
      await expect(checkboxGroupPage.label).toBeVisible();
      await expect(checkboxGroupPage.description).toBeVisible();
      await expect(checkboxGroupPage.item1).toBeVisible();
      await expect(checkboxGroupPage.item2).toBeVisible();
      await expect(checkboxGroupPage.item3).toBeVisible();
      await expect(checkboxGroupPage.root).toHaveScreenshot();
    });

    test(`Should render checkboxGroup with hidden label`, async ({
      mount,
      checkboxGroupPage,
    }) => {
      await mount(<BackgroundStory hideLabel />);

      await expect(checkboxGroupPage.root).toBeVisible();
      await expect(checkboxGroupPage.description).toBeVisible();
      await expect(checkboxGroupPage.item1).toBeVisible();
      await expect(checkboxGroupPage.item2).toBeVisible();
      await expect(checkboxGroupPage.item3).toBeVisible();
      await expect(checkboxGroupPage.root).toHaveScreenshot();
    });
  },
);

test(`Should render item in hover state`, async ({
  mount,
  checkboxGroupPage,
}) => {
  await mount(<stories.Default />);

  await expect(checkboxGroupPage.root).toBeVisible();
  await expect(checkboxGroupPage.item1).toBeVisible();
  await expect(checkboxGroupPage.item2).toBeVisible();
  await checkboxGroupPage.item2.hover({ force: true });
  await expect(checkboxGroupPage.item3).toBeVisible();
  await expect(checkboxGroupPage.root).toHaveScreenshot();
});

test(`Should render item in focus state`, async ({
  mount,
  checkboxGroupPage,
}) => {
  await mount(<stories.Default />);

  await expect(checkboxGroupPage.root).toBeVisible();
  await expect(checkboxGroupPage.item1).toBeVisible();
  await expect(checkboxGroupPage.item2).toBeVisible();
  await checkboxGroupPage.item2.focus();
  await expect(checkboxGroupPage.item3).toBeVisible();
  await expect(checkboxGroupPage.root).toHaveScreenshot();
});

test(`Should render item in disabled state`, async ({
  mount,
  checkboxGroupPage,
}) => {
  await mount(<stories.ItemDisabled />);

  await expect(checkboxGroupPage.root).toBeVisible();
  await expect(checkboxGroupPage.item1).toBeVisible();
  await expect(checkboxGroupPage.item2).toBeVisible();
  await expect(checkboxGroupPage.item3).toBeVisible();
  await expect(checkboxGroupPage.item3).toBeDisabled();
  await expect(checkboxGroupPage.root).toHaveScreenshot();
});

test(`Should render item in error state`, async ({
  mount,
  checkboxGroupPage,
}) => {
  await mount(<stories.ItemWithError />);

  await expect(checkboxGroupPage.root).toBeVisible();
  await expect(checkboxGroupPage.item1).toBeVisible();
  await expect(checkboxGroupPage.item2).toBeVisible();
  await expect(checkboxGroupPage.item3).toBeVisible();
  await expect(checkboxGroupPage.root).toHaveScreenshot();
});

test(`Should render erroneous item in hover state`, async ({
  mount,
  checkboxGroupPage,
}) => {
  await mount(<stories.ItemWithError />);

  await expect(checkboxGroupPage.root).toBeVisible();
  await checkboxGroupPage.item2.hover({ force: true });
  await expect(checkboxGroupPage.root).toHaveScreenshot();
});
test(`Should render erroneous item in focus state`, async ({
  mount,
  checkboxGroupPage,
}) => {
  await mount(<stories.ItemWithError />);

  await expect(checkboxGroupPage.root).toBeVisible();
  await expect(checkboxGroupPage.item2).toBeVisible();
  await checkboxGroupPage.item2.focus();
  await expect(checkboxGroupPage.root).toHaveScreenshot();
});

test("Should render checkboxGroup with defaultSelected item", async ({
  mount,
  checkboxGroupPage,
}) => {
  await mount(<stories.ItemWithDefaultSelected />);

  await expect(checkboxGroupPage.root).toBeVisible();
  await expect(checkboxGroupPage.item1).toBeVisible();
  await expect(checkboxGroupPage.item1).not.toBeChecked();
  await expect(checkboxGroupPage.item2).toBeVisible();
  await expect(checkboxGroupPage.item2).not.toBeChecked();
  await expect(checkboxGroupPage.item3).toBeVisible();
  await expect(checkboxGroupPage.item3).toBeChecked();
  await expect(checkboxGroupPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render checkboxGroup", async ({ mount, checkboxGroupPage }) => {
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.description).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test(`Should render checkboxGroup with item in error state`, async ({
    mount,
    checkboxGroupPage,
  }) => {
    await mount(<stories.ItemWithError />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.errorMessage).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render checkbox", async ({ mount, checkboxGroupPage }) => {
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.description).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test(`Should render checkbox in error state`, async ({
    mount,
    checkboxGroupPage,
  }) => {
    await mount(<stories.ItemWithError />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.description).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.errorMessage).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, checkboxGroupPage }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.description).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and checked state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.ItemWithDefaultSelected />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item1).not.toBeChecked();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item2).not.toBeChecked();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeChecked();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and disabled state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.ItemDisabled />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeDisabled();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and error state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.ItemWithError />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and hover state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.hover({ force: true });
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, checkboxGroupPage }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.description).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and checked state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.ItemWithDefaultSelected />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item1).not.toBeChecked();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item2).not.toBeChecked();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeChecked();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and disabled state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.ItemDisabled />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.item3).toBeDisabled();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and error state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.ItemWithError />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and hover state", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.hover({ force: true });
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.description).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification with error", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await checkboxGroupPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });

    await mount(<stories.ItemWithError />);

    await expect(checkboxGroupPage.root).toBeVisible();
    await expect(checkboxGroupPage.label).toBeVisible();
    await expect(checkboxGroupPage.description).toBeVisible();
    await expect(checkboxGroupPage.item1).toBeVisible();
    await expect(checkboxGroupPage.item2).toBeVisible();
    await checkboxGroupPage.item2.focus();
    await expect(checkboxGroupPage.item3).toBeVisible();
    await expect(checkboxGroupPage.root).toHaveScreenshot();
  });

  test("has accessible description ", async ({ mount, checkboxGroupPage }) => {
    await mount(<stories.Default />);

    await expect(checkboxGroupPage.group).toHaveAccessibleDescription(
      "Hier findest du die vorvertraglichen Informationen und die Vertragszusammenfassung.",
    );
  });

  test("has accessible error-message ", async ({
    mount,
    checkboxGroupPage,
  }) => {
    await mount(<stories.ItemWithError />);

    // due to the react Aria FieldError component, the error message gets refrerenced in the group via aria-describedby instead of aria-errormessage
    await expect(checkboxGroupPage.group).toHaveAccessibleDescription(
      "Du musst jedem Punkt zustimmen. Hier findest du die vorvertraglichen Informationen und die Vertragszusammenfassung.",
    );
  });

  test("axe report", async ({ mount, checkboxGroupPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: checkboxGroupPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
