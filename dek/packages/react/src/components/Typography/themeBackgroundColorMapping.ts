import { backgroundTextColorMap, Brand } from "../../theme/theme";
import { ColorVariant } from "../../theme/mappings/color";
import { css, DefaultTheme } from "styled-components";

const brandBlackWhiteMapping: Record<
  Brand,
  Record<Exclude<TextColor, "inherit">, ColorVariant>
> = {
  congstarWeb: {
    black: "NeutralPrimaryBlack",
    white: "NeutralPrimaryWhite",
  },
  congstarApp: {
    black: "NeutralPrimaryBlack",
    white: "NeutralPrimaryWhite",
  },
  penny: {
    black: "PennyNeutralBlack",
    white: "PennyNeutralWhite",
  },
  ja: {
    black: "JaGeneralBlack",
    white: "JaGeneralWhite",
  },
};

export type TextColor = "white" | "black" | "inherit";
export const textColorMixin = (theme: DefaultTheme, $color?: TextColor) => css`
  color: ${() => {
    const themeValue = theme.contextSpecific.backgroundColor;
    const brand = theme.contextSpecific.brand;

    switch ($color) {
      case "inherit":
        return $color;
      case "black":
        return theme.color[brandBlackWhiteMapping[brand].black];
      case "white":
        return theme.color[brandBlackWhiteMapping[brand].white];
      case undefined:
        return theme.color[backgroundTextColorMap[themeValue]];
    }
  }};
`;
