import * as tokens from "@fair/tokens";
import { DefaultTheme } from "styled-components";
import { mix } from "polished";

export type ColorMix = {
  baseWeight: number;
  baseColor: ColorVariant;
  mixColor: ColorVariant;
};
export const getMixedColor = (theme: DefaultTheme, mixObject: ColorMix) =>
  mix(
    mixObject.baseWeight,
    theme.color[mixObject.baseColor],
    theme.color[mixObject.mixColor],
  );

export type ColorVariant = keyof typeof color;

export const color = {
  InteractiveBlue: tokens.colorInteractiveBlue,
  InteractiveBlack: tokens.colorInteractiveBlack,
  InteractiveWhite: tokens.colorInteractiveWhite,
  DecorativePrimaryYellow: tokens.colorDecorativePrimaryYellow,
  DecorativePrimaryOrange: tokens.colorDecorativePrimaryOrange,
  DecorativePrimaryGreen: tokens.colorDecorativePrimaryGreen,
  DecorativeSecondaryRed: tokens.colorDecorativeSecondaryRed,
  DecorativeSecondaryLime: tokens.colorDecorativeSecondaryLime,
  DecorativeSecondaryPurple: tokens.colorDecorativeSecondaryPurple,
  DecorativePromotionPink: tokens.colorDecorativePromotionPink,
  DecorativePromotionBlack: tokens.colorDecorativePromotionBlack,
  NeutralPrimaryBlack: tokens.colorNeutralPrimaryBlack,
  NeutralPrimaryWhite: tokens.colorNeutralPrimaryWhite,
  NeutralSecondary30: tokens.colorNeutralSecondary30,
  NeutralSecondary40: tokens.colorNeutralSecondary40,
  NeutralSecondary60: tokens.colorNeutralSecondary60,
  NeutralShape20: tokens.colorNeutralShape20,
  NeutralShape80: tokens.colorNeutralShape80,
  StatusOnLightError: tokens.colorStatusOnLightError,
  StatusOnLightWarning: tokens.colorStatusOnLightWarning,
  StatusOnLightSuccess: tokens.colorStatusOnLightSuccess,
  StatusOnDarkError: tokens.colorStatusOnDarkError,
  StatusOnDarkWarning: tokens.colorStatusOnDarkWarning,
  StatusOnDarkSuccess: tokens.colorStatusOnDarkSuccess,

  PennyRed: "#C61719",
  PennyRedDark: "#96171A",
  PennyRedDisabled: "#E0A4A5",
  PennyMidYellow: "#FFCC0C",
  PennyNeonYellow: "#FFED00",
  PennyMidnightBlue: "#404C5C",
  PennyMidnightBlueLight: "#7D8A9A",
  PennyNeutralBlack: "#000000",
  PennyNeutralLightGrey: "#EBECF3",
  PennyNeutralWhite: "#FFFFFF",
  PennyBasicMainBlue: "#009CDA",
  PennyBasicLightBlue: "#BDE3FA",
  PennyStatusError: "#C61719",
  PennyStatusWarning: "#CB8600",
  PennyStatusSuccess: "#92C033",

  JaGeneralReweRed: "#D0021B",
  JaGeneralBlack: "#000000",
  JaGeneralGrey: "#707070",
  JaGeneralWhite: "#FFFFFF",
  JaAgave80: "#2E7B85",
  JaAgave60: "#3B919C",
  JaAgave30: "#ABD1D6",
  JaAgave20: "#D1E5E8",
  JaAgave10: "#EDF9FA",
  JaAgaveSecondary: "#235C63",
  JaAgaveOutlines: "#3B919C",
  JaAgaveOutlinesSecondary: "#235C63",
  JaStatusOnDarkError: "#FFFFFF",
  JaStatusError: "#C1051C",
  JaStatusWarning: "#CB8600",
  JaStatusSuccess: "#79B928",
} satisfies Record<string, string>;
