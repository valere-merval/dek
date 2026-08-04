import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./ComboBox.stories.portable";

import {
  scrollListBoxToTop,
  testDescribeAllowedBackgrounds,
  viewports,
  viewportWithAlteredHeight,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  comboBoxPage: {
    page: Page;
    root: Locator;
    combobox: Locator;
    buttonToggle: Locator;
    placeholder: Locator;
    modalTrigger: Locator;
    item: Locator;
  };
}>({
  comboBoxPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const combobox = page.getByRole("combobox", { name: "Dein Land" });
    const placeholder = page.getByText("Dein Land");
    const buttonToggle = page.getByRole("button", { name: "Zeige Länder" });
    const item = page.getByRole("option", { name: "- keine der Optionen -" });
    const modalTrigger = page.getByRole("button", { name: "Mehr Details" });
    await use({
      page,
      modalTrigger,
      root,
      combobox,
      buttonToggle,
      placeholder,
      item,
    });
  },
});

const fillAsyncComboBoxAndWaitForOption = async ({
  combobox,
  listBox,
  searchTerm,
  optionName,
}: {
  combobox: Locator;
  listBox: Locator;
  searchTerm: string;
  optionName: string | RegExp;
}) => {
  await expect(combobox).toBeVisible();
  await combobox.click();
  await combobox.fill(searchTerm);
  await expect(combobox).toHaveValue(searchTerm);
  await expect(listBox).toBeVisible({ timeout: 10000 });

  const option = listBox.getByRole("option", { name: optionName }).first();
  await expect(option).toBeVisible({ timeout: 10000 });

  return option;
};

const mockedAvailabilityCheckResults = [
  { city: "Köln" },
  { zipCode: "50667", city: "Köln" },
  { zipCode: "50668", city: "Köln" },
  { zipCode: "50670", city: "Köln" },
  { zipCode: "50672", city: "Köln" },
  { zipCode: "50674", city: "Köln" },
  { zipCode: "50676", city: "Köln" },
  { zipCode: "50677", city: "Köln" },
  { zipCode: "50678", city: "Köln" },
  { zipCode: "50679", city: "Köln" },
  { zipCode: "50733", city: "Köln" },
  { zipCode: "50735", city: "Köln" },
  { zipCode: "50737", city: "Köln" },
  { zipCode: "50739", city: "Köln" },
  { zipCode: "50765", city: "Köln" },
  { zipCode: "50767", city: "Köln" },
  { zipCode: "50769", city: "Köln" },
  { zipCode: "50823", city: "Köln" },
  {
    zipCode: "56767",
    city: "Kölnische Höfe Gem. Kaperich",
    locality: "Kölnische Höfe",
  },
  { zipCode: "84171", city: "Baierbach", locality: "Kölnberg" },
];

