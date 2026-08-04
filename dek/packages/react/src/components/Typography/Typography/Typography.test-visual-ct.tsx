import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Typography.stories.portable";
import { TypographyVariant } from "./Typography.types";

const test = base.extend<{
  typographyPage: {
    page: Page;
    root: Locator;
    text: Locator;
  };
}>({
  typographyPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const text = page.getByText("Typography");
    await use({
      page,
      root,
      text,
    });
  },
});

const variants = [
  "TagBlack16",
  "TagBlack24",
  "TagBlack32",
  "TagBlack40",
  "TagBlack48",
  "TagBlack56",
  "TagBlack64",
  "TagBlack96",
  "TagBlack128",
  "TagBold16",
  "TagBold20",
  "TagBold24",
  "HeadlineBlack24",
  "HeadlineBlack32",
  "HeadlineBlack40",
  "HeadlineBlack48",
  "HeadlineBlack64",
  "HeadlineBold20",
  "HeadlineBold24",
  "HeadlineBold28",
  "HeadlineBold32",
  "BodyBold12",
  "BodyBold14",
  "BodyBold16",
  "BodyLight12",
  "BodyLight14",
  "BodyLight16",
  "LabelBlack14",
  "LabelBold12",
  "LabelBold14",
  "LabelBold16",
  "LabelBold20",
] satisfies TypographyVariant[];

test(`Typography Should render variant with white color on black Background`, async ({
  mount,
  typographyPage,
}) => {
  await mount(<stories.WithBlackBackground color="white" />);
  await expect(typographyPage.root).toBeVisible();
  await expect(typographyPage.text).toBeVisible();
  await expect(typographyPage.root).toHaveScreenshot();
});
test(`Typography Should render variant with black color on white Background`, async ({
  mount,
  typographyPage,
}) => {
  await mount(<stories.WithWhiteBackground color="black" />);
  await expect(typographyPage.root).toBeVisible();
  await expect(typographyPage.text).toBeVisible();
  await expect(typographyPage.root).toHaveScreenshot();
});

test.describe("Typography", () => {
  variants.map((variant) => {
    test(`Should render variant ${variant}`, async ({
      mount,
      typographyPage,
    }) => {
      await mount(<stories.Default variant={variant} />);
      await expect(typographyPage.root).toBeVisible();
      await expect(typographyPage.text).toBeVisible();
      await expect(typographyPage.root).toHaveScreenshot();
    });
    test(`Should render variant ${variant} with trim`, async ({
      mount,
      typographyPage,
    }) => {
      await mount(<stories.Default variant={variant} trimFont />);
      await expect(typographyPage.root).toBeVisible();
      await expect(typographyPage.text).toBeVisible();
      await expect(typographyPage.root).toHaveScreenshot();
    });
  });
});
