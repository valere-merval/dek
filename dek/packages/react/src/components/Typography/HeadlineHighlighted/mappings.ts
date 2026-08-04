import { BorderRadiusVariant } from "../../../theme/mappings/borderRadius";
import { ColorVariant } from "../../../theme/mappings/color";
import { SpaceVariant } from "../../../theme/mappings/space";
import { BackgroundColor, Brand, CongstarBrand } from "../../../theme/theme";
import { TypographyVariant } from "../Typography";
import {
  HeadlineHighlightedColor,
  HeadlineHighlightedSize,
} from "./HeadlineHighlighted.types";
import { css, RuleSet } from "styled-components";

export const fontSizeMap: Record<
  Brand,
  Record<
    HeadlineHighlightedSize,
    { desktop: TypographyVariant; mobile: TypographyVariant }
  >
> = {
  congstarWeb: {
    extraSmall: {
      desktop: "HeadlineBlack32",
      mobile: "HeadlineBlack32",
    },
    small: {
      desktop: "HeadlineBlack40",
      mobile: "HeadlineBlack32",
    },
    medium: {
      desktop: "HeadlineBlack48",
      mobile: "HeadlineBlack40",
    },
    large: {
      desktop: "HeadlineBlack64",
      mobile: "HeadlineBlack40",
    },
  },
  congstarApp: {
    extraSmall: {
      desktop: "CongstarAppDisplaySmall",
      mobile: "CongstarAppDisplaySmall",
    },
    small: {
      desktop: "CongstarAppDisplayMedium",
      mobile: "CongstarAppDisplayMedium",
    },
    medium: {
      desktop: "CongstarAppDisplayLarge",
      mobile: "CongstarAppDisplayLarge",
    },
    large: {
      desktop: "CongstarAppDisplayExtraLarge",
      mobile: "CongstarAppDisplayExtraLarge",
    },
  },
  ja: {
    extraSmall: {
      desktop: "JaDisplaySmall",
      mobile: "JaDisplaySmall",
    },
    small: {
      desktop: "JaDisplayMedium",
      mobile: "JaDisplayMedium",
    },
    medium: {
      desktop: "JaDisplayLarge",
      mobile: "JaDisplayLarge",
    },
    large: {
      desktop: "JaDisplayExtraLarge",
      mobile: "JaDisplayExtraLarge",
    },
  },
  penny: {
    extraSmall: {
      desktop: "PennyDisplaySmall",
      mobile: "PennyDisplaySmall",
    },
    small: {
      desktop: "PennyDisplayMedium",
      mobile: "PennyDisplayMedium",
    },
    medium: {
      desktop: "PennyDisplayLarge",
      mobile: "PennyDisplayLarge",
    },
    large: {
      desktop: "PennyDisplayExtraLarge",
      mobile: "PennyDisplayExtraLarge",
    },
  },
};

export const colorMap: Record<BackgroundColor, ColorVariant> = {
  jaAgave80: "JaGeneralWhite",
  jaGeneralWhite: "JaAgave80",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaAgave20: "JaAgave80",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
  pennyNeutralWhite: "PennyRed",
  pennyNeutralLightGrey: "PennyRed",
  black: "NeutralPrimaryBlack",
  blue: "NeutralPrimaryBlack",
  darkGrey: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryBlack",
  white: "NeutralPrimaryBlack",
};

/*
 * This mapping in combination with the lineHeightMap of the Headline is necessary to have the appopriate gap for multiline headlines
 */
export const marginMap: Record<
  HeadlineHighlightedSize,
  { desktop: string; mobile: string }
> = {
  extraSmall: { desktop: "-3px 0", mobile: "-3px 0" },
  small: { desktop: "-3.5px 0", mobile: "-3.5px 0" },
  medium: { desktop: "-4px 0", mobile: "-3.5px 0" },
  large: { desktop: "-6px 0", mobile: "-3.5px 0" },
};

export const lineHeightMap: Record<Brand, RuleSet<object>> = {
  congstarWeb: css`
    line-height: 1.375;
  `,
  congstarApp: css`
    line-height: 1.46;
  `,
  ja: css`
    line-height: 1.4;
  `,
  penny: css`
    line-height: 1.4;
  `,
};

export const congstarPaddingMap: Record<
  CongstarBrand,
  Record<
    HeadlineHighlightedSize,
    { desktop: SpaceVariant; mobile: SpaceVariant }
  >
> = {
  congstarWeb: {
    extraSmall: { desktop: "08", mobile: "08" },
    small: { desktop: "08", mobile: "08" },
    medium: { desktop: "12", mobile: "08" },
    large: { desktop: "16", mobile: "08" },
  },
  congstarApp: {
    extraSmall: { desktop: "04", mobile: "04" },
    small: { desktop: "04", mobile: "04" },
    medium: { desktop: "06", mobile: "04" },
    large: { desktop: "06", mobile: "04" },
  },
};

export const congstarBorderRadiusMap: Record<
  CongstarBrand,
  Record<
    HeadlineHighlightedSize,
    { desktop: BorderRadiusVariant; mobile: BorderRadiusVariant }
  >
> = {
  congstarWeb: {
    extraSmall: { desktop: "08", mobile: "08" },
    small: { desktop: "08", mobile: "08" },
    medium: { desktop: "12", mobile: "08" },
    large: { desktop: "16", mobile: "08" },
  },
  congstarApp: {
    extraSmall: { desktop: "04", mobile: "04" },
    small: { desktop: "04", mobile: "04" },
    medium: { desktop: "06", mobile: "04" },
    large: { desktop: "06", mobile: "04" },
  },
};

export const congstarBackgroundColorMap: Record<
  HeadlineHighlightedColor,
  ColorVariant
> = {
  green: "DecorativePrimaryGreen",
  orange: "DecorativePrimaryOrange",
  yellow: "DecorativePrimaryYellow",
  red: "DecorativeSecondaryRed",
  lime: "DecorativeSecondaryLime",
  purple: "DecorativeSecondaryPurple",
};
