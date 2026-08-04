import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxBottomPostpaid.stories.portable";
import {
  overviewBonusDisplayPricesMock,
  overviewOneTimeDisplayPriceMock,
} from "../PostpaidShoppingCart.mock";
import { PaymentMethod } from "../../../../PaymentIcon/PaymentIcon.types";
import { mapPaymentMethodToAltText } from "../../../../PaymentIcon/utils/mapPaymentMethodToIcon";

const paymentMethodNames = [
  PaymentMethod.DIRECT_DEBIT,
  PaymentMethod.PAYPAL,
  PaymentMethod.GOOGLE_PAY,
  PaymentMethod.APPLE_PAY,
  PaymentMethod.KLARNA,
];

const test = base.extend<{
  stickyBoxBottomPostpaidPage: {
    page: Page;
    root: Locator;
    box: Locator;
    open: {
      accordionTrigger: Locator;
      trigger: Locator;
      submit: Locator;
    };
    closed: {
      trigger: Locator;
    };
  };
}>({
  stickyBoxBottomPostpaidPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("shopping-cart-bottom-drawer");
    const open = {
      trigger: page.getByRole("button", { name: "Details" }),
      submit: page.getByText("Weiter zum Warenkorb"),
      accordionTrigger: page.getByRole("button", {
        name: "1. bis 24. Monat",
      }),
    };
    const closed = {
      trigger: page.getByRole("button", { name: "Details" }),
    };
    await use({
      page,
      root,
      box,
      open,
      closed,
    });
  },
});

test("should render a StickyBoxBottomPostpaid", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.Default />);
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render a StickyBoxBottomPostpaid in open state", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.Default />);
  await stickyBoxBottomPostpaidPage.closed.trigger.click();
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
  await expect(stickyBoxBottomPostpaidPage.open.submit).toBeVisible();
  await stickyBoxBottomPostpaidPage.closed.trigger.click();
});

test("should be able to toggle the accordion inside", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.Default />);
  await stickyBoxBottomPostpaidPage.closed.trigger.click();
  await stickyBoxBottomPostpaidPage.open.accordionTrigger.click();
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should not render shipping-costs when attribute is undefined", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.WithoutShippingCost />);

  await expect(stickyBoxBottomPostpaidPage.root).toContainText(
    "Versandkostenfrei",
  );
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should not render shipping-costs when number is under 0", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(
    <stories.Default
      overviewOneTimeDisplayPrice={{
        ...overviewOneTimeDisplayPriceMock,
        shipping: -10,
      }}
    />,
  );
  await expect(stickyBoxBottomPostpaidPage.root).toContainText(
    "Versandkostenfrei",
  );
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render with custom button text", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(
    <stories.Default
      checkoutButtonText="Weiter mit Gerät"
      checkoutUrl="#checkout"
    />,
  );
  await stickyBoxBottomPostpaidPage.open.trigger.click();
  await expect(stickyBoxBottomPostpaidPage.open.submit).not.toBeVisible();
  await expect(
    stickyBoxBottomPostpaidPage.page.getByRole("link", {
      name: "Weiter mit Gerät",
    }),
  ).toBeVisible();
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should not render detailed view in collapsed drawer, if recurring prices are the same", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.DifferentRecurringPrices />);
  await expect(stickyBoxBottomPostpaidPage.root).toContainText(
    "1. bis 24. Monat",
  );
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render bringback", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.WithBringback />);
  await stickyBoxBottomPostpaidPage.closed.trigger.click();
  await expect(stickyBoxBottomPostpaidPage.root).toContainText("Rückgabedeal");
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render with all payment methods", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.WithAllPaymentMethods />);
  await stickyBoxBottomPostpaidPage.closed.trigger.click();
  await expect(stickyBoxBottomPostpaidPage.root).toContainText(
    "1. bis 24. Monat",
  );
  for (const paymentMethodName of paymentMethodNames) {
    await expect(
      stickyBoxBottomPostpaidPage.root.getByRole("img", {
        name: mapPaymentMethodToAltText[paymentMethodName],
      }),
    ).toBeVisible();
  }
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render bonuses", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.WithBonuses />);
  await stickyBoxBottomPostpaidPage.closed.trigger.click();
  await expect(stickyBoxBottomPostpaidPage.root).toContainText("Dein Bonus");
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render closed state with bonus and shipping undefined", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(
    <stories.Default
      overviewOneTimeDisplayPrice={{
        ...overviewOneTimeDisplayPriceMock,
        shipping: undefined,
      }}
      overviewBonusDisplayPrices={overviewBonusDisplayPricesMock}
    />,
  );
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render closed state with bonus and shipping value", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(
    <stories.Default
      overviewOneTimeDisplayPrice={overviewOneTimeDisplayPriceMock}
      overviewBonusDisplayPrices={overviewBonusDisplayPricesMock}
    />,
  );
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render closed state without bonus and shipping undefined", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(
    <stories.Default
      overviewOneTimeDisplayPrice={{
        ...overviewOneTimeDisplayPriceMock,
        shipping: undefined,
      }}
    />,
  );
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render closed state without bonus and shipping value", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(
    <stories.Default
      overviewOneTimeDisplayPrice={overviewOneTimeDisplayPriceMock}
    />,
  );
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});

test("should render StickyBoxBottomPostpaid in open state with focused accordion trigger", async ({
  mount,
  stickyBoxBottomPostpaidPage,
}) => {
  await mount(<stories.Default />);
  await stickyBoxBottomPostpaidPage.closed.trigger.click();

  // Workaround to set focus on Accordion
  await stickyBoxBottomPostpaidPage.page.keyboard.press("Tab");
  await stickyBoxBottomPostpaidPage.open.accordionTrigger.focus();
  await expect(stickyBoxBottomPostpaidPage.open.accordionTrigger).toBeFocused();
  await expect(stickyBoxBottomPostpaidPage.box).toHaveScreenshot();
});
