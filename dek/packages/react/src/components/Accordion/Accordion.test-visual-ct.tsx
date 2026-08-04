import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Accordion.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../playwright/fixtures";
import { AccordionSize } from "./Accordion.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  accordionPage: {
    page: Page;
    root: Locator;
    accordionItem: Locator;
    toggle: () => Promise<void>;
  };
}>({
  accordionPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const accordionItem = page.getByRole("button", {
      name: "Accordion Item Ex nulla voluptate ex do ullamco",
    });

    const toggle = async () => {
      await accordionItem.click();
    };
    await use({
      page,
      root,
      accordionItem,
      toggle,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
      lightGrey: stories.WithCongstarWebLightGreyBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      white: stories.WithCongstarAppWhiteBackground,
      lightGrey: stories.WithCongstarAppLightGreyBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
      jaAgave80: stories.WithJaJaAgave80Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
      jaAgaveOutlinesSecondary:
        stories.WithJaJaAgaveOutlinesSecondaryBackground,
    },
    penny: {
      pennyRed: stories.WithPennyPennyRedBackground,
      pennyRedDark: stories.WithPennyPennyRedDarkBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render accordion`, async ({ mount, accordionPage }) => {
      await mount(<BackgroundStory />);
      await expect(accordionPage.root).toBeVisible();
      await accordionPage.toggle();
      await expect(accordionPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Autoscaling", () => {
  Object.entries(viewports).map(([name, viewport]) =>
    test.describe(`on a ${name} viewport`, () => {
      test.use(viewport);
      test("Should render available", async ({ accordionPage, mount }) => {
        await mount(<stories.Default />);
        await expect(accordionPage.root).toBeVisible();
        await expect(accordionPage.root).toHaveScreenshot();
      });
    }),
  );
});

const accordionSizes = ["medium", "large"] satisfies AccordionSize[];

accordionSizes.map((size) => {
  test.describe(`size ${size}`, () => {
    test("Should render", async ({ accordionPage, mount }) => {
      await mount(<stories.Default size={size} />);
      await expect(accordionPage.root).toBeVisible();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("Should render an open state", async ({ accordionPage, mount }) => {
      await mount(<stories.Default size={size} />);
      await accordionPage.toggle();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("Should render an focus state", async ({ accordionPage, mount }) => {
      await mount(<stories.Default size={size} />);
      await accordionPage.accordionItem.focus();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("Should render with Separators", async ({ accordionPage, mount }) => {
      await mount(<stories.WithSeparators size={size} />);
      await expect(accordionPage.root).toBeVisible();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("Should render with Price", async ({ accordionPage, mount }) => {
      await mount(<stories.WithPrice size={size} />);
      await expect(accordionPage.root).toBeVisible();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("Should render with Info", async ({ accordionPage, mount }) => {
      await mount(<stories.WithInfo size={size} />);
      await expect(accordionPage.root).toBeVisible();
      await expect(accordionPage.root).toHaveScreenshot();
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test.describe("highContrast light mode", () => {
    test("default state", async ({ mount, accordionPage }) => {
      await accordionPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(accordionPage.root).toBeVisible();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("open state", async ({ mount, accordionPage }) => {
      await accordionPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(accordionPage.root).toBeVisible();
      await accordionPage.toggle();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("focus state", async ({ mount, accordionPage }) => {
      await accordionPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(accordionPage.root).toBeVisible();
      await accordionPage.accordionItem.focus();
      await expect(accordionPage.root).toHaveScreenshot();
    });
  });

  test.describe("highContrast dark mode", () => {
    test("default state", async ({ mount, accordionPage }) => {
      await accordionPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(accordionPage.root).toBeVisible();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("open state", async ({ mount, accordionPage }) => {
      await accordionPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(accordionPage.root).toBeVisible();
      await accordionPage.toggle();
      await expect(accordionPage.root).toHaveScreenshot();
    });

    test("focus state", async ({ mount, accordionPage }) => {
      await accordionPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(accordionPage.root).toBeVisible();
      await accordionPage.accordionItem.focus();
      await expect(accordionPage.root).toHaveScreenshot();
    });
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    accordionPage,
  }) => {
    await accordionPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(accordionPage.root).toBeVisible();
    await expect(accordionPage.root).toHaveScreenshot();
  });

  test("focus of form elements", async ({ mount, accordionPage }) => {
    const radio10gb = accordionPage.page.getByRole("radio", {
      name: "10 GB",
      exact: false,
    });
    await mount(<stories.SelectionBoxes />);
    await expect(accordionPage.root).toBeVisible();
    await expect(radio10gb).toBeVisible();
    await radio10gb.focus();
    await expect(accordionPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, accordionPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: accordionPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
