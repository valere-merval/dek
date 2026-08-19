import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Select.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { viewportWithAlteredHeight } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  selectPage: {
    page: Page;
    root: Locator;
    trigger: Locator;
    dropdown: Locator;
    itemsArray: Locator;
    item: Locator;
    modalTrigger: Locator;
  };
}>({
  selectPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const trigger = page.getByRole("button", { name: "Land" });
    const dropdown = page.getByRole("listbox");
    const itemsArray = page.getByRole("option");
    const item = page.getByRole("option", { name: "Deutschland" });
    const modalTrigger = page.getByRole("button", { name: "Mehr Details" });
    await use({
      page,
      root,
      trigger,
      dropdown,
      itemsArray,
      item,
      modalTrigger,
    });
  },
});

test.describe("Select", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render select on ${colorName} background`, async ({
        mount,
        selectPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(selectPage.root).toBeVisible();
        await expect(selectPage.trigger).toBeVisible();
        await expect(selectPage.page).toHaveScreenshot();
      });

      test(`Should render select on ${colorName} background in it's disabled state`, async ({
        mount,
        selectPage,
      }) => {
        await mount(<BackgroundStory disabled />);
        await expect(selectPage.root).toBeVisible();
        await expect(selectPage.trigger).toBeVisible();
        await expect(selectPage.page).toHaveScreenshot();
      });

      test(`Should render filled select on ${colorName} background`, async ({
        mount,
        selectPage,
      }) => {
        await mount(<BackgroundStory value="de" />);
        await expect(selectPage.root).toBeVisible();
        await expect(selectPage.trigger).toBeVisible();
        await expect(selectPage.page).toHaveScreenshot();
      });

      test(`Should render filled select on ${colorName} background in it's disabled state`, async ({
        mount,
        selectPage,
      }) => {
        await mount(<BackgroundStory value="de" disabled />);
        await expect(selectPage.root).toBeVisible();
        await expect(selectPage.trigger).toBeVisible();
        await expect(selectPage.page).toHaveScreenshot();
      });

      test(`Should render select on ${colorName} background in it's erroneous state`, async ({
        mount,
        selectPage,
      }) => {
        await mount(
          <BackgroundStory
            messages={[
              { message: "bitte wähle ein Land aus", type: "error" },
              { message: "das Land muss in der EU sein", type: "error" },
            ]}
          />,
        );
        await expect(selectPage.root).toBeVisible();
        await expect(selectPage.page).toHaveScreenshot();
      });

      test(`Should render select on ${colorName} background with a focused item`, async ({
        mount,
        selectPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(selectPage.root).toBeVisible();
        await expect(selectPage.trigger).toBeVisible();
        await selectPage.trigger.click();
        await selectPage.item.focus();
        await expect(selectPage.page).toHaveScreenshot();
      });
    },
  );
});

test.describe("Small Viewport", () => {
  test.use(viewportWithAlteredHeight("sm", 600));

  test("should render default state", async ({ mount, selectPage }) => {
    await mount(<stories.Default />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render open state", async ({ mount, selectPage }) => {
    await mount(<stories.Default />);
    await expect(selectPage.root).toBeVisible();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render open state hovering an item", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.ScrollableContent />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await selectPage.page.getByRole("option", { name: "Deutschland" }).hover();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render open state selecting view", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.ScrollableContent />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await selectPage.itemsArray.nth(0).click();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render with focus", async ({ mount, selectPage }) => {
    await mount(<stories.ScrollableContent />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.focus();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render in it's open state, but without enough items to be scrollable", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.Default />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render in it's open state, with an item selected", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.Default />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await selectPage.itemsArray.nth(0).click();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render when clicking on the null option", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.NullOption />);
    await expect(selectPage.root).toBeVisible();
    await selectPage.trigger.click();
    await selectPage.itemsArray.first().click();

    await expect(selectPage.page).toHaveScreenshot();
  });

  test("should render open state aligned right", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.WithPopoverAlignedRight />);
    await expect(selectPage.root).toBeVisible();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test.use(viewportWithAlteredHeight("lg", 350));

  test("should render default state", async ({ mount, selectPage }) => {
    await mount(<stories.Default />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await expect(selectPage.page).toHaveScreenshot();
  });
  test("should render default state fullWidth", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.Default fullWidth />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await expect(selectPage.page).toHaveScreenshot();
  });
});
test.describe("Should render select component within a modal", () => {
  test("in it's open state", async ({ mount, selectPage }) => {
    await mount(<stories.WithinModal />);
    await selectPage.modalTrigger.click();
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewportWithAlteredHeight("sm", 600));

  test("exposes the selected option to assistive technology", async ({
    mount,
    selectPage,
  }) => {
    await mount(<stories.Default />);
    await selectPage.trigger.click();
    await selectPage.item.click();
    await selectPage.trigger.click();

    await expect(selectPage.item).toHaveAttribute("aria-selected", "true");
    await expect(selectPage.item).toBeFocused();
  });

  test("highContrast and light mode", async ({ mount, selectPage }) => {
    await selectPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode in it's open state", async ({
    mount,
    selectPage,
  }) => {
    await selectPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);

    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });

  test("highContrast and light mode in it's open state, with an item selected", async ({
    mount,
    selectPage,
  }) => {
    await selectPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.ScrollableContent />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await selectPage.item.click();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, selectPage }) => {
    await selectPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode in it's open state", async ({
    mount,
    selectPage,
  }) => {
    await selectPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);

    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });

  test("highContrast and dark mode in it's open state, with an item selected", async ({
    mount,
    selectPage,
  }) => {
    await selectPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.ScrollableContent />);
    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.trigger).toBeVisible();
    await selectPage.trigger.click();
    await selectPage.item.click();
    await selectPage.trigger.click();
    await expect(selectPage.page).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    selectPage,
  }) => {
    await selectPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);

    await expect(selectPage.root).toBeVisible();
    await expect(selectPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, selectPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: selectPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
