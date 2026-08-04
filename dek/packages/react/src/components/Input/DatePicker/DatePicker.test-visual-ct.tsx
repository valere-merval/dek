import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./DatePicker.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { browser, viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  datePickerPage: {
    page: Page;
    root: Locator;
    textField: Locator;
    calendar: Locator;
    firstMonth: Locator;
    secondMonth: Locator;
    thirdMonth: Locator;
    secondMonthHeading: Locator;
    thirdMonthHeading: Locator;
    leftChevron: Locator;
    rightChevron: Locator;
  };
}>({
  datePickerPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const textField = page.getByRole("textbox", {
      name: "Datum auswählen",
    });
    const calendar = page.getByRole("application");
    const firstMonth = calendar.getByRole("grid", {
      name: "März 2024",
    });
    const secondMonth = calendar.getByRole("grid", {
      name: "April 2024",
    });
    const thirdMonth = calendar.getByRole("grid", {
      name: "Mai 2024",
    });
    const secondMonthHeading = page.getByRole("heading", {
      name: "April 2024",
      exact: true,
    });
    const thirdMonthHeading = page.getByRole("heading", {
      name: "Mai 2024",
      exact: true,
    });
    const leftChevron = page.getByRole("button", { name: "Zurück" });
    const rightChevron = page.getByRole("button", { name: "Weiter" }).first();
    await use({
      page,
      root,
      textField,
      calendar,
      firstMonth,
      secondMonth,
      thirdMonth,
      secondMonthHeading,
      thirdMonthHeading,
      leftChevron,
      rightChevron,
    });
  },
});

test.describe("Small Viewport", () => {
  test.use({
    viewport: {
      width: 360,
      height: 500,
    },
  });

  test("Should render a DatePicker", async ({ mount, datePickerPage }) => {
    await mount(<stories.Default />);
    await expect(datePickerPage.textField).toBeVisible();
    await datePickerPage.textField.click({ force: true });

    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
    await expect(datePickerPage.secondMonth).not.toBeVisible();

    await datePickerPage.rightChevron.click();
    await expect(datePickerPage.firstMonth).not.toBeVisible();
    await expect(datePickerPage.secondMonth).toBeVisible();

    await datePickerPage.secondMonth
      .getByRole("gridcell", {
        name: "Montag, 1. April 2024",
      })
      .click();
    await expect(datePickerPage.calendar).not.toBeVisible();

    await datePickerPage.textField.click();
    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.firstMonth).not.toBeVisible();
    await expect(datePickerPage.secondMonth).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
  });
  test("Should render a DatePicker with preselected date", async ({
    mount,
    datePickerPage,
  }) => {
    await mount(<stories.WithPreselectedDate />);
    await expect(datePickerPage.textField).toBeVisible();
    await expect(datePickerPage.root).toHaveScreenshot();
  });
});

