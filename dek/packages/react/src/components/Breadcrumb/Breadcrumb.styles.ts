import styled, { css, DefaultTheme } from "styled-components";
import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb as AriaBreadcrumb,
  Link as AriaLink,
} from "react-aria-components";
import { HouseFill } from "@fair/icons";
import { up } from "../../theme/mappings/mediaBreakpoints";
import {
  scrollBarBackgroundColor,
  scrollBarBarColor,
} from "../ScrollArea/mapping";
import { highContrast, highContrastBorder } from "../../utils/accessibility";

export const Root = styled.nav``;

export const ScrollArea = styled.div<{ $isScrollable: boolean }>(
  ({ theme, $isScrollable }) => {
    const scrollbarThickness = theme.size["12"];
    const rowVerticalPadding = theme.space["04"];
    const rowHeight = (iconSize: string) =>
      `calc(${iconSize} + 2 * ${rowVerticalPadding} + ${scrollbarThickness})`;

    return css`
      box-sizing: border-box;
      max-width: 100%;
      min-width: 0;
      overflow-x: scroll;
      overflow-y: hidden;
      min-height: ${rowHeight(theme.size["16"])};
      ${up("md")} {
        min-height: ${rowHeight(theme.size["20"])};
      }
      padding-bottom: ${theme.space["04"]};
      scroll-padding-inline: ${theme.space["08"]};

      @supports (-moz-appearance: none) {
        scrollbar-color: ${$isScrollable
          ? `${theme.color[scrollBarBarColor[theme.contextSpecific.brand]]} ${
              theme.color[scrollBarBackgroundColor[theme.contextSpecific.brand]]
            }`
          : "transparent transparent"};
        scrollbar-width: auto;
      }

      &::-webkit-scrollbar {
        height: ${theme.size["12"]};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${$isScrollable
          ? theme.color[scrollBarBarColor[theme.contextSpecific.brand]]
          : "transparent"};
        border-radius: ${theme.borderRadius["12"]};
        ${$isScrollable &&
        css`
          ${highContrastBorder()}
          ${highContrast()} {
            background-color: CanvasText;
          }
        `}
      }

      &::-webkit-scrollbar-track {
        background-color: ${$isScrollable
          ? theme.color[scrollBarBackgroundColor[theme.contextSpecific.brand]]
          : "transparent"};
        border-radius: ${theme.borderRadius["12"]};
        ${$isScrollable && highContrastBorder()}
      }

      &::-webkit-scrollbar-button:horizontal:start:increment,
      &::-webkit-scrollbar-button:horizontal:end:decrement {
        display: none;
      }
    `;
  },
);

export const List = styled(AriaBreadcrumbs)(
  () => css`
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: max-content;
    li::marker {
      font-size: 0;
    }
  `,
);

export const Item = styled(AriaBreadcrumb)<{
  $hideOnMobile?: boolean;
  $mobileOnly?: boolean;
  $hideWhenOverflowing?: boolean;
}>(
  ({ $hideOnMobile, $mobileOnly, $hideWhenOverflowing }) => css`
    all: unset;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;

    ${$hideOnMobile &&
    css`
      display: none;
      ${up("md")} {
        display: inline-flex;
      }
    `}

    ${$mobileOnly &&
    css`
      ${up("md")} {
        display: none;
      }
    `}

  ${$hideWhenOverflowing &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      pointer-events: none;
    `}
  `,
);

export const Separator = styled.span(
  ({ theme }) => css`
    margin-inline: ${theme.space["04"]};
    color: ${theme.color["NeutralSecondary40"]};
    font: ${theme.typography.BodyLight12};
    ${up("md")} {
      margin-inline: ${theme.space["04"]};
      font: ${theme.typography.BodyLight14};
    }
    user-select: none;
  `,
);

const interactiveElementStyles = (theme: DefaultTheme) => css`
  all: unset;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: ${theme.space["04"]};
  color: ${theme.color["NeutralPrimaryWhite"]};

  &[data-focus-visible],
  &:focus-visible {
    ${theme.contextSpecific.focusStyles};
    outline-offset: -${theme.space["02"]};
    border-radius: ${theme.borderRadius["06"]};
  }
`;

export const HomeLink = styled(AriaLink)(
  ({ theme }) => css`
    ${interactiveElementStyles(theme)}
  `,
);

export const HomeIcon = styled(HouseFill)(
  ({ theme }) => css`
    width: ${theme.size["16"]};
    height: ${theme.size["16"]};

    ${up("md")} {
      width: ${theme.size["20"]};
      height: ${theme.size["20"]};
    }
  `,
);

export const SegmentLink = styled(AriaLink)(
  ({ theme }) => css`
    ${interactiveElementStyles(theme)};
    font: ${theme.typography.BodyLight12};
    text-decoration: underline;
    text-underline-offset: ${theme.space["02"]};

    ${up("md")} {
      font: ${theme.typography.BodyLight14};
    }

    &[data-current] {
      font: ${theme.typography.BodyBold12};
      cursor: default;
      text-decoration: none;

      ${up("md")} {
        font: ${theme.typography.BodyBold14};
      }
    }
  `,
);

export const Ellipsis = styled.button(
  ({ theme }) => css`
    ${interactiveElementStyles(theme)};
    font: ${theme.typography.BodyBold12};
    text-decoration: underline;
    text-underline-offset: ${theme.space["02"]};

    ${up("md")} {
      font: ${theme.typography.BodyBold14};
    }
  `,
);
