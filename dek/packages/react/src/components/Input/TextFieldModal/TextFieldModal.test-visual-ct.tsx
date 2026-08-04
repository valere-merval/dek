import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./TextFieldModal.stories.portable";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  textFieldModalPage: {
    page: Page;
    root: Locator;
    placeholder: Locator;
    input: Locator;
    inputWrapper: Locator;
    button: Locator;
  };
}>({
  textFieldModalPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const placeholder = page.getByText("E-Mail");
    const input = page.getByRole("textbox", { name: "E-Mail" });
    const inputWrapper = input.locator("..");
    const button = page.getByRole("button", {
      name: "Eingabehinweis öffnen",
    });
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

  test("Should render TextFieldModal ", async ({
    mount,
    textFieldModalPage,
  }) => {
    await mount(<stories.Default />);
    await expect(textFieldModalPage.input).toBeVisible();
    await expect(textFieldModalPage.placeholder).toBeVisible();
    await expect(textFieldModalPage.button).toBeVisible();
    await expect(textFieldModalPage.root).toHaveScreenshot();
  });
  test("Should render a TextFieldModal with focused button", async ({
    mount,
    textFieldModalPage,
  }) => {
    await mount(<stories.Default />);
    await expect(textFieldModalPage.input).toBeVisible();
    await expect(textFieldModalPage.placeholder).toBeVisible();
    await expect(textFieldModalPage.button).toBeVisible();
    await textFieldModalPage.button.focus();
    await expect(textFieldModalPage.root).toHaveScreenshot();
  });
});

test("opens modal", async ({ mount, textFieldModalPage }) => {
  await mount(<stories.Default />);
  await expect(textFieldModalPage.input).toBeVisible();
  await expect(textFieldModalPage.placeholder).toBeVisible();
  await expect(textFieldModalPage.button).toBeVisible();
  await textFieldModalPage.button.click();
  await expect(
    textFieldModalPage.page.getByRole("heading", { name: "Hinweis" }),
  ).toBeVisible();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, textFieldModalPage }) => {
    await textFieldModalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(textFieldModalPage.root).toBeVisible();
    await expect(textFieldModalPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, textFieldModalPage }) => {
    await textFieldModalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(textFieldModalPage.root).toBeVisible();
    await expect(textFieldModalPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    textFieldModalPage,
  }) => {
    await textFieldModalPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(textFieldModalPage.root).toBeVisible();
    await expect(textFieldModalPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, textFieldModalPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: textFieldModalPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
