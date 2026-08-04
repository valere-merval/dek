import styled, { css } from "styled-components";
import { Typography } from "../Typography/Typography";
import { highContrast } from "../../utils/accessibility";
import { outlinedColorMapping } from "./mappings";

export const Root = styled.div`
  ${({ theme }) => {
    return css`
      all: unset;
      display: flex;
      width: fit-content;
      gap: ${theme.space["08"]};
      align-items: center;
      height: ${theme.size["16"]};

      ${highContrast} {
        height: fit-content;
      }
    `;
  }}
`;

export const Color = styled.div<{ color: string }>`
  ${({ color, theme }) => {
    return css`
      background-color: ${color};
      border-radius: 50%;
      box-sizing: border-box;
      border: 1px solid
        ${theme.color[
          outlinedColorMapping[theme.contextSpecific.backgroundColor]
            .borderColor
        ]};
      width: ${theme.space["16"]};
      height: ${theme.space["16"]};
      white-space: nowrap;

      ${highContrast} {
        display: none;
      }
    `;
  }}
`;

export const ColorWrapper = styled.div`
  ${({ theme }) => {
    return css`
      all: unset;
      display: flex;
      width: fit-content;
      gap: ${theme.space["08"]};
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;

      ${highContrast} {
        gap: ${theme.space["04"]};
      }
    `;
  }}
`;
export const Counter = styled(Typography)`
  display: flex;
  align-self: center;
`;

export const highContrastWrapper = styled.div<{
  $hasAdditionalColors: boolean;
}>`
  ${({ theme, $hasAdditionalColors }) => {
    return css`
      display: none;

      ${highContrast} {
        display: flex;
        font: ${theme.typography.BodyLight14};

        &:not(:last-child)::after {
          content: ", ";
        }

        ${$hasAdditionalColors &&
        css`
          &:not(:nth-last-child(-n + 3))::after {
            content: ", ";
          }

          &:nth-last-child(-n + 3)::after {
            content: "";
          }
        `}
      }
    `;
  }}
`;
