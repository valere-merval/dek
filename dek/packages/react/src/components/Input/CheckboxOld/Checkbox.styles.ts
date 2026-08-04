import * as Checkbox from "@radix-ui/react-checkbox";
import { backgroundColorMap } from "./mappings";
import styled, { css } from "styled-components";
import { Check } from "@fair/icons";
import { mix } from "polished";
import { getMixedColor } from "../../../theme/mappings/color";

export const Root = styled(Checkbox.Root)(({ theme }) => {
  const background = theme.contextSpecific.backgroundColor;
  const backgroundColor =
    theme.color[backgroundColorMap[background].backgroundColor];
  const color = theme.color[backgroundColorMap[background].color];
  const disabled = theme.color[backgroundColorMap[background].disabled];
  const error = theme.color[backgroundColorMap[background].error];

  return css`
    all: unset;
    box-sizing: revert;
    display: revert;

    cursor: pointer;

    width: ${theme.space["24"]};
    height: ${theme.space["24"]};

    flex-shrink: 0;
    padding: 0;

    background-color: ${backgroundColor};
    color: ${color};
    border: 2px solid ${color};
    border-radius: ${theme.borderRadius["04"]};

    &:disabled {
      color: ${disabled};
      border-color: ${disabled};
      cursor: not-allowed;
    }

    &:hover:enabled {
      background-color: ${getMixedColor(
        theme,
        backgroundColorMap[background].hover,
      )};
    }

    &:focus-visible {
      ${theme.contextSpecific.focusStyles}
    }

    &[aria-invalid="true"] {
      color: ${error};
      border-color: ${error};
      &:hover:enabled {
        background-color: ${mix(0.85, backgroundColor, error)};
      }
    }
  `;
});

export const Indicator = styled(Checkbox.Indicator)`
  &:disabled {
    cursor: not-allowed;
  }
  cursor: pointer;
`;

export const LabelWrapper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["08"]};
`;

export const Label = styled.label`
  ${({ theme }) => {
    return css`
      &:has(*:disabled) {
        cursor: not-allowed;
      }

      cursor: pointer;
      display: flex;
      align-items: center;
      gap: ${theme.space["12"]};
    `;
  }}
`;

export const Icon = styled(Check)`
  width: 2rem; //because of boxes around the icons the figma value is incorrect.
  height: 2rem;
`;
