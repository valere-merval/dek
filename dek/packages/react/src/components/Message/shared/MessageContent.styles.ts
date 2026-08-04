import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import {
  borderRadii,
  borderWidths,
  colors,
  contentGap,
  paddings,
} from "./mappings";
import { MessageContentVariant } from "./MessageContent.types";

export const Root = styled.div<{
  $variant?: MessageContentVariant;
  $fullWidth?: boolean;
}>(
  ({ theme, $variant = "primary", $fullWidth = false }) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    color: ${theme.color[colors[theme.contextSpecific.backgroundColor].text]};
    width: ${$fullWidth ? "100%" : "fit-content"};

    ${$variant === "outlined" &&
    css`
      border-style: solid;
      border-width: ${theme.size[borderWidths[theme.contextSpecific.brand]]};
      border-color: ${theme.color[
        colors[theme.contextSpecific.backgroundColor].border
      ]};
      border-radius: ${theme.borderRadius[
        borderRadii[theme.contextSpecific.brand].mobile
      ]};

      padding: ${theme.space[paddings[theme.contextSpecific.brand].y.mobile]}
        ${theme.space[paddings[theme.contextSpecific.brand].x.mobile]};

      ${up("md")} {
        border-radius: ${theme.borderRadius[
          borderRadii[theme.contextSpecific.brand].desktop
        ]};
        padding: ${theme.space[paddings[theme.contextSpecific.brand].y.desktop]}
          ${theme.space[paddings[theme.contextSpecific.brand].x.desktop]};
      }
    `}

    gap: ${theme.space[contentGap[theme.contextSpecific.brand].mobile]};
    ${up("md")} {
      gap: ${theme.space[contentGap[theme.contextSpecific.brand].desktop]};
    }
  `,
);
