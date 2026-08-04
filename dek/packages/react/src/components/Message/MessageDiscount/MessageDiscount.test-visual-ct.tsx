import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./MessageDiscount.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  messageDiscountPage: {
    page: Page;
    root: Locator;
    discounts: Locator;
    discount: Locator;
    divider: Locator;
    label1: Locator;
    label2: Locator;
    headline1: Locator;
    headline2: Locator;
    description: Locator;
    button: Locator;
  };
}>({
  messageDiscountPage: async ({ page }, use) => {
    const root = page.locator("#root");

    const discounts = page.getByRole("list");
    const discount = discounts.getByRole("listitem");

    const divider = page.locator("hr").locator("visible=true");

    const label1 = page.getByText("Dein persönlicher Rabatt", {
      exact: true,
    });

    const label2 = page.getByText("Aktion", { exact: true });

    const headline1 = page.getByText("Nur 2 € im ersten Monat");

    const headline2 = page.getByText(
      "Teste den Tarif im ersten Monat für nur 1,99 €",
    );

    const description = page.getByText(
      "Dein persönlicher Rabatt macht den Einstieg leicht – starte entspannt und günstig!",
    );

    const button = page.getByRole("button", { name: "Zur Aktion" });

    await use({
      page,
      root,
      discounts,
      discount,
      divider,
      label1,
      label2,
      headline1,
      headline2,
      description,
      button,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
      lightGrey: stories.WithCongstarWebLightGreyBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      white: stories.WithCongstarAppWhiteBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
      lightGrey: stories.WithCongstarAppLightGreyBackground,
    },
    ja: {
      jaAgave80: stories.WithJaJaAgave80Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
      jaAgaveOutlinesSecondary:
        stories.WithJaJaAgaveOutlinesSecondaryBackground,
      jaAgave20: stories.WithJaJaAgave20Background,
    },
    penny: {
      pennyRed: stories.WithPennyPennyRedBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
      pennyRedDark: stories.WithPennyPennyRedDarkBackground,
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render MessageDiscount`, async ({
      mount,
      messageDiscountPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(messageDiscountPage.discounts).toBeVisible();
      await expect(messageDiscountPage.discount).toHaveCount(2);
      await expect(
        messageDiscountPage.discount
          .nth(0)
          .filter({ has: messageDiscountPage.label1 }),
      ).toBeVisible();
      await expect(
        messageDiscountPage.discount
          .nth(0)
          .filter({ has: messageDiscountPage.headline1 }),
      ).toBeVisible();
      await expect(
        messageDiscountPage.discount
          .nth(0)
          .filter({ has: messageDiscountPage.description }),
      ).toBeVisible();
      await expect(
        messageDiscountPage.discount
          .nth(1)
          .filter({ has: messageDiscountPage.headline2 }),
      ).toBeVisible();
      await expect(messageDiscountPage.divider).toHaveCount(1);
      await expect(messageDiscountPage.root).toHaveScreenshot();
    });

    test(`Should render MessageDiscount without outline`, async ({
      mount,
      messageDiscountPage,
    }) => {
      await mount(<BackgroundStory variant="primary" />);
      await expect(messageDiscountPage.discounts).toBeVisible();
      await expect(messageDiscountPage.discount).toHaveCount(2);
      await expect(
        messageDiscountPage.discount
          .nth(0)
          .filter({ has: messageDiscountPage.label1 }),
      ).toBeVisible();
      await expect(
        messageDiscountPage.discount
          .nth(0)
          .filter({ has: messageDiscountPage.headline1 }),
      ).toBeVisible();
      await expect(
        messageDiscountPage.discount
          .nth(0)
          .filter({ has: messageDiscountPage.description }),
      ).toBeVisible();
      await expect(
        messageDiscountPage.discount
          .nth(1)
          .filter({ has: messageDiscountPage.headline2 }),
      ).toBeVisible();
      await expect(messageDiscountPage.divider).toHaveCount(1);
      await expect(messageDiscountPage.root).toHaveScreenshot();
    });
  },
);

test("Should render MessageDiscount without outline on fullWidth", async ({
  mount,
  messageDiscountPage,
}) => {
  await mount(<stories.Default fullWidth={true} variant="primary" />);
  await expect(messageDiscountPage.discounts).toBeVisible();
  await expect(messageDiscountPage.root).toHaveScreenshot();
});

test("Should render MessageDiscount on fullWidth", async ({
  mount,
  messageDiscountPage,
}) => {
  await mount(<stories.Default fullWidth={true} />);
  await expect(messageDiscountPage.discounts).toBeVisible();
  await expect(messageDiscountPage.root).toHaveScreenshot();
});

test("Should render MessageDiscount without label", async ({
  mount,
  messageDiscountPage,
}) => {
  await mount(<stories.WithoutLabel />);
  await expect(messageDiscountPage.discounts).toBeVisible();
  await expect(messageDiscountPage.label1).not.toBeVisible();
  await expect(messageDiscountPage.label2).not.toBeVisible();
  await expect(messageDiscountPage.root).toHaveScreenshot();
});

test("Should render MessageDiscount without children", async ({
  mount,
  messageDiscountPage,
}) => {
  await mount(<stories.WithoutChildren />);
  await expect(messageDiscountPage.discounts).toBeVisible();
  await expect(messageDiscountPage.description).not.toBeVisible();
  await expect(messageDiscountPage.button).not.toBeVisible();
  await expect(messageDiscountPage.root).toHaveScreenshot();
});

test("Should render MessageDiscount without discount headline", async ({
  mount,
  messageDiscountPage,
}) => {
  await mount(<stories.WithoutDiscountHeadline />);
  await expect(messageDiscountPage.discounts).toBeVisible();
  await expect(messageDiscountPage.root).toHaveScreenshot();
});

test("Should render MessageDiscount with one item and no divider", async ({
  mount,
  messageDiscountPage,
}) => {
  await mount(<stories.WithOneItem />);
  await expect(messageDiscountPage.discounts).toBeVisible();
  await expect(messageDiscountPage.discount).toBeVisible();
  await expect(messageDiscountPage.discount).toHaveCount(1);
  await expect(messageDiscountPage.label2).toBeVisible();
  await expect(messageDiscountPage.headline2).toBeVisible();
  await expect(messageDiscountPage.button).toBeVisible();
  await expect(messageDiscountPage.divider).toHaveCount(0);
  await expect(messageDiscountPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, messageDiscountPage }) => {
    await mount(<stories.Default />);
    await expect(messageDiscountPage.discounts).toBeVisible();
    await expect(messageDiscountPage.discount).toHaveCount(2);
    await expect(
      messageDiscountPage.discount
        .nth(0)
        .filter({ has: messageDiscountPage.label1 }),
    ).toBeVisible();
    await expect(
      messageDiscountPage.discount
        .nth(0)
        .filter({ has: messageDiscountPage.headline1 }),
    ).toBeVisible();
    await expect(
      messageDiscountPage.discount
        .nth(0)
        .filter({ has: messageDiscountPage.description }),
    ).toBeVisible();
    await expect(
      messageDiscountPage.discount
        .nth(1)
        .filter({ has: messageDiscountPage.headline2 }),
    ).toBeVisible();
    await expect(messageDiscountPage.divider).toHaveCount(1);
    await expect(messageDiscountPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    messageDiscountPage,
  }) => {
    await messageDiscountPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(messageDiscountPage.discounts).toBeVisible();
    await expect(messageDiscountPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, messageDiscountPage }) => {
    await messageDiscountPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(messageDiscountPage.discounts).toBeVisible();
    await expect(messageDiscountPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    messageDiscountPage,
  }) => {
    await messageDiscountPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(messageDiscountPage.discounts).toBeVisible();
    await expect(messageDiscountPage.root).toHaveScreenshot();
  });

  test("should have accessible name in list", async ({
    mount,
    messageDiscountPage,
  }) => {
    await messageDiscountPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(messageDiscountPage.discounts).toBeVisible();
    await expect(messageDiscountPage.discounts).toHaveAccessibleName(
      "Deine Rabatte",
    );
  });

  test("axe report", async ({ mount, messageDiscountPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: messageDiscountPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
