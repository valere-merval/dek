import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxBottomActivation.stories.portable";

import AxeBuilder from "@axe-core/playwright";
import { testDescribeAllowedBackgrounds } from "../../../../../playwright/fixtures";

const test = base.extend<{
  stickyBoxBottomPrepaidActivationPage: {
    page: Page;
    root: Locator;
    box: Locator;
    closed: {
      trigger: Locator;
    };
    open: {
      submit: Locator;
      trigger: Locator;
    };
  };
}>({
  stickyBoxBottomPrepaidActivationPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("shopping-cart-bottom-drawer");
    const open = {
      trigger: page.getByRole("button", { name: "Details" }),
      submit: page.getByRole("button", { name: "Weiter" }),
    };
    const closed = {
      trigger: page.getByRole("button", { name: "Details" }),
    };
    await use({
      page,
      root,
      box,
      open,
      closed,
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
    test(`Should render stickyBoxBottomPrepaidActivation`, async ({
      mount,
      stickyBoxBottomPrepaidActivationPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(stickyBoxBottomPrepaidActivationPage.root).toBeVisible();
      await expect(
        stickyBoxBottomPrepaidActivationPage.root,
      ).toHaveScreenshot();
    });
    test("Should render a StickyBoxBottomPrepaid in open state", async ({
      mount,
      stickyBoxBottomPrepaidActivationPage,
    }) => {
      await mount(<BackgroundStory />);
      await stickyBoxBottomPrepaidActivationPage.closed.trigger.click();
      await expect(
        stickyBoxBottomPrepaidActivationPage.open.submit,
      ).toBeVisible();
      await expect(stickyBoxBottomPrepaidActivationPage.box).toHaveScreenshot();
    });
  },
);

test("Should render a StickyBoxBottomPrepaid in open state with Prepaid Year Plan", async ({
  mount,
  stickyBoxBottomPrepaidActivationPage,
}) => {
  await mount(<stories.PrepaidYearPlan />);
  await stickyBoxBottomPrepaidActivationPage.closed.trigger.click();
  await expect(stickyBoxBottomPrepaidActivationPage.open.submit).toBeVisible();
  await expect(stickyBoxBottomPrepaidActivationPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test("highContrast and light mode", async ({
    mount,
    stickyBoxBottomPrepaidActivationPage,
  }) => {
    await stickyBoxBottomPrepaidActivationPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(stickyBoxBottomPrepaidActivationPage.root).toBeVisible();
    await expect(stickyBoxBottomPrepaidActivationPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    stickyBoxBottomPrepaidActivationPage,
  }) => {
    await stickyBoxBottomPrepaidActivationPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(stickyBoxBottomPrepaidActivationPage.root).toBeVisible();
    await expect(stickyBoxBottomPrepaidActivationPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    stickyBoxBottomPrepaidActivationPage,
  }) => {
    await stickyBoxBottomPrepaidActivationPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(stickyBoxBottomPrepaidActivationPage.root).toBeVisible();
    await expect(stickyBoxBottomPrepaidActivationPage.root).toHaveScreenshot();
  });

  test("axe report", async ({
    mount,
    stickyBoxBottomPrepaidActivationPage,
  }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: stickyBoxBottomPrepaidActivationPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
