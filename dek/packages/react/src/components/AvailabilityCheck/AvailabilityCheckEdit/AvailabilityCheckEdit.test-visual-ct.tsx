import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./AvailabilityCheckEdit.stories.portable";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  availabilityCheckEditPage: {
    page: Page;
    root: Locator;
    headlineAvailable: Locator;
    headlineUnavailable: Locator;
    text: Locator;
    errorText: Locator;
    button: Locator;
    errorButton: Locator;
    customButton: Locator;
  };
}>({
  availabilityCheckEditPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const headlineAvailable = page.getByRole("heading", {
      name: "Der Tarif ist verfügbar",
    });
    const headlineUnavailable = page.getByRole("heading", {
      name: "Der Tarif ist nicht verfügbar",
    });
    const text = page.getByText(
      "Bischöflich-Geistlicher-Rat-Josef-Zinnbauer-Str. 84, 84130 Dingolfing",
    );
    const errorText = page.getByText("Bitte versuche es gleich erneut.");
    const button = page.getByRole("button", {
      name: "Adresse ändern",
    });
    const errorButton = page.getByRole("button", {
      name: "Erneut versuchen",
    });
    const customButton = page.getByRole("button", {
      name: "Klick mich",
    });
    await use({
      page,
      root,
      headlineAvailable,
      headlineUnavailable,
      text,
      errorText,
      button,
      customButton,
      errorButton,
    });
  },
});

test.describe("availabilityCheckEdit", () => {
  Object.entries(viewports).map(([name, viewport]) =>
    test.describe(`on a ${name} viewport`, () => {
      test.use(viewport);
      test("Should render available", async ({
        mount,
        availabilityCheckEditPage,
      }) => {
        await mount(<stories.Default />);
        await expect(availabilityCheckEditPage.text).toBeVisible();
        await expect(availabilityCheckEditPage.button).toBeVisible();
        await expect(availabilityCheckEditPage.headlineAvailable).toBeVisible();

        await expect(availabilityCheckEditPage.root).toHaveScreenshot();
      });

      test("Should render unavailable", async ({
        mount,
        availabilityCheckEditPage,
      }) => {
        await mount(<stories.Unavailable />);
        await expect(availabilityCheckEditPage.text).toBeVisible();
        await expect(availabilityCheckEditPage.button).toBeVisible();
        await expect(
          availabilityCheckEditPage.headlineUnavailable,
        ).toBeVisible();

        await expect(availabilityCheckEditPage.root).toHaveScreenshot();
      });

      test("Should render error", async ({
        mount,
        availabilityCheckEditPage,
      }) => {
        await mount(<stories.Error />);
        await expect(availabilityCheckEditPage.errorText).toBeVisible();
        await expect(availabilityCheckEditPage.errorButton).toBeVisible();
        await expect(
          availabilityCheckEditPage.headlineAvailable,
        ).not.toBeVisible();
        await expect(
          availabilityCheckEditPage.headlineUnavailable,
        ).not.toBeVisible();

        await expect(availabilityCheckEditPage.root).toHaveScreenshot();
      });

      test("Should render custom button text", async ({
        mount,
        availabilityCheckEditPage,
      }) => {
        await mount(<stories.WithCustomButtonLabel />);
        await expect(availabilityCheckEditPage.text).toBeVisible();
        await expect(availabilityCheckEditPage.customButton).toBeVisible();
        await expect(availabilityCheckEditPage.headlineAvailable).toBeVisible();

        await expect(availabilityCheckEditPage.root).toHaveScreenshot();
      });
    }),
  );
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    availabilityCheckEditPage,
  }) => {
    await availabilityCheckEditPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(availabilityCheckEditPage.root).toBeVisible();
    await expect(availabilityCheckEditPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    availabilityCheckEditPage,
  }) => {
    await availabilityCheckEditPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(availabilityCheckEditPage.root).toBeVisible();
    await expect(availabilityCheckEditPage.root).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    availabilityCheckEditPage,
  }) => {
    await availabilityCheckEditPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(availabilityCheckEditPage.root).toBeVisible();
    await expect(availabilityCheckEditPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, availabilityCheckEditPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: availabilityCheckEditPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
