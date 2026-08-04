import styled, { css } from "styled-components";
import {
  Dialog as AriaDialog,
  Popover as AriaPopover,
} from "react-aria-components";
import { ChevronDown } from "@fair/icons";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { slideUpAndFade } from "../../../animations/slideUpAndFade";
import { rotateUpsideDown } from "../../../animations/rotateUpsideDown";
import { highContrast, highContrastBorder } from "../../../utils/accessibility";

export const Root = styled.div(
  () => css`
    all: unset;
    display: none;

    justify-content: space-between;
    gap: 10px;
    ${up("md")} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    ${up("lg")} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `,
);

export const ItemContainer = styled.div<{ $isEditable: boolean }>(
  ({ theme, $isEditable }) => css`
    all: unset;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    height: ${theme.space["64"]};
    padding: ${theme.space["08"]} ${theme.space["16"]};
    border: 2px solid ${theme.color.NeutralSecondary40};
    border-radius: ${theme.borderRadius["16"]};

    ${highContrastBorder()}

    ${$isEditable &&
    css`
      cursor: pointer;
      &:hover p {
        opacity: ${theme.opacity.Degree66};
      }

      &:focus-visible {
        z-index: 1;
        ${theme.contextSpecific.focusStyles}
      }
    `}

    ${up("lg")} {
      width: unset;
      flex-basis: 100%;
    }
  `,
);

export const TriggerChevron = styled(ChevronDown)<{ $isOpen: boolean }>(
  ({ theme, $isOpen }) => css`
    width: ${theme.space["24"]};
    height: ${theme.space["24"]};

    color: ${theme.color.InteractiveBlue};
    ${highContrast()} {
      color: ButtonText;
    }

    ${rotateUpsideDown};
    transform: rotate(0deg);
    ${$isOpen &&
    css`
      transform: rotate(180deg);
    `}
  `,
);

export const Popover = styled(AriaPopover)(
  () => css`
    width: calc(var(--trigger-width) + 2 * 0.4rem);

    &:focus-visible {
      outline: none;
    }

    ${slideUpAndFade};
    &[data-placement="bottom"] {
      animation-name: slideUpAndFade;
    }
  `,
);

export const Dialog = styled(AriaDialog)(
  ({ theme }) => css`
    width: calc(var(--trigger-width) + 2 * 0.4rem);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: ${theme.space["24"]};
    padding: ${theme.space["20"]} ${theme.space["24"]};

    background-color: ${theme.color.NeutralPrimaryWhite};
    border-radius: ${theme.borderRadius["16"]};

    box-shadow: ${theme.shadow.Opacity15Elevation2};
    overflow-y: auto;

    ${highContrastBorder()}

    &:focus-visible {
      outline: none;
    }
  `,
);
