import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxSidePostpaid.stories.portable";
import { overviewOneTimeDisplayPriceMock } from "../PostpaidShoppingCart.mock";
import { viewports } from "../../../../../../playwright/fixtures";
import { PaymentMethod } from "../../../../PaymentIcon/PaymentIcon.types";

const paymentMethodNames = [
  PaymentMethod.DIRECT_DEBIT,
  PaymentMethod.PAYPAL,
  PaymentMethod.GOOGLE_PAY,
  PaymentMethod.APPLE_PAY,
  PaymentMethod.KLARNA,
];

const test = base.extend<{
  stickyBoxSidePostpaidPage: {
    page: Page;
    root: Locator;
    box: Locator;
    contentHeading: Locator;
    accordionTriggerTop: Locator;
    accordionTriggerBottom: Locator;
    submit: Locator;
  };
}>({
  stickyBoxSidePostpaidPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("sticky-box-side-postpaid");
    const contentHeading = page.getByText("Monatliche Kosten");
    const accordionTriggerTop = page.getByRole("button", {
      name: "1. bis 24.",
    });
    const accordionTriggerBottom = page.getByRole("button", {
      name: "Summe einmalig",
    });
    const submit = page.getByText("Weiter zum Warenkorb");
    await use({
      page,
      root,
      box,
      contentHeading,
      accordionTriggerTop,
      accordionTriggerBottom,
      submit,
    });
  },
});

test("Should render a StickyBoxSidePostpaid", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(<stories.Default />);
  await expect(stickyBoxSidePostpaidPage.contentHeading).toBeVisible();
  await expect(stickyBoxSidePostpaidPage.submit).toBeVisible();
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("user's should be able to toggle the top accordion", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(<stories.Default />);
  await stickyBoxSidePostpaidPage.accordionTriggerTop.click();
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("user's should be able to toggle the bottom accordion", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(<stories.Default />);
  await stickyBoxSidePostpaidPage.accordionTriggerBottom.click();
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("should not render shipping-costs when attribute is undefined", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(<stories.WithoutShippingCost />);

  await expect(stickyBoxSidePostpaidPage.root).toContainText(
    "Versandkostenfrei",
  );
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("should not render shipping-costs when number is under 0", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(
    <stories.Default
      overviewOneTimeDisplayPrice={{
        ...overviewOneTimeDisplayPriceMock,
        shipping: -10,
      }}
    />,
  );
  await expect(stickyBoxSidePostpaidPage.root).toContainText(
    "Versandkostenfrei",
  );
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("should render with custom button text", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(<stories.Default checkoutButtonText="Weiter mit Gerät" />);
  await expect(stickyBoxSidePostpaidPage.root).not.toContainText(
    "Weiter zum Warenkorb",
  );
  await expect(stickyBoxSidePostpaidPage.root).toContainText(
    "Weiter mit Gerät",
  );
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("should render bringback", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(<stories.WithBringback />);

  await expect(stickyBoxSidePostpaidPage.root).toContainText("Rückgabedeal");
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("should render with all payment methods", async ({
  mount,
  stickyBoxSidePostpaidPage,
}) => {
  await mount(<stories.WithAllPaymentMethods />);

  await expect(stickyBoxSidePostpaidPage.root).toContainText(
    "Einmalige Kosten",
  );
  for (const paymentMethodName of paymentMethodNames) {
    await expect(
      stickyBoxSidePostpaidPage.root.getByRole("img", {
        name: paymentMethodName,
      }),
    ).toBeVisible();
  }
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test("should render bonuses", async ({ mount, stickyBoxSidePostpaidPage }) => {
  await mount(<stories.WithBonuses />);

  await expect(stickyBoxSidePostpaidPage.root).toContainText("Dein Bonus");
  await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    stickyBoxSidePostpaidPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stickyBoxSidePostpaidPage.contentHeading).toBeVisible();
    await expect(stickyBoxSidePostpaidPage.submit).toBeVisible();
    await expect(stickyBoxSidePostpaidPage.box).toHaveScreenshot();
  });
});
