import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./Breadcrumb.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  breadcrumbPage: {
    page: Page;
    root: Locator;
  };
}>({
  breadcrumbPage: async ({ page }, use) => {
    const root = page.locator("#root");
    await use({
      page,
      root,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render breadcrumb`, async ({ mount, breadcrumbPage }) => {
      await mount(<BackgroundStory />);
      await expect(
        breadcrumbPage.page.getByRole("navigation", { name: "Breadcrumb" }),
      ).toBeVisible();
      await expect(breadcrumbPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should hide the current segment when it overflows", async ({
    mount,
    breadcrumbPage,
  }) => {
    await mount(
      <stories.Default
        path={[
          { segment: "geraete", label: "Geräte mit Vertrag" },
          { segment: "smartphones", label: "Smartphones und Tablets" },
          { segment: "apple", label: "Apple" },
          {
            segment: "iphone-15-pro-max",
            label: "Apple iPhone 15 Pro Max mit Vertrag",
          },
        ]}
      />,
    );
    await expect(
      breadcrumbPage.page.locator('[aria-current="page"]'),
    ).not.toBeInViewport();
    await expect(
      breadcrumbPage.page.getByRole("link", { name: "Apple", exact: true }),
    ).toBeVisible();
    await expect(breadcrumbPage.root).toBeVisible();

    await breadcrumbPage.page.setViewportSize({ width: 1000, height: 1100 });
    await expect(
      breadcrumbPage.page.locator('[aria-current="page"]'),
    ).toBeVisible();
  });

  test("Should keep the current segment visible when it fits", async ({
    mount,
    breadcrumbPage,
  }) => {
    await mount(
      <stories.Default path={[{ segment: "apple", label: "Apple" }]} />,
    );

    await expect(
      breadcrumbPage.page.locator('[aria-current="page"]'),
    ).toBeVisible();
  });
});

test.describe("Large Viewport", () => {
  test("Should render with the current segment visible", async ({
    mount,
    breadcrumbPage,
  }) => {
    await mount(<stories.Default />);
    await expect(
      breadcrumbPage.page.locator('[aria-current="page"]'),
    ).toBeVisible();
    await expect(breadcrumbPage.root).toHaveScreenshot();
  });
});

test("uses home.ariaLabel independently from the JSON-LD home name", async ({
  mount,
  breadcrumbPage,
}) => {
  await mount(<stories.Default />);

  await expect(
    breadcrumbPage.page.getByRole("link", {
      name: "Zurück zur Übersicht",
    }),
  ).toBeVisible();

  const jsonLd = JSON.parse(
    (await breadcrumbPage.page
      .locator('script[type="application/ld+json"]')
      .textContent()) ?? "{}",
  );
  expect(jsonLd.itemListElement[0].name).toBe("congstar");
  expect(jsonLd.itemListElement[0].item).toBe("https://www.congstar.de");
  await expect(
    breadcrumbPage.page.getByRole("link", {
      name: "Zurück zur Übersicht",
    }),
  ).toHaveAttribute("href", "https://www.congstar.de");
});

test("uses segment link props and href overrides", async ({
  mount,
  breadcrumbPage,
}) => {
  await mount(<stories.WithLinkPropsPerSegment />);

  const appleLink = breadcrumbPage.page.getByRole("link", { name: "Apple" });
  await expect(appleLink).toHaveAttribute(
    "href",
    "https://www.congstar.de/apple/custom-url/",
  );
  await expect(appleLink).toHaveAttribute("data-tealium-rel", "bc-apple");
  const currentSegment = breadcrumbPage.page.locator('[aria-current="page"]');
  await expect(currentSegment).toContainText("iPhone 15 Pro Max");
  await expect(currentSegment).not.toHaveAttribute("href", /.+/);
});

test("renders the complete focus ring inside the scroll container", async ({
  mount,
  breadcrumbPage,
}) => {
  await mount(<stories.Default />);

  await breadcrumbPage.page
    .getByRole("link", { name: "Geräte mit Vertrag" })
    .focus();
  await expect(breadcrumbPage.root).toHaveScreenshot();
});

test.describe("Collapse on mobile", () => {
  test.describe("mobile viewport", () => {
    test.use(viewports.sm);

    test("collapses the middle segments into an ellipsis", async ({
      mount,
      breadcrumbPage,
    }) => {
      await mount(<stories.Collapsed />);

      await expect(
        breadcrumbPage.page.getByRole("button", {
          name: "Weitere Elemente anzeigen",
        }),
      ).toBeVisible();
      // Home, first and previous stay visible; middle and current are hidden.
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "Geräte mit Vertrag" }),
      ).toBeVisible();
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "iPhone", exact: true }),
      ).toBeVisible();
      await expect(
        breadcrumbPage.page.locator('[aria-current="page"]'),
      ).not.toBeInViewport();
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "Smartphones" }),
      ).toBeHidden();
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "Apple" }),
      ).toBeHidden();
      await expect(breadcrumbPage.root).toHaveScreenshot();
    });

    test("expands to the full path on click", async ({
      mount,
      breadcrumbPage,
    }) => {
      await mount(<stories.Collapsed />);

      const ellipsis = breadcrumbPage.page.getByRole("button", {
        name: "Weitere Elemente anzeigen",
      });
      await ellipsis.click();

      await expect(ellipsis).toBeHidden();
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "Smartphones" }),
      ).toBeVisible();
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "Apple" }),
      ).toBeVisible();
      await expect(
        breadcrumbPage.page.locator('[aria-current="page"]'),
      ).not.toBeInViewport();
      await expect(breadcrumbPage.root).toHaveScreenshot();
    });
  });

  test.describe("wide viewport", () => {
    test("shows the full path without an ellipsis", async ({
      mount,
      breadcrumbPage,
    }) => {
      await mount(<stories.Collapsed />);

      await expect(
        breadcrumbPage.page.getByRole("button", {
          name: "Weitere Elemente anzeigen",
        }),
      ).toBeHidden();
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "Smartphones" }),
      ).toBeVisible();
      await expect(
        breadcrumbPage.page.getByRole("link", { name: "Apple" }),
      ).toBeVisible();
      await expect(breadcrumbPage.root).toHaveScreenshot();
    });
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, breadcrumbPage }) => {
    await breadcrumbPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(breadcrumbPage.root).toBeVisible();
    await expect(breadcrumbPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, breadcrumbPage }) => {
    await breadcrumbPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(breadcrumbPage.root).toBeVisible();
    await expect(breadcrumbPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    breadcrumbPage,
  }) => {
    await breadcrumbPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(breadcrumbPage.root).toBeVisible();
    await expect(breadcrumbPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, breadcrumbPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: breadcrumbPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
