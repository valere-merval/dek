import { css, DefaultTheme } from "styled-components";
import { highContrast, highContrastBorder } from "../../utils/accessibility";
import { scrollBarBackgroundColor, scrollBarBarColor } from "./mapping";

export const getScrollbarStyles = (
  theme: DefaultTheme,
  reserveSpaceForScrollbar?: boolean,
  orientation?: "vertical" | "horizontal",
) => {
  const resolvedOrientation = orientation ?? "vertical";

  return css`
    overflow: auto;
    ${resolvedOrientation === "vertical"
      ? css`
          overflow-x: hidden;
          padding-right: ${reserveSpaceForScrollbar ? theme.space["12"] : 0};
        `
      : css`
          overflow-y: hidden;
          ${reserveSpaceForScrollbar
            ? css`
                padding-bottom: ${theme.space["12"]};
              `
            : null}
        `}
    scroll-padding: ${theme.space["12"]};
    ${resolvedOrientation === "vertical" && // Chrome ignores sticky elements when scrolling a focused element into view.
    "scroll-padding-top: 60%;"};

    // This is necessary, because chrome would render the arrow buttons if one of the new standardized scrollbar css attributes are set
    @supports (-moz-appearance: none) {
      scrollbar-color: ${theme.color[
          scrollBarBarColor[theme.contextSpecific.brand]
        ]}
        ${theme.color[scrollBarBackgroundColor[theme.contextSpecific.brand]]};
      scrollbar-width: auto;
    }

    &::-webkit-scrollbar {
      ${resolvedOrientation === "vertical"
        ? `width: ${theme.size["12"]};`
        : `height: ${theme.size["12"]};`}
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.color[
        scrollBarBarColor[theme.contextSpecific.brand]
      ]};
      border-radius: ${theme.borderRadius["12"]};

      ${highContrastBorder()}

      ${highContrast()} {
        background-color: CanvasText;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme.color[
        scrollBarBackgroundColor[theme.contextSpecific.brand]
      ]};
      border-radius: ${theme.borderRadius["12"]};

      ${highContrastBorder()}
    }

    &::-webkit-scrollbar-button:vertical:start:increment,
    &::-webkit-scrollbar-button:vertical:start:decrement,
    &::-webkit-scrollbar-button:vertical:end:decrement,
    &::-webkit-scrollbar-button:horizontal:start:increment,
    &::-webkit-scrollbar-button:horizontal:end:decrement {
      display: none;
    }
  `;
};
