import AxeBuilder from "@axe-core/playwright";
import { test as base, expect } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import stories from "./PasswordField.stories.portable";

const test = base.extend<{
  passwordFieldPage: {
    page: Page;
    root: Locator;
    placeholder: Locator;
    errorText: Locator;
    input: Locator;
    inputWrapper: Locator;
    showPasswordButton: Locator;
    hidePasswordButton: Locator;
  };
}>({
  passwordFieldPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const placeholder = page.getByText("Passwort *");
    const errorText = page.getByText("Nutze mindestens ein Sonderzeichen.");
    const input = page.getByRole("textbox", { name: "Passwort" });
    const inputWrapper = input.locator("..");
    const showPasswordButton = page.getByRole("button", {
      name: "Passwort anzeigen",
    });
    const hidePasswordButton = page.getByRole("button", {
      name: "Passwort verstecken",
    });
    await use({
      page,
      root,
      placeholder,
      errorText,
      input,
      inputWrapper,
      showPasswordButton,
      hidePasswordButton,
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
    test(`Should render a PasswordField`, async ({
      mount,
      passwordFieldPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(passwordFieldPage.root).toBeVisible();
      await expect(passwordFieldPage.input).toBeVisible();
      await expect(passwordFieldPage.placeholder).toBeVisible();
      await expect(passwordFieldPage.root).toHaveScreenshot();
    });

    test(`Should render PasswordField in error state`, async ({
      mount,
      passwordFieldPage,
    }) => {
      await mount(
        <BackgroundStory
          id="password-error"
          name="password-error"
          messages={[
            { message: "Nutze mindestens ein Sonderzeichen.", type: "error" },
          ]}
        />,
      );
      await expect(passwordFieldPage.input).toBeVisible();
      await passwordFieldPage.input.fill("mySecretPw123");
      await expect(passwordFieldPage.placeholder).toBeVisible();
      await expect(passwordFieldPage.errorText).toBeVisible();
      await passwordFieldPage.root.click();
      await expect(passwordFieldPage.root).toHaveScreenshot();
    });

    test(`Should render filled PasswordField`, async ({
      mount,
      passwordFieldPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(passwordFieldPage.root).toBeVisible();
      await expect(passwordFieldPage.input).toBeVisible();
      await passwordFieldPage.input.fill("mySecretPw123&!");
      await expect(passwordFieldPage.placeholder).toBeVisible();
      await expect(passwordFieldPage.root).toHaveScreenshot();
    });

    test(`Should render filled and disabled PasswordField`, async ({
      mount,
      passwordFieldPage,
    }) => {
      await mount(<BackgroundStory value="mySecretPw123&!" disabled />);
      await expect(passwordFieldPage.root).toBeVisible();
      await expect(passwordFieldPage.input).toBeVisible();
      await expect(passwordFieldPage.placeholder).toBeVisible();
      await expect(passwordFieldPage.root).toHaveScreenshot();
    });
  },
);

test("Should render a filled PasswordField with password initially hidden", async ({
  mount,
  passwordFieldPage,
}) => {
  await mount(<stories.Default />);
  await expect(passwordFieldPage.input).toBeVisible();
  await passwordFieldPage.input.fill("mySecretPw123&!");
  await expect(passwordFieldPage.placeholder).toBeVisible();
  await expect(passwordFieldPage.root).toHaveScreenshot();
});

test("Should render a filled PasswordField with password initially visible", async ({
  mount,
  passwordFieldPage,
}) => {
  await mount(
    <stories.Default id="password" name="password" revealPasswordInitially />,
  );
  await expect(passwordFieldPage.input).toBeVisible();
  await passwordFieldPage.input.fill("mySecretPw123&!");
  await expect(passwordFieldPage.hidePasswordButton).toBeVisible();
  await expect(passwordFieldPage.placeholder).toBeVisible();
  await expect(passwordFieldPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, passwordFieldPage }) => {
    await passwordFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(passwordFieldPage.root).toBeVisible();
    await expect(passwordFieldPage.input).toBeVisible();
    await passwordFieldPage.input.fill("mySecretPw123");
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, passwordFieldPage }) => {
    await passwordFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(passwordFieldPage.root).toBeVisible();
    await expect(passwordFieldPage.input).toBeVisible();
    await passwordFieldPage.input.fill("mySecretPw123");
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode with initially revealed password", async ({
    mount,
    passwordFieldPage,
  }) => {
    await passwordFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithPasswordRevealedInitially />);
    await expect(passwordFieldPage.root).toBeVisible();
    await expect(passwordFieldPage.input).toBeVisible();
    await passwordFieldPage.input.fill("mySecretPw123");
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode with initially revealed password", async ({
    mount,
    passwordFieldPage,
  }) => {
    await passwordFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithPasswordRevealedInitially />);
    await expect(passwordFieldPage.root).toBeVisible();
    await expect(passwordFieldPage.input).toBeVisible();
    await passwordFieldPage.input.fill("mySecretPw123");
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    passwordFieldPage,
  }) => {
    await passwordFieldPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(passwordFieldPage.root).toBeVisible();
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });

  test("aria-label is dependent on placeholder", async ({
    mount,
    passwordFieldPage,
  }) => {
    await mount(<stories.LegitimationPin />);
    await expect(
      passwordFieldPage.page.getByRole("textbox", {
        name: "Legitimations-PIN",
      }),
    ).toBeVisible();
    const showLegiPinButton = passwordFieldPage.page.getByRole("button", {
      name: "Legitimations-PIN anzeigen",
    });
    await expect(showLegiPinButton).toBeVisible();
    await showLegiPinButton.click();
    await expect(
      passwordFieldPage.page.getByRole("button", {
        name: "Legitimations-PIN verstecken",
      }),
    ).toBeVisible();
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });
});

test.describe("Focus", () => {
  test("Should focus the PasswordField", async ({
    mount,
    passwordFieldPage,
  }) => {
    await mount(<stories.Default />);
    await expect(passwordFieldPage.input).toBeVisible();
    await passwordFieldPage.input.focus();
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });
  test("Should focus the Icon Button", async ({ mount, passwordFieldPage }) => {
    await mount(<stories.Default />);
    await expect(passwordFieldPage.input).toBeVisible();
    await passwordFieldPage.showPasswordButton.focus();
    await expect(passwordFieldPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, passwordFieldPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: passwordFieldPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
