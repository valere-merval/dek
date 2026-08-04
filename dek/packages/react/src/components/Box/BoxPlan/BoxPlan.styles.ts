import styled, { css } from "styled-components";
import { Box as BoxComponent } from "../shared/Box";
import { DecorationLabel } from "../shared/Box/Box.styles";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { ButtonPrimaryForBox } from "../shared/ButtonPrimaryForBox";
import { highContrastBorder } from "../../../utils/accessibility";

const PLAN_BOX_MIN_WIDTH = "270px";
const PLAN_BOX_MAX_WIDTH = "565px";
const PLAN_BOX_CONTENT_MAX_WIDTH = "340px";

export const Box = styled(BoxComponent)(
  ({ theme }) => css`
    /**
      increase css specificity adding the same class multiple times
    */
    &&& {
      min-width: ${PLAN_BOX_MIN_WIDTH};
      max-width: ${PLAN_BOX_MAX_WIDTH};

      border-radius: ${theme.borderRadius["16"]};

      ${up("md")} {
        border-radius: ${theme.borderRadius["24"]};
      }

      background-color: ${theme.color.NeutralShape20};

      padding: ${theme.space["40"]} ${theme.space["24"]} ${theme.space["24"]};

      & ${DecorationLabel} {
        right: ${theme.space["16"]};
        ${up("md")} {
          right: ${theme.space["24"]};
        }
      }

      ${highContrastBorder()}

      color: ${theme.color.NeutralPrimaryBlack};

      display: flex;
      align-items: center;
      cursor: pointer;
    }
  `,
);

export const ContentWrapper = styled.div(
  ({ theme }) => css`
    height: 100%;
    width: 100%;
    max-width: ${PLAN_BOX_CONTENT_MAX_WIDTH};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.space["16"]};
  `,
);

export const Top = styled.div`
  ${({ theme }) => {
    return css`
      gap: ${theme.space["16"]};
      margin-bottom: ${theme.space["12"]};

      display: flex;
      flex-direction: column;
    `;
  }}
`;

export const Content = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["24"]};
      justify-content: end;
    `;
  }}
`;

export const Footer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["16"]};
    `;
  }}
`;

export const ButtonPrimary = styled(ButtonPrimaryForBox)(
  ({ theme }) => css`
    margin-top: ${theme.space["04"]};
  `,
);
