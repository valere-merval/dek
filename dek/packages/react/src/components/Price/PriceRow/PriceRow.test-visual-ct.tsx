import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./PriceRow.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  priceRowPage: {
    page: Page;
    root: Locator;
    modalTrigger: Locator;
    modal: Locator;
  };
}>({
  priceRowPage: async ({ page }, use) => {
    const root = page.locator("#root");

    await use({
      page,
      root,
      modalTrigger: page.getByRole("button").first(),
      modal: page.getByRole("dialog"),
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
      blue: stories.WithCongstarWebBlueBackground,
      lightGrey: stories.WithCongstarWebLightGreyBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      white: stories.WithCongstarAppWhiteBackground,
      blue: stories.WithCongstarAppBlueBackground,
      lightGrey: stories.WithCongstarAppLightGreyBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
      jaAgave80: stories.WithJaJaAgave80Background,
      jaAgaveOutlinesSecondary:
        stories.WithJaJaAgaveOutlinesSecondaryBackground,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
      pennyRed: stories.WithPennyPennyRedBackground,
      pennyRedDark: stories.WithPennyPennyRedDarkBackground,
    },
  },
  (BackgroundStory) => {
    test("Should render priceRow", async ({ mount, priceRowPage }) => {
      await mount(<BackgroundStory />);
      await expect(priceRowPage.root).toBeVisible();
      await expect(priceRowPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, priceRowPage }) => {
    await mount(<stories.Default />);

    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });

  test("Should wrap in small viewport with strikethrough", async ({
    mount,
    priceRowPage,
  }) => {
    await mount(<stories.WithStrikeThroughPrice />);

    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({ mount, priceRowPage }) => {
    await mount(<stories.Default />);

    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });

  test("Should wrap in large viewport with strikethrough", async ({
    mount,
    priceRowPage,
  }) => {
    await mount(<stories.WithStrikeThroughPrice />);

    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });
});

test.describe("Alignment", () => {
  test("Should render a PriceRow only on the left", async ({
    mount,
    priceRowPage,
  }) => {
    await mount(<stories.AlignLeftOnly />);
    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });

  test("Should render a PriceRow only on the right", async ({
    mount,
    priceRowPage,
  }) => {
    await mount(<stories.AlignRightOnly />);
    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });
});

test("Should render PriceRow with only a Prefix", async ({
  mount,
  priceRowPage,
}) => {
  await mount(<stories.WithPrefixOnly />);
  await expect(priceRowPage.root).toBeVisible();
  await expect(priceRowPage.root).toHaveScreenshot();
});

test("Should render PriceRow with only a Suffix", async ({
  mount,
  priceRowPage,
}) => {
  await mount(<stories.WithSuffixOnly />);
  await expect(priceRowPage.root).toBeVisible();
  await expect(priceRowPage.root).toHaveScreenshot();
});

test("Should render a PriceRow with Footnotes", async ({
  mount,
  priceRowPage,
}) => {
  await mount(<stories.WithFootnotes />);
  await expect(priceRowPage.root).toBeVisible();
  await expect(priceRowPage.root).toHaveScreenshot();
});

test("Should render PriceRow with only one Prefix and one Suffix", async ({
  mount,
  priceRowPage,
}) => {
  await mount(<stories.WithPrefixAndSuffix />);
  await expect(priceRowPage.root).toBeVisible();
  await expect(priceRowPage.root).toHaveScreenshot();
});

test("Should render footnotes in a modal", async ({ mount, priceRowPage }) => {
  await mount(<stories.WithFootnotes />);
  await expect(priceRowPage.root).toBeVisible();
  await priceRowPage.modalTrigger.click();
  await expect(priceRowPage.page).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, priceRowPage }) => {
    await priceRowPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithFootnotes />);

    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, priceRowPage }) => {
    await priceRowPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithFootnotes />);

    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    priceRowPage,
  }) => {
    await priceRowPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.WithFootnotes />);

    await expect(priceRowPage.root).toBeVisible();
    await expect(priceRowPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, priceRowPage }) => {
    await mount(<stories.WithFootnotes />);

    const accessibilityScanResults = await new AxeBuilder({
      page: priceRowPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
