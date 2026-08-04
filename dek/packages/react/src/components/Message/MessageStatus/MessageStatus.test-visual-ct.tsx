import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./MessageStatus.stories.portable";
import { statusMock } from "./MessageStatus.mock";
import { MessageStatusType } from "./MessageStatus.types";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  statusPage: {
    page: Page;
    root: Locator;
    error: Locator;
    warning: Locator;
    pending: Locator;
    success: Locator;
  };
}>({
  statusPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const error = page.getByText(statusMock.error);
    const warning = page.getByText(statusMock.warning);
    const pending = page.getByText(statusMock.pending);
    const success = page.getByText(statusMock.success);
    await use({
      page,
      root,
      error,
      warning,
      success,
      pending,
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
    const statusTypes = [
      "error",
      "success",
      "warning",
      "pending",
    ] satisfies MessageStatusType[];

    statusTypes.map((status) => {
      test(`Should render ${status} status`, async ({ mount, statusPage }) => {
        await mount(
          <BackgroundStory type={status} message={statusMock[status]} />,
        );
        await expect(statusPage[status]).toBeVisible();
        await expect(statusPage.root).toHaveScreenshot();
      });
      test(`Should render ${status} status with outline`, async ({
        mount,
        statusPage,
      }) => {
        await mount(
          <BackgroundStory
            type={status}
            message={statusMock[status]}
            variant="outlined"
          />,
        );
        await expect(statusPage[status]).toBeVisible();
        await expect(statusPage.root).toHaveScreenshot();
      });
    });
  },
);

test.describe("Status Outline", () => {
  test("Should render outline variant", async ({ mount, statusPage }) => {
    const errormessage =
      "Bitte wähle mindestens eine Option aus um fortfahren zu können";
    await mount(
      <stories.Default
        message={errormessage}
        variant="outlined"
        type="success"
      />,
    );
    await expect(statusPage.root).toBeVisible();
    await expect(statusPage.page.getByText(errormessage)).toBeVisible();
    await expect(statusPage.root).toHaveScreenshot();
  });
  test("Should render outline variant with custom message", async ({
    mount,
    statusPage,
  }) => {
    const errormessage =
      "Die Rufnummer, die du mitnehmen willst, ist bereits bei congstar registriert. Du erreichst uns Mo. – Sa. von 8 – 22 Uhr, an Sonn- und Feiertagen von 9 – 18 Uhr unter 0221 79 700 700";
    await mount(<stories.CustomMessage />);
    await expect(statusPage.root).toBeVisible();
    await expect(statusPage.page.getByText(errormessage)).toBeVisible();
    await expect(
      statusPage.page.getByRole("link", { name: "Rufnummer ändern" }),
    ).toBeVisible();
    await expect(statusPage.root).toHaveScreenshot();
  });
  test("Should render outline variant with full width", async ({
    mount,
    statusPage,
  }) => {
    const errormessage =
      "Bitte wähle mindestens eine Option aus um fortfahren zu können";
    await mount(
      <stories.Default
        message={errormessage}
        variant="outlined"
        type="success"
        fullWidth
      />,
    );
    await expect(statusPage.root).toBeVisible();
    await expect(statusPage.page.getByText(errormessage)).toBeVisible();
    await expect(statusPage.root).toHaveScreenshot();
  });

  test.describe("dynamic full width", () => {
    const message = "Rechnungsversand aktiviert";
    const fullWidth = { mobile: true, desktop: false };

    test.describe("small viewport", () => {
      test.use(viewports.sm);
      test("Should render outline variant with dynamic full width on mobile", async ({
        mount,
        statusPage,
      }) => {
        await mount(
          <stories.Default
            message={message}
            variant="outlined"
            type="success"
            fullWidth={fullWidth}
          />,
        );
        await expect(statusPage.root).toBeVisible();
        await expect(statusPage.page.getByText(message)).toBeVisible();
        await expect(statusPage.root).toHaveScreenshot();
      });
    });

    test.describe("large viewport", () => {
      test("Should render outline variant with dynamic full width on desktop", async ({
        mount,
        statusPage,
      }) => {
        await mount(
          <stories.Default
            message={message}
            variant="outlined"
            type="success"
            fullWidth={fullWidth}
          />,
        );
        await expect(statusPage.root).toBeVisible();
        await expect(statusPage.page.getByText(message)).toBeVisible();
        await expect(statusPage.root).toHaveScreenshot();
      });
    });
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);
  const errormessage =
    "Bitte wähle mindestens eine Option aus um fortfahren zu können";

  test("Should wrap in small viewport with multiline message", async ({
    mount,
    statusPage,
  }) => {
    await mount(<stories.Default message={errormessage} />);
    await expect(statusPage.root).toBeVisible();
    await expect(statusPage.page.getByText(errormessage)).toBeVisible();
    await expect(statusPage.root).toHaveScreenshot();
  });

  test("Should wrap in small viewport with multiline message outlined", async ({
    mount,
    statusPage,
  }) => {
    await mount(<stories.Default message={errormessage} variant="outlined" />);
    await expect(statusPage.root).toBeVisible();
    await expect(statusPage.page.getByText(errormessage)).toBeVisible();
    await expect(statusPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("lineHeight and letterSpacing modification", async ({
      mount,
      statusPage,
    }) => {
      await statusPage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      const errormessage =
        "Bitte wähle mindestens eine Option aus um fortfahren zu können";
      await mount(
        <stories.Default
          message={errormessage}
          variant="outlined"
          type="success"
        />,
      );
      await expect(statusPage.root).toBeVisible();
      await expect(statusPage.page.getByText(errormessage)).toBeVisible();
      await expect(statusPage.root).toHaveScreenshot();
    });

    test("highContrast and light mode", async ({ mount, statusPage }) => {
      await statusPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      const errormessage =
        "Bitte wähle mindestens eine Option aus um fortfahren zu können";
      await mount(
        <stories.Default
          message={errormessage}
          variant="outlined"
          type="success"
        />,
      );
      await expect(statusPage.root).toBeVisible();
      await expect(statusPage.page.getByText(errormessage)).toBeVisible();
      await expect(statusPage.root).toHaveScreenshot();
    });

    test("highContrast and dark mode", async ({ mount, statusPage }) => {
      await statusPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      const errormessage =
        "Bitte wähle mindestens eine Option aus um fortfahren zu können";
      await mount(
        <stories.Default
          message={errormessage}
          variant="outlined"
          type="success"
        />,
      );
      await expect(statusPage.root).toBeVisible();
      await expect(statusPage.page.getByText(errormessage)).toBeVisible();
      await expect(statusPage.root).toHaveScreenshot();
    });

    test("axe report", async ({ mount, statusPage }) => {
      await mount(<stories.Default />);

      const accessibilityScanResults = await new AxeBuilder({
        page: statusPage.page,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
