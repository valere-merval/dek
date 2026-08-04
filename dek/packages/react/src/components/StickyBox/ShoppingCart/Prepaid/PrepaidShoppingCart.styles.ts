import styled, { css } from "styled-components";

export const BoldText = styled.span(
  ({ theme }) => css`
    all: unset;
    font: ${theme.typography.BodyBold14};
  `,
);
