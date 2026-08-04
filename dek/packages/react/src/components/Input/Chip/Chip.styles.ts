import styled, { css } from "styled-components";
import { ChipProps } from "./Chip.types";
import { Cross } from "@fair/icons";
import { Toggle } from "@radix-ui/react-toggle";
import { textColorMixin } from "../../Typography/themeBackgroundColorMapping";
import { colorMap } from "./mapping";
import { getMixedColor } from "../../../theme/mappings/color";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled(Toggle)<ChipProps>`
  ${({ theme }) => {
    const background = theme.contextSpecific.backgroundColor;
    return css`
      all: unset;

      font: ${theme.typography["BodyLight14"]};
      ${textColorMixin(theme)};

      color: ${theme.color[
        colorMap[theme.contextSpecific.backgroundColor].color
      ]};
      & span {
        margin-bottom: 1px;
      }

      box-sizing: border-box;
      height: ${theme.space["32"]};
      padding: 0 ${theme.space["12"]};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.space["08"]};

      cursor: pointer;

      border: 2px solid
        ${theme.color[
          colorMap[theme.contextSpecific.backgroundColor].borderColor
        ]};
      border-radius: ${theme.borderRadius["08"]};

      background-color: ${theme.color[
        colorMap[theme.contextSpecific.backgroundColor].backgroundColor
      ]};

      &[data-state="off"] {
        background-color: transparent;

        border: 2px solid
          ${theme.color[
            colorMap[theme.contextSpecific.backgroundColor].borderColorActive
          ]};
        & svg {
          display: none;
        }
      }

      &:hover&[data-state="on"] {
        & svg {
          opacity: ${theme.opacity.Degree75};
        }
      }

      &:hover&[data-state="off"] {
        background-color: ${getMixedColor(theme, colorMap[background].hover)};
      }

      &:focus-visible {
        ${theme.contextSpecific.focusStyles}
      }
      ${highContrast()} {
        &[data-state="off"] {
          border-color: Highlight;
        }
        &[data-state="on"] {
          color: Highlight;
          border-color: Highlight;
          & svg {
            fill: Highlight;
          }
        }
      }
    `;
  }}
`;

export const ClosingIndicator = styled(Cross)`
  ${({ theme }) => {
    return css`
      box-sizing: border-box;
      height: ${theme.space["20"]};
      width: ${theme.space["20"]};
      color: ${theme.color[
        colorMap[theme.contextSpecific.backgroundColor].indicatorColor
      ]};
    `;
  }}
`;
