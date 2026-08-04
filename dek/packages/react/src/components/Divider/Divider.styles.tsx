import styled, { css, type DefaultTheme } from "styled-components";
import { DividerColor, DividerProps } from "./Divider.types";
import { BackgroundColor } from "../../theme/theme";
import { ColorVariant } from "../../theme/mappings/color";
import { ConvertToTransient } from "../propTypes";
import { highContrast } from "../../utils/accessibility";
import { sizeMapping } from "./mappings";
import { up } from "../../theme/mappings/mediaBreakpoints";

export const colorMapping: Record<DividerColor, ColorVariant> = {
  black: "NeutralPrimaryBlack",
  darkGrey: "NeutralSecondary40",
  lightGrey: "NeutralSecondary60",
};

export const themeBackgroundColorMapping: Record<
  BackgroundColor,
  ColorVariant
> = {
  black: "NeutralSecondary40",
  darkGrey: "NeutralSecondary60",
  blue: "NeutralPrimaryBlack",
  white: "NeutralPrimaryBlack",
  lightGrey: "NeutralSecondary40",
  jaAgave20: "JaGeneralBlack",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaGeneralBlack",
  pennyNeutralLightGrey: "PennyNeutralBlack",
  pennyNeutralWhite: "PennyNeutralBlack",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

const lineColor = (theme: DefaultTheme, color?: DividerColor): string => {
  const brand = theme.contextSpecific.brand;
  if (color && (brand === "congstarApp" || brand === "congstarWeb")) {
    return theme.color[colorMapping[color]];
  }

  return theme.color[
    themeBackgroundColorMapping[theme.contextSpecific.backgroundColor]
  ];
};

export const DividerWithTextContainer = styled.div<
  ConvertToTransient<Pick<DividerProps, "noGap">, "noGap">
>`
  ${({ theme, $noGap }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.space["06"]};
    margin: ${theme.space["04"]} 0;

    ${up("md")} {
      gap: ${theme.space["08"]};
    }

    ${$noGap &&
    css`
      margin: 0;
    `}
  `}
`;

export const DividerLine = styled.hr<
  ConvertToTransient<Pick<DividerProps, "color">, "color">
>`
  ${({ theme, $color }) => css`
    flex: 1;
    display: block;
    min-height: ${theme.size[sizeMapping[theme.contextSpecific.brand]]};
    max-height: ${theme.size[sizeMapping[theme.contextSpecific.brand]]};
    border: none;

    background-color: ${() => lineColor(theme, $color)};

    ${highContrast()} {
      background-color: CanvasText;
    }
  `}
`;

export const Divider = styled.hr<
  ConvertToTransient<DividerProps, "orientation" | "color" | "noGap">
>`
  ${({ theme, $color, $noGap, $orientation }) => {
    return css`
      all: unset;
      display: revert;
      ${() => {
        switch ($orientation) {
          case "horizontal":
            return css`
              width: 100%;
              min-height: ${theme.size[
                sizeMapping[theme.contextSpecific.brand]
              ]};
              max-height: ${theme.size[
                sizeMapping[theme.contextSpecific.brand]
              ]};
              margin: ${theme.space["04"]} 0;
            `;
          case "vertical":
            return css`
              min-width: ${theme.size[
                sizeMapping[theme.contextSpecific.brand]
              ]};
              max-width: ${theme.size[
                sizeMapping[theme.contextSpecific.brand]
              ]};
              min-height: 100%; //just height for some reason won't work
              max-height: 100%;
              margin: 0 ${theme.space["04"]};
            `;
        }
      }}

      ${$noGap &&
      css`
        margin: 0;
      `}

      border: none;

      background-color: ${() => lineColor(theme, $color)};

      ${highContrast()} {
        background-color: CanvasText;
      }
    `;
  }}
`;
