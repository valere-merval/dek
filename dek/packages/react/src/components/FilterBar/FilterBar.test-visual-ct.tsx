import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./FilterBar.stories.portable";
import { viewports } from "../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";
interface MobileLocators {
  openFilterButton: Locator;
  openSortingButton: Locator;
  sortingFirstOption: Locator;
  secondFilterAccordion: Locator;
  firstFilterOption: Locator;
  applyButton: Locator;
}

interface TabletLocators {
  openManufacturerOptions: Locator;
  openSortingOptions: Locator;
  applyButton: Locator;
}

type DesktopLocators = TabletLocators;

const test = base.extend<{
  filterBarPage: {
    page: Page;
    root: Locator;
    mobile: MobileLocators;
    tablet: TabletLocators;
    desktop: DesktopLocators;
  };
}>({
  filterBarPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const mobile = {
      openFilterButton: page.getByRole("button", {
        name: "Filter",
      }),
      openSortingButton: page.getByRole("button", {
        name: "Sortierung",
      }),
      secondFilterAccordion: page.getByRole("button", {
        name: "Hersteller",
      }),
      firstFilterOption: page.getByRole("checkbox", {
        name: "Handy",
      }),
      applyButton: page.getByRole("button", { name: "Übernehmen" }),
      sortingFirstOption: page
        .locator("label")
        .filter({ hasText: "Niedrigster Preis" })
        .first(),
    };
    const tablet = {
      openManufacturerOptions: page.getByRole("button", {
        name: "Hersteller Alle (4)",
      }),
      openSortingOptions: page.getByRole("button", {
        name: "Sortierung Beliebtheit",
      }),
      applyButton: page.getByRole("button", { name: "Übernehmen" }),
    };
    const desktop = tablet;
    await use({
      page,
      root,
      mobile,
      tablet,
      desktop,
    });
  },
});

