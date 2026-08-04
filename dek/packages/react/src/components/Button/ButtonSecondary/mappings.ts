import { ButtonSecondaryColor } from "./ButtonSecondary.types";
import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor, Brand } from "../../../theme/theme";
import { TypographyVariant } from "../../../theme/mappings/typography";
import { SizeVariant } from "../../../theme/mappings/size";

export const colorMap: Record<ButtonSecondaryColor, ColorVariant> = {
  blue: "InteractiveBlue",
  black: "NeutralPrimaryBlack",
  white: "NeutralPrimaryWhite",
};

export const backgroundMap: Record<BackgroundColor, ColorVariant> = {
  blue: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryBlack",
  white: "NeutralPrimaryBlack",
  darkGrey: "InteractiveBlue",
  black: "InteractiveBlue",
  jaAgave20: "JaAgaveSecondary",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaAgaveSecondary",
  pennyNeutralLightGrey: "PennyRed",
  pennyNeutralWhite: "PennyRed",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

export const iconSizeMap: Record<Brand, SizeVariant> = {
  congstarApp: "20",
  ja: "20",
  penny: "20",
  congstarWeb: "24",
};

export const labelFontSizeMap: Record<Brand, TypographyVariant> = {
  congstarApp: "CongstarAppLabelMedium",
  ja: "JaLabelMedium",
  penny: "PennyLabelMedium",
  congstarWeb: "LabelBold16",
};
