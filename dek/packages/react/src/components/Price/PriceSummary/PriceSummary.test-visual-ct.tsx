import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./PriceSummary.stories.portable";

import {
  viewports,
  testDescribeAllowedBackgrounds,
} from "../../../../playwright/fixtures";
import AxeBuilder from "@axe-core/playwright";
import { Text } from "../../Typography/Text";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { ArrowLoop } from "@fair/icons";

const test = base.extend<{
  priceSummaryPage: {
    page: Page;
    root: Locator;
    errorMessage: Locator;
  };
}>({
  priceSummaryPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const errorMessage = page.getByText(
      "Einige angezeigte Vorteile sind leider nicht mehr gültig. Bitte",
    );
    await use({
      page,
      root,
      errorMessage,
    });
  },
});

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      darkGrey: stories.WithCongstarWebBlackBackground,
    },
    congstarApp: {
      darkGrey: stories.WithCongstarAppBlackBackground,
    },
    ja: {
      jaAgaveOutlinesSecondary: stories.WithJaJaAgave20Background,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render priceSummary`, async ({ mount, priceSummaryPage }) => {
      await mount(<BackgroundStory />);
      await expect(priceSummaryPage.root).toBeVisible();
      await expect(priceSummaryPage.errorMessage).not.toBeVisible();
      await expect(priceSummaryPage.root).toHaveScreenshot();
    });

    test(`Should render priceSummary with error`, async ({
      mount,
      priceSummaryPage,
    }) => {
      await mount(
        <BackgroundStory
          messages={[
            {
              message: (
                <>
                  <Text size="medium" variant="light" color="inherit">
                    Einige angezeigte Vorteile sind leider nicht mehr gültig.
                    Bitte{" "}
                    <Text
                      size="medium"
                      variant="light"
                      as="strong"
                      color="inherit"
                    >
                      leere deinen Browser-Cache, lösche Cookies{" "}
                    </Text>
                    und
                    <Text
                      size="medium"
                      variant="light"
                      as="strong"
                      color="inherit"
                    >
                      {" "}
                      aktualisiere die Seite
                    </Text>
                    , um die Bestellung durchzuführen. Bei Fragen helfen wir dir
                    gerne weiter. Alle Kontaktmöglichkeiten findest du unter{" "}
                    <Text size="medium" variant="light" as="a" color="inherit">
                      congstar.de/kontakt
                    </Text>
                    .
                  </Text>
                  <ButtonSecondary
                    asChild
                    startIcon={<ArrowLoop aria-hidden />}
                    style={{ color: "inherit" }}
                  >
                    <a href="https://www.congstar.de">Seite aktualisieren</a>
                  </ButtonSecondary>
                </>
              ),
              type: "error",
            },
          ]}
        />,
      );
      await expect(priceSummaryPage.root).toBeVisible();
      await expect(priceSummaryPage.errorMessage).toBeVisible();
      await expect(priceSummaryPage.root).toHaveScreenshot();
    });
  },
);

test.describe("Postpaid with Bringback", () => {
  test("Should render", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.PostpaidWithBringback />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });
});

test.describe("Postpaid with Bonus", () => {
  test("Should render", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.PostpaidWithBonus />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });
});

test.describe("Prepaid", () => {
  test("Should render default prepaid", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.Prepaid />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });
});

test.describe("Prepaid SIM Only", () => {
  test("Should render", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.PrepaidSimOnly />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should render Postpaid", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.Default />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("Should render Prepaid", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.Prepaid />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("Should render Bringback", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.PostpaidWithBringback />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test(`Should render PriceSummary with error`, async ({
    mount,
    priceSummaryPage,
  }) => {
    await mount(<stories.WithError />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.errorMessage).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });
});

test.describe("Large Viewport", () => {
  test("Should render Postpaid", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.Default />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("Should render Prepaid", async ({ mount, priceSummaryPage }) => {
    await mount(<stories.Prepaid />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test(`Should render PriceSummary with error`, async ({
    mount,
    priceSummaryPage,
  }) => {
    await mount(<stories.WithError />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.errorMessage).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });
});

test.describe("Accessibility", () => {
  test.use(viewports.sm);

  test("highContrast and light mode - Postpaid", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Default />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode - Postpaid", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Default />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode - Prepaid", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.Prepaid />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode - Prepaid", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.Prepaid />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("highContrast and light mode with error", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "light",
    });
    await mount(<stories.WithError />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.errorMessage).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("highContrast and dark mode with error", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.emulateMedia({
      forcedColors: "active",
      colorScheme: "dark",
    });
    await mount(<stories.WithError />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.errorMessage).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.Default />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("lineHeight and letterSpacing modification with error", async ({
    mount,
    priceSummaryPage,
  }) => {
    await priceSummaryPage.page.addStyleTag({
      path: "./playwright/assets/a11y.css",
    });
    await mount(<stories.WithError />);
    await expect(priceSummaryPage.root).toBeVisible();
    await expect(priceSummaryPage.errorMessage).toBeVisible();
    await expect(priceSummaryPage.root).toHaveScreenshot();
  });

  test("Axe scan should have no violations - Postpaid", async ({
    mount,
    priceSummaryPage,
  }) => {
    await mount(<stories.Default />);
    await expect(priceSummaryPage.root).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({
      page: priceSummaryPage.page,
    })
      .include("#root")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Axe scan should have no violations - Prepaid", async ({
    mount,
    priceSummaryPage,
  }) => {
    await mount(<stories.Prepaid />);
    await expect(priceSummaryPage.root).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({
      page: priceSummaryPage.page,
    })
      .include("#root")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
