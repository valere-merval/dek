import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ModalFootnotes.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";

const test = base.extend<{
  modalFootnotesPage: {
    page: Page;
    root: Locator;
    trigger: Locator;
    modalHeadline: Locator;
    backdrop: Locator;
  };
}>({
  modalFootnotesPage: async ({ page }, use) => {
    const root = page.locator("#storybook-root");
    const trigger = page.getByRole("button");
    const modalHeadline = page.getByRole("heading", { name: "eSIM" });
    page.locator("#storybook-root");
    const backdrop = page.getByText("TODO");
    await use({
      page,
      root,
      trigger,
      modalHeadline,
      backdrop,
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
    test("Should render a modalFootnotes with a link", async ({
      mount,
      modalFootnotesPage,
    }) => {
      await mount(<BackgroundStory />);

      await modalFootnotesPage.trigger.click();
      await expect(modalFootnotesPage.modalHeadline).toBeVisible();
      await expect(modalFootnotesPage.page).toHaveScreenshot();
    });
  },
);

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
            black: stories.WithMultipleFootnotesOnCongstarWebBlackBackground,
          },
          congstarApp: {
            black: stories.WithMultipleFootnotesOnCongstarAppBlackBackground,
          },
          ja: {
            jaAgave20: stories.WithMultipleFootnotesOnJaJaAgave20Background,
          },
          penny: {
            pennyNeutralLightGrey:
              stories.WithMultipleFootnotesOnPennyPennyNeutralLightGreyBackground,
          },
        },
        (BackgroundStory) => {
          test("Should render a modalFootnotes with a link and multiple footnotes", async ({
            mount,
            modalFootnotesPage,
          }) => {
            await mount(<BackgroundStory />);
            await modalFootnotesPage.trigger.click();
            await expect(
              modalFootnotesPage.page.getByRole("heading", {
                name: "Hinweis",
              }),
            ).toBeVisible();
            await expect(modalFootnotesPage.page).toHaveScreenshot();
          });
        },
      );

      test("Should render a modalFootnotes with a button-asterisk-trigger", async ({
        mount,
        modalFootnotesPage,
      }) => {
        await mount(<stories.WithButtonAsteriskTrigger />);
        await modalFootnotesPage.trigger.click();
        await expect(modalFootnotesPage.modalHeadline).toBeVisible();
        await expect(modalFootnotesPage.page).toHaveScreenshot();
      });

      test("Should render a modalFootnotes with a secondary-button-trigger", async ({
        mount,
        modalFootnotesPage,
      }) => {
        await mount(<stories.WithButtonSecondaryTrigger />);
        await modalFootnotesPage.trigger.click();
        await expect(modalFootnotesPage.modalHeadline).toBeVisible();
        await expect(modalFootnotesPage.page).toHaveScreenshot();
      });
    });
  });
});

test("Should render a modalFootnotes with a inherit font trigger", async ({
  mount,
  modalFootnotesPage,
}) => {
  await mount(<stories.WithInheritFontTrigger />);
  await expect(modalFootnotesPage.trigger).toBeVisible();
  await expect(modalFootnotesPage.page).toHaveScreenshot();
});

test("Should render a modalFootnotes with string in descriptions", async ({
  mount,
  modalFootnotesPage,
}) => {
  await mount(<stories.WithStringInDescription />);
  await expect(modalFootnotesPage.trigger).toBeVisible();
  await modalFootnotesPage.trigger.click();
  await expect(
    modalFootnotesPage.page.getByRole("heading", {
      name: "Hinweis",
    }),
  ).toBeVisible();
  await expect(modalFootnotesPage.page).toHaveScreenshot();
});

test("Should render a modalFootnotes with htmlParser in descriptions", async ({
  mount,
  modalFootnotesPage,
}) => {
  await mount(<stories.WithHTMLParserInDescription />);
  await expect(modalFootnotesPage.trigger).toBeVisible();
  await modalFootnotesPage.trigger.click();
  await expect(
    modalFootnotesPage.page.getByRole("heading", {
      name: "Hinweis",
    }),
  ).toBeVisible();
  await expect(modalFootnotesPage.page).toHaveScreenshot();
});
