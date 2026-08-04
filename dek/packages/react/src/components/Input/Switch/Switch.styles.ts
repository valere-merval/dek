import styled, { css } from "styled-components";
import * as Switch from "@radix-ui/react-switch";
import { backgroundColorMap } from "./mappings";
import { Typography } from "../../Typography/Typography";
import { highContrast } from "../../../utils/accessibility";
import { mix } from "polished";

export const Root = styled(Switch.Root)`
  ${({ theme }) => {
    const background = theme.contextSpecific.backgroundColor;
    const backgroundColor =
      theme.color[backgroundColorMap[background].backgroundColor];
    const color = theme.color[backgroundColorMap[background].color];
    const disabled = theme.color[backgroundColorMap[background].disabled];
    const error = theme.color[backgroundColorMap[background].error];

    return css`
      all: unset;
      cursor: pointer;
      z-index: calc(${theme.zIndex["10"]} - 1);
      box-sizing: border-box;
      width: ${theme.space["40"]};
      height: ${theme.space["24"]};
      color: ${color};
      background-color: ${backgroundColor};
      border: 2px solid ${color};
      border-radius: 9999px;
      position: relative;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      &[data-disabled] {
        color: ${disabled};
        border-color: ${disabled};
        cursor: not-allowed;
      }

      &[aria-invalid="true"] {
        border-color: ${error};
        background-color: transparent;
        &:hover:enabled {
          background-color: ${mix(0.85, backgroundColor, error)};
        }
      }

      &[data-state="checked"] {
        color: ${backgroundColor};
        background-color: ${color};

        &[data-disabled] {
          background-color: ${disabled};
          ${highContrast()} {
            background-color: CanvasText;
          }
        }

        ${highContrast()} {
          background-color: CanvasText;
        }

        &[aria-invalid="true"] {
          background-color: ${error};
          &:hover:enabled {
            background-color: ${error};
          }

          ${highContrast()} {
            background-color: CanvasText;
            &:hover:enabled {
              background-color: CanvasText;
            }
          }
        }
      }

      &:focus-visible {
        ${theme.contextSpecific.focusStyles}
      }
    `;
  }}
`;

export const Thumb = styled(Switch.Thumb)`
  ${({ theme }) => {
    const background = theme.contextSpecific.backgroundColor;
    const backgroundColor =
      theme.color[backgroundColorMap[background].backgroundColor];
    const color = theme.color[backgroundColorMap[background].color];
    const disabled = theme.color[backgroundColorMap[background].disabled];
    const error = theme.color[backgroundColorMap[background].error];

    return css`
      cursor: pointer;
      z-index: ${theme.zIndex["10"]};
      display: block;
      width: ${theme.space["16"]};
      height: ${theme.space["16"]};
      background-color: ${color};
      border-radius: 9999px;
      transition: transform 100ms;
      transform: translateX(2px);
      will-change: transform;

      &[data-disabled] {
        background-color: ${disabled};
        cursor: not-allowed;
        ${highContrast()} {
          background-color: CanvasText;
        }
      }

      &:has(*[aria-invalid="true"]),
      *[aria-invalid="true"] & {
        background-color: ${error};
        ${highContrast()} {
          background-color: CanvasText;
        }
      }

      &[data-state="checked"] {
        transform: translateX(19px);
        background-color: ${backgroundColor};

        :has([aria-invalid="true"]),
        *[aria-invalid="true"] & {
          background-color: ${backgroundColor};
        }

        &[data-disabled] {
          background-color: ${backgroundColor};
          cursor: not-allowed;
        }
      }

      ${highContrast()} {
        background-color: CanvasText;
      }
    `;
  }}
`;

export const RootWrapper = styled.div``;

export const Label = styled(Typography)`
  cursor: pointer;

  *:disabled + & {
    cursor: not-allowed;
  }
`;
