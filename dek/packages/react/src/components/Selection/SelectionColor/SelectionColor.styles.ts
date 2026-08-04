import styled, { css } from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { HexValue } from "./SelectionColor.types";
import { Check } from "@fair/icons";
import { getContrast } from "polished";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled(ToggleGroup.Root)`
  ${({ theme }) => {
    return css`
      all: unset;

      display: flex;
      flex-direction: column;
      gap: ${theme.space["12"]};
    `;
  }}
`;

export const Item = styled(ToggleGroup.Item)`
  ${({ theme }) => {
    return css`
      all: unset;
      cursor: pointer;
      box-sizing: border-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      border-radius: 50%;
      border: ${theme.size["04"]} solid;

      border-color: transparent;

      &[data-state="on"] {
        border-color: ${theme.color.InteractiveBlue};
        & ${ItemIcon} {
          display: flex;
        }
      }
      &:focus-visible {
        ${theme.contextSpecific.focusStyles}
      }

      &[data-state="off"] {
        // outline should be closer to not selected state if focused
        &:focus-visible {
          outline-offset: calc(-1 * ${theme.size["02"]});
        }
      }

      &:hover {
        cursor: pointer;

        &[data-state="off"] {
          opacity: ${theme.opacity["Degree75"]};
        }
      }

      ${highContrast} {
        border-radius: 5px;
      }
    `;
  }}
`;

export const ItemInnerRing = styled.div<{ $hexValue: HexValue }>`
  ${({ theme, $hexValue }) => {
    return css`
      background-color: ${$hexValue};
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 100%;
      border-width: ${theme.size["02"]};
      border-style: solid;
      height: ${theme.size["24"]};
      width: ${theme.size["24"]};
      border-color: ${theme.color.NeutralSecondary40};

      ${highContrast} {
        width: fit-content;
        border-radius: ${theme.borderRadius["04"]};
        border: 0;
        gap: ${theme.space["04"]};
        padding: 0 ${theme.space["04"]};
      }
    `;
  }}
`;

export const ItemIcon = styled(Check)<{ $hexValue: HexValue }>`
  ${({ theme, $hexValue }) => {
    const contrastRatio = getContrast(`${$hexValue}`, "#fff");

    return css`
      display: none;
      color: ${contrastRatio < 5.5
        ? theme.color.NeutralPrimaryBlack
        : theme.color.NeutralPrimaryWhite};
      min-width: ${theme.size["16"]};
      height: ${theme.size["16"]};

      ${highContrast} {
        color: CanvasText;
      }
    `;
  }}
`;

export const highContrastText = styled.span`
  ${({ theme }) => {
    return css`
      display: none;
      font: ${theme.typography.LabelBold14};
      ${highContrast} {
        display: flex;
      }
    `;
  }}
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

export const Fieldset = styled.fieldset`
  all: unset;
`;

export const Value = styled.legend`
  all: unset;
`;
