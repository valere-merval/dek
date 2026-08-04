import styled, { css } from "styled-components";
import { PrepaidShoppingCart } from "../PrepaidShoppingCart";

export const StickyBoxBottomPrepaidWrapper = styled(PrepaidShoppingCart.Root)`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space[12]};
    `;
  }}
`;
