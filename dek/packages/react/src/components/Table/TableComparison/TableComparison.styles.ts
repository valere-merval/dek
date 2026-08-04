import styled, { css, keyframes } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { colorMap } from "./mappings";

export const Root = styled.div(
  ({ theme }) => css`
    background-color: ${theme.color[
      colorMap[theme.contextSpecific.backgroundColor].backgroundColor
    ]};
    color: ${theme.color[
      colorMap[theme.contextSpecific.backgroundColor].color
    ]};
  `,
);

const scroll = keyframes`
    from {
      box-shadow: none;
    }

    to {
      box-shadow: var(--shadow);
      
    }
  `;

export const Head = styled.div<{
  $sticky?: boolean;
}>(
  ({ theme, $sticky }) => css`
    --shadow: ${theme.shadow[
      colorMap[theme.contextSpecific.backgroundColor].shadow
    ]};

    background-color: ${theme.color[
      colorMap[theme.contextSpecific.backgroundColor].backgroundColor
    ]};
    ${$sticky &&
    css`
      position: sticky;
      z-index: 1;
      top: 0;
      clip-path: inset(0px 0px -10px 0px);
      animation: ${scroll} linear both;
      animation-timeline: scroll();
      animation-range: 0ex 15ex;
    `}
  `,
);

export const ItemTitle = styled.div(
  ({ theme }) => css`
    text-align: center;
    padding: ${theme.space["16"]} 0;
  `,
);

export const SelectWrapper = styled.div(
  ({ theme }) => css`
    all: unset;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.space["12"]};
    ${up("md")} {
      padding: 0;
      max-width: 320px;
    }
  `,
);

export const Form = styled.form(
  () => css`
    all: unset;
    display: block;
    width: 100%;
  `,
);

export const ItemGroup = styled.div(
  ({ theme }) => css`
    font: ${theme.typography.BodyLight16};
    text-align: center;
  `,
);

export const Price = styled.div(
  ({ theme }) => css`
    font: ${theme.typography.BodyLight14};
    ${up("md")} {
      font: ${theme.typography.BodyLight16};
    }
  `,
);
