import styled, { css } from "styled-components";
import { SpaceBetweenContainer } from "../../Base/Shared.styles";

export const ShoppingCartSummaryHeader = styled(SpaceBetweenContainer)(
  ({ theme }) => css`
    margin-bottom: ${theme.space[16]};
  `,
);

export const IconWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    position: absolute;
    right: ${theme.space["02"]};
  `,
);

export const HeaderWithIcon = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

export const BringBackSection = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["02"]};
  `,
);

export const BringBackContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["08"]};
  `,
);

export const BringBackOptionList = styled.ol`
  all: unset;
`;

export const BringBackOptionItem = styled.li(
  ({ theme }) => css`
    all: unset;
    font: ${theme.typography.BodyLight14};
  `,
);
