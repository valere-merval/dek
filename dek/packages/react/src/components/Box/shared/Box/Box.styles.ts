import styled, { css } from "styled-components";
import { LabelPromoted } from "../../../Typography/LabelPromoted";

export const Root = styled.div(
  ({ theme }) => css`
    all: unset;

    font: ${theme.typography.BodyLight16};
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    background-color: ${theme.color.NeutralShape80};
    color: ${theme.color.NeutralPrimaryBlack};
    padding: ${theme.space["20"]} ${theme.space["16"]};
    border-radius: ${theme.borderRadius["16"]};
  `,
);

export const DecorationLabel = styled(LabelPromoted)(
  ({ theme }) => css`
    position: absolute;
    top: -1rem;
    right: ${theme.space["16"]};
  `,
);

export const DiscountText = styled.div(
  ({ theme }) => css`
    font: ${theme.typography.TagBold16};
    margin: 0 -${theme.space["20"]} -${theme.space[20]} auto;
    width: fit-content;
    color: ${theme.color.NeutralPrimaryWhite};
    max-width: 80%;
    background-color: ${theme.color.InteractiveBlack};
    padding-top: ${theme.space["08"]};
    padding-right: ${theme.space["20"]};
    padding-bottom: ${theme.space["08"]};
    padding-left: ${theme.space["16"]};
    border-top-left-radius: ${theme.borderRadius["12"]};
    border-bottom-right-radius: ${theme.borderRadius["12"]};
  `,
);
