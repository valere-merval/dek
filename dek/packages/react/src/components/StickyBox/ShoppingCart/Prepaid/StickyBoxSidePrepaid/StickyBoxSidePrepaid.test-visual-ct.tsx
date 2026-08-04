import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxSidePrepaid.stories.portable";
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
  stickyBoxSidePrepaidPage: {
    page: Page;
    root: Locator;
    box: Locator;
    submit: Locator;
  };
}>({
  stickyBoxSidePrepaidPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("sticky-box-side-prepaid");
    const submit = page.getByText("Weiter zum Warenkorb");
    await use({
      page,
      root,
      box,
      submit,
    });
  },
});

test("Should render a StickyBoxSidePrepaid", async ({
  mount,
  stickyBoxSidePrepaidPage,
}) => {
  await mount(<stories.Default />);
  await expect(stickyBoxSidePrepaidPage.submit).toBeVisible();
  await expect(stickyBoxSidePrepaidPage.box).toHaveScreenshot();
});

test("Should render a StickyBoxSidePrepaid with Prepaid Year Plan", async ({
  mount,
  stickyBoxSidePrepaidPage,
}) => {
  await mount(<stories.PrepaidYearPlan />);
  await expect(stickyBoxSidePrepaidPage.submit).toBeVisible();
  await expect(stickyBoxSidePrepaidPage.box).toHaveScreenshot();
});

test("Should render a StickyBoxSidePrepaid with custom Button Text", async ({
  mount,
  stickyBoxSidePrepaidPage,
}) => {
  await mount(<stories.WithCustomButtonText />);
  await expect(
    stickyBoxSidePrepaidPage.page.getByRole("link", {
      name: "Weiter zur Kasse",
    }),
  ).toBeVisible();
  await expect(stickyBoxSidePrepaidPage.box).toHaveScreenshot();
});

test("Should render a StickyBoxSidePrepaid with all payment methods", async ({
  mount,
  stickyBoxSidePrepaidPage,
}) => {
  await mount(<stories.WithAllPaymentMethods />);
  await expect(
    stickyBoxSidePrepaidPage.page.getByRole("link", {
      name: "Weiter zur Kasse",
    }),
  ).toBeVisible();
  for (const paymentMethodName of paymentMethodNames) {
    await expect(
      stickyBoxSidePrepaidPage.root.getByRole("img", {
        name: paymentMethodName,
      }),
    ).toBeVisible();
  }
  await expect(stickyBoxSidePrepaidPage.box).toHaveScreenshot();
});

test.describe("Small Viewport", () => {
  test.use(viewports.sm);

  test("Should wrap in small viewport", async ({
    mount,
    stickyBoxSidePrepaidPage,
  }) => {
    await mount(<stories.Default />);
    await expect(stickyBoxSidePrepaidPage.submit).toBeVisible();
    await expect(stickyBoxSidePrepaidPage.box).toHaveScreenshot();
  });
});
