import styled, { css } from "styled-components";
import { CellIconStatusType } from "./CellIcon.types";
import { iconColors } from "./mappings";
import { highContrast } from "../../../../../utils/accessibility";

export const Root = styled.figure<{
  $state: CellIconStatusType;
}>(
  ({ theme, $state }) => css`
    all: unset;
    display: flex;
    color: ${theme.color[
      iconColors[$state][theme.contextSpecific.backgroundColor]
    ]};
    ${highContrast()} {
      forced-color-adjust: none;
    }
    & svg {
      width: ${theme.size["24"]};
      height: ${theme.size["24"]};
    }
  `,
);
