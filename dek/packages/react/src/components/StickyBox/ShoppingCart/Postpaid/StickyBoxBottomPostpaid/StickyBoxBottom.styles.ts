import styled, { css } from "styled-components";

export const CollapsedViewRecurringPricesContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.space["04"]};
    gap: calc(${theme.space["04"]} / 2);
  `,
);
