import styled, { css } from "styled-components";
import { ConvertToTransient } from "../../propTypes";
import { CardProps } from "./Card.types";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { CardOptionMap } from "./mapping";
import { highContrastBorder } from "../../../utils/accessibility";

export const Root = styled.div<ConvertToTransient<CardProps, "size">>(
  ({ theme, $size }) => css`
    all: unset;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);

    --card-padding: ${theme.space[
        CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingY
      ]}
      ${theme.space[
        CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingX
      ]};
    --card-border-radius: ${theme.size[
      CardOptionMap[theme.contextSpecific.brand][$size].mobile.borderRadius
    ]};
    ${up("md")} {
      --card-padding: ${theme.space[
          CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingY
        ]}
        ${theme.space[
          CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingX
        ]};
      --card-border-radius: ${theme.size[
        CardOptionMap[theme.contextSpecific.brand][$size].desktop.borderRadius
      ]};
    }
    ${highContrastBorder()}
  `,
);
