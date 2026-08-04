import styled, { css, DefaultTheme } from "styled-components";
import { slideUpAndFade } from "../../../animations/slideUpAndFade";
import { SpaceVariant } from "../../../theme/mappings/space";
import { fontMapping } from "./mappings";
import { Check, ChevronDown } from "@fair/icons";
import { rotateUpsideDown } from "../../../animations/rotateUpsideDown";
import { highContrast, highContrastBorder } from "../../../utils/accessibility";
import * as TextFieldShared from "./TextField.styles";

export const POPOVER_X_OVERSIZE: SpaceVariant = "16";
export const crossOffset = Number(POPOVER_X_OVERSIZE) / 2;
export const popoverContentStyles = (theme: DefaultTheme) => css`
  z-index: ${theme.zIndex["130"]};

  box-sizing: border-box;

  display: flex;
  gap: ${theme.space["24"]};

  padding: ${theme.space["08"]};
  background-color: ${theme.color.NeutralPrimaryWhite};
  color: ${theme.color.NeutralPrimaryBlack};

  border-radius: ${theme.borderRadius["12"]};

  box-shadow: ${theme.shadow.Opacity15Elevation2};

  ${highContrastBorder()}

  ${slideUpAndFade};
`;

export const popoverContentOpenStyles = css`
  animation-name: slideUpAndFade;
`;

export const popoverItemStyles = (theme: DefaultTheme) => css`
  all: unset;
  cursor: pointer;

  display: flex;

  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  border-radius: ${theme.borderRadius["08"]};
  min-height: ${theme.space["48"]};
  margin: ${theme.space["06"]};

  &:focus-visible,
  &[data-focused] {
    outline: 2px solid ${theme.color.NeutralPrimaryBlack};
    outline-offset: ${theme.space["04"]};
  }

  &:hover,
  &[data-hovered] {
    background-color: ${theme.color.NeutralShape80} !important;
  }

  ${highContrast()} {
    &:focus-visible {
      outline: 1px solid transparent;
      outline-offset: -${theme.space["04"]};
      margin-right: ${theme.space["04"]};
    }
    &:hover,
    &[data-focused],
    &[data-hovered] {
      outline: 1px solid transparent;
      outline-offset: -${theme.space["04"]};
      margin-right: ${theme.space["04"]};
    }
  }
`;

export const popoverItemTextStyles = (theme: DefaultTheme) => css`
  padding: ${theme.space["12"]} ${theme.space["16"]};
  font: ${theme.typography[fontMapping[theme.contextSpecific.brand].inputFont]};
`;

export const IndicatorCheck = styled(Check)(
  ({ theme }) => css`
    height: ${theme.space["20"]};
    width: ${theme.space["20"]};
  `,
);

export const ChevronOpenIndicator = styled(ChevronDown)(
  ({ theme }) => css`
    height: ${theme.space["24"]};
    width: ${theme.space["24"]};

    color: ${theme.color.NeutralPrimaryBlack};

    ${rotateUpsideDown};

    ${TextFieldShared.InputContainer}:has([data-open]) &,
    ${TextFieldShared.InputContainer}:has([data-state="open"]) & {
      transform: rotate(180deg);
    }
  `,
);
