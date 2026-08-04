import styled, { css } from "styled-components";
import { colorMap } from "./mappings";
import { TableRowBody } from "../TableRowBody";
import { up } from "../../../../../theme/mappings/mediaBreakpoints";

export const Root = styled(TableRowBody)(
  ({ theme }) => css`
    &&& {
      background-color: ${theme.color[
        colorMap[theme.contextSpecific.backgroundColor].backgroundColor
      ]};
      padding-bottom: ${theme.space["16"]};
      ${up("md")} {
        padding-bottom: ${theme.space["16"]};
      }
    }
  `,
);

export const RowHeader = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["08"]};
    justify-content: center;
    align-items: center;
    font: ${theme.typography.BodyBold16};
    width: 100%;
  `,
);
