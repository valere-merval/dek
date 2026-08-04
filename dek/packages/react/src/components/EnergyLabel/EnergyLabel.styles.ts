import styled, { css } from "styled-components";

export const Button = styled.button(
  ({ theme }) => css`
    all: unset;
    display: flex;
    cursor: pointer;
    border-radius: ${theme.borderRadius["08"]};
    &:focus-visible {
      ${theme.contextSpecific.focusStyles};
      outline-offset: ${theme.space["06"]};
    }
  `,
);
export const Image = styled.img`
  height: 28px; /* Custom height for the energy label */
`;
