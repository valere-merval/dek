import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./SelectionBoxPayment.stories.portable";
import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const clickSelectionBoxOuterEdge = async (page: Page, control: Locator) => {
  const box = await control.boundingBox();
  if (!box) throw new Error("SelectionBox control is not visible");

  await page.mouse.click(box.x - 8, box.y + box.height / 2);
};

const test = base.extend<{
  selectionBoxPaymentPage: {
    page: Page;
    root: Locator;
    group: Locator;
    item1: Locator;
    item2: Locator;
    item1Control: Locator;
    item2Control: Locator;
    item2Text: Locator;
    errorMessage: Locator;
  };
}>({
  selectionBoxPaymentPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const group = page.getByRole("radiogroup");
    const item1 = page.getByLabel("PayPal");
    const item2 = page.getByLabel("Kreditkarte");
    const item1Control = page.getByRole("radio", { name: "PayPal" });
    const item2Control = page.getByRole("radio", { name: "Kreditkarte" });
    const item2Text = page.getByText("Kreditkarte");
    const errorMessage = page.getByText("Es ist ein Fehler aufgetreten.");
    await use({
      page,
      root,
      group,
      item1,
      item2,
      item1Control,
      item2Control,
      item2Text,
      errorMessage,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
    },
    congstarApp: {},
    ja: {},
    penny: {},
  },
  (BackgroundStory) => {
    test(`Should render selectionBoxPayment`, async ({
      mount,
      selectionBoxPaymentPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxPaymentPage.root).toBeVisible();
      await expect(selectionBoxPaymentPage.item1).toBeVisible();
      await expect(selectionBoxPaymentPage.item2).toBeVisible();
      await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
    });

    test(`Should render selectionBoxPayment in hover state`, async ({
      mount,
      selectionBoxPaymentPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxPaymentPage.root).toBeVisible();
      await expect(selectionBoxPaymentPage.item2).toBeVisible();
      await selectionBoxPaymentPage.item2.hover({ force: true });
      await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
    });

    test(`Should render selectionBoxPayment in focus state`, async ({
      mount,
      selectionBoxPaymentPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxPaymentPage.root).toBeVisible();
      await expect(selectionBoxPaymentPage.item2).toBeVisible();
      await selectionBoxPaymentPage.item2.focus();
      await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
    });

    test(`Should render selectionBoxPayment in error state`, async ({
      mount,
      selectionBoxPaymentPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxPaymentPage.root).toBeVisible();
      await expect(selectionBoxPaymentPage.errorMessage).toBeVisible();
      await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous selectionBoxPayment in hover state`, async ({
      mount,
      selectionBoxPaymentPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxPaymentPage.root).toBeVisible();
      await selectionBoxPaymentPage.item2.hover({ force: true });
      await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous selectionBoxPayment in focus state`, async ({
      mount,
      selectionBoxPaymentPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxPaymentPage.root).toBeVisible();
      await selectionBoxPaymentPage.item2.focus();
      await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
    });
  },
);

test("Should select item 2 after clicking its label", async ({
  mount,
  selectionBoxPaymentPage,
}) => {
  await mount(<stories.Default />);
  await expect(selectionBoxPaymentPage.root).toBeVisible();
  await expect(selectionBoxPaymentPage.item2Text).toBeVisible();
  await selectionBoxPaymentPage.item2Text.click({ force: true });
  await expect(selectionBoxPaymentPage.item2Control).toBeChecked();
  await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
});

test("Should select item after clicking its outer edge", async ({
  mount,
  selectionBoxPaymentPage,
}) => {
  await mount(<stories.Default />);

  await clickSelectionBoxOuterEdge(
    selectionBoxPaymentPage.page,
    selectionBoxPaymentPage.item2Control,
  );
  await expect(selectionBoxPaymentPage.item2Control).toBeChecked();
  await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, selectionBoxPaymentPage }) => {
    await mount(<stories.Default />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    selectionBoxPaymentPage,
  }) => {
    await selectionBoxPaymentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.item1).toBeVisible();
    await expect(selectionBoxPaymentPage.item2).toBeVisible();
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and error state", async ({
    mount,
    selectionBoxPaymentPage,
  }) => {
    await selectionBoxPaymentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithError />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.item1).toBeVisible();
    await expect(selectionBoxPaymentPage.item2).toBeVisible();
    await expect(selectionBoxPaymentPage.errorMessage).toBeVisible();
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and hover state", async ({
    mount,
    selectionBoxPaymentPage,
  }) => {
    await selectionBoxPaymentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.item1).toBeVisible();
    await expect(selectionBoxPaymentPage.item2).toBeVisible();
    await selectionBoxPaymentPage.item2.hover({ force: true });
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    selectionBoxPaymentPage,
  }) => {
    await selectionBoxPaymentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.item1).toBeVisible();
    await expect(selectionBoxPaymentPage.item2).toBeVisible();
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and error state", async ({
    mount,
    selectionBoxPaymentPage,
  }) => {
    await selectionBoxPaymentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithError />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.item1).toBeVisible();
    await expect(selectionBoxPaymentPage.item2).toBeVisible();
    await expect(selectionBoxPaymentPage.errorMessage).toBeVisible();
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and hover state", async ({
    mount,
    selectionBoxPaymentPage,
  }) => {
    await selectionBoxPaymentPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.item1).toBeVisible();
    await expect(selectionBoxPaymentPage.item2).toBeVisible();
    await selectionBoxPaymentPage.item2.hover({ force: true });
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    selectionBoxPaymentPage,
  }) => {
    await selectionBoxPaymentPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(selectionBoxPaymentPage.root).toBeVisible();
    await expect(selectionBoxPaymentPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, selectionBoxPaymentPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: selectionBoxPaymentPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
