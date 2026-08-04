import styled, { css } from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { backgroundColorMap } from "./mapping";
import { rgba } from "polished";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled(ToggleGroup.Root)`
  ${({ theme }) => {
    return css`
      all: unset;

      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: ${theme.space["08"]};
    `;
  }}
`;

export const Item = styled(ToggleGroup.Item)<{ $unavailable?: boolean }>`
  ${({ theme, $unavailable }) => {
    return css`
      all: unset;

      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${theme.size["32"]};
      width: ${theme.size["80"]};
      border-radius: ${theme.borderRadius["08"]};
      border: 2px solid ${theme.color.NeutralSecondary40};

      & span {
        color: ${theme.color[
          backgroundColorMap[theme.contextSpecific.backgroundColor].color
        ]};
      }

      &[data-state="on"] {
        background-color: ${theme.color.InteractiveBlue};
        border-color: ${theme.color.InteractiveBlue};

        & span {
          color: ${theme.color.InteractiveBlack};
          ${highContrast()} {
            forced-color-adjust: preserve-parent-color;
            @media (prefers-color-scheme: dark) {
              color: Canvas;
            }
            @media (prefers-color-scheme: light) {
              color: CanvasText;
            }
          }
        }
        ${highContrast()} {
          background-color: SelectedItem;
        }
      }

      &:enabled {
        ${highContrast()} {
          border: 2px solid transparent;
        }
        &:hover {
          cursor: pointer;
          &[data-state="off"] {
            background-color: ${rgba(
              theme.color[
                backgroundColorMap[theme.contextSpecific.backgroundColor]
                  .backgroundColorHover
              ],
              0.75,
            )};
          }
          ${highContrast()} {
            border: 2px solid transparent;
          }
        }
      }

      &:disabled {
        cursor: not-allowed;
        & span {
          color: ${theme.color[
            backgroundColorMap[theme.contextSpecific.backgroundColor].disabled
          ]};
        }
      }

      &:focus-visible {
        border-radius: ${theme.size["08"]};
        ${theme.contextSpecific.focusStyles}
      }

      ${$unavailable &&
      css`
        & span {
          text-decoration: line-through;
        }
      `}
    `;
  }}
`;

export const Fieldset = styled.fieldset`
  all: unset;
`;

export const Value = styled.legend`
  all: unset;
`;

export const ItemWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.space["08"]};
      flex-wrap: wrap;
    `;
  }}
`;

export const ItemText = styled.span`
  ${({ theme }) => {
    return css`
      font: ${theme.typography.LabelBold14};
      user-select: none;
      margin: 0;
    `;
  }}
`;
