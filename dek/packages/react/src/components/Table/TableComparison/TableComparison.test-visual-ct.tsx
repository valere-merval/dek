import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./TableComparison.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { container, viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  tableComparisonPage: {
    page: Page;
    root: Locator;
    table: Locator;
    select: Locator;
    selectOption: Locator;
    modalButton: Locator;
    modalHeadline: Locator;
    specificRow: Locator;
  };
}>({
  tableComparisonPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const table = page.getByRole("table");
    const select = page.getByRole("button", {
      name: "50 MBit/s",
    });
    const selectOption = page.getByRole("option").first();
    const modalButton = page.getByRole("button", {
      name: "Mehr Details zu Download Geschwindigkeit",
    });
    const modalHeadline = page.getByText("Download im Detail");
    const specificRow = page.getByRole("rowheader", {
      name: "Telefonie",
    });
    await use({
      page,
      select,
      selectOption,
      modalButton,
      modalHeadline,
      root,
      table,
      specificRow,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render tableComparison on ${colorName} background`, async ({
        mount,
        tableComparisonPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(tableComparisonPage.table).toBeVisible();
        await expect(tableComparisonPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("With only two plans", () => {
  const supportedBackgroundStories = {
    black: stories.WithOnlyTwoPlansOnBlackBackground,
    white: stories.WithOnlyTwoPlansOnWhiteBackground,
    lightGrey: stories.WithOnlyTwoPlansOnLightGreyBackground,
    darkGrey: stories.WithOnlyTwoPlansOnDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render tableComparison on ${colorName} background with only two plans`, async ({
        mount,
        tableComparisonPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(tableComparisonPage.table).toBeVisible();
        await expect(tableComparisonPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);
  test("Should wrap in small viewport", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });
  test("Should focus a select field", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await tableComparisonPage.select.focus();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });
  test("Should open select field", async ({ mount, tableComparisonPage }) => {
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await tableComparisonPage.select.click();
    await expect(tableComparisonPage.selectOption).toBeVisible();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });
  test("Should focus a select field", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await tableComparisonPage.select.focus();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });
  test("Should open select field", async ({ mount, tableComparisonPage }) => {
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await tableComparisonPage.select.click();
    await expect(tableComparisonPage.selectOption).toBeVisible();
    await tableComparisonPage.selectOption.hover();
    await expect(tableComparisonPage.page).toHaveScreenshot();
  });
});

test.describe("Sticky", () => {
  test.describe("Small Viewport", () => {
    test.use(container(360, 350));
    test("Should have a sticky head", async ({
      mount,
      tableComparisonPage,
    }) => {
      await mount(<stories.Default />);

      await tableComparisonPage.specificRow.scrollIntoViewIfNeeded();
      await tableComparisonPage.page.waitForTimeout(1000);

      await expect(tableComparisonPage.page).toHaveScreenshot();
    });
    test("Should not have a sticky head", async ({
      mount,
      tableComparisonPage,
    }) => {
      await mount(<stories.WithoutSticky />);

      await expect(tableComparisonPage.specificRow).toBeVisible();
      await tableComparisonPage.specificRow.scrollIntoViewIfNeeded();
      await tableComparisonPage.page.waitForTimeout(1000);

      await expect(tableComparisonPage.page).toHaveScreenshot();
    });
  });

  test.describe("Large Viewport", () => {
    test.use(container(900, 350));
    test("Should have a sticky head", async ({
      mount,
      tableComparisonPage,
    }) => {
      await mount(<stories.Default />);

      await tableComparisonPage.specificRow.scrollIntoViewIfNeeded();
      await expect(tableComparisonPage.table).toBeVisible();

      await expect(tableComparisonPage.page).toHaveScreenshot();
    });
    test("Should not have a sticky head", async ({
      mount,
      tableComparisonPage,
    }) => {
      await mount(<stories.WithoutSticky />);

      await expect(tableComparisonPage.specificRow).toBeVisible();
      await tableComparisonPage.specificRow.scrollIntoViewIfNeeded();
      await expect(tableComparisonPage.table).toBeVisible();

      await expect(tableComparisonPage.page).toHaveScreenshot();
    });
    test("Should have a sticky head and open select", async ({
      mount,
      tableComparisonPage,
    }) => {
      await mount(<stories.Default />);

      await tableComparisonPage.specificRow.scrollIntoViewIfNeeded();
      await tableComparisonPage.select.click();
      await expect(tableComparisonPage.page).toHaveScreenshot();
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    tableComparisonPage,
  }) => {
    await tableComparisonPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, tableComparisonPage }) => {
    await tableComparisonPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    tableComparisonPage,
  }) => {
    await tableComparisonPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();
    await expect(tableComparisonPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, tableComparisonPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: tableComparisonPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
