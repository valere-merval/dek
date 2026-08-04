import styled, { css } from "styled-components";
import { StickyBoxBottom } from "./StickyBoxBottom";
import { ButtonPrimaryCircle } from "../../Button/ButtonPrimary";
import { Divider } from "../../Divider";

export const Root = styled(StickyBoxBottom.Root)(
  ({ theme }) => css`
    box-sizing: border-box;
    padding: ${theme.space[16]} ${theme.space[20]};
    max-width: 375px;
  `,
);

export const Content = styled(StickyBoxBottom.Content)`
  padding-bottom: ${({ theme }) => theme.space[20]};
`;

export const Trigger = styled(StickyBoxBottom.Trigger)(
  ({ theme }) => css`
    color: ${theme.color.InteractiveBlue};
  `,
);

export interface ShoppingCartBaseProps {
  open?: boolean;
  $containerName: string;
}

export const ButtonCircleWrapper = styled.div``;
export const ButtonPrimaryWrapper = styled.div``;

export const ShoppingCartBase = styled.div<ShoppingCartBaseProps>(
  ({ $containerName }) => css`
    display: flex;
    justify-content: space-between;
    align-items: end;
    container-type: inline-size;
    container-name: ${$containerName};

    ${ButtonCircleWrapper} {
      display: block;
    }
    ${ButtonPrimaryWrapper} {
      display: none;
    }
    @container ${$containerName} (inline-size > 312px) {
      ${ButtonCircleWrapper} {
        display: none;
      }
      ${ButtonPrimaryWrapper} {
        display: block;
      }
    }

    gap: ${({ theme }) => theme.space[16]};
  `,
);

export const ShoppingCartContent = styled.div`
  flex: 1;
`;

export const SpaceBetweenContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    column-gap: ${theme.space["04"]};
  `,
);

export const CheckoutButton = styled(ButtonPrimaryCircle)`
  flex-shrink: 0;
`;

export const PaymentMethodsWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["12"]};
  `,
);

export const PaymentIconsWrapper = styled.div(
  ({ theme }) => css`
    display: grid;
    gap: ${theme.space["04"]};
    // 72px is used here because one payment icon has a width of 72px, so this ensures that there is always enough space for 4 icons in a row
    grid-template-columns: repeat(4, ${theme.size["72"]});
  `,
);

export const PriceDivider = styled(Divider)`
  margin: 0;
`;
