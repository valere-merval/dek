import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxSideActivation.stories.portable";

import AxeBuilder from "@axe-core/playwright";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../../playwright/fixtures";

const test = base.extend<{
  stickyBoxSidePrepaidActivationPage: {
    page: Page;
    root: Locator;
    box: Locator;
    submit: Locator;
  };
}>({
  stickyBoxSidePrepaidActivationPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("sticky-box-side-prepaid-activation");
    const submit = page.getByRole("button", { name: "Weiter" });
    await use({
      page,
      root,
      box,
      submit,
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
    test(`Should render stickyBoxSidePrepaidActivation`, async ({
      mount,
      stickyBoxSidePrepaidActivationPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(stickyBoxSidePrepaidActivationPage.submit).toBeVisible();
      await expect(stickyBoxSidePrepaidActivationPage.box).toHaveScreenshot();
    });
  },
);

test("Should render a StickyBoxSidePrepaid with Prepaid Year Plan", async ({
  mount,
  stickyBoxSidePrepaidActivationPage,
}) => {
  await mount(<stories.PrepaidYearPlan />);
  await expect(stickyBoxSidePrepaidActivationPage.submit).toBeVisible();
  await expect(stickyBoxSidePrepaidActivationPage.box).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render", async ({
    mount,
    stickyBoxSidePrepaidActivationPage,
  }) => {
    await mount(<stories.Default />);

    await expect(stickyBoxSidePrepaidActivationPage.submit).toBeVisible();
    await expect(stickyBoxSidePrepaidActivationPage.box).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    stickyBoxSidePrepaidActivationPage,
  }) => {
    await stickyBoxSidePrepaidActivationPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(stickyBoxSidePrepaidActivationPage.box).toBeVisible();
    await expect(stickyBoxSidePrepaidActivationPage.box).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    stickyBoxSidePrepaidActivationPage,
  }) => {
    await stickyBoxSidePrepaidActivationPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(stickyBoxSidePrepaidActivationPage.box).toBeVisible();
    await expect(stickyBoxSidePrepaidActivationPage.box).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    stickyBoxSidePrepaidActivationPage,
  }) => {
    await stickyBoxSidePrepaidActivationPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(stickyBoxSidePrepaidActivationPage.box).toBeVisible();
    await expect(stickyBoxSidePrepaidActivationPage.box).toHaveScreenshot();
  });

  test("axe report", async ({ mount, stickyBoxSidePrepaidActivationPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: stickyBoxSidePrepaidActivationPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
