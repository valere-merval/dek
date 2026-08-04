import styled, { css } from "styled-components";
import { TextFieldSize } from "./TextField.types";
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

export const Root = styled.div<{
  $fullWidth?: boolean;
}>(
  ({ $fullWidth }) => css`
    all: unset;
    display: ${$fullWidth ? "block" : "inline-block"};
    max-width: 100%;
  `,
);

export const InputWrapper = styled.div<{
  $size?: TextFieldSize;
  $fullWidth?: boolean;
}>(
  ({ theme, $size, $fullWidth }) => css`
    ${wrapperStyles(theme, $size, $fullWidth)}

    &:has(input[aria-invalid]) {
      ${wrapperErrorStyles(theme)}
    }

    &:has(input:focus-visible) {
      ${wrapperFocusStyles(theme)}
    }

    &:has(input:disabled) {
      ${wrapperDisabledStyles(theme)}
    }
  `,
);

export const Input = styled.input<{
  $size: TextFieldSize | undefined;
  $hasIcon: boolean;
}>(({ theme, $hasIcon, $size }) => inputStyles(theme, $hasIcon, $size));

export const Placeholder = styled.label<{
  $size?: TextFieldSize;
  $disabled?: boolean;
}>(
  ({ theme, $size, $disabled }) => css`
    ${placeholderStyles(theme, $size, $disabled)}

    ${Input}:focus-visible:not(:read-only) + & {
      ${placeholderFocusStyles(theme)}
    }

    ${Input}:not(:placeholder-shown) + & {
      ${placeholderWithInputValueStyles(theme)}
    }
  `,
);

export const IconButton = styled.button(({ theme }) => iconButtonStyles(theme));
