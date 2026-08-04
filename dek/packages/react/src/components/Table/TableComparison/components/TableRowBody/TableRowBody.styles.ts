import styled, { css } from "styled-components";
import { up } from "../../../../../theme/mappings/mediaBreakpoints";
import { highContrast } from "../../../../../utils/accessibility";

export const Root = styled.div(
  ({ theme }) => css`
    all: unset;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: ${theme.space["16"]} 0 ${theme.space["24"]} 0;

    font: ${theme.typography.BodyLight14};

    ${up("md")} {
      font: ${theme.typography.BodyLight16};
    }

    ${highContrast} {
      outline: 1px solid transparent;
    }
  `,
);
