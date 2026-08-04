import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./EnergyLabel.stories.portable";
import { viewports } from "../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  energyLabelPage: {
    page: Page;
    root: Locator;
    image: Locator;
    button: Locator;
    modalTitle: Locator;
  };
}>({
  energyLabelPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const image = page.getByRole("img", { name: "Energieeffizienzklasse A" });
    const button = page.getByRole("button", {
      name: "Details zur Energieeffizienzklasse A",
    });
    const modalTitle = page.getByRole("heading", {
      name: "Xiaomi 15 Ultra",
    });
    await use({
      page,
      root,
      image,
      button,
      modalTitle,
    });
  },
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, energyLabelPage }) => {
    await mount(<stories.Default />);
    await expect(energyLabelPage.image).toBeVisible();
    await expect(energyLabelPage.root).toHaveScreenshot();
  });
  test("Should render modal on click", async ({ mount, energyLabelPage }) => {
    await mount(<stories.WithModal />);
    await expect(energyLabelPage.button).toBeVisible();
    energyLabelPage.button.click();
    await expect(energyLabelPage.modalTitle).toBeVisible();
    await expect(energyLabelPage.page).toHaveScreenshot();
  });
  test("Should render focus state", async ({ mount, energyLabelPage }) => {
    await mount(<stories.WithModal />);
    await expect(energyLabelPage.button).toBeVisible();
    energyLabelPage.button.focus();
    await expect(energyLabelPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, energyLabelPage }) => {
    await energyLabelPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(energyLabelPage.image).toBeVisible();
    await expect(energyLabelPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, energyLabelPage }) => {
    await energyLabelPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(energyLabelPage.image).toBeVisible();
    await expect(energyLabelPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    energyLabelPage,
  }) => {
    await energyLabelPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(energyLabelPage.image).toBeVisible();
    await expect(energyLabelPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, energyLabelPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: energyLabelPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
