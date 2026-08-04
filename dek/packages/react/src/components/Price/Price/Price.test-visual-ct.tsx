import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Price.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  pricePage: {
    page: Page;
    price: Locator;
    root: Locator;
  };
}>({
  pricePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const price = page.getByText("Mindestens 25,99€ pro 6 Monate");
    await use({
      page,
      price,
      root,
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
    test("Should render price", async ({ mount, pricePage }) => {
      await mount(
        <BackgroundStory size={{ mobile: "large", desktop: "large" }} />,
      );
      await expect(pricePage.price).toBeVisible();
      await expect(pricePage.root).toHaveScreenshot();
    });
  },
);

const responsiveViewports = [
  {
    viewport: viewports.sm,
    name: "small",
    variant: "small",
  },
  {
    viewport: viewports.md,
    name: "medium",
    variant: "medium",
  },
];

test.describe(`responsive behavior`, () => {
  responsiveViewports.map((viewport) => {
    test.describe(`${viewport.variant} variant on  ${viewport.name} viewport`, () => {
      test.use(viewport.viewport);

      test("Should render Price", async ({ mount, pricePage }) => {
        await mount(<stories.Default />);
        await expect(pricePage.price).toBeVisible();
        await expect(pricePage.root).toHaveScreenshot();
      });

      test("Should render Price without Billingperiod", async ({
        mount,
        pricePage,
      }) => {
        await mount(<stories.WithoutBillingperiod />);
        await expect(
          pricePage.page.getByText("Mindestens 25,99€ "),
        ).toBeVisible();
        await expect(pricePage.root).toHaveScreenshot();
      });

      test("Should render a Price with Strike through Price", async ({
        mount,
        pricePage,
      }) => {
        await mount(<stories.WithStrikeThroughPrice />);
        await expect(
          pricePage.page.getByText("Mindestens 25,33€ pro 6 Monate"),
        ).toBeVisible();
        await expect(pricePage.root).toHaveScreenshot();
      });
      test("should not display strikethrough if it equals actual price", async ({
        mount,
        pricePage,
      }) => {
        await mount(<stories.Default price={25} strikeThroughPrice={25} />);
        await expect(
          pricePage.page.getByText("Mindestens 25,00€"),
        ).toBeVisible();
        await expect(pricePage.root).toHaveScreenshot();
      });
      test("should not display strikethrough if its lower than actual price", async ({
        mount,
        pricePage,
      }) => {
        await mount(<stories.Default price={25} strikeThroughPrice={15} />);
        await expect(
          pricePage.page.getByText("Mindestens 25,00€"),
        ).toBeVisible();
        await expect(pricePage.root).toHaveScreenshot();
      });
      test("should not render modal-footnotes given an empty array of footnotes", async ({
        mount,
        pricePage,
      }) => {
        await mount(<stories.Default footnotes={[]} />);
        await expect(pricePage.price).toBeVisible();
        await expect(pricePage.root).toHaveScreenshot();
      });
      test("should render a suffix", async ({ mount, pricePage }) => {
        await mount(<stories.WithSuffix footnotes={[]} />);
        await expect(pricePage.price).toBeVisible();
        await expect(
          pricePage.page.getByText("zzgl. 50,00 € Bereitstellungspreis"),
        ).toBeVisible();
        await expect(pricePage.root).toHaveScreenshot();
      });
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, pricePage }) => {
    await pricePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(pricePage.price).toBeVisible();
    await expect(pricePage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, pricePage }) => {
    await pricePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(pricePage.price).toBeVisible();
    await expect(pricePage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    pricePage,
  }) => {
    await pricePage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(pricePage.price).toBeVisible();
    await expect(pricePage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, pricePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: pricePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
