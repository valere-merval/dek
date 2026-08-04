import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Modal.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  modalPage: {
    page: Page;
    root: Locator;
    userCentricsRoot: Locator;
    trigger: Locator;
    nestedTrigger: Locator;
    modalHeadline: Locator;
    modalHeadlineBringback: Locator;
    close: Locator;
    buttonTop: Locator;
    buttonBottom: Locator;
  };
}>({
  modalPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const userCentricsRoot = page.locator("#usercentrics-root");
    const trigger = page.getByRole("button", { name: "Mehr Details" }).first();
    const nestedTrigger = page
      .getByRole("button", {
        name: "Mehr Details",
      })
      .last();

    const modalHeadline = page.getByRole("heading", { name: "eSim" });
    const modalHeadlineBringback = page.getByRole("heading", {
      name: "Rückgabedeal",
      exact: true,
    });
    const close = page.getByRole("button", { name: "Schließen" }).last();
    const buttonTop = page.getByRole("button", { name: "Zurück" });
    const buttonBottom = page.getByRole("button", {
      name: "Okay, verstanden",
    });
    await use({
      page,
      root,
      userCentricsRoot,
      trigger,
      nestedTrigger,
      modalHeadline,
      modalHeadlineBringback,
      close,
      buttonTop,
      buttonBottom,
    });
  },
});

// Since the modal works independently of the background, only one background color per brand was used here.

const responsiveViewports = [
  {
    viewport: viewports.sm,
    variant: "small",
  },
  {
    viewport: viewports.md,
    variant: "medium",
  },
  {
    viewport: viewports.lg,
    variant: "large",
  },
];

test.describe(`responsive behavior`, () => {
  responsiveViewports.map((viewport) => {
    test.describe(`on  ${viewport.variant} viewport`, () => {
      test.use(viewport.viewport);

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
            pennyNeutralLightGrey:
              stories.WithPennyPennyNeutralLightGreyBackground,
          },
        },
        (BackgroundStory) => {
          test("Should render a modal", async ({ mount, modalPage }) => {
            await mount(<BackgroundStory />);
            await modalPage.trigger.click();
            await expect(modalPage.modalHeadline).toBeVisible();
            await expect(modalPage.page).toHaveScreenshot();
            await modalPage.close.click();
            await expect(modalPage.modalHeadline).not.toBeVisible();
          });
        },
      );

      test("Should render a modal within a modal", async ({
        mount,
        modalPage,
      }) => {
        await mount(<stories.ModalWithinModal />);
        await modalPage.trigger.click();
        await modalPage.nestedTrigger.click();
        await expect(
          modalPage.page.getByRole("heading", {
            name: "congstar Video Option - Disney+",
          }),
        ).toBeVisible();
        await expect(modalPage.page).toHaveScreenshot();
      });

      test("Should render a modal with fullHeight prop", async ({
        mount,
        modalPage,
      }) => {
        await mount(<stories.ModalWithFullHeight />);
        await modalPage.trigger.click();
        await expect(modalPage.modalHeadlineBringback).toBeVisible();

        switch (viewport.variant) {
          case "small":
          case "medium":
            await modalPage.page
              .getByRole("tab", {
                name: "Highlights",
              })
              .click();
            await modalPage.page
              .getByRole("tab", {
                name: "Geräterückgabe",
              })
              .click();
            break;
          case "large":
            await modalPage.page
              .getByRole("tab", {
                name: "Geräterückgabe",
              })
              .click();
            break;
        }

        await expect(
          modalPage.page.getByRole("heading", {
            name: "Entscheide am Ende: zurückgeben oder behalten.",
          }),
        ).toBeVisible();
        await expect(modalPage.modalHeadlineBringback).toBeVisible();
        await expect(modalPage.page).toHaveScreenshot();
      });

      test("Should render a modal with Tabs", async ({ mount, modalPage }) => {
        await mount(<stories.ModalWithEmptyTabs />);
        await modalPage.trigger.click();
        await expect(modalPage.modalHeadlineBringback).toBeVisible();

        switch (viewport.variant) {
          case "small":
          case "medium":
            await modalPage.page
              .getByRole("tab", {
                name: "Highlights",
              })
              .click();
            await modalPage.page
              .getByRole("tab", {
                name: "Geräterückgabe",
              })
              .click();
            break;
          case "large":
            await modalPage.page
              .getByRole("tab", {
                name: "Geräterückgabe",
              })
              .click();
            break;
        }

        await expect(modalPage.modalHeadlineBringback).toBeVisible();
        await expect(modalPage.page).toHaveScreenshot();
      });
    });
  });
});

test("Should render a modal with a focused button", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.ModalWithButton />);
  await modalPage.trigger.click();
  await expect(modalPage.buttonBottom).toBeVisible();
  await expect(modalPage.buttonTop).toBeVisible();

  /*
   * Workaround to set focus on button within the modal
   */
  await modalPage.close.press("Tab");
  await expect(modalPage.buttonTop).toBeFocused();

  await expect(modalPage.page).toHaveScreenshot();

  await modalPage.buttonTop.press("Tab");
  await expect(modalPage.buttonBottom).toBeFocused();

  await expect(modalPage.page).toHaveScreenshot();
});

