import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./StickyBoxSidePlanSelection.stories.portable";

const test = base.extend<{
  stickyBoxSidePlanSelectionPage: {
    page: Page;
    root: Locator;
    box: Locator;
    contentHeading: Locator;
    itemOne: Locator;
    itemTwo: Locator;
    pib: Locator;
  };
}>({
  stickyBoxSidePlanSelectionPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const box = page.getByTestId("sticky-box-side");
    const contentHeading = page.getByRole("heading", {
      name: "Allnet Flat S mit GB+",
    });
    const itemOne = page.getByRole("radio", { name: "5 GB 12,00 € mtl." });
    const itemTwo = page.getByRole("radio", { name: "10 GB 17,00 € mtl." });
    const pib = page.getByRole("link", { name: "Produktinformationsblatt" });
    await use({
      page,
      root,
      box,
      contentHeading,
      itemOne,
      itemTwo,
      pib,
    });
  },
});

test("Should render a stickyBoxSidePlanSelection", async ({
  mount,
  stickyBoxSidePlanSelectionPage,
}) => {
  await mount(<stories.Default />);
  await expect(stickyBoxSidePlanSelectionPage.contentHeading).toBeVisible();
  await expect(stickyBoxSidePlanSelectionPage.itemOne).toBeVisible();
  await expect(stickyBoxSidePlanSelectionPage.itemTwo).toBeVisible();
  await expect(stickyBoxSidePlanSelectionPage.pib).toBeVisible();
  await expect(stickyBoxSidePlanSelectionPage.box).toHaveScreenshot();
});

test("allows users to select a different plan", async ({
  mount,
  stickyBoxSidePlanSelectionPage,
}) => {
  await mount(<stories.Default />);
  await stickyBoxSidePlanSelectionPage.itemTwo.click({ force: true });
  await expect(stickyBoxSidePlanSelectionPage.box).toHaveScreenshot();
});
