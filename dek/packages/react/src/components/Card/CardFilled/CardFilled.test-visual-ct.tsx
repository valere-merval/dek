import { expect, test as base } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "@playwright/test";
import stories from "./CardFilled.stories.portable";
import {
  testDescribeAllowedBackgrounds,
  viewports,
} from "../../../../playwright/fixtures";
import { CardSize } from "../shared/Card.types";
import { CardFilledColor } from "./CardFilled.types";
import { BackgroundColor, Brand } from "../../../theme/theme";
import { Headline } from "../../Typography/Headline";
import { CardFilled } from "./CardFilled";
import { ButtonPrimary } from "../../Button/ButtonPrimary";

const test = base.extend<{
  cardFilledPage: {
    page: Page;
    root: Locator;
    main: Locator;
  };
}>({
  cardFilledPage: async ({ page }, use) => {
    const root = page.locator("#root");
    const main = page.getByText("Card");
    await use({
      page,
      root,
      main,
    });
  },
});

const cardSizes = [
  "extraSmall",
  "small",
  "medium",
  "large",
  "extraLarge",
] satisfies CardSize[];

const backgroundColorParentMap = {
  congstarWeb: {
    black: ["white", "darkGrey"],
    white: ["blue", "lightGrey"],
  },
  congstarApp: {
    black: ["darkGrey"],
  },
  ja: {
    jaAgave20: ["jaGeneralWhite"],
  },
  penny: {
    pennyNeutralLightGrey: ["pennyNeutralWhite"],
  },
} as Record<Brand, Partial<Record<BackgroundColor, CardFilledColor[]>>>;

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
      white: stories.WithCongstarWebWhiteBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory, brandFromParent, backgroundColorFromParent) => {
    backgroundColorParentMap[brandFromParent]?.[
      backgroundColorFromParent
    ]?.forEach((color) => {
      test(`Should render with color: ${color}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(<BackgroundStory backgroundColor={color} />);
        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardFilledPage.main).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
    });
  },
);

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
    },
    congstarApp: {},
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory) => {
    test(`Should render with footer}`, async ({ mount, cardFilledPage }) => {
      // we set the background color manually because only the white background can have a footer
      await mount(
        <BackgroundStory
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <Headline size="large" variant="bold" as="h1">
                Card
              </Headline>

              <CardFilled.Footer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <ButtonPrimary variant="primary">Button</ButtonPrimary>
                </div>
              </CardFilled.Footer>
            </>
          }
          backgroundColor="white"
        />,
      );
      await expect(cardFilledPage.root).toBeVisible();
      await expect(cardFilledPage.main).toBeVisible();
      await expect(cardFilledPage.root).toHaveScreenshot();
    });
  },
);

const backgroundColorParentMapForHeader = {
  congstarWeb: {
    black: ["darkGrey"],
  },
  congstarApp: {
    black: ["darkGrey"],
  },
  ja: {
    jaAgave20: ["jaGeneralWhite"],
  },
  penny: {
    pennyNeutralLightGrey: ["pennyNeutralWhite"],
  },
} as Record<Brand, Partial<Record<BackgroundColor, CardFilledColor[]>>>;

testDescribeAllowedBackgrounds(
  test,
  {
    congstarWeb: {
      black: stories.WithCongstarWebBlackBackground,
    },
    congstarApp: {
      black: stories.WithCongstarAppBlackBackground,
    },
    ja: {
      jaAgave20: stories.WithJaJaAgave20Background,
    },
    penny: {
      pennyNeutralLightGrey: stories.WithPennyPennyNeutralLightGreyBackground,
    },
  },
  (BackgroundStory, brandFromParent, backgroundColorFromParent) => {
    backgroundColorParentMapForHeader[brandFromParent]?.[
      backgroundColorFromParent
    ]?.forEach((color) => {
      test(`Should render with CardHeader as string with color: ${color}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(
          <BackgroundStory
            backgroundColor={color}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <CardFilled.Header>Header</CardFilled.Header>
              </>
            }
          />,
        );
        const cardHeader = cardFilledPage.page.getByText("Header");

        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardHeader).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with CardHeader as link with color: ${color}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(
          <BackgroundStory
            backgroundColor={color}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <CardFilled.Header
                  buttonProps={{ href: "www.congstar.de", asChild: true }}
                >
                  Header
                </CardFilled.Header>
              </>
            }
          />,
        );

        const cardHeader = cardFilledPage.page.getByRole("link", {
          name: "Header",
        });

        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardHeader).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with CardHeader as link in focused state with color: ${color}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(
          <BackgroundStory
            backgroundColor={color}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <CardFilled.Header
                  buttonProps={{ href: "www.congstar.de", asChild: true }}
                >
                  Header
                </CardFilled.Header>
              </>
            }
          />,
        );

        const cardHeader = cardFilledPage.page.getByRole("link", {
          name: "Header",
        });

        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardHeader).toBeVisible();
        await cardHeader.focus();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with CardHeader as button with color: ${color}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(
          <BackgroundStory
            backgroundColor={color}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <CardFilled.Header
                  /* eslint-disable-next-line no-console */
                  buttonProps={{ onClick: () => console.log("clicked") }}
                >
                  Header
                </CardFilled.Header>
              </>
            }
          />,
        );

        const cardHeader = cardFilledPage.page.getByRole("button", {
          name: "Header",
        });

        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardHeader).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with CardHeader as button in focused state with color: ${color}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(
          <BackgroundStory
            backgroundColor={color}
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <CardFilled.Header
                  /* eslint-disable-next-line no-console */
                  buttonProps={{ onClick: () => console.log("clicked") }}
                >
                  Header
                </CardFilled.Header>
              </>
            }
          />,
        );

        const cardHeader = cardFilledPage.page.getByRole("button", {
          name: "Header",
        });

        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardHeader).toBeVisible();
        await cardHeader.focus();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
    });
  },
);

