import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";

export const TextWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      gap: ${theme.size["20"]};
      align-items: start;
      justify-content: space-between;

      margin-top: ${theme.space["08"]};
    `;
  }}
`;

export const DetailsWrapper = styled.div`
  ${({ theme }) => {
    return css`
      ${up("md")} {
        button {
          font: ${theme.typography["BodyLight16"]};
        }
      }

      margin-top: ${theme.space["12"]};
      margin-bottom: ${theme.space["20"]};
    `;
  }}
`;

export const ToggleWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.space["08"]};
      align-items: center;
    `;
  }}
`;
