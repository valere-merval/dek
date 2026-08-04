import styled, { css } from "styled-components";
import { StickyBoxSide } from "../../Base/StickyBoxSide/StickyBoxSide.styles";
import { Activation } from "../Activation";
import { stickyBoxBackgroundColorMapping } from "../mappings";
import { backgroundColorMapping } from "../../../../theme/theme";

export const ShoppingCartWrapper = styled(StickyBoxSide)`
  ${({ theme }) => {
    return css`
      gap: ${theme.space[24]};
      background-color: ${theme.color[
        backgroundColorMapping[
          stickyBoxBackgroundColorMapping[theme.contextSpecific.brand]
        ]
      ]};
    `;
  }}
`;

export const StickyBoxSidePrepaidWrapper = styled(Activation.Root)`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space[24]};
    `;
  }}
`;
