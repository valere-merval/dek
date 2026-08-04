import styled, { css } from "styled-components";
import {
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  Label as AriaLabel,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps,
  Button as AriaButton,
} from "react-aria-components";
import { TextFieldSize } from "../TextField/TextField.types";
import {
  inputStyles,
  placeholderFocusStyles,
  placeholderStyles,
  placeholderWithInputValueStyles,
  wrapperDisabledStyles,
  wrapperErrorStyles,
  wrapperFocusStyles,
  wrapperStyles,
} from "../shared/TextField.styles";
import {
  POPOVER_X_OVERSIZE,
  popoverContentOpenStyles,
  popoverContentStyles,
  popoverItemStyles,
  popoverItemTextStyles,
} from "../shared/Popover.styles";
import { getScrollbarStyles } from "../../ScrollArea/ScrollArea.styles";

export const Select = styled(AriaSelect)(
  ({ theme }) => css`
    &[data-invalid] {
      ${InputWrapper} {
        ${wrapperErrorStyles(theme)}
      }
    }

    &[data-open] {
      ${InputWrapper} {
        ${wrapperFocusStyles(theme)}
      }
    }
  `,
);

export const InputWrapper = styled(AriaButton)<{
  $size?: TextFieldSize;
  $fullWidth?: boolean;
}>(
  ({ theme, $size, $fullWidth }) => css`
    ${wrapperStyles(theme, $size, $fullWidth)}

    cursor: pointer;

    &[data-focus-visible] {
      ${wrapperFocusStyles(theme)}
    }

    &[data-disabled] {
      ${wrapperDisabledStyles(theme)}
    }
  `,
);

export const SelectValue = styled(AriaSelectValue)<{
  $size: TextFieldSize | undefined;
}>(
  ({ theme, $size }) => css`
    ${inputStyles(theme, true, $size)}
    display: flex;
    align-items: center;
    white-space: nowrap;
  `,
);

export const Label = styled(AriaLabel)<{
  $size?: TextFieldSize;
  $isFocused?: boolean;
  $disabled?: boolean;
}>(
  ({ theme, $size, $disabled }) => css`
    ${placeholderStyles(theme, $size, $disabled)}

    ${SelectValue}[data-focused] + & {
      ${placeholderFocusStyles(theme)}
    }

    :not([data-placeholder]) + & {
      ${placeholderWithInputValueStyles(theme)}
    }
  `,
);

export const ListBoxItem = styled(AriaListBoxItem)<ListBoxItemProps<object>>(
  ({ theme }) => css`
    ${popoverItemStyles(theme)}
    margin: 0 ${theme.space["12"]} 0 ${theme.space["06"]};
    ${popoverItemTextStyles(theme)}
  `,
);

export const ListBox = styled(AriaListBox)(({ theme }) => {
  return css`
    width: 100%;
    padding: ${theme.space["06"]} 0;
    ${getScrollbarStyles(theme, false)}
    pointer-events: auto;

    &:focus-visible {
      outline: none;
    }
  `;
}) as typeof AriaListBox;

export const PopoverChild = styled.div(
  ({ theme }) => css`
    width: calc(var(--trigger-width) + ${theme.space[POPOVER_X_OVERSIZE]});
    min-width: 300px;
    height: inherit;
    max-height: inherit;
    position: relative;
    flex-grow: 1;
    ${popoverContentStyles(theme)}
    ${popoverContentOpenStyles}
  `,
);
