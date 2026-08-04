import styled, { css } from "styled-components";
import { CellIconStatusType } from "./CellIcon.types";
import { iconColors } from "./mappings";

export const Root = styled.figure<{
  $state: CellIconStatusType;
}>(
  ({ theme, $state }) => css`
    all: unset;
    display: flex;
    color: ${theme.color[
      iconColors[$state][theme.contextSpecific.backgroundColor]
    ]};

    & svg {
      width: ${theme.size["24"]};
      height: ${theme.size["24"]};
    }
  `,
);