test.describe("on a mobile size device", () => {
  test.use(viewports.sm);
  test("should render", async ({ mount, filterBarPage }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.mobile.openFilterButton).toBeVisible();
    await expect(filterBarPage.mobile.openSortingButton).toBeVisible();
    await expect(filterBarPage.root).toHaveScreenshot();
  });

  test("should render FilterBar as a sticky variant", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default stickyOnMobile />);
    await expect(filterBarPage.mobile.openFilterButton).toBeVisible();
    await expect(filterBarPage.mobile.openSortingButton).toBeVisible();
    await expect(filterBarPage.root).toHaveScreenshot();
  });

  test("should open the sorting modal", async ({ mount, filterBarPage }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.mobile.openSortingButton).toBeVisible();
    await filterBarPage.mobile.openSortingButton.click();
    await expect(filterBarPage.page).toHaveScreenshot();
  });

  test("should highlight each of the steps when a step of the sorting modal is hovered", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.mobile.openSortingButton).toBeVisible();
    await filterBarPage.mobile.openSortingButton.click();
    await filterBarPage.mobile.sortingFirstOption.hover();
    await expect(filterBarPage.page).toHaveScreenshot();
  });

  test("should open a modal and focus first option", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.mobile.openFilterButton).toBeVisible();
    await filterBarPage.mobile.openFilterButton.click();

    // Workaround to set focus on Accordion
    await filterBarPage.page.keyboard.press("Tab");
    await filterBarPage.mobile.firstFilterOption.focus();

    await expect(filterBarPage.page).toHaveScreenshot();
  });
  test("should open a modal and open second filter", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.mobile.openFilterButton).toBeVisible();
    await filterBarPage.mobile.openFilterButton.click();
    await filterBarPage.mobile.secondFilterAccordion.click();
    await expect(filterBarPage.page).toHaveScreenshot();
  });
  test.describe("Accessibility", () => {
    test.describe("highContrast and light mode", () => {
      test("closed state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "light",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.root).toBeVisible();
        await expect(filterBarPage.root).toHaveScreenshot();
      });
      test("open state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "light",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.mobile.openFilterButton).toBeVisible();
        await filterBarPage.mobile.openFilterButton.click();
        await expect(filterBarPage.page).toHaveScreenshot();
      });
    });
    test.describe("highContrast and dark mode", () => {
      test("closed state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "dark",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.root).toBeVisible();
        await expect(filterBarPage.root).toHaveScreenshot();
      });
      test("open state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "dark",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.mobile.openFilterButton).toBeVisible();
        await filterBarPage.mobile.openFilterButton.click();
        await expect(filterBarPage.mobile.applyButton).toBeVisible();
        await expect(filterBarPage.page).toHaveScreenshot();
      });
    });
    test.describe("lineHeight and letterSpacing modification", () => {
      test("closed state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.addStyleTag({
          path: "./playwright/assets/a11y.css",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.root).toBeVisible();
        await expect(filterBarPage.root).toHaveScreenshot();
      });
      test("open state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.addStyleTag({
          path: "./playwright/assets/a11y.css",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.mobile.openFilterButton).toBeVisible();
        await filterBarPage.mobile.openFilterButton.click();
        await expect(filterBarPage.mobile.applyButton).toBeVisible();
        await expect(filterBarPage.page).toHaveScreenshot();
      });
      test("open state sorting", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.addStyleTag({
          path: "./playwright/assets/a11y.css",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.mobile.openSortingButton).toBeVisible();
        await filterBarPage.mobile.openSortingButton.click();
        await expect(filterBarPage.mobile.applyButton).toBeVisible();
        await expect(filterBarPage.page).toHaveScreenshot();
      });
    });

    test("axe report", async ({ mount, filterBarPage }) => {
      await mount(<stories.Default />);

      const accessibilityScanResults = await new AxeBuilder({
        page: filterBarPage.page,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});

test.describe("on a tablet size device", () => {
  test.use(viewports.md);
  test("should render", async ({ mount, filterBarPage }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.tablet.openManufacturerOptions).toBeVisible();
    await expect(filterBarPage.tablet.openSortingOptions).toBeVisible();
    await expect(filterBarPage.root).toHaveScreenshot();
  });

  test("should show a dropdown menu (containing checkboxes) on click", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.tablet.openManufacturerOptions).toBeVisible();
    await filterBarPage.tablet.openManufacturerOptions.click();
    await expect(filterBarPage.tablet.applyButton).toBeVisible();
    await expect(filterBarPage.page).toHaveScreenshot({
      maxDiffPixelRatio: 0.005,
    });
    await filterBarPage.tablet.applyButton.click();
    await expect(filterBarPage.tablet.applyButton).not.toBeVisible();
  });

  test("should show a dropdown menu (containing a radio-group) on click", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.tablet.openSortingOptions).toBeVisible();
    await filterBarPage.tablet.openSortingOptions.click();
    await expect(filterBarPage.tablet.applyButton).toBeVisible();
    await expect(filterBarPage.page).toHaveScreenshot();
    await filterBarPage.tablet.applyButton.click();
    await expect(filterBarPage.tablet.applyButton).not.toBeVisible();
  });
});

