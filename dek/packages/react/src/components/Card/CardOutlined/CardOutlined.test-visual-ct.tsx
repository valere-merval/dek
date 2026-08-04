import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CardOutlined.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import { CardSize } from "../shared/Card.types";

const test = base.extend<{
  cardOutlinedPage: {
    page: Page;
    root: Locator;
    main: Locator;
  };
}>({
  cardOutlinedPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const main = page.getByText("Card");
    await use({
      page,
      root,
      main,
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
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
      jaGeneralWhite: stories.WithJaJaGeneralWhiteBackground,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
      pennyNeutralWhite: stories.WithPennyPennyNeutralWhiteBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render cardOutlined`, async ({ mount, cardOutlinedPage }) => {
      await mount(<BackgroundStory />);
      await expect(cardOutlinedPage.root).toBeVisible();
      await expect(cardOutlinedPage.main).toBeVisible();
      await expect(cardOutlinedPage.root).toHaveScreenshot();
    });
  },
);

const cardSizes = [
  "extraSmall",
  "small",
  "medium",
  "large",
  "extraLarge",
] satisfies CardSize[];

test.describe("CardOutlined", () => {
  cardSizes.map((size) => {
    test.describe("Small Viewport", () => {
      test.use(viewports.sm);

      test(`Should wrap in small viewport with size ${size}`, async ({
        mount,
        cardOutlinedPage,
      }) => {
        await mount(<stories.Default size={size} />);
        await expect(cardOutlinedPage.root).toBeVisible();
        await expect(cardOutlinedPage.main).toBeVisible();
        await expect(cardOutlinedPage.root).toHaveScreenshot();
      });
    });
    test.describe("Large Viewport", () => {
      test(`Should wrap in large viewport with size ${size}`, async ({
        mount,
        cardOutlinedPage,
      }) => {
        await mount(<stories.Default size={size} />);
        await expect(cardOutlinedPage.root).toBeVisible();
        await expect(cardOutlinedPage.main).toBeVisible();
        await expect(cardOutlinedPage.root).toHaveScreenshot();
      });
    });
  });
});
