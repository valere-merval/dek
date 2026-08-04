import styled, { css } from "styled-components";
import {
  borderRadii,
  borderWidths,
  fonts,
  paddings,
  textColors,
} from "./mappings";
import { MessageStatusType, MessageStatusVariant } from "./MessageStatus.types";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled.div<{
  $type: MessageStatusType;
  $variant?: MessageStatusVariant;
  $fullWidth?: { mobile: boolean; desktop: boolean };
}>(
  ({
    theme,
    $type,
    $variant = "primary",
    $fullWidth = { mobile: false, desktop: false },
  }) => css`
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    width: ${$fullWidth.mobile ? "100%" : "fit-content"};

    ${up("md")} {
      width: ${$fullWidth.desktop ? "100%" : "fit-content"};
    }

    color: ${theme.color[
      textColors[$type][theme.contextSpecific.backgroundColor]
    ]};
    ${highContrast()} {
      ${$type === "error" &&
      css`
        color: LinkText;
      `}
    }

    font: ${theme.typography[fonts[theme.contextSpecific.brand]]};

    ${$variant === "outlined" &&
    css`
      min-height: ${theme.size["40"]};
      border-style: solid;
      border-width: ${theme.size[borderWidths[theme.contextSpecific.brand]]};
      border-color: ${theme.color[
        textColors[$type][theme.contextSpecific.backgroundColor]
      ]};
      border-radius: ${theme.borderRadius[
        borderRadii[theme.contextSpecific.brand]
      ]};
      padding: ${theme.space[paddings[theme.contextSpecific.brand].y]}
        ${theme.space[paddings[theme.contextSpecific.brand].x]};
    `}
  `,
);

export const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: start;
    gap: ${theme.space["08"]};
  `,
);

export const IconContainer = styled.div(
  ({ theme }) => css`
    all: unset;
    box-sizing: border-box;
    display: flex;
    // font will be set in root container to align the icon with the first line of the message
    height: 1lh;
    align-items: center;
    flex-shrink: 0;

    & svg {
      width: ${theme.size["16"]};
      height: ${theme.size["16"]};
    }
  `,
);

export const MessageContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["06"]};
  `,
);