test.describe("on a desktop size device", () => {
  test.use(viewports.lg);
  test("should render", async ({ mount, filterBarPage }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.desktop.openSortingOptions).toBeVisible();
    await expect(filterBarPage.desktop.openManufacturerOptions).toBeVisible();
    await expect(filterBarPage.root).toHaveScreenshot();
  });

  test("should highlight each tab trigger as it is hovered", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.tablet.openManufacturerOptions).toBeVisible();
    await filterBarPage.desktop.openManufacturerOptions.hover();
    await expect(filterBarPage.root).toHaveScreenshot();
  });

  test("should highlight each tab trigger as it is focused", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.tablet.openManufacturerOptions).toBeVisible();
    await filterBarPage.desktop.openManufacturerOptions.focus();
    await expect(filterBarPage.root).toHaveScreenshot();
  });

  test("should show a dropdown menu on click", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.tablet.openManufacturerOptions).toBeVisible();
    await filterBarPage.desktop.openManufacturerOptions.click();
    await expect(filterBarPage.desktop.applyButton).toBeVisible();
    await expect(filterBarPage.page).toHaveScreenshot({
      maxDiffPixelRatio: 0.005,
    });
    await filterBarPage.desktop.applyButton.click();
    await expect(filterBarPage.desktop.applyButton).not.toBeVisible();
  });

  test("should show a dropdown menu (containing a radio-group) on click", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.Default />);
    await expect(filterBarPage.desktop.openSortingOptions).toBeVisible();
    await filterBarPage.desktop.openSortingOptions.click();
    await expect(filterBarPage.desktop.applyButton).toBeVisible();
    await expect(filterBarPage.page).toHaveScreenshot({
      maxDiffPixelRatio: 0.005,
    });
    await filterBarPage.desktop.applyButton.click();
    await expect(filterBarPage.desktop.applyButton).not.toBeVisible();
  });

  test("should neither open a dropdown menu nor show a hover effect", async ({
    mount,
    filterBarPage,
  }) => {
    await mount(<stories.SingleManufacturer />);
    await expect(
      filterBarPage.desktop.openManufacturerOptions,
    ).not.toBeVisible();
    await filterBarPage.page.getByText("Hersteller").hover(); // the default locator does not apply when it is not a button
    await expect(filterBarPage.page).toHaveScreenshot();
  });
  test.describe("Accessibility", () => {
    test.describe("highContrast and light mode", () => {
      test("closed state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "light",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.root).toBeVisible();
        await expect(filterBarPage.root).toHaveScreenshot();
      });
      test("open state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "light",
        });
        await mount(<stories.Default />);
        await expect(
          filterBarPage.tablet.openManufacturerOptions,
        ).toBeVisible();
        await filterBarPage.desktop.openManufacturerOptions.click();
        await expect(filterBarPage.desktop.applyButton).toBeVisible();
        await expect(filterBarPage.page).toHaveScreenshot({
          maxDiffPixelRatio: 0.005,
        });
      });
    });
    test.describe("highContrast and dark mode", () => {
      test("closed state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "dark",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.root).toBeVisible();
        await expect(filterBarPage.root).toHaveScreenshot();
      });
      test("open state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.emulateMedia({
          forcedColors: "active",
          colorScheme: "dark",
        });
        await mount(<stories.Default />);
        await expect(
          filterBarPage.tablet.openManufacturerOptions,
        ).toBeVisible();
        await filterBarPage.desktop.openManufacturerOptions.click();
        await expect(filterBarPage.desktop.applyButton).toBeVisible();
        await expect(filterBarPage.page).toHaveScreenshot({
          maxDiffPixelRatio: 0.005,
        });
      });
    });
    test.describe("lineHeight and letterSpacing modification", () => {
      test("closed state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.addStyleTag({
          path: "./playwright/assets/a11y.css",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.root).toBeVisible();
        await expect(filterBarPage.root).toHaveScreenshot();
      });
      test("open state", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.addStyleTag({
          path: "./playwright/assets/a11y.css",
        });
        await mount(<stories.Default />);
        await expect(
          filterBarPage.tablet.openManufacturerOptions,
        ).toBeVisible();
        await filterBarPage.desktop.openManufacturerOptions.click();
        await expect(filterBarPage.desktop.applyButton).toBeVisible();
        await expect(filterBarPage.page).toHaveScreenshot({
          maxDiffPixelRatio: 0.005,
        });
      });
      test("open state sorting", async ({ mount, filterBarPage }) => {
        await filterBarPage.page.addStyleTag({
          path: "./playwright/assets/a11y.css",
        });
        await mount(<stories.Default />);
        await expect(filterBarPage.desktop.openSortingOptions).toBeVisible();
        await filterBarPage.desktop.openSortingOptions.click();
        await expect(filterBarPage.desktop.applyButton).toBeVisible();
        await expect(filterBarPage.page).toHaveScreenshot({
          maxDiffPixelRatio: 0.005,
        });
      });
    });

    test("axe report", async ({ mount, filterBarPage }) => {
      await mount(<stories.Default />);

      const accessibilityScanResults = await new AxeBuilder({
        page: filterBarPage.page,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