test.describe("Smallest Viewport", () => {
  test.use({
    viewport: {
      width: 320,
      height: 500,
    },
  });

  test("Should render a DatePicker", async ({ mount, datePickerPage }) => {
    await mount(<stories.Default />);
    await expect(datePickerPage.textField).toBeVisible();
    await datePickerPage.textField.click({ force: true });

    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
    await expect(datePickerPage.secondMonth).not.toBeVisible();

    await datePickerPage.rightChevron.click();
    await expect(datePickerPage.firstMonth).not.toBeVisible();
    await expect(datePickerPage.secondMonth).toBeVisible();

    await datePickerPage.secondMonth
      .getByRole("gridcell", {
        name: "Montag, 1. April 2024",
      })
      .click();
    await expect(datePickerPage.calendar).not.toBeVisible();

    await datePickerPage.textField.click();
    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.firstMonth).not.toBeVisible();
    await expect(datePickerPage.secondMonth).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render a DatePicker", async ({ mount, datePickerPage }) => {
    await mount(<stories.Default />);
    await expect(datePickerPage.textField).toBeVisible();
    await datePickerPage.textField.click();

    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();

    await datePickerPage.secondMonth
      .getByRole("gridcell", {
        name: "Montag, 1. April 2024",
      })
      .click();
    await expect(datePickerPage.calendar).not.toBeVisible();

    await datePickerPage.textField.click();
    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.secondMonthHeading).toBeVisible();
    await expect(datePickerPage.thirdMonthHeading).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
  });

  test("Should use the chevrons to switch month", async ({
    mount,
    datePickerPage,
  }) => {
    await mount(<stories.Default />);
    await expect(datePickerPage.textField).toBeVisible();
    await datePickerPage.textField.click();

    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.firstMonth).toBeVisible();
    await expect(datePickerPage.secondMonth).toBeVisible();
    await expect(datePickerPage.thirdMonth).not.toBeVisible();
    await expect(datePickerPage.leftChevron).toBeDisabled();
    await expect(datePickerPage.rightChevron).not.toBeDisabled();

    await datePickerPage.rightChevron.click();
    await expect(datePickerPage.firstMonth).not.toBeVisible();
    await expect(datePickerPage.secondMonth).toBeVisible();
    await expect(datePickerPage.thirdMonth).toBeVisible();
    await expect(datePickerPage.leftChevron).not.toBeDisabled();
    await expect(datePickerPage.rightChevron).toBeDisabled();
    await datePickerPage.leftChevron.click();
    await expect(datePickerPage.firstMonth).toBeVisible();
    await expect(datePickerPage.secondMonth).toBeVisible();
    await expect(datePickerPage.thirdMonth).not.toBeVisible();
  });

  browser.forEach((browser) => {
    test.describe(`@${browser}`, () => {
      test("Should render a DatePicker with Dates between the turn of the year", async ({
        mount,
        datePickerPage,
      }) => {
        await mount(<stories.WithoutFixedTimePeriod />);
        await expect(datePickerPage.textField).toBeVisible();
        await datePickerPage.textField.click({ force: true });
        await expect(
          datePickerPage.page.getByRole("heading", {
            name: "Dezember 2024",
            exact: true,
          }),
        ).toBeVisible();
        await expect(
          datePickerPage.page.getByRole("heading", {
            name: "Januar 2025",
            exact: true,
          }),
        ).toBeVisible();
        await expect(datePickerPage.page).toHaveScreenshot();
      });
      test("Should open the Calender with keyboard", async ({
        mount,
        datePickerPage,
      }) => {
        await mount(<stories.WithoutFixedTimePeriod />);
        await expect(datePickerPage.textField).toBeVisible();
        await datePickerPage.textField.press("ArrowDown");
        await expect(
          datePickerPage.page.getByRole("heading", {
            name: "Dezember 2024",
            exact: true,
          }),
        ).toBeVisible();
        await expect(
          datePickerPage.page.getByRole("heading", {
            name: "Januar 2025",
            exact: true,
          }),
        ).toBeVisible();
        await expect(datePickerPage.page).toHaveScreenshot();
      });
    });
  });
});

test.describe("DatePicker", () => {
  const supportedBackgroundStories = {
    black: stories.WithErrorOnBlackBackground,
    white: stories.WithErrorOnWhiteBackground,
    lightGrey: stories.WithErrorOnLightGreyBackground,
    darkGrey: stories.WithErrorOnDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render datePicker on ${colorName} background with error`, async ({
        mount,
        datePickerPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(datePickerPage.textField).toBeVisible();
        await expect(
          datePickerPage.page.getByText("Bitte wähle ein Datum aus."),
        ).toBeVisible();
        await expect(datePickerPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, datePickerPage }) => {
    await datePickerPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithPreselectedDate />);
    await expect(datePickerPage.textField).toBeVisible();
    await datePickerPage.textField.click({ force: true });

    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, datePickerPage }) => {
    await datePickerPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithPreselectedDate />);
    await expect(datePickerPage.textField).toBeVisible();
    await datePickerPage.textField.click({ force: true });

    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    datePickerPage,
  }) => {
    await datePickerPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.WithPreselectedDate />);
    await expect(datePickerPage.textField).toBeVisible();
    await datePickerPage.textField.click({ force: true });

    await expect(datePickerPage.calendar).toBeVisible();
    await expect(datePickerPage.page).toHaveScreenshot();
  });

  test("axe report for trigger", async ({ mount, datePickerPage }) => {
    await mount(<stories.Default />);
    await expect(datePickerPage.textField).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({
      page: datePickerPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("axe report for calendar", async ({ mount, datePickerPage }) => {
    await mount(<stories.Default />);
    await expect(datePickerPage.textField).toBeVisible();

    await datePickerPage.textField.click({ force: true });

    await expect(datePickerPage.calendar).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({
      page: datePickerPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
