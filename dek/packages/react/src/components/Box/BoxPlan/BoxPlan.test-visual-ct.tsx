import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./BoxPlan.stories.portable";
import { viewports } from "../../../../playwright/fixtures";
import { prepaidWieIchWill } from "./BoxPlan.mock";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend<{
  boxPlanPage: {
    page: Page;
    root: Locator;
    headline: Locator;
    pib: Locator;
    contingent: Locator;
    price: Locator;
    button: Locator;
    usps: Locator;
  };
}>({
  boxPlanPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const headline = page.getByRole("heading", {
      name: "Allnet Flat M mit GB+",
      level: 3,
    });
    const pib = page.getByRole("link", { name: "Produktinformationsblatt" });
    const price = page.getByText("ab 20,00€ monatlich");
    const contingent = page.getByText("15 Gigabyte");
    const button = page.getByRole("button");
    const usps = page.getByRole("list", { name: "Vorteile" });

    await use({
      page,
      root,
      headline,
      pib,
      price,
      contingent,
      button,
      usps,
    });
  },
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render a PlanBox with PromotionLabel", async ({
    mount,
    boxPlanPage,
  }) => {
    await mount(<stories.Default promotionLabel="5 Euro Rabatt" />);
    await expect(boxPlanPage.headline).toBeVisible();
    await expect(boxPlanPage.button).toHaveText("Zum Tarif");
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("Should render a PlanBox with Range", async ({ mount, boxPlanPage }) => {
    await mount(
      <stories.Default
        contingent={prepaidWieIchWill.contingent}
        price={prepaidWieIchWill.price}
      />,
    );
    await expect(boxPlanPage.headline).toBeVisible();
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("Should render a PlanBox on black background", async ({
    mount,
    boxPlanPage,
  }) => {
    await mount(<stories.WithBlackBackground />);
    await expect(boxPlanPage.root).toBeVisible();
    await expect(boxPlanPage.headline).toBeVisible();
    await expect(boxPlanPage.pib).toBeVisible();
    await expect(boxPlanPage.price).toBeVisible();
    await expect(boxPlanPage.contingent).toBeVisible();
    await expect(boxPlanPage.button).toBeVisible();
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("Should render a PlanBox with custom button label without PIB and price", async ({
    mount,
    boxPlanPage,
  }) => {
    await mount(<stories.WithCustomButtonLabel />);
    await expect(boxPlanPage.root).toBeVisible();
    await expect(boxPlanPage.pib).not.toBeVisible();
    await expect(boxPlanPage.button).toBeVisible();
    await expect(boxPlanPage.button).toHaveText("Verfügbarkeit prüfen");
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("Should render a PlanBox with USPs", async ({ mount, boxPlanPage }) => {
    await mount(<stories.WithUsps />);
    await expect(boxPlanPage.usps).toBeVisible();
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("Should render with headlineLevel h4", async ({
    mount,
    boxPlanPage,
  }) => {
    await mount(<stories.WithDifferentHeadlineLevel />);
    await expect(boxPlanPage.root).toBeVisible();
    const headlineWithDifferentHeadlineLevel = boxPlanPage.page.getByRole(
      "heading",
      {
        name: "Allnet Flat M mit GB+",
        level: 4,
      },
    );
    await expect(headlineWithDifferentHeadlineLevel).toBeVisible();

    await expect(boxPlanPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode", async ({ mount, boxPlanPage }) => {
    await boxPlanPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(boxPlanPage.headline).toBeVisible();
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode", async ({ mount, boxPlanPage }) => {
    await boxPlanPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(boxPlanPage.headline).toBeVisible();
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    boxPlanPage,
  }) => {
    await boxPlanPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(boxPlanPage.headline).toBeVisible();
    await expect(boxPlanPage.root).toHaveScreenshot();
  });

  test("axe report", async ({ mount, boxPlanPage }) => {
    await mount(<stories.Default />);

    const accessibilityScanResults = await new AxeBuilder({
      page: boxPlanPage.page,
    })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
