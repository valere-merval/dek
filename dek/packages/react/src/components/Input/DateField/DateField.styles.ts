import styled, { css } from "styled-components";
import {
  DateField as AriaDateField,
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
  Label,
} from "react-aria-components";
import { TextFieldSize } from "../TextField/TextField.types";
import {
  inputStyles,
  placeholderStyles,
  wrapperDisabledStyles,
  wrapperErrorStyles,
  wrapperFocusStyles,
  wrapperStyles,
} from "../shared/TextField.styles";
import { colorMapping, fontMapping } from "../shared/mappings";
import { highContrast } from "../../../utils/accessibility";

export const DateField = styled(AriaDateField)<{
  $size?: TextFieldSize;
  $fullWidth?: boolean;
}>(
  ({ theme, $size, $fullWidth }) => css`
    ${wrapperStyles(theme, $size, $fullWidth)}

    &:has([data-focus-within]) {
      ${wrapperFocusStyles(theme)}
    }

    &:has([aria-invalid="true"]) {
      ${wrapperErrorStyles(theme)}
    }

    &:has([data-disabled]) {
      ${wrapperDisabledStyles(theme)}
    }

    caret-color: transparent;
  `,
);

export const DateInput = styled(AriaDateInput)<{
  $size: TextFieldSize | undefined;
  $isEditing: boolean;
}>(
  ({ theme, $size, $isEditing }) => css`
    ${inputStyles(theme, false, $size)}

    display: flex;

    // Hide all segments except for the first one while the field is not focused and empty.
    // This way you will always select the first one when clicking on the field.
    ${!$isEditing &&
    css`
      div {
        display: none;

        &:first-of-type {
          display: flex;
        }
      }
    `}

    &[data-focus-within] {
      div {
        display: flex;
      }
    }
  `,
);

export const DateSegment = styled(AriaDateSegment)<{
  $isEditing: boolean;
}>(({ theme, $isEditing }) => {
  const colorToken = colorMapping[theme.contextSpecific.backgroundColor].color;
  const color = colorToken
    ? theme.color[colorToken]
    : theme.color.NeutralPrimaryBlack;

  return css`
    text-align: end;
    display: flex;
    align-items: center;
    &[data-type="literal"] {
      padding-left: 2px;
      padding-right: 2px;
    }

    &[data-placeholder] {
      font-style: normal;
      text-transform: uppercase;
    }

    &[data-focused] {
      font-weight: bold;
      color: ${color};
      border: none;
      outline: none;

      ${highContrast()} {
        border-color: Highlight;
        color: Highlight;
      }
    }

    opacity: ${!$isEditing ? 0 : 1};

    ${DateField}:focus-within & {
      opacity: 1;
    }
  `;
});

export const Placeholder = styled(Label)<{
  $size: TextFieldSize | undefined;
  $isEditing: boolean;
  $disabled?: boolean;
}>(({ theme, $size, $isEditing, $disabled }) => {
  const fontBrandMapping = fontMapping[theme.contextSpecific.brand];
  return css`
    ${placeholderStyles(theme, $size, $disabled)}

    ${$isEditing &&
    css`
      transform: translateY(-12px);
    `}

    font: ${theme.typography[
      $isEditing
        ? fontBrandMapping.floatingPlaceholderFont
        : fontBrandMapping.placeholderFont
    ]};

    ${DateField}:focus-within & {
      display: flex;
      transform: translateY(-12px);
      font: ${theme.typography[fontBrandMapping.floatingPlaceholderFont]};
    }
  `;
});
