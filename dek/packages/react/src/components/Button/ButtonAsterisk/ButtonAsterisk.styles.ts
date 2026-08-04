import styled, { css } from "styled-components";
import { svgColorMap } from "./mappings";

export const Button = styled.button(
  ({ theme }) => css`
    all: unset;

    width: fit-content;
    cursor: pointer;
    color: ${theme.color[
      svgColorMap[theme.contextSpecific.backgroundColor].color
    ]};

    background-color: inherit;
    &:hover {
      opacity: ${theme.opacity.Degree66};
    }
    & svg {
      width: ${theme.size["16"]};
      height: ${theme.size["16"]};
      vertical-align: top;
    }
  `,
);
