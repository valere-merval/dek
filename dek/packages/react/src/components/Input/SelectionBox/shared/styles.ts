import styled, { css } from "styled-components";
import { mediaBreakpoints } from "../../../../theme/mappings/mediaBreakpoints";

export const SELECTION_BOX_CONTAINER_NAME = "selection-box";

export const GridContainer = styled.div`
  container-type: inline-size;
  container-name: ${SELECTION_BOX_CONTAINER_NAME};
  width: 100%;
`;

export const Root = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["16"]};

      @container ${SELECTION_BOX_CONTAINER_NAME} (inline-size > ${mediaBreakpoints.md}) {
        display: grid;
        grid-gap: ${theme.space["16"]};
        grid-template-columns: repeat(2, 1fr);
      }
    `;
  }}
`;
