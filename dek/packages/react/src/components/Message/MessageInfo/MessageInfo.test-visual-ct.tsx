import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./MessageInfo.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  MessageInfoPage: {
    page: Page;
    root: Locator;
    headline: Locator;
    description: Locator;
  };
}>({
  MessageInfoPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const headline = page.getByText("Bitte beachte");
    const description = page.getByText(
      "Mit Klick auf “eSIM bestellen” wird deine alte SIM deaktiviert",
    );
    await use({
      page,
      root,
      headline,
      description,
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
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
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
    test(`Should render MessageInfo`, async ({ mount, MessageInfoPage }) => {
      await mount(<BackgroundStory />);
      await expect(MessageInfoPage.headline).toBeVisible();
      await expect(MessageInfoPage.description).toBeVisible();
      await expect(MessageInfoPage.root).toHaveScreenshot();
    });

    test(`Should render MessageInfo with outline`, async ({
      mount,
      MessageInfoPage,
    }) => {
      await mount(<BackgroundStory variant="outlined" />);
      await expect(MessageInfoPage.headline).toBeVisible();
      await expect(MessageInfoPage.description).toBeVisible();
      await expect(MessageInfoPage.root).toHaveScreenshot();
    });
  },
);

test("Should render MessageInfo with outline on FullWidth", async ({
  mount,
  MessageInfoPage,
}) => {
  await mount(<stories.WithOutlineFullWidth />);
  await expect(MessageInfoPage.root).toHaveScreenshot();
});

test("Should render a info without icon", async ({
  mount,
  MessageInfoPage,
}) => {
  await mount(<stories.WithoutIcon />);
  await expect(MessageInfoPage.headline).toBeVisible();
  await expect(MessageInfoPage.description).toBeVisible();
  await expect(MessageInfoPage.root).toHaveScreenshot();
});

test("Should render a info without headline", async ({
  mount,
  MessageInfoPage,
}) => {
  await mount(<stories.WithoutHeadline />);
  await expect(MessageInfoPage.description).toBeVisible();
  await expect(MessageInfoPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, MessageInfoPage }) => {
    await mount(<stories.WithWordWrap />);
    await expect(MessageInfoPage.headline).toBeVisible();
    await expect(MessageInfoPage.description).toBeVisible();
    await expect(MessageInfoPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("lineHeight and letterSpacing modification", async ({
      mount,
      MessageInfoPage,
    }) => {
      await MessageInfoPage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(MessageInfoPage.headline).toBeVisible();
      await expect(MessageInfoPage.description).toBeVisible();
      await expect(MessageInfoPage.root).toHaveScreenshot();
    });

    test("highContrast and light mode", async ({ mount, MessageInfoPage }) => {
      await MessageInfoPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(MessageInfoPage.headline).toBeVisible();
      await expect(MessageInfoPage.description).toBeVisible();
      await expect(MessageInfoPage.root).toHaveScreenshot();
    });

    test("highContrast and dark mode", async ({ mount, MessageInfoPage }) => {
      await MessageInfoPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(MessageInfoPage.headline).toBeVisible();
      await expect(MessageInfoPage.description).toBeVisible();
      await expect(MessageInfoPage.root).toHaveScreenshot();
    });

    test("axe report", async ({ mount, MessageInfoPage }) => {
      await mount(<stories.Default />);

      const accessibilityScanResults = await new AxeBuilder({
        page: MessageInfoPage.page,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
