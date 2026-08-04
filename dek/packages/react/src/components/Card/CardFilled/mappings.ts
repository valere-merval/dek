import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor, Brand } from "../../../theme/theme";
import { LabelPromotedColor } from "../../Typography/LabelPromoted";
import { CardFilledColor } from "./CardFilled.types";

export const backgroundColorMapping: Record<CardFilledColor, ColorVariant> = {
  darkGrey: "NeutralShape20",
  blue: "InteractiveBlue",
  white: "NeutralPrimaryWhite",
  lightGrey: "NeutralShape80",
  jaGeneralWhite: "JaGeneralWhite",
  pennyNeutralWhite: "PennyNeutralWhite",
};

export const footerDividerColorMapping: Record<
  Brand,
  Record<CardFilledColor, ColorVariant>
> = {
  congstarWeb: {
    darkGrey: "NeutralShape20",
    blue: "InteractiveBlue",
    white: "NeutralShape80",
    lightGrey: "NeutralShape80",
    jaGeneralWhite: "JaGeneralWhite",
    pennyNeutralWhite: "PennyNeutralWhite",
  },
  congstarApp: {
    darkGrey: "NeutralShape20",
    blue: "InteractiveBlue",
    white: "NeutralPrimaryWhite",
    lightGrey: "NeutralShape80",
    jaGeneralWhite: "JaGeneralWhite",
    pennyNeutralWhite: "PennyNeutralWhite",
  },
  ja: {
    darkGrey: "JaAgave20",
    blue: "JaAgave80",
    white: "JaGeneralWhite",
    lightGrey: "JaAgaveOutlinesSecondary",
    jaGeneralWhite: "JaAgave10",
    pennyNeutralWhite: "PennyNeutralWhite",
  },
  penny: {
    darkGrey: "PennyRedDark",
    blue: "PennyRed",
    white: "PennyNeutralWhite",
    lightGrey: "JaAgaveOutlinesSecondary",
    jaGeneralWhite: "JaGeneralWhite",
    pennyNeutralWhite: "PennyRed",
  },
};

export const footerBackgroundColorMapping: Record<Brand, BackgroundColor> = {
  congstarWeb: "lightGrey",
  congstarApp: "lightGrey",
  ja: "jaAgave20",
  penny: "pennyRed",
};

export const PromotionTopColorMapping: Record<
  BackgroundColor,
  LabelPromotedColor
> = {
  black: "pink",
  lightGrey: "black",
  darkGrey: "pink",
  blue: "black",
  white: "black",
  jaAgave20: "jaBlack",
  jaAgave80: "jaBlack",
  jaAgaveOutlinesSecondary: "jaBlack",
  jaGeneralWhite: "jaBlack",
  pennyNeutralLightGrey: "pennyMidnightBlue",
  pennyNeutralWhite: "pennyMidnightBlue",
  pennyRed: "pennyMidnightBlue",
  pennyRedDark: "pennyMidnightBlue",
};

export const headerImageBackgroundColorMapping: Record<
  BackgroundColor,
  ColorVariant
> = {
  black: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryWhite",
  darkGrey: "NeutralPrimaryBlack",
  blue: "NeutralPrimaryWhite",
  white: "NeutralPrimaryWhite",
  jaAgave20: "JaGeneralWhite",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaGeneralWhite",
  pennyNeutralLightGrey: "PennyNeutralWhite",
  pennyNeutralWhite: "PennyNeutralWhite",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};
