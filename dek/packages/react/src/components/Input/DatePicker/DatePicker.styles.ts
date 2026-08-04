import styled, { css } from "styled-components";
import { Popover as AriaPopover } from "react-aria-components";
import {
  popoverContentOpenStyles,
  popoverContentStyles,
} from "../shared/Popover.styles";
import { TextField } from "../TextField";

export const Popover = styled(AriaPopover)(
  () => css`
    // React aria popover sets a minimum of 12px to the left. We want to position the popover on left 0 and use the full viewport width
    transform: translateX(-12px);

    @media (min-width: 367px) {
      transform: translateX(0);
    }
  `,
);

export const PopoverContent = styled.div(
  ({ theme }) => css`
    ${popoverContentStyles(theme)}

    padding: ${theme.space["20"]} 0;
    justify-content: center;
    min-width: fit-content;
    width: 100dvw;
    max-width: 100dvw;
    border-radius: ${theme.borderRadius["16"]};

    &[data-side="bottom"] {
      ${popoverContentOpenStyles}
    }

    @media (min-width: 367px) {
      display: revert;
      padding-left: ${theme.space["24"]};
      padding-right: ${theme.space["24"]};
      width: fit-content;
    }
  `,
);

export const TextFieldTrigger = styled(TextField)(
  ({ disabled }: { disabled?: boolean }) => css`
    ${!disabled &&
    css`
      cursor: pointer;
      * {
        cursor: pointer;
      }
    `}
  `,
);
