import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./HtmlParser.stories.portable";
import { BackgroundColor } from "../../theme/theme";
import { FunctionComponent } from "react";
import { viewports } from "../../../playwright/fixtures";

const test = base.extend<{
  htmlParserPage: {
    page: Page;
    root: Locator;
    paragraph: Locator;
    anchorTag: Locator;
  };
}>({
  htmlParserPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const paragraph = page.getByText("Ein Paragraph");
    const anchorTag = page.getByRole("link", { name: "Congstar" });
    await use({
      page,
      root,
      paragraph,
      anchorTag,
    });
  },
});

test.describe("Background Color", () => {
  const supportedBackgroundStories = {
    black: stories.WithBlackBackground,
    white: stories.WithWhiteBackground,
    blue: stories.WithBlueBackground,
    lightGrey: stories.WithLightGreyBackground,
    darkGrey: stories.WithDarkGreyBackground,
  } satisfies Partial<Record<BackgroundColor, FunctionComponent>>;

  Object.entries(supportedBackgroundStories).map(
    ([colorName, BackgroundStory]) => {
      test(`Should render htmlParser on ${colorName} background`, async ({
        mount,
        htmlParserPage,
      }) => {
        await mount(<BackgroundStory />);
        await expect(htmlParserPage.root).toBeVisible();
        await expect(htmlParserPage.root).toHaveScreenshot();
      });
    },
  );
});

test("Should render paragraph text to Text components", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.Paragraph />);
  await expect(htmlParserPage.paragraph).toBeVisible();
  await expect(htmlParserPage.paragraph).toHaveScreenshot();
});

test("Should render paragraph text with real test data to Text components", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.ParagraphWithRealTestData />);
  await expect(htmlParserPage.root).toBeVisible();
  await expect(htmlParserPage.root).toHaveScreenshot();
});

test("Should render text without a wrapping HTML tag", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.NoWrapperHtmlTag />);
  await expect(htmlParserPage.root).toBeVisible();
  await expect(htmlParserPage.root).toHaveScreenshot();
});

test("Should render headlines to Headline components", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.Headline />);
  await expect(
    htmlParserPage.page.getByRole("heading", { name: "h1 Überschrift" }),
  ).toBeVisible();
  await expect(
    htmlParserPage.page.getByRole("heading", { name: "h2 Überschrift" }),
  ).toBeVisible();
  await expect(
    htmlParserPage.page.getByRole("heading", { name: "h3 Überschrift" }),
  ).toBeVisible();
  await expect(
    htmlParserPage.page.getByRole("heading", { name: "h4 Überschrift" }),
  ).toBeVisible();
  await expect(
    htmlParserPage.page.getByRole("heading", { name: "h5 Überschrift" }),
  ).toBeVisible();
  await expect(
    htmlParserPage.page.getByRole("heading", { name: "h6 Überschrift" }),
  ).toBeVisible();
  await expect(htmlParserPage.root).toHaveScreenshot();
});

test("Should render horizontal rule to Divider component", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.Divider />);
  await expect(htmlParserPage.root).toBeVisible();
  await expect(htmlParserPage.root).toHaveScreenshot();
});

test("Should render list and list items to Text components", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.List />);
  await expect(htmlParserPage.page.getByRole("listitem")).toHaveText([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4 Link",
  ]);
  await expect(htmlParserPage.root).toHaveScreenshot();
});

test("Should render checklists to List components", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.Checklist />);
  await expect(htmlParserPage.page.getByRole("listitem")).toHaveText([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4 Link",
  ]);
  await expect(htmlParserPage.root).toHaveScreenshot();
});

test("Should render checklists with real test data to List components", async ({
  mount,
  htmlParserPage,
}) => {
  await mount(<stories.ChecklistWithRealTestData />);
  await expect(htmlParserPage.page.getByRole("list")).toBeVisible();
  await expect(htmlParserPage.root).toHaveScreenshot();
});

