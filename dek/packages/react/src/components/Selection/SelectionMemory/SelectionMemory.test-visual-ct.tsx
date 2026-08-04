import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./SelectionMemory.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  selectionMemoryPage: {
    page: Page;
    root: Locator;
    selectionMemoryInitialValue: Locator;
    selectionMemorySelectedValue: Locator;
    selectionMemoryItem1: Locator;
    selectionMemoryItem2: Locator;
    selectionMemoryItem3: Locator;
  };
}>({
  selectionMemoryPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const selectionMemoryInitialValue = page.getByText("Speicher: 64 GB");
    const selectionMemorySelectedValue = page.getByText("Speicher: 128 GB");
    const selectionMemoryItem1 = page.getByRole("radio", { name: "64 GB" });
    const selectionMemoryItem2 = page.getByRole("radio", {
      name: "128 GB",
    });
    const selectionMemoryItem3 = page.getByRole("radio", {
      name: "512 GB",
    });
    await use({
      page,
      root,
      selectionMemoryInitialValue,
      selectionMemorySelectedValue,
      selectionMemoryItem1,
      selectionMemoryItem2,
      selectionMemoryItem3,
    });
  },
});

test.describe("selectionMemory ", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render selectionMemory on ${colorName} background`, async ({
        mount,
        selectionMemoryPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          selectionMemoryPage.selectionMemoryInitialValue,
        ).toBeVisible();
        await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
        await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
        await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
        await expect(selectionMemoryPage.root).toHaveScreenshot();
      });
      test(`Should render selectionMemory on ${colorName} background and click on item 2`, async ({
        mount,
        selectionMemoryPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(
          selectionMemoryPage.selectionMemoryInitialValue,
        ).toBeVisible();
        await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
        await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
        await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
        await selectionMemoryPage.selectionMemoryItem2.click();
        await expect(
          selectionMemoryPage.selectionMemorySelectedValue,
        ).toBeVisible();
        await expect(selectionMemoryPage.root).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("SelectionColorMemory", async ({ mount, selectionMemoryPage }) => {
    await mount(<stories.Default />);
    await expect(selectionMemoryPage.root).toBeVisible();
  });
});

test("Should render SelectionMemory with value", async ({
  mount,
  selectionMemoryPage,
}) => {
  await mount(<stories.Default value="128 GB" />);
  await expect(selectionMemoryPage.selectionMemorySelectedValue).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
  await expect(selectionMemoryPage.root).toHaveScreenshot();
});

test("that deselecting an already selected item is not possible", async ({
  mount,
  selectionMemoryPage,
}) => {
  await mount(<stories.Default />);
  await expect(selectionMemoryPage.selectionMemoryInitialValue).toBeVisible();
  await selectionMemoryPage.selectionMemoryItem1.click();
  await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
  await expect(selectionMemoryPage.root).toHaveScreenshot();
});

test("Should render SelectionMemory with focused value", async ({
  mount,
  selectionMemoryPage,
}) => {
  await mount(<stories.Default />);
  await expect(selectionMemoryPage.selectionMemoryInitialValue).toBeVisible();
  await selectionMemoryPage.selectionMemoryItem1.focus();
  await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
  await expect(selectionMemoryPage.root).toHaveScreenshot();
});

test("Should render SelectionMemory with hovered value", async ({
  mount,
  selectionMemoryPage,
}) => {
  await mount(<stories.Default />);
  await expect(selectionMemoryPage.selectionMemoryInitialValue).toBeVisible();
  await selectionMemoryPage.selectionMemoryItem2.hover();
  await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
  await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
  await expect(selectionMemoryPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    selectionMemoryPage,
  }) => {
    await selectionMemoryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(selectionMemoryPage.selectionMemoryInitialValue).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
    await expect(selectionMemoryPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, selectionMemoryPage }) => {
    await selectionMemoryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(selectionMemoryPage.selectionMemoryInitialValue).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
    await expect(selectionMemoryPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    selectionMemoryPage,
  }) => {
    await selectionMemoryPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(selectionMemoryPage.selectionMemoryInitialValue).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem1).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem2).toBeVisible();
    await expect(selectionMemoryPage.selectionMemoryItem3).toBeVisible();
    await expect(selectionMemoryPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, selectionMemoryPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: selectionMemoryPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
