import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./TextFieldClear.stories.portable";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  textFieldClearPage: {
    page: Page;
    root: Locator;
    placeholder: Locator;
    input: Locator;
    inputWrapper: Locator;
    button: Locator;
  };
}>({
  textFieldClearPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const placeholder = page.getByText("E-Mail");
    const input = page.getByRole("textbox", { name: "E-Mail" });
    const inputWrapper = input.locator("..");
    const button = page.getByRole("button", { name: "Textfeld löschen" });
    await use({
      page,
      root,
      placeholder,
      input,
      inputWrapper,
      button,
    });
  },
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render TextFieldClear", async ({
    mount,
    textFieldClearPage,
  }) => {
    await mount(<stories.Default />);
    await expect(textFieldClearPage.input).toBeVisible();
    await expect(textFieldClearPage.placeholder).toBeVisible();
    await expect(textFieldClearPage.button).toBeVisible();
    await expect(textFieldClearPage.root).toHaveScreenshot();
  });
  test("clear field values", async ({ mount, textFieldClearPage }) => {
    await mount(<stories.Default />);
    await expect(textFieldClearPage.input).toBeVisible();
    await expect(textFieldClearPage.placeholder).toBeVisible();
    await expect(textFieldClearPage.button).toBeVisible();
    textFieldClearPage.input.fill("test");
    textFieldClearPage.button.click();
    await expect(textFieldClearPage.root).toHaveScreenshot({
      maxDiffPixelRatio: 0.005,
    });
  });

  test("Should render TextFieldClear with focused button", async ({
    mount,
    textFieldClearPage,
  }) => {
    await mount(<stories.Default />);
    await expect(textFieldClearPage.input).toBeVisible();
    await expect(textFieldClearPage.placeholder).toBeVisible();
    await expect(textFieldClearPage.button).toBeVisible();
    await textFieldClearPage.button.focus();
    await expect(textFieldClearPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, textFieldClearPage }) => {
    await textFieldClearPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(textFieldClearPage.root).toBeVisible();
    await expect(textFieldClearPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, textFieldClearPage }) => {
    await textFieldClearPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(textFieldClearPage.root).toBeVisible();
    await expect(textFieldClearPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    textFieldClearPage,
  }) => {
    await textFieldClearPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(textFieldClearPage.root).toBeVisible();
    await expect(textFieldClearPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, textFieldClearPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: textFieldClearPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
