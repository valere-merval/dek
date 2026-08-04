import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { Divider as StyledDivider } from "../../Divider/Divider.styles";
import { colors } from "../shared/mappings";
import { contentGap, headlineTypographyMap } from "./mappings";
import { Root as SharedRoot } from "../shared/MessageContent.styles";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled(SharedRoot)(
  ({ theme, $variant }) => css`
    ${$variant === "outlined" &&
    css`
      padding: ${theme.space["16"]};

      ${up("md")} {
        padding: ${theme.space["24"]};
      }
    `}

    gap: ${theme.space[contentGap[theme.contextSpecific.brand].mobile]};
    ${up("md")} {
      gap: ${theme.space[contentGap[theme.contextSpecific.brand].desktop]};
    }
  `,
);

export const Headline = styled.p(
  ({ theme }) => css`
    all: unset;
    ${up("md")} {
      font: ${theme.typography[
        headlineTypographyMap[theme.contextSpecific.brand].desktop
      ]};
    }
    font: ${theme.typography[
      headlineTypographyMap[theme.contextSpecific.brand].mobile
    ]};
  `,
);

export const DiscountList = styled.ul(
  () => css`
    all: unset;
    display: flex;
    flex-direction: column;
    // This workaround fixes the correct announcement and handling of lists and list items by screen readers.
    // As described in the accessibility section of https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility, CSS attributes can affect how screen readers interpret HTML semantics.
    // Therefore, list items with the 'list-style' or 'list-style-type' attribute set to 'none' are not interpreted as list items and lack the correct announcements (e.g. "bullet point <listitem text>") and keyboard accessibility.
    // source: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility
    // announcements examples: https://www.456bereastreet.com/lab/screen-readers-list-items/
    li::marker {
      font-size: 0;
    }
    gap: inherit;
  `,
);

export const DiscountItem = styled.li(
  () => css`
    all: unset;
    display: list-item;
  `,
);

export const DiscountItemWrapper = styled.div(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-direction: column;
    gap: ${theme.space["12"]};
    ${up("md")} {
      gap: ${theme.space["16"]};
    }
  `,
);

export const DiscountDivider = styled(StyledDivider)(
  ({ theme }) => css`
    background-color: ${theme.color[
      colors[theme.contextSpecific.backgroundColor].border
    ]};

    ${highContrast()} {
      background-color: CanvasText;
    }

    &:last-child {
      display: none;
    }
  `,
);

export const DiscountDetailsWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["04"]};
    ${up("md")} {
      gap: ${theme.space["06"]};
    }
  `,
);
