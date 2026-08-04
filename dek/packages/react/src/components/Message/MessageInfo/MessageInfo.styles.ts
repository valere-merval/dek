import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { headlineGap, iconSize, iconTranslateY } from "./mappings";

export const IconWrapper = styled.div(
  ({ theme }) => css`
    & svg {
      transform: translateY(
        ${iconTranslateY[theme.contextSpecific.brand].mobile}
      );
      ${up("md")} {
        transform: translateY(
          ${iconTranslateY[theme.contextSpecific.brand].desktop}
        );
      }
      width: ${theme.size[iconSize[theme.contextSpecific.brand]]};
      height: ${theme.size[iconSize[theme.contextSpecific.brand]]};
      vertical-align: middle;
    }
  `,
);

export const HeadlineContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.space[headlineGap[theme.contextSpecific.brand]]};
  `,
);