test.describe("FootnoteTransformer", () => {
  test("Should render Footnote component", async ({
    mount,
    htmlParserPage,
  }) => {
    await mount(<stories.Footnote />);
    await htmlParserPage.page
      .getByRole("button", { name: "Mehr Details" })
      .click();
    await expect(
      htmlParserPage.page.getByRole("heading", { name: "Allnet Flat L" }),
    ).toBeVisible();
    await expect(htmlParserPage.page.getByText("Foo")).toBeVisible();
    await expect(htmlParserPage.page).toHaveScreenshot();
  });

  test("Should render Footnote component without header", async ({
    mount,
    htmlParserPage,
  }) => {
    await mount(<stories.FootnoteWithoutHeader />);
    await htmlParserPage.page
      .getByRole("button", { name: "Mehr Details" })
      .click();
    await expect(
      htmlParserPage.page.getByRole("heading", { name: "Allnet Flat L" }),
    ).not.toBeVisible();
    await expect(htmlParserPage.page.getByText("Foo")).toBeVisible();
    await expect(htmlParserPage.page).toHaveScreenshot();
  });

  test("Should render Footnote component without description", async ({
    mount,
    htmlParserPage,
  }) => {
    await mount(<stories.FootnoteWithoutDescription />);
    await htmlParserPage.page
      .getByRole("button", { name: "Mehr Details" })
      .click();
    await expect(
      htmlParserPage.page.getByRole("heading", { name: "Allnet Flat L" }),
    ).toBeVisible();
    await expect(htmlParserPage.page.getByText("Foo")).not.toBeVisible();
    await expect(htmlParserPage.page).toHaveScreenshot();
  });

  test("Should render Footnote component with cui-footnote markup", async ({
    mount,
    htmlParserPage,
  }) => {
    await mount(<stories.CuiFootnote />);
    await htmlParserPage.page
      .getByRole("button", { name: "Mehr Details" })
      .click();
    await expect(
      htmlParserPage.page.getByRole("heading", { name: "Headline" }),
    ).toBeVisible();
    await expect(
      htmlParserPage.page.getByText("Cui Footnote Paragraph"),
    ).toBeVisible();
    await expect(htmlParserPage.page).toHaveScreenshot();
  });
});

test.describe("LinkTransformer", () => {
  test("Should render a Link", async ({ mount, htmlParserPage }) => {
    await mount(<stories.Link />);
    await expect(htmlParserPage.anchorTag).toBeVisible();
    await expect(htmlParserPage.anchorTag).toHaveScreenshot();
  });

  test("Should render a Link in a Text component", async ({
    mount,
    htmlParserPage,
  }) => {
    await mount(<stories.LinkWithWrapper />);
    await expect(htmlParserPage.anchorTag).toBeVisible();
    await expect(htmlParserPage.anchorTag).toHaveScreenshot();
  });

  test("Should render a Link as a ButtonPrimary component", async ({
    mount,
    htmlParserPage,
  }) => {
    await mount(<stories.LinkAsButtonPrimary />);
    await expect(htmlParserPage.anchorTag).toBeVisible();
    await expect(htmlParserPage.anchorTag).toHaveScreenshot();
  });

  test("Should render a Link as a ButtonSecondary component", async ({
    mount,
    htmlParserPage,
  }) => {
    await mount(<stories.LinkAsButtonSecondary />);
    await expect(htmlParserPage.anchorTag).toBeVisible();
    await expect(htmlParserPage.anchorTag).toHaveScreenshot();
  });
});

test.describe("SpacerTransformer", () => {
  test.describe("small viewport", () => {
    test.use(viewports.sm);
    test("Should render a vertical Spacer", async ({
      mount,
      htmlParserPage,
    }) => {
      await mount(<stories.Spacer />);
      await expect(htmlParserPage.page.getByText("Paragraph 1")).toBeVisible();
      await expect(htmlParserPage.page).toHaveScreenshot();
    });
  });

  test.describe("large viewport", () => {
    test.use(viewports.md);
    test("Should render a vertical Spacer", async ({
      mount,
      htmlParserPage,
    }) => {
      await mount(<stories.Spacer />);
      await expect(htmlParserPage.page.getByText("Paragraph 1")).toBeVisible();
      await expect(htmlParserPage.page).toHaveScreenshot();
    });
  });
});
