import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CarouselBoxDevice.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import { container, viewports } from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  carouselBoxDevicePage: {
    page: Page;
    root: Locator;
    next: Locator;
    previous: Locator;
    fairphone4Image: Locator;
    nothingPhoneImage: Locator;
    iphone14Image: Locator;
    samsungImage: Locator;
    samsungHeadline: Locator;
  };
}>({
  carouselBoxDevicePage: async ({ page }, use) => {
    const root = page.locator("#root");
    const previous = page.getByRole("button", { name: "Vorherige Kachel" });
    const next = page.getByRole("button", { name: "Nächste Kachel" });
    const fairphone4Image = root.getByRole("img", { name: "Fairphone 4" });
    const nothingPhoneImage = root.getByRole("img", {
      name: "Nothing Phone",
    });
    const iphone14Image = root.getByRole("img", {
      name: "Apple iPhone 14 Aktion",
    });
    const samsungImage = root.getByRole("img", {
      name: "Samsung Galaxy S23 Ultra Aktion",
    });
    const samsungHeadline = root.getByRole("heading", {
      name: "Samsung Galaxy S23 Ultra Aktion",
    });
    await use({
      page,
      root,
      next,
      previous,
      fairphone4Image,
      nothingPhoneImage,
      iphone14Image,
      samsungImage,
      samsungHeadline,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test.describe(`Should render carouselBoxDevice on ${colorName} background`, () => {
        test.describe("Extra-large viewport", () => {
          test.use(container(1400, 1000));

          test("Should render 4 BoxDevice components", async ({
            mount,
            carouselBoxDevicePage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
            await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
            await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
            await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
            await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
            await expect(carouselBoxDevicePage.next).toBeVisible();
            await expect(carouselBoxDevicePage.previous).toBeVisible();
            await expect(carouselBoxDevicePage.root).toHaveScreenshot();
          });
        });

        test.describe("Large viewport", () => {
          test.use(viewports.lg);

          test("Should render 3 BoxDevice components", async ({
            mount,
            carouselBoxDevicePage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
            await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
            await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
            await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
            await expect(carouselBoxDevicePage.iphone14Image).toBeAttached();
            await expect(carouselBoxDevicePage.next).toBeVisible();
            await expect(carouselBoxDevicePage.previous).toBeVisible();
            await expect(carouselBoxDevicePage.root).toHaveScreenshot();
          });
        });

        test.describe("Medium viewport", () => {
          test.use(viewports.md);

          test("Should render 2 BoxDevice components", async ({
            mount,
            carouselBoxDevicePage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
            await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
            await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
            await expect(
              carouselBoxDevicePage.nothingPhoneImage,
            ).toBeAttached();
            await expect(carouselBoxDevicePage.iphone14Image).toBeAttached();
            await expect(carouselBoxDevicePage.next).toBeVisible();
            await expect(carouselBoxDevicePage.previous).toBeVisible();
            await expect(carouselBoxDevicePage.root).toHaveScreenshot();
          });
        });

        test.describe("Small viewports", () => {
          test.use(viewports.sm);

          test("Should render 1 BoxDevice component and also show a fraction of the next slide to indicate interactivity", async ({
            mount,
            carouselBoxDevicePage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
            await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
            await expect(carouselBoxDevicePage.fairphone4Image).toBeAttached();
            await expect(
              carouselBoxDevicePage.nothingPhoneImage,
            ).toBeAttached();
            await expect(carouselBoxDevicePage.iphone14Image).toBeAttached();
            await expect(
              carouselBoxDevicePage.page
                .getByRole("button", { name: "Zum Gerät" })
                .first(),
            ).toBeVisible();
            await expect(
              carouselBoxDevicePage.page
                .getByRole("button", { name: "Zum Gerät" })
                .nth(1),
            ).toBeVisible();
            await expect(carouselBoxDevicePage.root).toHaveScreenshot();
          });
        });
      });
    },
  );
});

test("Should not render the next or previous indicators when there is only one slide", async ({
  mount,
  carouselBoxDevicePage,
}) => {
  await mount(<stories.WithOnly3Slides />);
  await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
  await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
  await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
  await expect(carouselBoxDevicePage.next).not.toBeVisible();
  await expect(carouselBoxDevicePage.previous).not.toBeVisible();
});

test.describe("Accessibility", () => {
  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("lineHeight and letterSpacing modification", async ({
      mount,
      carouselBoxDevicePage,
    }) => {
      await carouselBoxDevicePage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
      await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
      await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
      await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
      await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
      await expect(carouselBoxDevicePage.next).toBeVisible();
      await expect(carouselBoxDevicePage.previous).toBeVisible();
      await expect(carouselBoxDevicePage.root).toHaveScreenshot();
    });
    test("highContrast and light mode", async ({
      mount,
      carouselBoxDevicePage,
    }) => {
      await carouselBoxDevicePage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
      await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
      await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
      await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
      await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
      await expect(carouselBoxDevicePage.next).toBeVisible();
      await expect(carouselBoxDevicePage.previous).toBeVisible();
      await expect(carouselBoxDevicePage.root).toHaveScreenshot();
    });
    test("highContrast and dark mode", async ({
      mount,
      carouselBoxDevicePage,
    }) => {
      await carouselBoxDevicePage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
      await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
      await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
      await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
      await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
      await expect(carouselBoxDevicePage.next).toBeVisible();
      await expect(carouselBoxDevicePage.previous).toBeVisible();
      await expect(carouselBoxDevicePage.root).toHaveScreenshot();
    });
  });
  test.describe("large viewport", () => {
    test("lineHeight and letterSpacing modification", async ({
      mount,
      carouselBoxDevicePage,
    }) => {
      await carouselBoxDevicePage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
      await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
      await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
      await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
      await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
      await expect(carouselBoxDevicePage.next).toBeVisible();
      await expect(carouselBoxDevicePage.previous).toBeVisible();
      await expect(carouselBoxDevicePage.root).toHaveScreenshot();
    });
    test("highContrast and light mode", async ({
      mount,
      carouselBoxDevicePage,
    }) => {
      await carouselBoxDevicePage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
      await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
      await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
      await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
      await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
      await expect(carouselBoxDevicePage.next).toBeVisible();
      await expect(carouselBoxDevicePage.previous).toBeVisible();
      await expect(carouselBoxDevicePage.root).toHaveScreenshot();
    });
    test("highContrast and dark mode", async ({
      mount,
      carouselBoxDevicePage,
    }) => {
      await carouselBoxDevicePage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxDevicePage.samsungHeadline).toBeVisible();
      await expect(carouselBoxDevicePage.samsungImage).toBeVisible();
      await expect(carouselBoxDevicePage.fairphone4Image).toBeVisible();
      await expect(carouselBoxDevicePage.nothingPhoneImage).toBeVisible();
      await expect(carouselBoxDevicePage.iphone14Image).toBeVisible();
      await expect(carouselBoxDevicePage.next).toBeVisible();
      await expect(carouselBoxDevicePage.previous).toBeVisible();
      await expect(carouselBoxDevicePage.root).toHaveScreenshot();
    });
  });

  test("axe report", async ({ mount, carouselBoxDevicePage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: carouselBoxDevicePage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