// ToDo: Test fails, due to snapshot not showing autofocused select. Fixing attempts using waitForTimeout(500) or testing for toHaveAttribute('data-focus-visible="true"')/toHaveAttribute('data-focused) have not been successful. Might be caused by https://react-aria.adobe.com/releases/v1-16-0
// test("Should render a modal with Select and ComboBox", async ({
//   mount,
//   modalPage,
// }) => {
//   await mount(<stories.ModalWithInputElements />);
//   await modalPage.trigger.click();
//
//   const select = modalPage.page.getByRole("button", {
//     name: "Land",
//   });
//
//   await expect(select).toBeVisible();
//   await expect(modalPage.page).toHaveScreenshot();
//   await select.click();
//   await expect(
//     modalPage.page.getByRole("option", { name: "Deutschland" }),
//   ).toBeVisible();
//   await expect(modalPage.page).toHaveScreenshot();
// });

test("Should render a modal with uncontrolled open state", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.ModalWithButton />);
  await modalPage.trigger.click();
  await expect(modalPage.modalHeadline).toBeVisible();
  await modalPage.close.click();
  await expect(modalPage.modalHeadline).not.toBeVisible();
});

test("Should render a modal with uncontrolled open state but onOpenChange", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.Default />);
  await modalPage.trigger.click();
  await expect(modalPage.modalHeadline).toBeVisible();
  await modalPage.close.click();
  await expect(modalPage.modalHeadline).not.toBeVisible();
});

test("Should render a modal with controlled open state", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.WithControlledOpenState />);
  await modalPage.trigger.click();
  await expect(modalPage.modalHeadline).toBeVisible();
  await modalPage.close.click();
  await expect(modalPage.modalHeadline).not.toBeVisible();
});

test("Should render a modal with dismissable true", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.Default />);
  await modalPage.trigger.click();
  await expect(modalPage.modalHeadline).toBeVisible();
  await modalPage.root.click({ force: true, position: { x: 50, y: 50 } });
  await expect(modalPage.modalHeadline).not.toBeVisible();
});

test("Should render a modal with dismissable false", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.ModalWithDismissableFalse />);
  await modalPage.trigger.click();
  await expect(modalPage.modalHeadline).toBeVisible();
  await modalPage.root.click({ force: true, position: { x: 50, y: 50 } });
  await expect(modalPage.modalHeadline).toBeVisible();
});

test("Should render a modal with default open", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.WithDefaultOpen />);
  await expect(modalPage.modalHeadline).toBeVisible();
});

test("Should render a modal with default open, do not block cookie consent", async ({
  mount,
  modalPage,
}) => {
  await mount(<stories.WithDefaultOpen />);
  await expect(modalPage.modalHeadline).toBeVisible();
  await expect(modalPage.userCentricsRoot).toBeAttached();
  await expect(modalPage.userCentricsRoot).not.toHaveAttribute("inert");
});

test.describe("on mobile", () => {
  test.use(viewports.sm);
  test("with long headline", async ({ mount, modalPage }) => {
    await mount(<stories.WithLongHeadline />);
    await modalPage.trigger.click();
    const modalHeadline = modalPage.page.getByRole("heading");
    await expect(modalHeadline).toBeVisible();
    await expect(modalPage.page).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.describe("on mobile", () => {
    test.use(viewports.sm);
    test("highContrast and light mode", async ({ mount, modalPage }) => {
      await modalPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await modalPage.trigger.click();
      await expect(modalPage.modalHeadline).toBeVisible();
      await expect(modalPage.page).toHaveScreenshot();
    });

    test("highContrast and dark mode", async ({ mount, modalPage }) => {
      await modalPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await modalPage.trigger.click();
      await expect(modalPage.modalHeadline).toBeVisible();
      await expect(modalPage.page).toHaveScreenshot();
    });

    test("lineHeight and letterSpacing modification", async ({
      mount,
      modalPage,
    }) => {
      await modalPage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await modalPage.trigger.click();
      await expect(modalPage.modalHeadline).toBeVisible();
      await expect(modalPage.page).toHaveScreenshot();
    });

    test("axe report", async ({ mount, modalPage }) => {
      await mount(<stories.Default />);
      await modalPage.trigger.click();
      await expect(modalPage.modalHeadline).toBeVisible();

      const accessibilityScanResults = await new AxeBuilder({
        page: modalPage.page,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test("highContrast and light mode", async ({ mount, modalPage }) => {
    await modalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await modalPage.trigger.click();
    await expect(modalPage.modalHeadline).toBeVisible();
    await expect(modalPage.page).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, modalPage }) => {
    await modalPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await modalPage.trigger.click();
    await expect(modalPage.modalHeadline).toBeVisible();
    await expect(modalPage.page).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    modalPage,
  }) => {
    await modalPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await modalPage.trigger.click();
    await expect(modalPage.modalHeadline).toBeVisible();
    await expect(modalPage.page).toHaveScreenshot();
  });

  test("axe report", async ({ mount, modalPage }) => {
    await mount(<stories.Default />);
    await modalPage.trigger.click();
    await expect(modalPage.modalHeadline).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({
      page: modalPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
