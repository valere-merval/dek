import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ButtonPrimaryCircle.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  buttonPrimaryCirclePage: {
    page: Page;
    root: Locator;
    button: Locator;
    link: Locator;
  };
}>({
  buttonPrimaryCirclePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = page.getByRole("button");
    const link = page.getByRole("link");
    await use({
      page,
      root,
      button,
      link,
    });
  },
});

test.describe("default variant", () => {
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
      test(`Should render ButtonPrimaryCircle`, async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in focus state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await buttonPrimaryCirclePage.button.focus();
        await expect(buttonPrimaryCirclePage.root).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in hover state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await buttonPrimaryCirclePage.button.hover();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in disabled state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory disabled />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });
    },
  );
});

test.describe("inverted variant", () => {
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
    },
    (BackgroundStory) => {
      test(`Should render ButtonPrimaryCircle`, async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="inverted" />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in focus state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="inverted" />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await buttonPrimaryCirclePage.button.focus();
        await expect(buttonPrimaryCirclePage.root).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in hover state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="inverted" />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await buttonPrimaryCirclePage.button.hover();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in disabled state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="inverted" disabled />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });
    },
  );
});

test.describe("outlined variant", () => {
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
      test(`Should render ButtonPrimaryCircle`, async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="outlined" />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });

      test("Should render a ButtonPrimaryCircle in focus state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="outlined" />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await buttonPrimaryCirclePage.button.focus();
        await expect(buttonPrimaryCirclePage.root).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in hover state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="outlined" />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await buttonPrimaryCirclePage.button.hover();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimaryCircle in disabled state", async ({
        mount,
        buttonPrimaryCirclePage,
      }) => {
        await mount(<BackgroundStory variant="outlined" disabled />);
        await expect(buttonPrimaryCirclePage.button).toBeVisible();
        await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
      });
    },
  );
});

test("Should render as an Anchor", async ({
  mount,
  buttonPrimaryCirclePage,
}) => {
  await mount(<stories.AsAnchor />);
  await expect(buttonPrimaryCirclePage.link).toBeVisible();
  await expect(buttonPrimaryCirclePage.link).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    buttonPrimaryCirclePage,
  }) => {
    await mount(<stories.Default />);
    await expect(buttonPrimaryCirclePage.button).toBeVisible();
    await expect(buttonPrimaryCirclePage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({
    mount,
    buttonPrimaryCirclePage,
  }) => {
    await buttonPrimaryCirclePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(buttonPrimaryCirclePage.button).toBeVisible();
    await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({
    mount,
    buttonPrimaryCirclePage,
  }) => {
    await buttonPrimaryCirclePage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(buttonPrimaryCirclePage.button).toBeVisible();
    await expect(buttonPrimaryCirclePage.button).toHaveScreenshot();
  });

  test("axe report", async ({ mount, buttonPrimaryCirclePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: buttonPrimaryCirclePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
