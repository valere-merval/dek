import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ButtonPrimary.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  buttonPrimaryPage: {
    page: Page;
    root: Locator;
    button: Locator;
  };
}>({
  buttonPrimaryPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const button = page.getByRole("button");
    await use({
      page,
      root,
      button,
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
      test(`Should render ButtonPrimary`, async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in focus state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await buttonPrimaryPage.button.focus();
        await expect(buttonPrimaryPage.root).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in hover state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await buttonPrimaryPage.button.hover();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in disabled state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory disabled />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
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
      test(`Should render ButtonPrimary`, async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="inverted" />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in focus state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="inverted" />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await buttonPrimaryPage.button.focus();
        await expect(buttonPrimaryPage.root).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in hover state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="inverted" />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await buttonPrimaryPage.button.hover();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in disabled state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="inverted" disabled />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
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
      test(`Should render ButtonPrimary`, async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="outlined" />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in focus state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="outlined" />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await buttonPrimaryPage.button.focus();
        await expect(buttonPrimaryPage.root).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in hover state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="outlined" />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await buttonPrimaryPage.button.hover();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
      });

      test("Should render ButtonPrimary in disabled state", async ({
        mount,
        buttonPrimaryPage,
      }) => {
        await mount(<BackgroundStory variant="outlined" disabled />);
        await expect(buttonPrimaryPage.button).toBeVisible();
        await expect(buttonPrimaryPage.button).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    buttonPrimaryPage,
  }) => {
    await mount(<stories.Default fullWidth />);
    await expect(buttonPrimaryPage.button).toBeVisible();
    await expect(buttonPrimaryPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({
    mount,
    buttonPrimaryPage,
  }) => {
    await mount(<stories.Default fullWidth />);
    await expect(buttonPrimaryPage.button).toBeVisible();
    await expect(buttonPrimaryPage.root).toHaveScreenshot();
  });
});

test("Should render a ButtonPrimary with end icon", async ({
  mount,
  buttonPrimaryPage,
}) => {
  await mount(<stories.WithEndIcon />);
  await expect(buttonPrimaryPage.button).toBeVisible();
  await expect(buttonPrimaryPage.button).toHaveScreenshot();

  await test.step("Should render hover state", async () => {
    await buttonPrimaryPage.button.hover();
    await expect(buttonPrimaryPage.button).toHaveScreenshot();
  });
});

test("Should render a ButtonPrimary in loading state", async ({
  mount,
  buttonPrimaryPage,
}) => {
  await mount(<stories.Loading />);
  await expect(buttonPrimaryPage.button).toBeVisible();
  await expect(buttonPrimaryPage.button).toHaveScreenshot();
});

test("Should render a ButtonPrimary in loading state with startIcon", async ({
  mount,
  buttonPrimaryPage,
}) => {
  await mount(<stories.WithStartIcon isLoading />);
  await expect(buttonPrimaryPage.button).toBeVisible();
  await expect(buttonPrimaryPage.button).toHaveScreenshot();
});

test("Should render a ButtonPrimary in loading state with endIcon", async ({
  mount,
  buttonPrimaryPage,
}) => {
  await mount(<stories.WithEndIcon isLoading />);
  await expect(buttonPrimaryPage.button).toBeVisible();
  await expect(buttonPrimaryPage.button).toHaveScreenshot();
});

test.describe("dynamic full width", () => {
  const fullWidth = { mobile: true, desktop: false };

  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("Should render button with dynamic full width on mobile", async ({
      mount,
      buttonPrimaryPage,
    }) => {
      await mount(<stories.Default fullWidth={fullWidth} />);
      await expect(buttonPrimaryPage.button).toBeVisible();
      await expect(buttonPrimaryPage.button).toHaveScreenshot();
    });
  });

  test.describe("large viewport", () => {
    test.use(viewports.lg);
    test("Should render button with dynamic full width on desktop", async ({
      mount,
      buttonPrimaryPage,
    }) => {
      await mount(<stories.Default fullWidth={fullWidth} />);
      await expect(buttonPrimaryPage.button).toBeVisible();
      await expect(buttonPrimaryPage.button).toHaveScreenshot();
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, buttonPrimaryPage }) => {
    await buttonPrimaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(buttonPrimaryPage.button).toBeVisible();
    await expect(buttonPrimaryPage.button).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, buttonPrimaryPage }) => {
    await buttonPrimaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(buttonPrimaryPage.button).toBeVisible();
    await expect(buttonPrimaryPage.button).toHaveScreenshot();
  });

  test("axe report", async ({ mount, buttonPrimaryPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: buttonPrimaryPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
