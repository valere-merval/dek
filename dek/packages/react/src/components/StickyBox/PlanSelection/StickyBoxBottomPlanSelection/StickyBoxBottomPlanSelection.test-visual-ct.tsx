import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxBottomPlanSelection.stories.portable";

const test = base.extend<{
  stickyBoxBottomPlanSelectionPage: {
    page: Page;
    root: Locator;
    box: Locator;
    open: {
      inputOne: Locator;
      inputTwo: Locator;
      trigger: Locator;
      submit: Locator;
    };
    closed: {
      trigger: Locator;
      contentHeading: Locator;
    };
  };
}>({
  stickyBoxBottomPlanSelectionPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("shopping-cart-base-root");

    const closed = {
      trigger: page.getByRole("button", { name: "ändern" }),
      contentHeading: page.getByRole("heading", {
        name: "Allnet Flat S mit GB+",
      }),
    };
    const open = {
      inputOne: page.getByRole("radio", { name: "5 GB 12,00 € mtl." }),
      inputTwo: page.getByRole("radio", { name: "10 GB 17,00 € mtl." }),

      submit: page.getByRole("button", { name: "Übernehmen" }),
      trigger: page.getByTestId("shopping-cart-base-trigger"),
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

test("Should render a stickyBoxBottomPlanSelection", async ({
  mount,
  stickyBoxBottomPlanSelectionPage,
}) => {
  mount(<stories.Default />);
  await expect(stickyBoxBottomPlanSelectionPage.box).toHaveScreenshot();
});

test("Should render a stickyBoxBottomPlanSelection in open state", async ({
  mount,
  stickyBoxBottomPlanSelectionPage,
}) => {
  mount(<stories.Default />);
  await stickyBoxBottomPlanSelectionPage.closed.trigger.click();
  await expect(stickyBoxBottomPlanSelectionPage.open.inputOne).toBeVisible();
  await expect(stickyBoxBottomPlanSelectionPage.open.inputTwo).toBeVisible();
  await expect(stickyBoxBottomPlanSelectionPage.box).toHaveScreenshot();
});

test.describe("behavior", () => {
  test("Should allow users to select a different plan", async ({
    mount,
    stickyBoxBottomPlanSelectionPage,
  }) => {
    await mount(<stories.Default />);
    await stickyBoxBottomPlanSelectionPage.open.trigger.click();
    await stickyBoxBottomPlanSelectionPage.page.waitForTimeout(1000);
    await stickyBoxBottomPlanSelectionPage.open.inputTwo.click({ force: true });
    await expect(stickyBoxBottomPlanSelectionPage.box).toHaveScreenshot();
  });

  test("clicking on the submit button should close the component", async ({
    mount,
    stickyBoxBottomPlanSelectionPage,
  }) => {
    await mount(<stories.Default />);
    await stickyBoxBottomPlanSelectionPage.closed.trigger.click();
    await expect(stickyBoxBottomPlanSelectionPage.open.inputOne).toBeVisible();
    await stickyBoxBottomPlanSelectionPage.open.submit.click();
    await expect(
      stickyBoxBottomPlanSelectionPage.closed.contentHeading,
    ).toBeVisible();
    await expect(stickyBoxBottomPlanSelectionPage.box).toHaveScreenshot();
  });

  test("clicking the trigger in open state should close the component", async ({
    mount,
    stickyBoxBottomPlanSelectionPage,
  }) => {
    await mount(<stories.Default />);
    await stickyBoxBottomPlanSelectionPage.closed.trigger.click();
    await expect(stickyBoxBottomPlanSelectionPage.open.inputOne).toBeVisible();
    await stickyBoxBottomPlanSelectionPage.open.trigger.click();
    await expect(
      stickyBoxBottomPlanSelectionPage.closed.contentHeading,
    ).toBeVisible();
    await expect(stickyBoxBottomPlanSelectionPage.box).toHaveScreenshot();
  });
});
