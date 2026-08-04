import styled, { css } from "styled-components";
import { Accordion } from "../../Accordion";
import { ContentBody } from "../../Accordion.styles";

export const AccordionContent = styled(Accordion.Content)(
  ({ theme }) => css`
    & ${ContentBody} {
      padding-bottom: ${theme.space["04"]};
    }
  `,
);

export const AccordionContentBody = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["04"]};
  `,
);

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
