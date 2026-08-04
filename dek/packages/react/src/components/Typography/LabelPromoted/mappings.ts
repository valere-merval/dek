import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor, Brand } from "../../../theme/theme";
import { LabelPromotedColor } from "./LabelPromoted.types";
import { TypographyVariant } from "../Typography";
import { BorderRadiusVariant } from "../../../theme/mappings/borderRadius";
import { SizeVariant } from "../../../theme/mappings/size";

export const colorMap: Record<
  LabelPromotedColor,
  {
    color: ColorVariant;
    backgroundColor: ColorVariant;
  }
> = {
  pink: {
    color: "DecorativePromotionBlack",
    backgroundColor: "DecorativePromotionPink",
  },
  black: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "DecorativePromotionBlack",
  },
  jaWhite: {
    color: "JaGeneralBlack",
    backgroundColor: "JaGeneralWhite",
  },
  jaBlack: {
    color: "JaGeneralWhite",
    backgroundColor: "JaGeneralBlack",
  },
  pennyWhite: {
    color: "PennyNeutralBlack",
    backgroundColor: "PennyNeutralWhite",
  },
  pennyMidnightBlue: {
    color: "PennyNeutralWhite",
    backgroundColor: "PennyMidnightBlue",
  },
};

export const typoMap: Record<Brand, TypographyVariant> = {
  congstarWeb: "LabelBlack14",
  congstarApp: "CongstarAppLabelPromotion",
  ja: "JaLabelPromotion",
  penny: "PennyLabelPromotion",
};

export const backgroundColorMap: Record<BackgroundColor, LabelPromotedColor> = {
  blue: "black",
  white: "black",
  lightGrey: "black",
  black: "pink",
  darkGrey: "pink",
  jaGeneralWhite: "jaBlack",
  jaAgave20: "jaBlack",
  jaAgave80: "jaWhite",
  jaAgaveOutlinesSecondary: "jaWhite",
  pennyNeutralLightGrey: "pennyMidnightBlue",
  pennyNeutralWhite: "pennyMidnightBlue",
  pennyRed: "pennyWhite",
  pennyRedDark: "pennyWhite",
};

export const textTransformationMap: Record<Brand, "uppercase" | "none"> = {
  congstarWeb: "uppercase",
  congstarApp: "uppercase",
  ja: "none",
  penny: "none",
};

export const borderRadiusMap: Record<Brand, BorderRadiusVariant> = {
  congstarWeb: "04",
  congstarApp: "04",
  ja: "Ja05",
  penny: "Penny05",
};

export const heightMap: Record<Brand, SizeVariant> = {
  congstarWeb: "24",
  congstarApp: "20",
  ja: "20",
  penny: "20",
};
