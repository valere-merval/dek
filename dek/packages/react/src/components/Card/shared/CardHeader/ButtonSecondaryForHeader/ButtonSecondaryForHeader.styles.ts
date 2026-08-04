import styled, { css } from "styled-components";
import { ButtonSecondary } from "../../../../Button/ButtonSecondary";
import {
  ButtonSecondaryLabel,
  IconTextWrapper,
} from "../../../../Button/ButtonSecondary/ButtonSecondary.styles";
import { textColorMixin } from "../../../../Typography/themeBackgroundColorMapping";

export const Button = styled(ButtonSecondary)(({ theme }) => {
  return css`
    display: flex;

    & ${IconTextWrapper} {
      justify-content: space-between;
      width: 100%;
    }
    & ${ButtonSecondaryLabel} {
      font: inherit;
      ${textColorMixin(theme)};
      text-wrap: initial;
    }
  `;
});
