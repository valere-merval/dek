import styled, { css } from "styled-components";
import { ContingentMediaSize } from "../shared/Contingent.types";
import { typographyMap } from "../shared/mappings";
import { trimFont } from "../../../theme/mappings/typography";
import { up } from "../../../theme/mappings/mediaBreakpoints";

export const StrikeThroughAmount = styled.p<{ size: ContingentMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    white-space: nowrap;
    font: ${theme.typography[typographyMap[size.mobile].suffix]};
    ${trimFont(typographyMap[size.mobile].suffix)}

    ${up("md")} {
      font: ${theme.typography[typographyMap[size.desktop].suffix]};
      ${trimFont(typographyMap[size.desktop].suffix)}
    }
  `,
);

export const StrikeThrough = styled.span`
  text-decoration: line-through;
`;
