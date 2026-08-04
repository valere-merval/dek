import styled, { css } from "styled-components";
import { typoMap } from "../../Typography/Text/mappings";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { RadioGroupProps } from "../../Input/RadioGroup/RadioGroup.types";
import { RadioGroup } from "../../Input/RadioGroup/RadioGroup";

export const CartContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["24"]};
  `,
);

export const CartHeader = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["04"]};
  `,
);
export const FormContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["08"]};
    `;
  }}
`;

export const RadioRoot = styled(RadioGroup.Root)<RadioGroupProps>``;

export const RadioLabelContainer = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    row-gap: ${theme.space["08"]};

    justify-content: space-between;
    align-items: center;
  `;
});

export const LabelText = styled.div`
  flex-grow: 1;
`;

export const Price = styled.p(
  ({ theme }) => css`
    all: unset;
    display: revert;

    width: 100px;
    text-align: right;

    font: ${theme.typography[
      typoMap[theme.contextSpecific.brand]["light"]["large"].mobile
    ]};

    ${up("md")} {
      font: ${theme.typography[
        typoMap[theme.contextSpecific.brand]["light"]["large"].desktop
      ]};
    }

    [data-selected] & {
      font: ${theme.typography[
        typoMap[theme.contextSpecific.brand]["bold"]["large"].mobile
      ]};

      ${up("md")} {
        font: ${theme.typography[
          typoMap[theme.contextSpecific.brand]["bold"]["large"].desktop
        ]};
      }
    }
  `,
);

export const Footer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["16"]};
    `;
  }}
`;
