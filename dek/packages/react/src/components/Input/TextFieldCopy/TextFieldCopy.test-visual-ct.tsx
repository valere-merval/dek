import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./TextFieldCopy.stories.portable";
import { viewports } from "../../../../playwright/fixtures";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  textFieldCopyPage: {
    page: Page;
    root: Locator;
    placeholder: Locator;
    input: Locator;
    inputWrapper: Locator;
    button: Locator;
  };
}>({
  textFieldCopyPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const placeholder = page.getByText("E-Mail");
    const input = page.getByRole("textbox", { name: "E-Mail" });
    const inputWrapper = input.locator("..");
    const button = page.getByRole("button", { name: "Textfeld kopieren" });
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

test.describe("TextFieldCopy", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render TextFieldCopy on ${colorName} background`, async ({
        mount,
        textFieldCopyPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(textFieldCopyPage.input).toBeVisible();
        await textFieldCopyPage.input.fill("test");
        await expect(textFieldCopyPage.placeholder).toBeVisible();

        await expect(textFieldCopyPage.root).toHaveScreenshot();
      });

      test(`Should render a disabled TextFieldCopy on ${colorName} background`, async ({
        mount,
        textFieldCopyPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(textFieldCopyPage.input).toBeVisible();
        await textFieldCopyPage.input.fill("test");
        await expect(textFieldCopyPage.placeholder).toBeVisible();

        await expect(textFieldCopyPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render TextFieldCopy", async ({ mount, textFieldCopyPage }) => {
    await mount(<stories.Default />);
    await expect(textFieldCopyPage.input).toBeVisible();
    await expect(textFieldCopyPage.placeholder).toBeVisible();
    await expect(textFieldCopyPage.button).toBeVisible();
    await expect(textFieldCopyPage.root).toHaveScreenshot();
  });

  test("copy value to clipboard", async ({
    mount,
    context,
    textFieldCopyPage,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await mount(<stories.Default />);
    await expect(textFieldCopyPage.input).toBeVisible();
    await expect(textFieldCopyPage.placeholder).toBeVisible();
    await expect(textFieldCopyPage.button).toBeVisible();
    await textFieldCopyPage.input.fill("test");
    await textFieldCopyPage.button.click({ force: true });

    // Get clipboard content after the link/button has been clicked
    const handle = await textFieldCopyPage.page.evaluateHandle(() =>
      navigator.clipboard.readText(),
    );
    const clipboardContent = await handle.jsonValue();
    await expect(clipboardContent).toEqual("test");

    await expect(textFieldCopyPage.root).toHaveScreenshot({
      maxDiffPixelRatio: 0.005,
    });
  });

  test("Should render TextFieldCopy with focused button", async ({
    mount,
    textFieldCopyPage,
  }) => {
    await mount(<stories.Default />);
    await expect(textFieldCopyPage.input).toBeVisible();
    await expect(textFieldCopyPage.placeholder).toBeVisible();
    await expect(textFieldCopyPage.button).toBeVisible();
    await textFieldCopyPage.button.focus();
    await expect(textFieldCopyPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, textFieldCopyPage }) => {
    await textFieldCopyPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(textFieldCopyPage.root).toBeVisible();
    await expect(textFieldCopyPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, textFieldCopyPage }) => {
    await textFieldCopyPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(textFieldCopyPage.root).toBeVisible();
    await expect(textFieldCopyPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    textFieldCopyPage,
  }) => {
    await textFieldCopyPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(textFieldCopyPage.root).toBeVisible();
    await expect(textFieldCopyPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, textFieldCopyPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: textFieldCopyPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
