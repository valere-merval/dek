import { Decorator, Preview } from "@storybook/react-vite";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import {
  BackgroundColor,
  backgroundColorMapping,
  Brand,
  brandBackgroundColorMap,
} from "../src/theme/theme";
import styled, { createGlobalStyle, css } from "styled-components";
import mainStyles from "@fair/global-css/dist/main.min.css?inline";
import mainJaStyles from "@fair/global-css/dist/mainJa.min.css?inline";
import mainPennyStyles from "@fair/global-css/dist/mainPenny.min.css?inline";
import expandTextSpacing from "../playwright/assets/a11y.css?inline";
import { mockDateDecorator } from "./utils/mockDateDecorator";
import { Globals, setInitialGlobals } from "./globals";

const createGlobalStyles = (isExpandTextSpacing: boolean) => createGlobalStyle`
    ${mainStyles}
    ${mainJaStyles}
    ${mainPennyStyles}
    ${isExpandTextSpacing && expandTextSpacing}
    body {
      // With this we can see where we forgot to set the font color
      color: white;
    }
    html {
      // scroll-padding-top: 500px is necessary because the chrome ignores sticky elements when scrolling a focused element into view
      scroll-padding-top: 500px;
    }
`;

export const BackgroundDiv = styled.div<{
  $noPaddingX?: boolean;
}>`
  ${({ theme, $noPaddingX }) => {
    return css`
      background-color: ${theme.color[
        backgroundColorMapping[theme.contextSpecific.backgroundColor]
      ]};
      padding: ${$noPaddingX ? `${theme.space[16]} 0` : theme.space["16"]};
    `;
  }}
`;

interface Context {
  globals: Globals;
  parameters: Globals;
  tags?: string[];
}

/**
 * Returns a background color based on the following checks in this defined order:
 *
 * 1) returns the background color that is defined for the specific Story for the selected brand if they are allowed and compatible to each other
 * 2) returns the selected background color for the selected brand if they are allowed and compatible to each other
 * 3) returns the first background color that is allowed for the selected brand
 */
const getBackgroundColor = (
  brand: Brand,
  context: Context,
): BackgroundColor => {
  const allowedBackgroundColorsForComponent =
    context.parameters.allowedBackgroundColors?.[brand];
  const allowedBackgroundColors: BackgroundColor[] =
    allowedBackgroundColorsForComponent || brandBackgroundColorMap[brand];

  const backgroundColor: BackgroundColor =
    context.parameters.backgroundColor ||
    context.globals.backgroundColor ||
    "black";

  if (allowedBackgroundColors.includes(backgroundColor)) {
    return backgroundColor;
  }
  return allowedBackgroundColors.at(0) || "black";
};

/**
 * Returns a brand based on the following checks in this defined order:
 *
 * 1) returns the selected brand if there are allowed background colors for the selected brand
 * 2) returns the first brand where background colors are allowed for
 * 3) returns the selected brand if there is no definition of allowed brands and background colors (last resort fallback)
 */
const getBrand = (context: Context): Brand => {
  const brand: Brand = context.globals.brand || "congstarWeb";
  const allowedBackgroundColors = context.parameters.allowedBackgroundColors;

  const allowedBackgroundColorsForBrand = allowedBackgroundColors?.[brand];

  if (
    !allowedBackgroundColors ||
    !allowedBackgroundColorsForBrand ||
    allowedBackgroundColorsForBrand?.at(0)
  ) {
    return brand;
  }

  return (
    (Object.entries(allowedBackgroundColors).find(
      ([, backgroundColors]) => backgroundColors.length > 0,
    )?.[0] as Brand) || brand
  );
};

const withThemeProvider: Decorator = (Story, context: Context) => {
  const brand = getBrand(context);
  const backgroundColor = getBackgroundColor(brand, context);
  const isExpandTextSpacing: boolean =
    context.globals.expandTextSpacing === "true" || false;
  const noPaddingX: boolean = context.parameters.noPaddingX || false;
  const GlobalStyles = createGlobalStyles(isExpandTextSpacing);

  return (
    <ThemeProvider backgroundColor={backgroundColor} brand={brand}>
      <GlobalStyles />
      <BackgroundDiv $noPaddingX={noPaddingX}>
        <Story {...context} />
      </BackgroundDiv>
    </ThemeProvider>
  );
};

const customViewports = {
  s: {
    name: "mobile untere Grenze",
    styles: {
      width: "360px",
      height: "900px",
    },
  },
  sm: {
    name: "mobile obere Grenze",
    styles: {
      width: "767px",
      height: "900px",
    },
  },
  m: {
    name: "tablet untere Grenze",
    styles: {
      width: "768px",
      height: "900px",
    },
  },
  ml: {
    name: "tablet obere Grenze",
    styles: {
      width: "1159px",
      height: "900px",
    },
  },
  l: {
    name: "desktop untere grenze",
    styles: {
      width: "1160px",
      height: "900px",
    },
  },
  lx: {
    name: "desktop obere grenze",
    styles: {
      width: "1391px",
      height: "900px",
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    viewport: { options: customViewports },
    options: {
      storySort: {
        method: "",
        order: [
          "Intro",
          "Changelog",
          "Getting Started",
          [
            "Installation",
            "ThemeProvider",
            "Global Styles",
            "CSS Utilities",
            "Examples",
          ],
          "Icons",
          ["Installation"],
          "Contribution",
          [
            "Workflow",
            "Development",
            "Make App Ready",
            "Visual Regression Tests",
            "Snapshot Release",
            "Decisions",
          ],
          "*",
          "components",
        ],
        locales: "",
      },
    },
    backgrounds: {
      disabled: true,
    },
  },

  decorators: [
    withThemeProvider, // Adds global styles and theme switching support.
    mockDateDecorator,
  ],

  globalTypes: {
    /*
     * The brand and background color toolbars are rendered as custom, ordered
     * controls in `.storybook/manager.tsx` (Brand left of Background Color, and
     * the background color options depend on the selected brand).
     */
    brand: {
      name: "Brand",
      description: "Brand theme",
    },

    backgroundColor: {
      name: "Background Color",
      description: "Background color (options depend on the selected brand)",
    },

    expandTextSpacing: {
      name: "Expand the Line Height and Letter spacing",
      toolbar: {
        title: "Expand Text Spacing",
        icon: "accessibility",
        items: [
          {
            value: "true",
            title: "Activate",
          },
          {
            value: "false",
            title: "Deactivate",
          },
        ],
      },
    },
  },

  initialGlobals: setInitialGlobals({}),

  tags: [
    "autodocs",
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
  ],
};

export default preview;
