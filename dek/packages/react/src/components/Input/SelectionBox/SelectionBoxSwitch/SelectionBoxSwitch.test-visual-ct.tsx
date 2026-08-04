import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./SelectionBoxSwitch.stories.portable";
import { viewports } from "../../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  switchCardPage: {
    page: Page;
    root: Locator;
    title: Locator;
    description: Locator;
    switchDescription: Locator;
    moreDetails: Locator;
    switchButton: Locator;
  };
}>({
  switchCardPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const title = page.getByRole("heading", {
      name: "congstar Rücknahmedeal",
    });
    const description = page.getByText(
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    );
    const switchDescription = page.getByText("Vorteil nutzen");
    const moreDetails = page.getByRole("link", {
      name: "Details und Rücknahmekonditionen",
    });
    const switchButton = page.getByRole("switch", { name: "Vorteil nutzen" });
    await use({
      page,
      root,
      title,
      description,
      switchDescription,
      moreDetails,
      switchButton,
    });
  },
});

test.describe("Default", () => {
  test(`Should render switchCard`, async ({ mount, switchCardPage }) => {
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.title).toBeVisible();
    await expect(switchCardPage.description).toBeVisible();
    await expect(switchCardPage.switchDescription).toBeVisible();
    await expect(switchCardPage.moreDetails).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });
  test(`Should render switchCard without icon`, async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.WithoutIcon />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });
  test(`Should render switchCard without link`, async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.WithoutLink />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.moreDetails).not.toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });
});

test.describe("Different States", () => {
  test("should render checked switchCard ", async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await switchCardPage.root.click();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("should render unchecked switchCard in hover state", async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await switchCardPage.root.hover();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("should render checked switchCard in hover state", async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await switchCardPage.root.click();
    await switchCardPage.root.hover();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("should render unchecked switchCard in error state", async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.WithError />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("should render unchecked switchCard in focus state", async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.Default />);
    await switchCardPage.switchButton.focus();
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("should render unchecked switchCard in error state on Hover", async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.WithError />);
    await expect(switchCardPage.root).toBeVisible();
    await switchCardPage.root.hover();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("should render checked switchCard in error state", async ({
    mount,
    switchCardPage,
  }) => {
    await mount(<stories.WithError />);
    await expect(switchCardPage.root).toBeVisible();
    await switchCardPage.root.click();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("should render disabled state", async ({ mount, switchCardPage }) => {
    await mount(<stories.Disabled />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);
  test("Should wrap in small viewport", async ({ mount, switchCardPage }) => {
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.title).toBeVisible();
    await expect(switchCardPage.description).toBeVisible();
    await expect(switchCardPage.switchDescription).toBeVisible();
    await expect(switchCardPage.moreDetails).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, switchCardPage }) => {
    await switchCardPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode in checked state", async ({
    mount,
    switchCardPage,
  }) => {
    await switchCardPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await switchCardPage.root.click();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, switchCardPage }) => {
    await switchCardPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    switchCardPage,
  }) => {
    await switchCardPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(switchCardPage.root).toBeVisible();
    await expect(switchCardPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, switchCardPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: switchCardPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
