import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./SelectionBoxCheckbox.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const clickSelectionBoxOuterEdge = async (page: Page, control: Locator) => {
  const box = await control.boundingBox();
  if (!box) throw new Error("SelectionBox control is not visible");

  await page.mouse.click(box.x - 8, box.y + box.height / 2);
};

const test = base.extend<{
  selectionBoxCheckboxPage: {
    page: Page;
    root: Locator;
    group: Locator;
    item1: Locator;
    item2: Locator;
    item1Control: Locator;
    item2Control: Locator;
    item2SubText: Locator;
    expandedContentSelectionBox: Locator;
    expandedContentItem: Locator;
    errorMessage: Locator;
  };
}>({
  selectionBoxCheckboxPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const group = page.getByRole("radiogroup");
    const item1 = page.getByLabel("5G Speed Option");
    const item2 = page.getByLabel("share Tut Gutes Option 4 GB");
    const item1Control = page.getByRole("checkbox", {
      name: "5G Speed Option",
    });
    const item2Control = page.getByRole("checkbox", {
      name: "share Tut Gutes Option 4 GB",
    });
    const item2SubText = page.getByText(
      "Erhöhe dein Datenvolumen und unterstütze Kinder mit digitaler Bildung",
    );
    const expandedContentItem = page.getByText(
      "Max. 100 Mbit/s Download und Upload 40 Mbit/s",
    );
    const errorMessage = page.getByText("Es ist ein Fehler aufgetreten.");
    const expandedContentSelectionBox = page
      .locator("div")
      .filter({ hasText: "250 Mbit/s Mehrere Geräte" })
      .nth(5);
    await use({
      page,
      root,
      group,
      item1,
      item2,
      item1Control,
      item2Control,
      item2SubText,
      expandedContentItem,
      expandedContentSelectionBox,
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
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      white: stories.WithCongstarAppWhiteBackground,
    },
    ja: {
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
    },
    penny: {
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render selectionBoxCheckbox`, async ({
      mount,
      selectionBoxCheckboxPage,
    }) => {
      await mount(<BackgroundStory defaultValue={["option-1"]} />);
      await expect(selectionBoxCheckboxPage.root).toBeVisible();
      await expect(selectionBoxCheckboxPage.item1).toBeVisible();
      await expect(selectionBoxCheckboxPage.item2).toBeVisible();
      await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
    });

    test.describe("Should render selectionBoxCheckbox", () => {
      test.use(viewports.sm);
      test(`on mobile`, async ({ mount, selectionBoxCheckboxPage }) => {
        await mount(<BackgroundStory />);
        await expect(selectionBoxCheckboxPage.root).toBeVisible();
        await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
      });
    });

    test(`Should render selectionBoxCheckbox in hover state`, async ({
      mount,
      selectionBoxCheckboxPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxCheckboxPage.root).toBeVisible();
      await expect(selectionBoxCheckboxPage.item2).toBeVisible();
      await selectionBoxCheckboxPage.item2.hover({ force: true });
      await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
    });

    test(`Should render selectionBoxCheckbox in focus state`, async ({
      mount,
      selectionBoxCheckboxPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxCheckboxPage.root).toBeVisible();
      await expect(selectionBoxCheckboxPage.item2).toBeVisible();
      await selectionBoxCheckboxPage.item2.focus();
      await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
    });

    test(`Should render selectionBoxCheckbox in error state`, async ({
      mount,
      selectionBoxCheckboxPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxCheckboxPage.root).toBeVisible();
      await expect(selectionBoxCheckboxPage.errorMessage).toBeVisible();
      await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous selectionBoxCheckbox in hover state`, async ({
      mount,
      selectionBoxCheckboxPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxCheckboxPage.root).toBeVisible();
      await selectionBoxCheckboxPage.item2.hover({ force: true });
      await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous selectionBoxCheckbox in focus state`, async ({
      mount,
      selectionBoxCheckboxPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxCheckboxPage.root).toBeVisible();
      await selectionBoxCheckboxPage.item2.focus();
      await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
    });
  },
);

test("Should render with no grid", async ({
  mount,
  selectionBoxCheckboxPage,
}) => {
  await mount(<stories.HeaderImage noGrid />);
  await expect(selectionBoxCheckboxPage.root).toBeVisible();
  await expect(selectionBoxCheckboxPage.item1).toBeVisible();
  await expect(selectionBoxCheckboxPage.item2).toBeVisible();
  await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
});

test("Should render item 2 as selected after click", async ({
  mount,
  selectionBoxCheckboxPage,
}) => {
  await mount(<stories.HeaderImage />);
  await expect(selectionBoxCheckboxPage.root).toBeVisible();
  await expect(selectionBoxCheckboxPage.item1).toBeVisible();
  await expect(selectionBoxCheckboxPage.item2).toBeVisible();
  await selectionBoxCheckboxPage.item2.click({ force: true });
  await expect(selectionBoxCheckboxPage.item2Control).toBeChecked();
  await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
});

test("Should select item 2 after clicking its sub text", async ({
  mount,
  selectionBoxCheckboxPage,
}) => {
  await mount(<stories.HeaderImage />);
  await expect(selectionBoxCheckboxPage.root).toBeVisible();
  await expect(selectionBoxCheckboxPage.item2SubText).toBeVisible();
  await selectionBoxCheckboxPage.item2SubText.click({ force: true });
  await expect(selectionBoxCheckboxPage.item2Control).toBeChecked();
  await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
});

test("Should select item after clicking its outer edge", async ({
  mount,
  selectionBoxCheckboxPage,
}) => {
  await mount(<stories.WithLinks />);
  const item2Control = selectionBoxCheckboxPage.page.getByRole("checkbox", {
    name: "AllnetFlat M Extra mit GB+",
  });

  await clickSelectionBoxOuterEdge(selectionBoxCheckboxPage.page, item2Control);
  await expect(item2Control).toBeChecked();
  await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
});

test("Should render with discounts", async ({
  mount,
  selectionBoxCheckboxPage,
}) => {
  await mount(<stories.Discounts />);
  await expect(selectionBoxCheckboxPage.root).toBeVisible();
  await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
});

test.describe("Expanded Content", () => {
  test("Should render", async ({ mount, selectionBoxCheckboxPage }) => {
    await mount(<stories.ExpandedContent />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("Should not render expanded content when item is not selected", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await mount(<stories.ExpandedContent defaultValue={["option-1"]} />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.expandedContentItem).toBeVisible();
    await selectionBoxCheckboxPage.page
      .getByLabel("250 Mbit/s")
      .click({ force: true });
    await expect(
      selectionBoxCheckboxPage.expandedContentItem,
    ).not.toBeVisible();
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, selectionBoxCheckboxPage }) => {
    await mount(<stories.Default />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await selectionBoxCheckboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.HeaderImage />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.item1).toBeVisible();
    await expect(selectionBoxCheckboxPage.item2).toBeVisible();
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and error state", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await selectionBoxCheckboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(
      <stories.HeaderImage
        defaultValue={undefined}
        messages={[
          { message: "Es ist ein Fehler aufgetreten.", type: "error" },
        ]}
      />,
    );
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.item1).toBeVisible();
    await expect(selectionBoxCheckboxPage.item2).toBeVisible();
    await expect(selectionBoxCheckboxPage.errorMessage).toBeVisible();
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and hover state", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await selectionBoxCheckboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.HeaderImage />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.item1).toBeVisible();
    await expect(selectionBoxCheckboxPage.item2).toBeVisible();
    await selectionBoxCheckboxPage.item2.hover({ force: true });
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await selectionBoxCheckboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.HeaderImage defaultValue={["option-1"]} />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.item1).toBeVisible();
    await expect(selectionBoxCheckboxPage.item2).toBeVisible();
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and error state", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await selectionBoxCheckboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(
      <stories.HeaderImage
        defaultValue={["option-1"]}
        messages={[
          { message: "Es ist ein Fehler aufgetreten.", type: "error" },
        ]}
      />,
    );
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.item1).toBeVisible();
    await expect(selectionBoxCheckboxPage.item2).toBeVisible();
    await expect(selectionBoxCheckboxPage.errorMessage).toBeVisible();
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and hover state", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await selectionBoxCheckboxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.HeaderImage defaultValue={["option-1"]} />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.item1).toBeVisible();
    await expect(selectionBoxCheckboxPage.item2).toBeVisible();
    await selectionBoxCheckboxPage.item2.hover({ force: true });
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await selectionBoxCheckboxPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    await expect(selectionBoxCheckboxPage.root).toHaveScreenshot();
  });

  test("Input element has content, promotion and discount linked via aria-describedBy", async ({
    mount,
    selectionBoxCheckboxPage,
  }) => {
    await mount(<stories.Discounts />);
    await expect(selectionBoxCheckboxPage.root).toBeVisible();
    const item1 = selectionBoxCheckboxPage.page.getByLabel("Allnet Flat S");
    const item2 = selectionBoxCheckboxPage.page.getByLabel("Allnet Flat M");
    await expect(item1).toHaveAccessibleDescription(
      "Rabatt die ersten 3 Monate kostenlos Rabatttext 2 Ohne Laufzeit wählbar",
    );
    await expect(item2).toHaveAccessibleDescription(
      "Rabatt die ersten 3 Monate kostenlos Ohne Laufzeit wählbar",
    );
  });

  test("axe report", async ({ mount, selectionBoxCheckboxPage }) => {
    await mount(<stories.HeaderImage />);

    const accessibilityScanResults = await new AxeBuilder({
      page: selectionBoxCheckboxPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
