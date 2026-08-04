import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CarouselBoxPlan.stories.portable";
import { BackgroundColor } from "../../../theme/theme";
import { FunctionComponent } from "react";
import {
  container,
  viewports,
  ViewportSize,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";
import { mediaBreakpoints } from "../../../theme/mappings/mediaBreakpoints";

const test = base.extend<{
  carouselBoxPlanPage: {
    page: Page;
    root: Locator;
    next: Locator;
    previous: Locator;
    prepaidHeadline: Locator;
    navigationChip1: Locator;
    navigationChip2: Locator;
    navigationChip3: Locator;
  };
}>({
  carouselBoxPlanPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const previous = page.getByRole("button", { name: "Vorherige Kachel" });
    const next = page.getByRole("button", { name: "Nächste Kachel" });
    const prepaidHeadline = page.getByRole("heading", {
      name: "Prepaid Halbjahres-Paket",
    });
    const navigationChip1 = page.getByRole("button", {
      name: "50 MBit/s 20 €",
    });
    const navigationChip2 = page.getByRole("button", {
      name: "100 MBit/s 35 €",
    });
    const navigationChip3 = page.getByRole("button", {
      name: "250 MBit/s 45 €",
    });
    await use({
      page,
      root,
      previous,
      next,
      prepaidHeadline,
      navigationChip1,
      navigationChip2,
      navigationChip3,
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
      test.describe(`Should render carouselBoxPlan on ${colorName} background`, () => {
        test.describe("Extra-large viewport", () => {
          test.use(container(1400, 1000));

          test("Should render 4 BoxPlan components", async ({
            mount,
            carouselBoxPlanPage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxPlanPage.root).toBeVisible();
            await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
            await expect(carouselBoxPlanPage.next).toBeVisible();
            await expect(carouselBoxPlanPage.previous).toBeVisible();
            await expect(carouselBoxPlanPage.root).toHaveScreenshot();
          });
        });

        test.describe("Large viewport", () => {
          test.use(viewports.lg);

          test("Should render 3 BoxPlan components", async ({
            mount,
            carouselBoxPlanPage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxPlanPage.root).toBeVisible();
            await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
            await expect(carouselBoxPlanPage.next).toBeVisible();
            await expect(carouselBoxPlanPage.previous).toBeVisible();
            await expect(carouselBoxPlanPage.root).toHaveScreenshot();
          });
        });

        test.describe("Medium viewport", () => {
          test.use(viewports.md);

          test("Should render 2 BoxPlan components", async ({
            mount,
            carouselBoxPlanPage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxPlanPage.root).toBeVisible();
            await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
            await expect(carouselBoxPlanPage.next).toBeVisible();
            await expect(carouselBoxPlanPage.previous).toBeVisible();
            await expect(carouselBoxPlanPage.root).toHaveScreenshot();
          });
        });

        test.describe("Small viewports", () => {
          test.use(viewports.sm);

          test("Should render 1 BoxPlan component and also show a fraction of the next slide to indicate interactivity", async ({
            mount,
            carouselBoxPlanPage,
          }) => {
            await mount(<BackgroundStory />);
            await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
            await expect(
              carouselBoxPlanPage.page
                .getByRole("link", { name: "Produktinformationsblatt" })
                .first(),
            ).toBeVisible();
            await expect(
              carouselBoxPlanPage.page
                .getByRole("link", { name: "Produktinformationsblatt" })
                .nth(1),
            ).toBeVisible();
            await expect(carouselBoxPlanPage.root).toHaveScreenshot();
          });
        });
      });
    },
  );
});

test("Should not render the next or previous indicators when all slides are visible", async ({
  mount,
  carouselBoxPlanPage,
}) => {
  await mount(<stories.WithOnly3Slides />);
  await expect(carouselBoxPlanPage.root).toBeVisible();
  await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
  await expect(carouselBoxPlanPage.next).not.toBeVisible();
  await expect(carouselBoxPlanPage.previous).not.toBeVisible();
});

test.describe("startIndex", () => {
  Object.keys(mediaBreakpoints).forEach((viewport) => {
    test.describe(`viewport ${viewport}`, () => {
      test.use({
        viewport: {
          width: viewports[viewport as ViewportSize].viewport.width,
          height: 500,
        },
      });

      test("Should start with index 1", async ({
        mount,
        carouselBoxPlanPage,
      }) => {
        await mount(<stories.WithStartIndex startIndex={1} />);
        await expect(carouselBoxPlanPage.root).toBeVisible();
        await expect(carouselBoxPlanPage.next).toBeVisible();
        await expect(carouselBoxPlanPage.previous).toBeVisible();
        await expect(carouselBoxPlanPage.root).toHaveScreenshot();

        await carouselBoxPlanPage.next.click();
        await carouselBoxPlanPage.page.waitForTimeout(1000);
        await expect(carouselBoxPlanPage.root).toHaveScreenshot();
      });

      test("Should start with index 3", async ({
        mount,
        carouselBoxPlanPage,
      }) => {
        await mount(<stories.WithStartIndex startIndex={3} />);
        await expect(carouselBoxPlanPage.root).toBeVisible();
        await expect(carouselBoxPlanPage.next).toBeVisible();
        await expect(carouselBoxPlanPage.previous).toBeVisible();
        await expect(carouselBoxPlanPage.root).toHaveScreenshot();

        await carouselBoxPlanPage.next.click();
        await carouselBoxPlanPage.page.waitForTimeout(1000);
        await expect(carouselBoxPlanPage.root).toHaveScreenshot();
      });

      test("Should not scroll the page down", async ({
        mount,
        carouselBoxPlanPage,
      }) => {
        await mount(<stories.WithStartIndexToTestScrolling />);
        await expect(carouselBoxPlanPage.root).toBeVisible();
        await expect(carouselBoxPlanPage.next).toBeVisible();
        await expect(carouselBoxPlanPage.previous).toBeVisible();
        await expect(carouselBoxPlanPage.page).toHaveScreenshot();
      });
    });
  });
});

test.describe("bleedSize", () => {
  test.use(viewports.lg);

  test("Should show a sidebar on the right", async ({
    mount,
    carouselBoxPlanPage,
  }) => {
    await mount(<stories.WithSidebarOnTheRight startIndex={3} />);
    await expect(carouselBoxPlanPage.root).toBeVisible();
    await expect(carouselBoxPlanPage.next).toBeVisible();
    await expect(carouselBoxPlanPage.previous).toBeVisible();
    await expect(carouselBoxPlanPage.root).toHaveScreenshot();
  });
});

test.describe("Navigation Chips", () => {
  test.describe("small viewport", () => {
    test.use(viewports.sm);

    test("Should render with navigation chips", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await mount(<stories.WithNavigationChips />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.next).toBeVisible();
      await expect(carouselBoxPlanPage.previous).toBeVisible();
      await expect(carouselBoxPlanPage.navigationChip1).toBeVisible();
      await expect(carouselBoxPlanPage.navigationChip2).toBeVisible();
      await expect(carouselBoxPlanPage.navigationChip3).toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();

      await carouselBoxPlanPage.navigationChip3.click();
      await carouselBoxPlanPage.page.waitForTimeout(1000);
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
  });

  test.describe("large viewport", () => {
    test("Should not render the navigation chips if all boxes are visible", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await mount(<stories.WithNavigationChips />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.next).not.toBeVisible();
      await expect(carouselBoxPlanPage.previous).not.toBeVisible();
      await expect(carouselBoxPlanPage.navigationChip1).not.toBeVisible();
      await expect(carouselBoxPlanPage.navigationChip2).not.toBeVisible();
      await expect(carouselBoxPlanPage.navigationChip3).not.toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
  });
});

test.describe("Accessibility", () => {
  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("lineHeight and letterSpacing modification", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await carouselBoxPlanPage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
      await expect(carouselBoxPlanPage.next).toBeVisible();
      await expect(carouselBoxPlanPage.previous).toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
    test("highContrast and light mode", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await carouselBoxPlanPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
      await expect(carouselBoxPlanPage.next).toBeVisible();
      await expect(carouselBoxPlanPage.previous).toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
    test("highContrast and dark mode", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await carouselBoxPlanPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
      await expect(carouselBoxPlanPage.next).toBeVisible();
      await expect(carouselBoxPlanPage.previous).toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
  });
  test.describe("large viewport", () => {
    test("lineHeight and letterSpacing modification", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await carouselBoxPlanPage.page.addStyleTag({
        path: "./playwright/assets/a11y.css",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
      await expect(carouselBoxPlanPage.next).toBeVisible();
      await expect(carouselBoxPlanPage.previous).toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
    test("highContrast and light mode", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await carouselBoxPlanPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "light",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
      await expect(carouselBoxPlanPage.next).toBeVisible();
      await expect(carouselBoxPlanPage.previous).toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
    test("highContrast and dark mode", async ({
      mount,
      carouselBoxPlanPage,
    }) => {
      await carouselBoxPlanPage.page.emulateMedia({
        forcedColors: "active",
        colorScheme: "dark",
      });
      await mount(<stories.Default />);
      await expect(carouselBoxPlanPage.root).toBeVisible();
      await expect(carouselBoxPlanPage.prepaidHeadline).toBeVisible();
      await expect(carouselBoxPlanPage.next).toBeVisible();
      await expect(carouselBoxPlanPage.previous).toBeVisible();
      await expect(carouselBoxPlanPage.root).toHaveScreenshot();
    });
  });

  test("axe report", async ({ mount, carouselBoxPlanPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: carouselBoxPlanPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
