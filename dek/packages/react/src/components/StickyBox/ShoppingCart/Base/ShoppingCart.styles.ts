import styled, { css } from "styled-components";

export const ShoppingCartContent = styled.div`
  flex: 1;
`;

export const SpaceBetweenOptionContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    text-wrap: balance;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    column-gap: ${theme.space["04"]};
  `,
);

export const ShoppingCartWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[16]};
  `,
);

export const TextContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[12]};
  `,
);

export const Headline = styled.h3(
  ({ theme }) => css`
    all: unset;
    display: revert;
    font: ${theme.typography["HeadlineBold20"]};
  `,
);