test.describe("CardHeader interactions", () => {
  test(`Should render CardHeader, with button as trigger`, async ({
    mount,
    cardFilledPage,
  }) => {
    await mount(<stories.WithHeaderAsButton />);
    const cardHeader = cardFilledPage.page.getByRole("button", {
      name: "Header",
    });

    await expect(cardFilledPage.root).toBeVisible();
    await expect(cardHeader).toBeVisible();

    const logs: string[] = [];
    cardFilledPage.page.on("console", (msg) => logs.push(msg.text()));
    await cardHeader.click();
    expect(logs).toContain("CardHeader button triggered, trigger = button");
  });

  test(`Should render CardHeader with card as trigger`, async ({
    mount,
    cardFilledPage,
  }) => {
    await mount(<stories.WithHeaderCardTrigger />);
    const cardHeader = cardFilledPage.page.getByText("Header");

    await expect(cardFilledPage.root).toBeVisible();
    await expect(cardHeader).toBeVisible();

    const logs: string[] = [];
    cardFilledPage.page.on("console", (msg) => logs.push(msg.text()));
    await cardHeader.click();
    expect(logs).toContain("CardHeader button triggered, trigger = card");
  });
});

test.describe("sizes", () => {
  cardSizes.map((size) => {
    test.describe("Small Viewport", () => {
      test.use(viewports.sm);

      test(`Should render with divider and size : ${size}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(<stories.WithDivider size={size} />);
        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardFilledPage.main).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with footer and size : ${size}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(<stories.WithFooter size={size} />);
        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardFilledPage.main).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with promotion and size : ${size}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(<stories.WithPromotionAndHeaderImage size={size} />);
        await expect(cardFilledPage.root).toBeVisible();
        await expect(
          cardFilledPage.page.getByText(
            "Mit der Fritz!Box 7530 AX jetzt noch schneller ins Netz.",
          ),
        ).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
    });
    test.describe("Large Viewport", () => {
      test(`Should render with divider and size : ${size}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(<stories.WithDivider size={size} />);
        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardFilledPage.main).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with footer and size : ${size} `, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(<stories.WithFooter size={size} />);
        await expect(cardFilledPage.root).toBeVisible();
        await expect(cardFilledPage.main).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
      test(`Should render with promotion and size : ${size}`, async ({
        mount,
        cardFilledPage,
      }) => {
        await mount(<stories.WithPromotionAndHeaderImage size={size} />);
        await expect(cardFilledPage.root).toBeVisible();
        await expect(
          cardFilledPage.page.getByText(
            "Mit der Fritz!Box 7530 AX jetzt noch schneller ins Netz.",
          ),
        ).toBeVisible();
        await expect(cardFilledPage.root).toHaveScreenshot();
      });
    });
  });
});
