import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./SelectionBoxRadio.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../../playwright/fixtures";
import type { BackgroundColor, Brand } from "../../../../theme/theme";
import AxeBuilder from "@axe-core/playwright";

const clickSelectionBoxOuterEdge = async (page: Page, control: Locator) => {
  const box = await control.boundingBox();
  if (!box) throw new Error("SelectionBox control is not visible");

  await page.mouse.click(box.x - 8, box.y + box.height / 2);
};

const mobileScreenshotHeights: Partial<
  Record<Brand, Partial<Record<BackgroundColor, number>>>
> = {
  congstarWeb: {
    black: 540,
    white: 540,
  },
  congstarApp: {
    black: 550,
    white: 550,
  },
  ja: {
    jaGeneralWhite: 520,
  },
  penny: {
    pennyNeutralWhite: 500,
  },
};

const stabilizeMobileScreenshotHeight = async (
  root: Locator,
  brand: Brand,
  backgroundColor: BackgroundColor,
) => {
  const height = mobileScreenshotHeights[brand]?.[backgroundColor] ?? 520;
  await root.evaluate((element, rootHeight) => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.height = `${rootHeight}px`;
    htmlElement.style.overflow = "hidden";
  }, height);
};

const test = base.extend<{
  selectionBoxRadioPage: {
    page: Page;
    root: Locator;
    group: Locator;
    item1: Locator;
    item2: Locator;
    item1Control: Locator;
    item2Control: Locator;
    item2SubText: Locator;
    expandedContentSelectionBox: Locator;
    expandedContentItem: Locator;
    errorMessage: Locator;
  };
}>({
  selectionBoxRadioPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const group = page.getByRole("radiogroup");
    const item1 = page.getByLabel("5G Speed Option");
    const item2 = page.getByLabel("share Tut Gutes Option 4 GB");
    const item1Control = page.getByRole("radio", { name: "5G Speed Option" });
    const item2Control = page.getByRole("radio", {
      name: "share Tut Gutes Option 4 GB",
    });
    const item2SubText = page.getByText(
      "Erhöhe dein Datenvolumen und unterstütze Kinder mit digitaler Bildung",
    );
    const expandedContentItem = page.getByText(
      "Max. 100 Mbit/s Download und Upload 40 Mbit/s",
    );
    const errorMessage = page.getByText("Es ist ein Fehler aufgetreten.");
    const expandedContentSelectionBox = page
      .locator("div")
      .filter({ hasText: "250 Mbit/s Mehrere Geräte" })
      .nth(5);
    await use({
      page,
      root,
      group,
      item1,
      item2,
      item1Control,
      item2Control,
      item2SubText,
      expandedContentItem,
      expandedContentSelectionBox,
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
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      white: stories.WithCongstarAppWhiteBackground,
    },
    ja: {
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
    },
    penny: {
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
    },
  },
  (BackgroundStory, brand, backgroundColor) => {
    test(`Should render selectionBoxRadio`, async ({
      mount,
      selectionBoxRadioPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxRadioPage.root).toBeVisible();
      await expect(selectionBoxRadioPage.item1).toBeVisible();
      await expect(selectionBoxRadioPage.item2).toBeVisible();
      await expect(selectionBoxRadioPage.root).toHaveScreenshot();
    });

    test.describe("Should render selectionBoxRadio", () => {
      test.use(viewports.sm);
      test(`on mobile`, async ({ mount, selectionBoxRadioPage }) => {
        await mount(<BackgroundStory />);
        await expect(selectionBoxRadioPage.root).toBeVisible();
        await stabilizeMobileScreenshotHeight(
          selectionBoxRadioPage.root,
          brand,
          backgroundColor,
        );
        await expect(selectionBoxRadioPage.root).toHaveScreenshot();
      });
    });

    test(`Should render selectionBoxRadio in hover state`, async ({
      mount,
      selectionBoxRadioPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxRadioPage.root).toBeVisible();
      await expect(selectionBoxRadioPage.item2).toBeVisible();
      await selectionBoxRadioPage.item2.hover({ force: true });
      await expect(selectionBoxRadioPage.root).toHaveScreenshot();
    });

    test(`Should render selectionBoxRadio in focus state`, async ({
      mount,
      selectionBoxRadioPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(selectionBoxRadioPage.root).toBeVisible();
      await expect(selectionBoxRadioPage.item2).toBeVisible();
      await selectionBoxRadioPage.item2.focus();
      await expect(selectionBoxRadioPage.root).toHaveScreenshot();
    });

    test(`Should render selectionBoxRadio in error state`, async ({
      mount,
      selectionBoxRadioPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxRadioPage.root).toBeVisible();
      await expect(selectionBoxRadioPage.errorMessage).toBeVisible();
      await expect(selectionBoxRadioPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous selectionBoxRadio in hover state`, async ({
      mount,
      selectionBoxRadioPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxRadioPage.root).toBeVisible();
      await selectionBoxRadioPage.item2.hover({ force: true });
      await expect(selectionBoxRadioPage.root).toHaveScreenshot();
    });

    test(`Should render a erroneous selectionBoxRadio in focus state`, async ({
      mount,
      selectionBoxRadioPage,
    }) => {
      await mount(
        <BackgroundStory
          defaultValue={undefined}
          messages={[
            { message: "Es ist ein Fehler aufgetreten.", type: "error" },
          ]}
        />,
      );
      await expect(selectionBoxRadioPage.root).toBeVisible();
      await selectionBoxRadioPage.item2.focus();
      await expect(selectionBoxRadioPage.root).toHaveScreenshot();
    });
  },
);

test("Should render with no grid", async ({ mount, selectionBoxRadioPage }) => {
  await mount(<stories.HeaderImage noGrid />);
  await expect(selectionBoxRadioPage.root).toBeVisible();
  await expect(selectionBoxRadioPage.item1).toBeVisible();
  await expect(selectionBoxRadioPage.item2).toBeVisible();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test("Should render item 2 as selected after click", async ({
  mount,
  selectionBoxRadioPage,
}) => {
  await mount(<stories.HeaderImage />);
  await expect(selectionBoxRadioPage.root).toBeVisible();
  await expect(selectionBoxRadioPage.item1).toBeVisible();
  await expect(selectionBoxRadioPage.item2).toBeVisible();
  await selectionBoxRadioPage.item2.click({ force: true });
  await expect(selectionBoxRadioPage.item2Control).toBeChecked();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test("Should select item 2 after clicking its sub text", async ({
  mount,
  selectionBoxRadioPage,
}) => {
  await mount(<stories.HeaderImage />);
  await expect(selectionBoxRadioPage.root).toBeVisible();
  await expect(selectionBoxRadioPage.item2SubText).toBeVisible();
  await selectionBoxRadioPage.item2SubText.click({ force: true });
  await expect(selectionBoxRadioPage.item2Control).toBeChecked();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test("Should render with links", async ({ mount, selectionBoxRadioPage }) => {
  await mount(<stories.WithLinks />);
  await expect(selectionBoxRadioPage.root).toBeVisible();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test("Should select item after clicking its outer edge", async ({
  mount,
  selectionBoxRadioPage,
}) => {
  await mount(<stories.WithLinks />);
  const item2Control = selectionBoxRadioPage.page.getByRole("radio", {
    name: "AllnetFlat M Extra mit GB+",
  });

  await clickSelectionBoxOuterEdge(selectionBoxRadioPage.page, item2Control);
  await expect(item2Control).toBeChecked();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test("Should render with discounts", async ({
  mount,
  selectionBoxRadioPage,
}) => {
  await mount(<stories.Discounts />);
  await expect(selectionBoxRadioPage.root).toBeVisible();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test("Should render with large header image", async ({
  mount,
  selectionBoxRadioPage,
}) => {
  await mount(<stories.LargeImage />);
  await expect(selectionBoxRadioPage.root).toBeVisible();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test("Should render a SelectionBox with duration", async ({
  mount,
  selectionBoxRadioPage,
}) => {
  await mount(<stories.Duration />);
  await expect(selectionBoxRadioPage.root).toBeVisible();
  await expect(selectionBoxRadioPage.root).toHaveScreenshot();
});

test.describe("Expanded Content", () => {
  test("Should render", async ({ mount, selectionBoxRadioPage }) => {
    await mount(<stories.ExpandedContent />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("Should not render expanded content when item is not selected", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await mount(<stories.ExpandedContent />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.expandedContentItem).toBeVisible();
    await selectionBoxRadioPage.page
      .getByLabel("600 Mbit/s")
      .click({ force: true });
    await expect(selectionBoxRadioPage.expandedContentItem).not.toBeVisible();
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, selectionBoxRadioPage }) => {
    await mount(<stories.Default />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("Should render a SelectionBox with duration", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await mount(<stories.Duration />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await selectionBoxRadioPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.HeaderImage />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.item1).toBeVisible();
    await expect(selectionBoxRadioPage.item2).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and error state", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await selectionBoxRadioPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(
      <stories.HeaderImage
        defaultValue={undefined}
        messages={[
          { message: "Es ist ein Fehler aufgetreten.", type: "error" },
        ]}
      />,
    );
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.item1).toBeVisible();
    await expect(selectionBoxRadioPage.item2).toBeVisible();
    await expect(selectionBoxRadioPage.errorMessage).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode and hover state", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await selectionBoxRadioPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.HeaderImage />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.item1).toBeVisible();
    await expect(selectionBoxRadioPage.item2).toBeVisible();
    await selectionBoxRadioPage.item2.hover({ force: true });
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await selectionBoxRadioPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.HeaderImage />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.item1).toBeVisible();
    await expect(selectionBoxRadioPage.item2).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and error state", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await selectionBoxRadioPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(
      <stories.HeaderImage
        defaultValue={undefined}
        messages={[
          { message: "Es ist ein Fehler aufgetreten.", type: "error" },
        ]}
      />,
    );
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.item1).toBeVisible();
    await expect(selectionBoxRadioPage.item2).toBeVisible();
    await expect(selectionBoxRadioPage.errorMessage).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode and hover state", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await selectionBoxRadioPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.HeaderImage />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.item1).toBeVisible();
    await expect(selectionBoxRadioPage.item2).toBeVisible();
    await selectionBoxRadioPage.item2.hover({ force: true });
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await selectionBoxRadioPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    await expect(selectionBoxRadioPage.root).toHaveScreenshot();
  });

  test("Input element has content, promotion and discount linked via aria-describedBy", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await mount(<stories.Duration />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    const item1 = selectionBoxRadioPage.page.getByLabel("24 Monate Laufzeit");
    const item2 = selectionBoxRadioPage.page.getByLabel("12 Monate Laufzeit");
    await expect(item1).toHaveAccessibleDescription(
      "Aktion! Monatliche Kosten 20,00 € statt 22,99 € Einmalige Kosten 20,00 € statt 22,99 € 40,00 € statt 44,99 € Gesamtkosten Zu den Tarifdetails",
    );
    await expect(item2).toHaveAccessibleDescription(
      "Aktion! 6 Monate zum halben Preis Monatliche Kosten 20,00 € statt 22,99 € Einmalige Kosten 20,00 € statt 22,99 €",
    );
  });

  test("should open link when pressing Enter key on link in content", async ({
    mount,
    selectionBoxRadioPage,
  }) => {
    await mount(<stories.TextVariation />);
    await expect(selectionBoxRadioPage.root).toBeVisible();
    const link = selectionBoxRadioPage.page.getByRole("link", {
      name: "Allgemeinen",
    });
    await link.focus();
    await selectionBoxRadioPage.page.keyboard.press("Enter");
    await expect(selectionBoxRadioPage.page).toHaveURL(
      "https://www.congstar.de/agb",
    );
  });

  test("axe report", async ({ mount, selectionBoxRadioPage }) => {
    await mount(<stories.HeaderImage />);

    const accessibilityScanResults = await new AxeBuilder({
      page: selectionBoxRadioPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
