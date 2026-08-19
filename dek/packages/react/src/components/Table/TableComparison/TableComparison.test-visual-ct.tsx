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

  test("Should not render placeholder text in table when all items fit", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.WithOnlyTwoPlans />);
    await expect(tableComparisonPage.table).toBeVisible();
    await expect(
      tableComparisonPage.table.getByText("congstar Zuhause Flex", {
        exact: true,
      }),
    ).toHaveCount(0);
  });

  test("Should render default story with header select buttons and placeholder text", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.Default />);
    await expect(tableComparisonPage.table).toBeVisible();

    const selectButtons = tableComparisonPage.page.getByRole("button", {
      name: /MBit\/s/,
    });
    await expect(selectButtons).toHaveCount(2);

    await expect(
      tableComparisonPage.table.getByText("congstar Zuhause Flex", {
        exact: true,
      }),
    ).toHaveCount(2);
  });
});

test("Should render a row link", async ({ mount, tableComparisonPage }) => {
  await mount(<stories.WithThirdColumn />);
  const link = tableComparisonPage.table.getByRole("link", {
    name: "Routercheck",
    exact: true,
  });

  await expect(link).toBeVisible();
  await expect(link).not.toHaveAttribute("type");
});

test("Should remount the story with two columns when showThirdColumn changes to false", async ({
  mount,
  tableComparisonPage,
}) => {
  const component = await mount(<stories.WithThirdColumn />);

  await expect(tableComparisonPage.table).toHaveAttribute("aria-colcount", "4");

  await component.update(<stories.WithThirdColumn showThirdColumn={false} />);

  await expect(tableComparisonPage.table).toHaveAttribute("aria-colcount", "3");
  await expect(tableComparisonPage.table.getByRole("columnheader")).toHaveCount(
    3,
  );
});

test("Should render static header typography based on the column count", async ({
  mount,
  tableComparisonPage,
}) => {
  const thirdColumnComponent = await mount(<stories.WithThirdColumn />);
  const thirdColumnHeader = tableComparisonPage.table.getByText(
    "bei congstar mieten",
    { exact: true },
  );

  await expect(thirdColumnHeader).toHaveCSS("font-size", "16px");
  await expect(thirdColumnHeader).toHaveCSS("font-weight", "700");
  await expect(tableComparisonPage.table.getByRole("heading")).toHaveCount(0);
  await expect(
    tableComparisonPage.page.getByRole("heading", { level: 4 }),
  ).toHaveCSS("font-size", "24px");

  await thirdColumnComponent.unmount();

  await mount(<stories.WithOnlyTwoPlans />);
  const twoPlanHeader = tableComparisonPage.table
    .getByRole("columnheader", {
      name: "50 MBit/s",
      exact: true,
    })
    .getByText("50 MBit/s", { exact: true });

  await expect(twoPlanHeader).toHaveCSS("font-size", "24px");
  await expect(twoPlanHeader).toHaveCSS("font-weight", "700");
  await expect(tableComparisonPage.table.getByRole("heading")).toHaveCount(0);
});

test("Should allow overriding the title headline level", async ({
  mount,
  tableComparisonPage,
}) => {
  await mount(<stories.Default headlineLevel="h2" />);

  await expect(
    tableComparisonPage.page.getByRole("heading", { level: 2 }),
  ).toHaveText("congstar Zuhause Flex");
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
  test("Should wrap with third column in small viewport", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.WithThirdColumn />);
    await expect(tableComparisonPage.table).toBeVisible();
    // it need to count 4 columns because the first column is the row header and the other 3 are the plans
    await expect(tableComparisonPage.table).toHaveAttribute(
      "aria-colcount",
      "4",
    );
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
  test("Should wrap with third column in large viewport", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.WithThirdColumn />);
    await expect(tableComparisonPage.table).toBeVisible();
    // it need to count 4 columns because the first column is the row header and the other 3 are the plans
    await expect(tableComparisonPage.table).toHaveAttribute(
      "aria-colcount",
      "4",
    );
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

  test("announces a successful comparison selection", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.Default />);

    await tableComparisonPage.select.click();
    await tableComparisonPage.page
      .getByRole("option", { name: "250 MBit/s" })
      .click();

    await expect(
      tableComparisonPage.page.locator('[role="log"][aria-live="polite"]'),
    ).toContainText(
      "250 MBit/s wurde in Vergleichsspalte 1 ausgewählt. Die Vergleichsdaten wurden aktualisiert.",
    );
  });

  test("exposes column semantics for three and two plans", async ({
    mount,
    tableComparisonPage,
  }) => {
    const thirdColumnComponent = await mount(<stories.WithThirdColumn />);
    const columnHeaders = tableComparisonPage.table.getByRole("columnheader");
    const priceCells = tableComparisonPage.table
      .getByRole("row")
      .nth(1)
      .getByRole("cell");
    const firstBodyRow = tableComparisonPage.table.getByRole("row").nth(2);
    const firstRowHeader = firstBodyRow.getByRole("rowheader");
    const firstRowCells = firstBodyRow.getByRole("cell");

    await expect(tableComparisonPage.table).toHaveAttribute(
      "aria-colcount",
      "4",
    );
    await expect(columnHeaders).toHaveCount(4);
    await expect(columnHeaders.nth(0)).toHaveAccessibleName("Merkmal");
    await expect(columnHeaders.nth(0)).toHaveAttribute("aria-colindex", "1");
    await expect(columnHeaders.nth(1)).toHaveAttribute("aria-colindex", "2");
    await expect(columnHeaders.nth(2)).toHaveAttribute("aria-colindex", "3");
    await expect(columnHeaders.nth(3)).toHaveAttribute("aria-colindex", "4");
    await expect(priceCells).toHaveCount(3);
    await expect(priceCells.nth(0)).toHaveAttribute("aria-colindex", "2");
    await expect(priceCells.nth(1)).toHaveAttribute("aria-colindex", "3");
    await expect(priceCells.nth(2)).toHaveAttribute("aria-colindex", "4");
    await expect(firstRowHeader).toHaveAttribute("aria-colindex", "1");
    await expect(firstRowCells).toHaveCount(3);
    await expect(firstRowCells.nth(0)).toHaveAttribute("aria-colindex", "2");
    await expect(firstRowCells.nth(1)).toHaveAttribute("aria-colindex", "3");
    await expect(firstRowCells.nth(2)).toHaveAttribute("aria-colindex", "4");

    await thirdColumnComponent.unmount();
    await mount(<stories.WithOnlyTwoPlans />);

    await expect(tableComparisonPage.table).toHaveAttribute(
      "aria-colcount",
      "3",
    );
    await expect(
      tableComparisonPage.table.getByRole("columnheader"),
    ).toHaveCount(3);
  });

  test("exposes the row header and footnote button separately", async ({
    mount,
    tableComparisonPage,
  }) => {
    await mount(<stories.Default />);

    const rowHeader = tableComparisonPage.table.getByRole("rowheader", {
      name: "Download Geschwindigkeit",
      exact: true,
    });
    const downloadSpeedRow = tableComparisonPage.table.getByRole("row", {
      name: /Download Geschwindigkeit/,
    });
    const downloadSpeedCell = downloadSpeedRow
      .getByRole("cell")
      .filter({ hasText: "100 MBit/s" });

    await expect(rowHeader).toBeVisible();
    await expect(
      rowHeader.getByRole("button", {
        name: "Mehr Details zu Download Geschwindigkeit",
        exact: true,
      }),
    ).toBeVisible();
    await expect(downloadSpeedCell).toHaveAccessibleDescription(
      "Download Geschwindigkeit",
    );
  });

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
