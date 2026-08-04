import styled, { css } from "styled-components";
import { TextFieldSize } from "../TextField/TextField.types";
import {
  iconButtonStyles,
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
  Button as AriaButton,
  Label as AriaLabel,
  SearchField as AriaSearchField,
} from "react-aria-components";
import { getScrollbarStyles } from "../../ScrollArea/ScrollArea.styles";
import {
  POPOVER_X_OVERSIZE,
  popoverContentOpenStyles,
  popoverContentStyles,
  popoverItemStyles,
  popoverItemTextStyles,
} from "../shared/Popover.styles";

export const InputContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["08"]};

    &:has(input:read-only) {
      cursor: not-allowed;
    }

    &[data-open] {
      ${InputWrapper} {
        ${wrapperFocusStyles(theme)}
      }
    }
  `,
);

export const InputWrapper = styled.div<{
  $size?: TextFieldSize;
  $fullWidth?: boolean;
}>(
  ({ theme, $size, $fullWidth }) => css`
    ${wrapperStyles(theme, $size, $fullWidth)}

    &:has(input[aria-invalid="true"]) {
      ${wrapperErrorStyles(theme)}
    }

    &:has(input:focus-visible) {
      ${wrapperFocusStyles(theme)}
    }

    &:has(input:disabled) {
      ${wrapperDisabledStyles(theme)}
    }

    &:has(input:read-only) {
      pointer-events: none;
    }
  `,
);

export const Input = styled("input")<{
  $size: TextFieldSize | undefined;
}>(({ theme, $size }) => inputStyles(theme, true, $size));

export const Label = styled(AriaLabel)<{
  $size?: TextFieldSize;
  $isFocused?: boolean;
  $disabled?: boolean;
}>(
  ({ theme, $size, $disabled }) => css`
    ${placeholderStyles(theme, $size, $disabled)}

    ${Input}[data-focused] + & {
      ${placeholderFocusStyles(theme)}
    }

    ${Input}:not([value=""]) + & {
      ${placeholderWithInputValueStyles(theme)}
    }
  `,
);

export const SearchField = styled(AriaSearchField)`
  & input[type="search"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
`;

export const Button = styled(AriaButton)<{ $isListExpanded: boolean }>(
  ({ theme, $isListExpanded }) => css`
    ${iconButtonStyles(theme)}
    transition: rotate 0.2s ease-in-out;
    rotate: ${$isListExpanded ? "180deg" : "0deg"};
  `,
);

export const PopoverChild = styled.div<{
  $isListAvailable: boolean;
}>(({ theme, $isListAvailable }) => {
  if (!$isListAvailable) {
    return css`
      display: none;
    `;
  }
  return css`
    width: calc(var(--trigger-width) + ${theme.space[POPOVER_X_OVERSIZE]});
    min-width: 300px;
    height: inherit;
    max-height: inherit;
    position: relative;
    flex-grow: 1;
    ${popoverContentStyles(theme)}
    ${popoverContentOpenStyles}
  `;
});

export const ListBox = styled.ul(({ theme }) => {
  return css`
    width: 100%;
    margin: 0;
    padding: ${theme.space["06"]} 0;
    ${getScrollbarStyles(theme, false)}
    pointer-events: auto;

    &:focus-visible {
      outline: none;
    }
  `;
});

export const ListBoxItem = styled.li(
  ({ theme }) => css`
    ${popoverItemStyles(theme)}
    margin: 0 ${theme.space["12"]} 0 ${theme.space["06"]};
    ${popoverItemTextStyles(theme)}
  `,
);
