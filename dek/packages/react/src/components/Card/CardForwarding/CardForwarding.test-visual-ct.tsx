import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CardForwarding.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  cardForwardingPage: {
    page: Page;
    root: Locator;
    button: Locator;
    link: Locator;
  };
}>({
  cardForwardingPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = page.getByRole("button", {
      name: "Weiter zu Fritz!Box 7530 AX",
    });
    const link = page.getByRole("link", {
      name: "Weiter zu Fritz!Box 7530 AX",
    });
    await use({
      page,
      root,
      button,
      link,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render cardForwarding`, async ({
      mount,
      cardForwardingPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(cardForwardingPage.button).toBeVisible();
      await expect(cardForwardingPage.root).toHaveScreenshot();

      await test.step("Should render hover state", async () => {
        await cardForwardingPage.button.hover();
        await expect(cardForwardingPage.root).toHaveScreenshot();
      });
    });

    test("Should render in focus state", async ({
      mount,
      cardForwardingPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(cardForwardingPage.button).toBeVisible();
      await cardForwardingPage.button.focus();
      await expect(cardForwardingPage.root).toHaveScreenshot();
    });
  },
);

test("Should render as an Anchor", async ({ mount, cardForwardingPage }) => {
  await mount(<stories.AsAnchor />);
  await expect(cardForwardingPage.link).toBeVisible();
  await expect(cardForwardingPage.root).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({ mount, cardForwardingPage }) => {
    await mount(<stories.Default />);
    await expect(cardForwardingPage.button).toBeVisible();
    await expect(cardForwardingPage.root).toHaveScreenshot();
  });

  test("Should render with title only", async ({
    mount,
    cardForwardingPage,
  }) => {
    await mount(<stories.WithTitleOnly />);
    await expect(
      cardForwardingPage.page.getByRole("button", {
        name: "Weiter zu FAQ-Bereich",
      }),
    ).toBeVisible();
    await expect(cardForwardingPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render", async ({ mount, cardForwardingPage }) => {
    await mount(<stories.Default />);
    await expect(cardForwardingPage.button).toBeVisible();
    await expect(cardForwardingPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, cardForwardingPage }) => {
    await cardForwardingPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(cardForwardingPage.button).toBeVisible();
    await expect(cardForwardingPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, cardForwardingPage }) => {
    await cardForwardingPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(cardForwardingPage.button).toBeVisible();
    await expect(cardForwardingPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    cardForwardingPage,
  }) => {
    await cardForwardingPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(cardForwardingPage.button).toBeVisible();
    await expect(cardForwardingPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, cardForwardingPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: cardForwardingPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