const mockAvailabilityCheckApi = async (page: Page) => {
  await page.route(
    "**/fixed-address-service/address/cities?search=*",
    async (route) => {
      const url = new URL(route.request().url());
      const searchTerm =
        url.searchParams.get("search")?.toLocaleLowerCase() ?? "";
      const items = mockedAvailabilityCheckResults.filter(
        ({ city, zipCode, locality }) =>
          `${zipCode ? `${zipCode}, ` : ""}${city}${locality ? ` (${locality})` : ""}`
            .toLocaleLowerCase()
            .includes(searchTerm),
      );

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(items),
      });
    },
  );
};

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
    test(`Should render ComboBox`, async ({ mount, comboBoxPage }) => {
      await mount(<BackgroundStory />);
      await expect(comboBoxPage.root).toBeVisible();
      await expect(comboBoxPage.placeholder).toBeVisible();

      await expect(comboBoxPage.root).toHaveScreenshot();
    });

    test(`Should render ComboBox in it's focused state`, async ({
      mount,
      comboBoxPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(comboBoxPage.root).toBeVisible();
      await comboBoxPage.combobox.click();
      await expect(comboBoxPage.root).toHaveScreenshot();
    });

    test(`Should render ComboBox in disabled state`, async ({
      mount,
      comboBoxPage,
    }) => {
      await mount(<BackgroundStory disabled />);
      await expect(comboBoxPage.root).toBeVisible();
      await expect(comboBoxPage.root).toHaveScreenshot();
    });

    test(`Should render ComboBox in filled state`, async ({
      mount,
      comboBoxPage,
    }) => {
      await mount(<BackgroundStory />);
      await expect(comboBoxPage.root).toBeVisible();
      await comboBoxPage.combobox.pressSequentially("Deutschland");
      await expect(comboBoxPage.root).toHaveScreenshot();
    });

    test(`Should render ComboBox disabled in filled state`, async ({
      mount,
      comboBoxPage,
    }) => {
      await mount(<BackgroundStory value="de" disabled />);
      await expect(comboBoxPage.root).toBeVisible();
      await expect(comboBoxPage.root).toHaveScreenshot();
    });

    test(`Should render ComboBox with error`, async ({
      mount,
      comboBoxPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: "Deine Angabe ist ungültig.",
              type: "error",
            },
          ]}
        />,
      );
      await expect(comboBoxPage.root).toBeVisible();
      await expect(comboBoxPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewportWithAlteredHeight("sm", 600));

  test("should render combobox", async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.combobox).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially("Deutschland");
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test("in open state", async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default menuTrigger="manual" />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially("Deutschland");
    await expect(comboBoxPage.placeholder).toBeVisible();
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test(`when hovering`, async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.item.hover();
    await scrollListBoxToTop(comboBoxPage.page.getByRole("listbox"));
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test(`with selected item`, async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.item.click();
    await expect(comboBoxPage.root).toHaveScreenshot();
  });
  test(`with selected item and open`, async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.item.click();
    await comboBoxPage.buttonToggle.click();
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test(`with first item autofocused and selected`, async ({
    mount,
    comboBoxPage,
  }) => {
    await mount(<stories.FocusFirstItem />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.combobox.pressSequentially("a");
    await comboBoxPage.page.waitForTimeout(500);
    await comboBoxPage.combobox.press("Enter");
    await expect(comboBoxPage.page).toHaveScreenshot();
  });

  test(`inside a modal`, async ({ mount, comboBoxPage }) => {
    await mockAvailabilityCheckApi(comboBoxPage.page);
    await mount(<stories.InModal />);

    const city = comboBoxPage.page.getByRole("combobox", {
      name: "Ort / PLZ",
    });
    const item = comboBoxPage.page.getByRole("option", {
      name: "Köln",
      exact: true,
    });
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.modalTrigger.click();
    await comboBoxPage.page.waitForTimeout(1000);
    await expect(city).toBeVisible();
    await city.pressSequentially("Köln");

    await expect(item).toBeVisible();
    await item.hover();
    await scrollListBoxToTop(
      comboBoxPage.page.getByRole("listbox", { name: "Ort / PLZ" }),
    );
    await expect(comboBoxPage.page).toHaveScreenshot();
  });

  test(`with default selected key`, async ({ mount, comboBoxPage }) => {
    await mount(<stories.WithDefaultSelectedKey />);
    await expect(comboBoxPage.root).toBeVisible();
    await expect(comboBoxPage.combobox).toBeVisible();
    await expect(comboBoxPage.page).toHaveScreenshot();

    await comboBoxPage.buttonToggle.click();
    await expect(comboBoxPage.page).toHaveScreenshot();
  });

  test("Should not close the popover on scrolling outside", async ({
    mount,
    comboBoxPage,
  }) => {
    await mount(<stories.NoCloseOnScroll />);
    await expect(comboBoxPage.root).toBeVisible();
    await expect(comboBoxPage.combobox).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await expect(comboBoxPage.item).toBeVisible();

    await comboBoxPage.page.mouse.wheel(0, 500);
    await comboBoxPage.page.waitForTimeout(500);
    await expect(comboBoxPage.item).toBeVisible();
  });
});

test.describe("Large Viewport", () => {
  test.use(viewportWithAlteredHeight("lg", 350));
  test("should render combobox", async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.combobox).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially("Deutschland");
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test("in open state", async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default menuTrigger="manual" />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially("Deutschland");
    await expect(comboBoxPage.placeholder).toBeVisible();
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test(`when hovering`, async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.item.hover();
    await scrollListBoxToTop(comboBoxPage.page.getByRole("listbox"));
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test(`with selected item`, async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.item.click();
    await expect(comboBoxPage.root).toHaveScreenshot();
  });
  test(`with selected item and open`, async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.item.click();
    await comboBoxPage.buttonToggle.click();
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test(`with first item autofocused and selected`, async ({
    mount,
    comboBoxPage,
  }) => {
    await mount(<stories.FocusFirstItem />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.combobox.pressSequentially("D");
    await comboBoxPage.page.waitForTimeout(500);
    await comboBoxPage.combobox.press("Enter");
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test("when open without scroll view", async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.combobox).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially("Deutschland");
    await expect(comboBoxPage.placeholder).toBeVisible();
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test("FullWidth", async ({ mount, comboBoxPage }) => {
    await mount(<stories.FullWidth />);
    await expect(comboBoxPage.root).toBeVisible();
    await expect(comboBoxPage.root).toHaveScreenshot();
  });
  test("inside a modal", async ({ mount, comboBoxPage }) => {
    await mockAvailabilityCheckApi(comboBoxPage.page);
    await mount(<stories.InModal />);
    const modal = comboBoxPage.page.getByRole("dialog", {
      name: "Verfügbarkeitsprüfung mit asynchronen Comboboxen",
    });
    const combobox = comboBoxPage.page.getByRole("combobox", {
      name: "Ort / PLZ",
    });
    const listBox = comboBoxPage.page.getByRole("listbox");

    await expect(comboBoxPage.root).toBeVisible();
    await expect(comboBoxPage.modalTrigger).toBeVisible();
    await comboBoxPage.modalTrigger.click();
    await expect(modal).toBeVisible();
    const item = await fillAsyncComboBoxAndWaitForOption({
      combobox,
      listBox,
      searchTerm: "Köln",
      optionName: /Köln/,
    });
    await item.hover();
    await scrollListBoxToTop(listBox);
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
});

test.describe("Async", () => {
  test.use(viewportWithAlteredHeight("md", 800));
  test("loading", async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default isLoading />);
    await expect(comboBoxPage.root).toBeVisible();
    await expect(comboBoxPage.root).toHaveScreenshot();
  });
  test("initial loading", async ({ mount, comboBoxPage }) => {
    await mount(<stories.InitialLoading />);
    await expect(comboBoxPage.root).toBeVisible();
    await expect(
      comboBoxPage.page.getByRole("combobox", { name: "Wird geladen ..." }),
    ).toBeVisible();
    await expect(comboBoxPage.root).toHaveScreenshot();
  });
  test("availability check", async ({ mount, comboBoxPage }) => {
    await mockAvailabilityCheckApi(comboBoxPage.page);
    await mount(<stories.AvailabilityCheck />);
    await expect(comboBoxPage.root).toBeVisible();

    const city = comboBoxPage.page.getByRole("combobox", {
      name: "Ort / PLZ",
    });
    const street = comboBoxPage.page.getByRole("combobox", {
      name: "Straße",
    });
    const housenumber = comboBoxPage.page.getByRole("combobox", {
      name: "Hausnr.",
    });

    await expect(city).toBeVisible();
    await expect(street).toBeVisible();
    await expect(housenumber).toBeVisible();

    const cityListBox = comboBoxPage.page.getByRole("listbox");
    const cityItem = await fillAsyncComboBoxAndWaitForOption({
      combobox: city,
      listBox: cityListBox,
      searchTerm: "Köln",
      optionName: /Köln/,
    });
    await cityItem.hover();
    await scrollListBoxToTop(cityListBox);
    await expect(comboBoxPage.root).toHaveScreenshot();
    await cityItem.click();

    const streetListBox = comboBoxPage.page.getByRole("listbox");
    const streetItem = await fillAsyncComboBoxAndWaitForOption({
      combobox: street,
      listBox: streetListBox,
      searchTerm: "Köln",
      optionName: /Köln/,
    });
    await streetItem.hover();
    await scrollListBoxToTop(streetListBox);
    await expect(comboBoxPage.root).toHaveScreenshot();
    await streetItem.click();

    const housenumberListBox = comboBoxPage.page.getByRole("listbox");
    const housenumberItem = await fillAsyncComboBoxAndWaitForOption({
      combobox: housenumber,
      listBox: housenumberListBox,
      searchTerm: "Köln",
      optionName: /Köln/,
    });
    await housenumberItem.hover();
    await scrollListBoxToTop(housenumberListBox);
    await expect(comboBoxPage.root).toHaveScreenshot();
    await housenumberItem.click();
    const housenumberChevron = comboBoxPage.page.getByRole("button", {
      name: "Zeige Hausnummern",
    });
    await expect(housenumberChevron).not.toBeVisible();
    await expect(comboBoxPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.lg);

  test("highContrast and light mode", async ({ mount, comboBoxPage }) => {
    await comboBoxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially(" ");
    await expect(comboBoxPage.placeholder).toBeVisible();
    await expect(comboBoxPage.page).toHaveScreenshot({
      maxDiffPixelRatio: 0.005,
    });
  });

  test("highContrast and dark mode", async ({ mount, comboBoxPage }) => {
    await comboBoxPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially(" ");
    await expect(comboBoxPage.placeholder).toBeVisible();
    await expect(comboBoxPage.page).toHaveScreenshot({
      maxDiffPixelRatio: 0.005,
    });
  });
  test("lineHeight and letterSpacing modification", async ({
    mount,
    comboBoxPage,
  }) => {
    await comboBoxPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();
    await comboBoxPage.combobox.pressSequentially("Deutschland");
    await expect(comboBoxPage.placeholder).toBeVisible();
    await expect(comboBoxPage.page).toHaveScreenshot();
  });
  test("reduced motion", async ({ mount, comboBoxPage }) => {
    await comboBoxPage.page.emulateMedia({
      reducedMotion: "reduce",
    });
    await mount(<stories.InitialLoading />);
    await expect(comboBoxPage.root).toBeVisible();
    await expect(comboBoxPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, comboBoxPage }) => {
    await mount(<stories.Default />);
    await expect(comboBoxPage.root).toBeVisible();
    await comboBoxPage.buttonToggle.click();

    const accessibilityScanResults = await new AxeBuilder({
      page: comboBoxPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
