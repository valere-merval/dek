import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./TextField.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";
import { MailOutline } from "@fair/icons";

const test = base.extend<{
  textFieldPage: {
    page: Page;
    root: Locator;
    placeholder: Locator;
    input: Locator;
    inputZip: Locator;
    inputWrapper: Locator;
    inputWithoutPlaceholder: Locator;
    inputWrapperWithoutPlaceholder: Locator;
  };
}>({
  textFieldPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const placeholder = page.getByText("E-Mail");
    const input = page.getByRole("textbox", { name: "E-Mail" });
    const inputZip = page.getByRole("textbox", { name: "PLZ" });
    const inputWrapper = input.locator("..");
    const inputWithoutPlaceholder = page.getByRole("textbox");
    const inputWrapperWithoutPlaceholder =
      inputWithoutPlaceholder.locator("..");
    await use({
      page,
      root,
      placeholder,
      input,
      inputZip,
      inputWrapper,
      inputWithoutPlaceholder,
      inputWrapperWithoutPlaceholder,
    });
  },
});

// Tests for icons can be found in TextFieldCopy, TextFieldClear and TextFieldModal

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
    test(`Should render TextField`, async ({ mount, textFieldPage }) => {
      await mount(<BackgroundStory />);
      await expect(textFieldPage.input).toBeVisible();
      await expect(textFieldPage.placeholder).toBeVisible();

      await expect(textFieldPage.root).toHaveScreenshot();
    });

    test(`Should render a filled TextField`, async ({
      mount,
      textFieldPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(textFieldPage.input).toBeVisible();
      await textFieldPage.input.fill("test@email.de");
      await expect(textFieldPage.placeholder).toBeVisible();

      await expect(textFieldPage.root).toHaveScreenshot();
    });

    test(`Should render a disabled TextField`, async ({
      mount,
      textFieldPage,
    }) => {
      await mount(<BackgroundStory disabled />);
      await expect(textFieldPage.input).toBeVisible();
      await expect(textFieldPage.input).toBeDisabled();
      await expect(textFieldPage.placeholder).toBeVisible();

      await expect(textFieldPage.root).toHaveScreenshot();
    });

    test(`Should render a disabled and filled TextField`, async ({
      mount,
      textFieldPage,
    }) => {
      await mount(<BackgroundStory value="test@email.de" disabled />);
      await expect(textFieldPage.input).toBeVisible();
      await expect(textFieldPage.input).toBeDisabled();
      await expect(textFieldPage.placeholder).toBeVisible();

      await expect(textFieldPage.root).toHaveScreenshot();
    });

    test(`Should render a TextField with error `, async ({
      mount,
      textFieldPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[{ message: "Deine Angabe ist ungültig.", type: "error" }]}
        />,
      );
      await expect(textFieldPage.input).toBeVisible();
      await expect(textFieldPage.placeholder).toBeVisible();
      await expect(
        textFieldPage.page.getByText("Deine Angabe ist ungültig."),
      ).toBeVisible();

      await expect(textFieldPage.root).toHaveScreenshot();
    });

    test(`Should render a TextField with multiple errors `, async ({
      mount,
      textFieldPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: "Deine Angabe ist ungültig.",
              type: "error",
            },
            {
              message: "Die Email-Adresse konnte nicht gefunden werden.",
              type: "error",
            },
          ]}
        />,
      );
      await expect(textFieldPage.input).toBeVisible();
      await expect(textFieldPage.placeholder).toBeVisible();
      await expect(
        textFieldPage.page.getByText("Deine Angabe ist ungültig."),
      ).toBeVisible();
      await expect(
        textFieldPage.page.getByText(
          "Die Email-Adresse konnte nicht gefunden werden.",
        ),
      ).toBeVisible();

      await expect(textFieldPage.root).toHaveScreenshot();
    });

    test(`Should render TextField with an Icon`, async ({
      mount,
      textFieldPage,
    }) => {
      await mount(
        <BackgroundStory
          icon={<MailOutline />}
          buttonAriaLabel={"Send E-Mail"}
        />,
      );
      await expect(textFieldPage.input).toBeVisible();
      await expect(textFieldPage.placeholder).toBeVisible();

      await expect(textFieldPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render a TextField", async ({ mount, textFieldPage }) => {
    await mount(<stories.Default />);
    await expect(textFieldPage.input).toBeVisible();
    await expect(textFieldPage.placeholder).toBeVisible();
    await expect(textFieldPage.inputWrapper).toHaveScreenshot();
  });

  test("Should render a focused TextField", async ({
    mount,
    textFieldPage,
  }) => {
    await mount(<stories.Default />);
    await expect(textFieldPage.input).toBeVisible();
    await textFieldPage.input.focus();
    await expect(textFieldPage.placeholder).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });

  test("Should render a filled TextField", async ({ mount, textFieldPage }) => {
    await mount(<stories.Default />);
    await expect(textFieldPage.input).toBeVisible();
    await textFieldPage.input.fill("test@email.de");
    await expect(textFieldPage.placeholder).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });

  test("Should render a required TextField", async ({
    mount,
    textFieldPage,
  }) => {
    await mount(<stories.Default required />);
    await expect(textFieldPage.input).toBeVisible();
    await expect(textFieldPage.placeholder).toBeVisible();
    await expect(textFieldPage.inputWrapper).toHaveScreenshot();
  });

  test("Should render a TextField with multiple errors", async ({
    mount,
    textFieldPage,
  }) => {
    await mount(<stories.WithMultipleErrors />);
    await expect(textFieldPage.input).toBeVisible();
    await expect(textFieldPage.placeholder).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render a TextField", async ({ mount, textFieldPage }) => {
    await mount(<stories.Default />);
    await expect(textFieldPage.input).toBeVisible();
    await expect(textFieldPage.placeholder).toBeVisible();
    await expect(textFieldPage.inputWrapper).toHaveScreenshot();
  });
  test("Should render a medium TextField", async ({ mount, textFieldPage }) => {
    await mount(<stories.Default size="medium" />);
    await expect(textFieldPage.input).toBeVisible();
    await expect(textFieldPage.placeholder).toBeVisible();
    await expect(textFieldPage.inputWrapper).toHaveScreenshot();
  });
  test("Should render TextFields with full width", async ({
    mount,
    textFieldPage,
  }) => {
    await mount(<stories.FullWidth />);
    await expect(textFieldPage.input).toBeVisible();
    await expect(textFieldPage.inputZip).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, textFieldPage }) => {
    await textFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(textFieldPage.root).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, textFieldPage }) => {
    await textFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(textFieldPage.root).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode with multiple errors", async ({
    mount,
    textFieldPage,
  }) => {
    await textFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithMultipleErrors />);
    await expect(textFieldPage.root).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode with icon", async ({
    mount,
    textFieldPage,
  }) => {
    await textFieldPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithIcon />);
    await expect(textFieldPage.root).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    textFieldPage,
  }) => {
    await textFieldPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(textFieldPage.root).toBeVisible();
    await expect(textFieldPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, textFieldPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: textFieldPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
