import {
  BORDER_WIDTH,
  colorMapping,
  fontMapping,
  iconPadding,
  inputSizeMapping,
  borderRadiusMapping,
  borderWidthMapping as baseBorderWidthMapping,
} from "./mappings";
import { TextFieldSize } from "../TextField/TextField.types";
import styled, { css, DefaultTheme } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { movePlaceholder } from "../../../animations/movePlaceholder";
import { highContrast } from "../../../utils/accessibility";
import { SizeVariant } from "../../../theme/mappings/size";
import { disableUserSelect } from "../../../utils/userSelect";

export const wrapperStyles = (
  theme: DefaultTheme,
  size?: TextFieldSize,
  fullWidth?: boolean,
) => {
  const colorToken = colorMapping[theme.contextSpecific.backgroundColor].color;
  const color = colorToken
    ? theme.color[colorToken]
    : theme.color.NeutralPrimaryBlack;
  const colorMappingBorder =
    colorMapping[theme.contextSpecific.backgroundColor].borderColor;
  const borderColor = colorMappingBorder
    ? theme.color[colorMappingBorder]
    : "transparent";
  const borderRadiusSizeMapping =
    borderRadiusMapping[theme.contextSpecific.brand];
  const borderWidthMapping =
    baseBorderWidthMapping[theme.contextSpecific.brand];

  return css`
    all: unset;
    cursor: text;
    max-width: 100%;

    height: ${theme.size[inputSizeMapping[size || "medium"].inputHeight]};
    ${up("md")} {
      height: ${theme.size[inputSizeMapping[size || "large"].inputHeight]};
    }
    color: ${color};

    ${fullWidth
      ? css`
          width: 100%;
        `
      : css`
          width: ${inputSizeMapping[size || "medium"].inputWidth};
          ${up("md")} {
            width: ${inputSizeMapping[size || "large"].inputWidth};
          }
        `}

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    position: relative;
    box-sizing: border-box;
    overflow: clip;

    background-color: ${theme.color[
      colorMapping[theme.contextSpecific.backgroundColor].backgroundColor
    ]};

    border-radius: ${theme.borderRadius[
      borderRadiusSizeMapping[size || "medium"]
    ]};
    ${up("md")} {
      border-radius: ${theme.borderRadius[
        borderRadiusSizeMapping[size || "large"]
      ]};
    }
    border: ${theme.size[borderWidthMapping.default]} solid ${borderColor};
  `;
};

export const wrapperErrorStyles = (theme: DefaultTheme) => {
  const borderWidthMapping =
    baseBorderWidthMapping[theme.contextSpecific.brand];

  return css`
    border-color: ${theme.color[
      colorMapping[theme.contextSpecific.backgroundColor].errorColor
    ]};
    border-width: ${theme.size[borderWidthMapping.error]};
    ${highContrast()} {
      border-color: LinkText;
      color: LinkText;
    }
  `;
};

export const wrapperFocusStyles = (theme: DefaultTheme) => {
  const borderColorFocusToken =
    colorMapping[theme.contextSpecific.backgroundColor].borderColorFocus;
  const borderColorFocus = borderColorFocusToken
    ? theme.color[borderColorFocusToken]
    : theme.color.InteractiveBlue;
  const borderWidthMapping =
    baseBorderWidthMapping[theme.contextSpecific.brand];

  return css`
    border-color: ${borderColorFocus};
    ${theme.contextSpecific.focusStyles}
    border-width: ${theme.size[borderWidthMapping.error]};
    ${highContrast()} {
      outline-color: Highlight;
    }
  `;
};

export const wrapperDisabledStyles = (theme: DefaultTheme) => {
  const colorMappingBorder =
    colorMapping[theme.contextSpecific.backgroundColor].borderColorDisabled;
  const borderColorDisabled = colorMappingBorder
    ? theme.color[colorMappingBorder]
    : "transparent";

  return css`
    color: ${theme.color[
      colorMapping[theme.contextSpecific.backgroundColor].colorDisabled
    ]};
    background-color: ${theme.color[
      colorMapping[theme.contextSpecific.backgroundColor]
        .backgroundColorDisabled
    ]};
    border-color: ${borderColorDisabled};

    cursor: not-allowed;
    & button {
      cursor: not-allowed;
    }

    ${highContrast()} {
      border-color: GrayText;
      color: GrayText;
    }
  `;
};

