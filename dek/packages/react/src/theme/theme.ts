import { css, DefaultTheme, RuleSet } from "styled-components";
import { typography } from "./mappings/typography";
import { color, ColorVariant } from "./mappings/color";
import { shadow } from "./mappings/shadow";
import { opacity } from "./mappings/opacity";
import { borderRadius } from "./mappings/borderRadius";
import { size } from "./mappings/size";
import { space } from "./mappings/space";
import { mediaBreakpoints } from "./mappings/mediaBreakpoints";
import { zIndex } from "./mappings/zIndex";

export const focusRingColorMap: Record<BackgroundColor, ColorVariant> = {
  blue: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryBlack",
  white: "NeutralPrimaryBlack",
  darkGrey: "NeutralPrimaryWhite",
  black: "NeutralPrimaryWhite",
  jaAgave20: "JaGeneralBlack",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaGeneralBlack",
  pennyNeutralLightGrey: "PennyNeutralBlack",
  pennyNeutralWhite: "PennyNeutralBlack",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

export const getFocusStyles = (backgroundColor: BackgroundColor) => css`
  outline: ${color[focusRingColorMap[backgroundColor]]} solid 2px;
  outline-offset: ${space["04"]};
`;

export const backgroundTextColorMap: Record<BackgroundColor, ColorVariant> = {
  white: "NeutralPrimaryBlack",
  black: "NeutralPrimaryWhite",
  blue: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryBlack",
  darkGrey: "NeutralPrimaryWhite",
  jaAgave20: "JaGeneralBlack",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaGeneralBlack",
  pennyNeutralLightGrey: "PennyMidnightBlue",
  pennyNeutralWhite: "PennyMidnightBlue",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

export const backgroundColors = [
  "black",
  "white",
  "blue",
  "lightGrey",
  "darkGrey",
  "jaAgave80",
  "jaAgaveOutlinesSecondary",
  "jaGeneralWhite",
  "jaAgave20",
  "pennyRed",
  "pennyRedDark",
  "pennyNeutralWhite",
  "pennyNeutralLightGrey",
] as const;
export type BackgroundColor = (typeof backgroundColors)[number];

export type Brand = "congstarWeb" | "congstarApp" | "ja" | "penny";
export type CongstarBrand = Extract<Brand, "congstarApp" | "congstarWeb">;

export type AllowedBackgroundColors = typeof brandBackgroundColorMap;
export const brandBackgroundColorMap = {
  congstarApp: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  penny: [
    "pennyNeutralWhite",
    "pennyNeutralLightGrey",
    "pennyRed",
    "pennyRedDark",
  ],
  ja: ["jaGeneralWhite", "jaAgave20", "jaAgave80", "jaAgaveOutlinesSecondary"],
} satisfies Record<Brand, BackgroundColor[]>;

export const backgroundColorMapping: Record<BackgroundColor, ColorVariant> = {
  black: "NeutralPrimaryBlack",
  white: "NeutralPrimaryWhite",
  blue: "InteractiveBlue",
  lightGrey: "NeutralShape80",
  darkGrey: "NeutralShape20",
  jaAgave80: "JaAgave80",
  jaAgaveOutlinesSecondary: "JaAgaveOutlinesSecondary",
  jaGeneralWhite: "JaGeneralWhite",
  jaAgave20: "JaAgave20",
  pennyRed: "PennyRed",
  pennyRedDark: "PennyRedDark",
  pennyNeutralWhite: "PennyNeutralWhite",
  pennyNeutralLightGrey: "PennyNeutralLightGrey",
};

export interface ContextSpecificTheme {
  backgroundColor: BackgroundColor;
  brand: Brand;
  focusStyles: RuleSet<object>;
}

export interface FairTheme {
  typography: typeof typography;
  contextSpecific: ContextSpecificTheme;
  color: typeof color;
  shadow: typeof shadow;
  opacity: typeof opacity;
  borderRadius: typeof borderRadius;
  size: typeof size;
  space: typeof space;
  mediaBreakpoints: typeof mediaBreakpoints;
  zIndex: typeof zIndex;
}

declare module "styled-components" {
  interface DefaultTheme extends FairTheme {}
}

export const defaultFairTheme: DefaultTheme = {
  typography,
  contextSpecific: {
    backgroundColor: "black",
    brand: "congstarWeb",
    focusStyles: getFocusStyles("black"),
  },
  color,
  shadow,
  opacity,
  borderRadius,
  size,
  space,
  mediaBreakpoints,
  zIndex,
};

export const createCustomTheme = <T extends object>(
  customTheme: T,
  contextSpecific: ContextSpecificTheme,
) => {
  return {
    ...defaultFairTheme,
    ...customTheme,
    contextSpecific: contextSpecific,
  };
};
