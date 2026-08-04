import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxBottomPrepaid.stories.portable";
import { PaymentMethod } from "../../../../PaymentIcon/PaymentIcon.types";

const paymentMethodNames = [
  PaymentMethod.DIRECT_DEBIT,
  PaymentMethod.PAYPAL,
  PaymentMethod.GOOGLE_PAY,
  PaymentMethod.APPLE_PAY,
  PaymentMethod.KLARNA,
];

const test = base.extend<{
  stickyBoxBottomPrepaidPage: {
    page: Page;
    root: Locator;
    box: Locator;
    closed: {
      trigger: Locator;
    };
    open: {
      submit: Locator;
      trigger: Locator;
    };
  };
}>({
  stickyBoxBottomPrepaidPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("shopping-cart-bottom-drawer");
    const open = {
      trigger: page.getByRole("button", { name: "Details" }),
      submit: page.getByText("Weiter zum Warenkorb"),
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

test("Should render a StickyBoxBottomPrepaid", async ({
  mount,
  stickyBoxBottomPrepaidPage,
}) => {
  await mount(<stories.Default />);
  await expect(stickyBoxBottomPrepaidPage.root).toHaveScreenshot();
});

test("Should render a StickyBoxBottomPrepaid in open state", async ({
  mount,
  stickyBoxBottomPrepaidPage,
}) => {
  await mount(<stories.Default />);
  await stickyBoxBottomPrepaidPage.closed.trigger.click();
  await expect(stickyBoxBottomPrepaidPage.open.submit).toBeVisible();
  await expect(stickyBoxBottomPrepaidPage.box).toHaveScreenshot();
});

test("Should render a StickyBoxBottomPrepaid in open state with Prepaid Year Plan", async ({
  mount,
  stickyBoxBottomPrepaidPage,
}) => {
  await mount(<stories.PrepaidYearPlan />);
  await stickyBoxBottomPrepaidPage.closed.trigger.click();
  await expect(stickyBoxBottomPrepaidPage.open.submit).toBeVisible();
  await expect(stickyBoxBottomPrepaidPage.root).toHaveScreenshot();
});

test("Should render a StickyBoxBottomPrepaid in open state with custom Button Text", async ({
  mount,
  stickyBoxBottomPrepaidPage,
}) => {
  await mount(<stories.WithCustomButtonText />);
  await stickyBoxBottomPrepaidPage.closed.trigger.click();
  await expect(
    stickyBoxBottomPrepaidPage.page.getByRole("link", {
      name: "Weiter zur Kasse",
    }),
  ).toBeVisible();
  await expect(stickyBoxBottomPrepaidPage.root).toHaveScreenshot();
});

test("Should render a StickyBoxBottomPrepaid in open state with all payment methods", async ({
  mount,
  stickyBoxBottomPrepaidPage,
}) => {
  await mount(<stories.WithAllPaymentMethods />);
  await stickyBoxBottomPrepaidPage.closed.trigger.click();
  await expect(
    stickyBoxBottomPrepaidPage.page.getByRole("link", {
      name: "Weiter zur Kasse",
    }),
  ).toBeVisible();
  for (const paymentMethodName of paymentMethodNames) {
    await expect(
      stickyBoxBottomPrepaidPage.root.getByRole("img", {
        name: paymentMethodName,
      }),
    ).toBeVisible();
  }
  await expect(stickyBoxBottomPrepaidPage.root).toHaveScreenshot();
});
