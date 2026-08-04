import styled, { css } from "styled-components";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { highContrastBorder } from "../../../../utils/accessibility";

export const StickyBoxSide = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 383px;
    gap: ${theme.space[32]};
    flex-direction: column;
    background-color: ${theme.color.NeutralShape20};
    color: ${theme.color.NeutralPrimaryWhite};
    border-radius: ${theme.borderRadius[24]};
    box-sizing: border-box;

    padding: ${theme.space[24]} ${theme.space[16]};
    ${up("md")} {
      padding: ${theme.space[32]};
    }
    ${highContrastBorder()}
  `,
);
