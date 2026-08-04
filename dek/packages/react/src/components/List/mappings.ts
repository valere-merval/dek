import { ListColor, ListSize } from "./List.types";
import { ColorVariant } from "../../theme/mappings/color";
import { BackgroundColor, Brand, defaultFairTheme } from "../../theme/theme";
import { SpaceVariant } from "../../theme/mappings/space";
import { TypographyVariant } from "../../theme/mappings/typography";

export const textColor: Record<BackgroundColor, ColorVariant> = {
  blue: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryBlack",
  white: "NeutralPrimaryBlack",
  darkGrey: "NeutralPrimaryWhite",
  black: "NeutralPrimaryWhite",
  jaAgave20: "JaGeneralBlack",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaGeneralBlack",
  pennyNeutralLightGrey: "PennyMidnightBlue",
  pennyNeutralWhite: "PennyMidnightBlue",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

export const supportedBulletColors: Record<Brand, ColorVariant[]> = {
  congstarWeb: [
    "DecorativePrimaryYellow",
    "DecorativePrimaryOrange",
    "DecorativePrimaryGreen",
    "NeutralPrimaryBlack",
    "NeutralPrimaryWhite",
    "DecorativeSecondaryRed",
    "DecorativeSecondaryLime",
    "DecorativeSecondaryPurple",
  ],
  congstarApp: [
    "DecorativePrimaryYellow",
    "DecorativePrimaryOrange",
    "DecorativePrimaryGreen",
  ],
  ja: ["JaAgave80", "JaGeneralWhite"],
  penny: ["PennyRed", "PennyNeutralWhite"],
};

export const bulletColor: Record<ListColor, ColorVariant> = {
  green: "DecorativePrimaryGreen",
  orange: "DecorativePrimaryOrange",
  yellow: "DecorativePrimaryYellow",
  black: "NeutralPrimaryBlack",
  red: "DecorativeSecondaryRed",
  lime: "DecorativeSecondaryLime",
  purple: "DecorativeSecondaryPurple",
};

interface SpacingVariables {
  bulletPointSize: string;
  bulletPointGap: SpaceVariant;
  itemGap: SpaceVariant;
  innerItemGap: SpaceVariant;
}

const spacingVariablesAppMedium: SpacingVariables = {
  bulletPointSize: defaultFairTheme.size["08"],
  bulletPointGap: "12",
  itemGap: "02",
  innerItemGap: "02",
};

const spacingVariablesAppLarge: SpacingVariables = {
  bulletPointSize: defaultFairTheme.size["08"],
  bulletPointGap: "12",
  itemGap: "08",
  innerItemGap: "04",
};

export const spacingVariables: Record<
  Brand,
  Record<ListSize, SpacingVariables>
> = {
  congstarWeb: {
    medium: {
      bulletPointSize: "1rem",
      bulletPointGap: "16",
      itemGap: "08",
      innerItemGap: "02",
    },
    large: {
      bulletPointSize: defaultFairTheme.size["12"],
      bulletPointGap: "20",
      itemGap: "16",
      innerItemGap: "02",
    },
  },
  congstarApp: {
    medium: spacingVariablesAppMedium,
    large: spacingVariablesAppLarge,
  },
  ja: {
    medium: spacingVariablesAppMedium,
    large: spacingVariablesAppLarge,
  },
  penny: {
    medium: spacingVariablesAppMedium,
    large: spacingVariablesAppLarge,
  },
};

export const bodyFont: Record<Brand, Record<ListSize, TypographyVariant>> = {
  congstarWeb: {
    medium: "HeadlineBold20",
    large: "HeadlineBold24",
  },
  // Please note: ja and penny value adjustments are a temporary workaround until design systems have been merged. CongstarApp values can not be aligned with the ja and penny values, because they will be used via webview
  congstarApp: {
    medium: "CongstarAppHeadlineBoldSmall",
    large: "CongstarAppHeadlineBoldMedium",
  },
  ja: {
    medium: "JaHeadlineMedium",
    large: "JaHeadlineLarge",
  },
  penny: {
    medium: "PennyHeadlineMedium",
    large: "PennyHeadlineLarge",
  },
};

export const descriptionFont: Record<
  Brand,
  Record<ListSize, TypographyVariant>
> = {
  congstarWeb: {
    medium: "BodyLight14",
    large: "BodyLight16",
  },
  // Please note: ja and penny value adjustments are a temporary workaround until design systems have been merged. CongstarApp values can not be aligned with the ja and penny values, because they will be used via webview
  congstarApp: {
    medium: "CongstarAppBodyLightSmall",
    large: "CongstarAppBodyLightMedium",
  },
  ja: {
    medium: "JaBodyLightMedium",
    large: "JaBodyLightLarge",
  },
  penny: {
    medium: "PennyBodyLightMedium",
    large: "PennyBodyLightLarge",
  },
};
