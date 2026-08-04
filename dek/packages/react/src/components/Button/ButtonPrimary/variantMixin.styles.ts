import { ButtonPrimaryVariant } from "./ButtonPrimary/ButtonPrimary.types";
import { css, DefaultTheme } from "styled-components";
import {
  invertedColorMapping,
  outlinedColorMapping,
  primaryBackgroundColorMapping,
} from "./mappings";

const getHoverStyles = (
  theme: DefaultTheme,
  disabled: boolean,
  isLoading: boolean,
) => {
  if (!disabled && !isLoading) {
    return css`
      opacity: ${theme.opacity.Degree75};
    `;
  }
};

export const variantMixin = (
  variant: ButtonPrimaryVariant,
  disabled: boolean,
  theme: DefaultTheme,
  isLoading: boolean,
) => {
  switch (variant) {
    case "primary":
      return css`
        color: ${theme.color[
          primaryBackgroundColorMapping[theme.contextSpecific.backgroundColor]
            .color
        ]};
        background-color: ${theme.color[
          primaryBackgroundColorMapping[theme.contextSpecific.backgroundColor]
            .backgroundColor
        ]};

        ${disabled &&
        css`
          color: ${theme.color[
            primaryBackgroundColorMapping[theme.contextSpecific.backgroundColor]
              .colorDisabled
          ]};

          background-color: ${theme.color[
            primaryBackgroundColorMapping[theme.contextSpecific.backgroundColor]
              .backgroundColorDisabled
          ]};
        `}
        &:hover {
          ${getHoverStyles(theme, disabled, isLoading)}
        }
      `;
    case "inverted":
      return css`
        color: ${theme.color[
          invertedColorMapping[theme.contextSpecific.backgroundColor].color
        ]};
        background-color: ${theme.color[
          invertedColorMapping[theme.contextSpecific.backgroundColor]
            .backgroundColor
        ]};
        &:hover {
          ${!disabled &&
          !isLoading &&
          css`
            opacity: ${theme.opacity.Degree75};
          `}
        }
        ${disabled &&
        css`
          color: ${theme.color[
            invertedColorMapping[theme.contextSpecific.backgroundColor]
              .colorDisabled
          ]};
        `}
      `;
    case "outlined":
      return css`
        color: ${theme.color.InteractiveBlue};
        color: ${theme.color[
          outlinedColorMapping[theme.contextSpecific.backgroundColor].color
        ]};
        background-color: transparent;
        border: 2px solid
          ${theme.color[
            outlinedColorMapping[theme.contextSpecific.backgroundColor].color
          ]};
        &:hover {
          ${getHoverStyles(theme, disabled, isLoading)}
        }
        ${disabled &&
        css`
          color: ${theme.color[
            outlinedColorMapping[theme.contextSpecific.backgroundColor]
              .colorDisabled
          ]};
          border-color: ${theme.color[
            outlinedColorMapping[theme.contextSpecific.backgroundColor]
              .colorDisabled
          ]};
        `}
      `;
  }
};
