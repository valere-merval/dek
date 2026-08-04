import styled, { css } from "styled-components";
import { mix } from "polished";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { backgroundColorMap } from "./mappings";
import { RadioGroupProps } from "@radix-ui/react-radio-group";
import { getMixedColor } from "../../../theme/mappings/color";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled(RadioGroup.Root)<RadioGroupProps>`
  all: unset;
  display: revert;
  width: 100%;
`;

export const Indicator = styled(RadioGroup.Indicator)`
  ${({ theme }) => {
    return css`
      all: unset;

      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: relative;
      border-radius: 50%;

      &:after {
        content: " ";
        display: block;
        width: calc(${theme.size[24]} / 2);
        height: calc(${theme.size[24]} / 2);
        border-radius: 50%;

        background-color: ${theme.color[
          backgroundColorMap[theme.contextSpecific.backgroundColor].color
        ]};
        ${highContrast()} {
          background-color: transparent !important;
          width: calc(${theme.size[24]} / 6);
          height: calc(${theme.size[24]} / 6);
          border: 6px solid transparent;
          box-sizing: border-box;
        }
      }
      //in theory this state can never happen
      ${Root}[aria-invalid="true"] &:after {
        background-color: ${theme.color[
          backgroundColorMap[theme.contextSpecific.backgroundColor].error
        ]};
      }
    `;
  }}
`;

export const Item = styled(RadioGroup.Item)`
  ${({ theme }) => {
    const background = theme.contextSpecific.backgroundColor;
    const backgroundColor =
      theme.color[backgroundColorMap[background].backgroundColor];
    const color = theme.color[backgroundColorMap[background].color];
    const disabled = theme.color[backgroundColorMap[background].disabled];
    return css`
      all: unset;

      cursor: pointer;
      box-sizing: border-box;
      height: ${theme.size[24]};
      width: ${theme.size[24]};
      min-width: ${theme.size[24]};

      border-radius: 50%;
      border: 2px solid ${color};
      background-color: ${backgroundColor};

      &:hover:enabled:not([data-state="checked"]) {
        background-color: ${getMixedColor(
          theme,
          backgroundColorMap[background].hover,
        )};
      }
      ${Root}[aria-invalid="true"] & {
        border-color: ${theme.color[
          backgroundColorMap[theme.contextSpecific.backgroundColor].error
        ]};

        &:hover:enabled:not([data-state="checked"]) {
          background-color: ${mix(
            0.85,
            theme.color[
              backgroundColorMap[theme.contextSpecific.backgroundColor]
                .backgroundColor
            ],
            theme.color[
              backgroundColorMap[theme.contextSpecific.backgroundColor].error
            ],
          )};
        }
      }

      &:focus-visible {
        ${theme.contextSpecific.focusStyles}
      }

      &:disabled {
        border: 2px solid ${disabled};
        cursor: not-allowed;
        color: ${disabled};

        > ${Indicator} {
          &:after {
            background-color: ${disabled};
            cursor: not-allowed;
          }
        }
      }
    `;
  }}
`;

export const Label = styled.label`
  ${({ theme }) => {
    return css`
      all: unset;
      display: flex;

      cursor: pointer;

      gap: ${theme.space["08"]};
      align-items: start;
      &:has(*:disabled) {
        cursor: not-allowed;
      }
    `;
  }}
`;

export const ItemContent = styled.div`
  ${() => {
    return css`
      all: unset;
      display: flex;
      flex-direction: column;
    `;
  }}
`;
