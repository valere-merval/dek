import styled, { css, DefaultTheme } from "styled-components";
import { ColorVariant } from "../../../theme/mappings/color";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { BackgroundColor } from "../../../theme/theme";
import { textColorMixin } from "../../Typography/themeBackgroundColorMapping";
import { ConvertToTransient } from "../../propTypes";
import { ButtonBase } from "../ButtonBase/ButtonBase";
import { ButtonMoreDetailsProps } from "./ButtonMoreDetails.types";

const themeBackgroundColorMapping: Record<BackgroundColor, ColorVariant> = {
  black: "NeutralPrimaryWhite",
  blue: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryBlack",
  white: "NeutralPrimaryBlack",
  darkGrey: "NeutralPrimaryWhite",
  jaAgave20: "JaAgave80",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaAgave80",
  pennyNeutralLightGrey: "PennyRed",
  pennyNeutralWhite: "PennyRed",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

const disabledColorMap: Record<BackgroundColor, ColorVariant> = {
  black: "NeutralSecondary60",
  blue: "NeutralSecondary40",
  lightGrey: "NeutralSecondary40",
  white: "NeutralSecondary40",
  darkGrey: "NeutralSecondary60",
  jaAgave20: "JaAgave80",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaAgave80",
  pennyNeutralLightGrey: "PennyRed",
  pennyNeutralWhite: "PennyRed",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

type Props = {
  theme: DefaultTheme;
} & ConvertToTransient<ButtonMoreDetailsProps, "size" | "inheritFont">;

export const getMoreDetailsButtonStyles = ({
  theme,
  $size,
  $inheritFont,
}: Props) => css`
  all: unset;

  width: fit-content;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  background-color: inherit;
  color: ${theme.color[
    themeBackgroundColorMapping[theme.contextSpecific.backgroundColor]
  ]};
  &:disabled {
    color: ${theme.color[
      disabledColorMap[theme.contextSpecific.backgroundColor]
    ]};
    cursor: not-allowed;
    &:hover {
      opacity: 100%;
    }
  }
  &:hover {
    opacity: ${theme.opacity.Degree75};
  }

  ${textColorMixin(theme)};

  &:focus-visible {
    border-radius: calc(${theme.space["06"]} - ${theme.space["04"]});
    ${theme.contextSpecific.focusStyles}
  }

  ${() => {
    if ($inheritFont) {
      return css`
        font: inherit !important;
      `;
    }

    const commonFontCss = css`
      font: ${theme.typography.BodyLight14};
    `;
    switch ($size) {
      case "large":
        return css`
          ${commonFontCss}
          ${up("md")} {
            font: ${theme.typography.BodyLight16};
          }
        `;
      case "medium":
      default:
        return commonFontCss;
    }
  }}
`;

export const Button = styled(ButtonBase)<Props>(getMoreDetailsButtonStyles);
