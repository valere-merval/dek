import styled, { css } from "styled-components";
import { StickyBoxSide } from "../../../Base/StickyBoxSide/StickyBoxSide.styles";
import { PrepaidShoppingCart } from "../PrepaidShoppingCart";

export const ShoppingCartWrapper = styled(StickyBoxSide)`
  ${({ theme }) => {
    return css`
      gap: ${theme.space[32]};
    `;
  }}
`;

export const StickyBoxSidePrepaidWrapper = styled(PrepaidShoppingCart.Root)`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space[16]};
    `;
  }}
`;
