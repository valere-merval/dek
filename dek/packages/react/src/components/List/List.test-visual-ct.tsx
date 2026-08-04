import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./List.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../playwright/fixtures";
import { ListColor, ListSize } from "./List.types";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  listPage: {
    page: Page;
    root: Locator;
    item1: Locator;
    item2: Locator;
    item3: Locator;
    item4: Locator;
    item5: Locator;
    flexBoxItem: Locator;
  };
}>({
  listPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const item1 = page.getByTestId("list-main-item-1");
    const item2 = page.getByTestId("list-main-item-2");
    const item3 = page.getByTestId("list-main-item-3");
    const item4 = page.getByTestId("list-main-item-4");
    const item5 = page.getByTestId("list-main-item-5");
    const flexBoxItem = page.getByTestId("flexbox-item-1");
    await use({
      page,
      root,
      item1,
      item2,
      item3,
      item4,
      item5,
      flexBoxItem,
    });
  },
});
const listDotsColorsOnBlackBackground: ListColor[] = [
  "green",
  "orange",
  "yellow",
  "red",
  "lime",
  "purple",
];

const listSizes: ListSize[] = ["medium", "large"];

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
      lightGrey: stories.WithCongstarWebLightGreyBackground,
      darkGrey: stories.WithCongstarWebDarkGreyBackground,
      blue: stories.WithCongstarWebBlueBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
      darkGrey: stories.WithCongstarAppDarkGreyBackground,
      blue: stories.WithCongstarAppBlueBackground,
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
    listSizes.forEach((size) => {
      test(`with default dots ${size}`, async ({ mount, listPage }) => {
        await mount(
          <BackgroundStory decorativeColor={undefined} size={size} />,
        );
        await expect(listPage.item1).toBeVisible();
        await expect(listPage.item2).toBeVisible();
        await expect(listPage.item3).toBeVisible();
        await expect(listPage.item4).toBeVisible();
        await expect(listPage.item5).toBeVisible();
        await expect(listPage.root).toHaveScreenshot();
      });
    });
  },
);

test.describe("congstarWeb on black background", () => {
  listDotsColorsOnBlackBackground.map((color) => {
    test(`with ${color} dots`, async ({ mount, listPage }) => {
      await mount(
        <stories.WithCongstarWebBlackBackground decorativeColor={color} />,
      );
      await expect(listPage.item1).toBeVisible();
      await expect(listPage.item2).toBeVisible();
      await expect(listPage.item3).toBeVisible();
      await expect(listPage.item4).toBeVisible();
      await expect(listPage.item5).toBeVisible();
      await expect(listPage.root).toHaveScreenshot();
    });
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({ mount, listPage }) => {
    await mount(<stories.Default />);
    await expect(listPage.root).toBeVisible();
    await expect(listPage.item1).toBeVisible();
    await expect(listPage.item2).toBeVisible();
    await expect(listPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should wrap in large viewport", async ({ mount, listPage }) => {
    await mount(<stories.Default />);
    await expect(listPage.root).toBeVisible();
    await expect(listPage.item1).toBeVisible();
    await expect(listPage.item2).toBeVisible();
    await expect(listPage.root).toHaveScreenshot();
  });
});

test(`should render a list with some items without headlines`, async ({
  mount,
  listPage,
}) => {
  await mount(<stories.Variants decorativeColor="orange" size="medium" />);
  await expect(listPage.item1).toBeVisible();
  await expect(listPage.item2).toBeVisible();
  await expect(listPage.item3).toBeVisible();
  await expect(listPage.item4).toBeVisible();
  await expect(listPage.item5).toBeVisible();
  await expect(listPage.root).toHaveScreenshot();
});

test(`should render a list with a flexbox container inside the description`, async ({
  mount,
  listPage,
}) => {
  await mount(<stories.FlexboxInDescription />);
  await expect(listPage.flexBoxItem).toBeVisible();
  await expect(listPage.root).toHaveScreenshot();
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, listPage }) => {
    await listPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(listPage.root).toBeVisible();
    await expect(listPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, listPage }) => {
    await listPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(listPage.root).toBeVisible();
    await expect(listPage.root).toHaveScreenshot();
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    listPage,
  }) => {
    await listPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(listPage.root).toBeVisible();
    await expect(listPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, listPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: listPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