export const inputStyles = (
  theme: DefaultTheme,
  hasIcon: boolean,
  size?: TextFieldSize,
) => {
  const iconWidth = hasIcon ? theme.size[iconSize] : "0px";

  return css`
    all: unset;

    cursor: inherit;
    font: ${theme.typography[
      fontMapping[theme.contextSpecific.brand].inputFont
    ]};
    box-sizing: border-box;
    padding-left: calc(${theme.space["16"]} - ${BORDER_WIDTH});
    padding-top: ${theme.space[
      inputSizeMapping[size || "medium"].inputPaddingTop
    ]};
    padding-right: calc(
      ${theme.space[iconPadding]} - ${BORDER_WIDTH} + ${iconWidth}
    );

    min-width: 0;
    width: 100%;
    height: 100%;

    /* Hide password reveal button in MS Edge */
    &::-ms-reveal {
      display: none;
    }

    /* Hide Arrows from Input type number in Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Hide Arrows from Input type number in Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }

    ${up("md")} {
      padding-top: ${theme.space[
        inputSizeMapping[size || "large"].inputPaddingTop
      ]};
    }

    /* Hides the caret when the input is read-only. */
    &:read-only {
      caret-color: transparent;
      user-select: none;
      -webkit-user-select: none;
    }

    &::placeholder {
      opacity: 0;
    }

    ${highContrast()} {
      color: CanvasText;
    }
  `;
};

export const placeholderStyles = (
  theme: DefaultTheme,
  size?: TextFieldSize,
  disabled?: boolean,
) => {
  const placeholderColorToken =
    colorMapping[theme.contextSpecific.backgroundColor].placeholderColor;
  const placeholderColor = placeholderColorToken
    ? theme.color[placeholderColorToken]
    : theme.color.NeutralSecondary40;

  return css`
    cursor: inherit;

    position: absolute;
    left: -2px;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: ${theme.space["16"]};
    color: ${placeholderColor};
    ${disableUserSelect()};
    pointer-events: none;

    ${movePlaceholder};

    font: ${theme.typography[
      fontMapping[theme.contextSpecific.brand].placeholderFont
    ]};
    max-width: calc(${inputSizeMapping[size || "medium"].inputWidth} - 54px);
    &:has(~ div) {
      max-width: calc(
        100% - (2 * ${theme.space[iconPadding]}) - ${theme.size[iconSize]}
      );
    }

    ${up("md")} {
      max-width: calc(${inputSizeMapping[size || "large"].inputWidth} - 54px);
      &:has(~ div) {
        max-width: calc(
          100% - (2 * ${theme.space[iconPadding]}) - ${theme.size[iconSize]}
        );
      }
    }

    ${disabled &&
    css`
      color: ${theme.color[
        colorMapping[theme.contextSpecific.backgroundColor].colorDisabled
      ]};
      ${highContrast()} {
        color: GrayText;
      }
    `}
  `;
};

export const placeholderWithInputValueStyles = (theme: DefaultTheme) => css`
  transform: translateY(-12px);
  font: ${theme.typography[
    fontMapping[theme.contextSpecific.brand].floatingPlaceholderFont
  ]};
`;

export const placeholderFocusStyles = (theme: DefaultTheme) => css`
  transform: translateY(-12px);
  font: ${theme.typography[
    fontMapping[theme.contextSpecific.brand].floatingPlaceholderFont
  ]};
`;

export const iconSize: SizeVariant = "24";

export const iconWrapperStyles = (theme: DefaultTheme, disabled?: boolean) => {
  return css`
    position: absolute;
    right: calc(${theme.space[iconPadding]} - ${BORDER_WIDTH});

    width: ${theme.size[iconSize]};
    height: ${theme.size[iconSize]};

    svg {
      color: ${theme.color.InteractiveBlack};
      height: inherit;
      width: inherit;

      ${highContrast()} {
        @media (prefers-color-scheme: dark) {
          color: CanvasText;
        }
      }

      ${disabled &&
      css`
        color: ${theme.color[
          colorMapping[theme.contextSpecific.backgroundColor].colorDisabled
        ]};
        ${highContrast()} {
          color: GrayText;
        }
      `}
    }

    @media (prefers-reduced-motion) {
      &:has(div) {
        padding-right: ${theme.space["04"]};
      }
    }
  `;
};

export const iconButtonStyles = (theme: DefaultTheme) => css`
  all: unset;
  height: inherit;
  width: inherit;
  cursor: pointer;

  &:focus-visible {
    border-radius: ${theme.size["08"]};
    outline: ${BORDER_WIDTH} solid ${theme.color.InteractiveBlack};
    outline-offset: ${theme.space["04"]};
  }
`;

export const IconWrapper = styled.div<{
  $disabled?: boolean;
}>(({ theme, $disabled }) => iconWrapperStyles(theme, $disabled));

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["08"]};
`;
