import styled, { css } from "styled-components";
import { Indicator as RadioIndicator } from "../../RadioGroup/RadioGroup.styles";
import { RadioItem } from "../../RadioGroup/RadioGroup.styles";
import { up } from "../../../../theme/mappings/mediaBreakpoints";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.space["08"]};
  `,
);

export const PaymentItemWrapper = styled.div(
  ({ theme }) => css`
    ${RadioItem} {
      align-items: center;
    }
    ${RadioIndicator} {
      transform: none;
    }

    > * {
      ${up("md")} {
        padding-top: ${theme.space["20"]};
        padding-bottom: ${theme.space["20"]};
      }
    }
  `,
);

export const ImageContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["04"]};
  `,
);
