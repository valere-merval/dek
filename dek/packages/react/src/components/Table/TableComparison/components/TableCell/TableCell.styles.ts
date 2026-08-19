import styled, { css } from "styled-components";
import { colorMap } from "./mappings";
import { TableBasic } from "../../../shared";

export const Root = styled(TableBasic.Cell)(
  ({ theme }) => css`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: ${theme.space["08"]};
    width: 100%;
    min-width: 0;
    min-height: calc(1lh + 1px);
    padding: 0 ${theme.space["16"]};

    & + & {
      border-left: 2px solid
        ${theme.color[
          colorMap[theme.contextSpecific.backgroundColor].borderColor
        ]};
    }

    > img {
      object-fit: contain;
      width: min(100%, 200px);
      height: auto;
      max-height: 200px;
    }
  `,
);
