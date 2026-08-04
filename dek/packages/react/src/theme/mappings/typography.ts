import * as tokens from "@fair/tokens";
import { css } from "styled-components";

export type TypographyVariant = keyof typeof typography;

export const typography = {
  TagBlack16: tokens.typographyTagBlack16,
  TagBlack24: tokens.typographyTagBlack24,
  TagBlack32: tokens.typographyTagBlack32,
  TagBlack40: tokens.typographyTagBlack40,
  TagBlack48: tokens.typographyTagBlack48,
  TagBlack56: tokens.typographyTagBlack56,
  TagBlack64: tokens.typographyTagBlack64,
  TagBlack96: tokens.typographyTagBlack96,
  TagBlack128: tokens.typographyTagBlack128,
  TagBold16: tokens.typographyTagBold16,
  TagBold20: tokens.typographyTagBold20,
  TagBold24: tokens.typographyTagBold24,
  HeadlineBlack24: tokens.typographyHeadlineBlack24,
  HeadlineBlack32: tokens.typographyHeadlineBlack32,
  HeadlineBlack40: tokens.typographyHeadlineBlack40,
  HeadlineBlack48: tokens.typographyHeadlineBlack48,
  HeadlineBlack64: tokens.typographyHeadlineBlack64,
  HeadlineBold20: tokens.typographyHeadlineBold20,
  HeadlineBold24: tokens.typographyHeadlineBold24,
  HeadlineBold28: tokens.typographyHeadlineBold28,
  HeadlineBold32: tokens.typographyHeadlineBold32,
  BodyBold12: tokens.typographyBodyBold12,
  BodyBold14: tokens.typographyBodyBold14,
  BodyBold16: tokens.typographyBodyBold16,
  BodyLight12: tokens.typographyBodyLight12,
  BodyLight14: tokens.typographyBodyLight14,
  BodyLight16: tokens.typographyBodyLight16,
  LabelBlack14: tokens.typographyLabelBlack14,
  LabelBold12: tokens.typographyLabelBold12,
  LabelBold14: tokens.typographyLabelBold14,
  LabelBold16: tokens.typographyLabelBold16,
  LabelBold20: tokens.typographyLabelBold20,

  CongstarAppTagBlackSmall:
    "900 4rem/4rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackMedium:
    "900 5.6rem/5.6rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackLarge:
    "900 7.2rem/7.2rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackDecimalSmall:
    "900 1.4rem/1.4rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackDecimalMedium:
    "900 1.8rem/1.8rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackDecimalLarge:
    "900 2.2rem/2.2rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackUnitSmall:
    "900 2rem/2rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackUnitMedium:
    "900 2.8rem/2.8rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBlackUnitLarge:
    "900 3.6rem/3.6rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppTagBoldMedium:
    "700 1.6rem/1.6rem 'Interstate Condensed', Arial, sans-serif",
  CongstarAppTagBoldSmall:
    "700 1.6rem/1.6rem 'Interstate Condensed', Arial, sans-serif",
  CongstarAppDisplaySmall:
    "900 1.6rem/1.6rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppDisplayMedium:
    "900 2.0rem/2.0rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppDisplayLarge:
    "900 2.4rem/2.4rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppDisplayExtraLarge:
    "900 3.2rem/3.2rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppHeadlineBlackSmall:
    "400 1.4rem/2.0rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppHeadlineBlackMedium:
    "400 1.8rem/2.4rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppHeadlineBlackLarge:
    "400 2.2rem/2.8rem 'Interstate Congstar Cond', Arial, sans-serif",
  CongstarAppHeadlineBoldSmall:
    "700 1.4rem/2.0rem 'Interstate', Arial, sans-serif",
  CongstarAppHeadlineBoldMedium:
    "700 1.8rem/2.4rem 'Interstate', Arial, sans-serif",
  CongstarAppHeadlineBoldLarge:
    "700 2.2rem/2.8rem 'Interstate', Arial, sans-serif",
  CongstarAppBodyLightSmall:
    "400 1.2rem/1.8rem 'Interstate', Arial, sans-serif",
  CongstarAppBodyLightMedium:
    "400 1.4rem/2.0rem 'Interstate', Arial, sans-serif",
  CongstarAppBodyLightLarge:
    "400 1.6rem/2.2rem 'Interstate', Arial, sans-serif",
  CongstarAppBodyBoldSmall: "700 1.2rem/1.8rem 'Interstate', Arial, sans-serif",
  CongstarAppBodyBoldMedium:
    "700 1.4rem/2.0rem 'Interstate', Arial, sans-serif",
  CongstarAppBodyBoldLarge: "700 1.6rem/2.2rem 'Interstate', Arial, sans-serif",
  CongstarAppLabelSmall: "700 1.2rem/1.2rem 'Interstate', Arial, sans-serif",
  CongstarAppLabelMedium: "700 1.4rem/1.4rem 'Interstate', Arial, sans-serif",
  CongstarAppLabelLarge: "700 1.6rem/1.6rem 'Interstate', Arial, sans-serif",
  CongstarAppLabelPromotion:
    "900 1.2rem/1.2rem 'Interstate Congstar Cond', Arial, sans-serif",

  PennyTagBlackSmall: "900 4rem/4rem 'Akko', Arial, sans-serif",
  PennyTagBlackMedium: "900 5.6rem/5.6rem 'Akko', Arial, sans-serif",
  PennyTagBlackLarge: "900 7.2rem/7.2rem 'Akko', Arial, sans-serif",
  PennyTagBlackDecimalSmall: "900 1.4rem/1.4rem 'Akko', Arial, sans-serif",
  PennyTagBlackDecimalMedium: "900 1.8rem/1.8rem 'Akko', Arial, sans-serif",
  PennyTagBlackDecimalLarge: "900 2.2rem/2.2rem 'Akko', Arial, sans-serif",
  PennyTagBlackUnitSmall: "900 2rem/2rem 'Akko', Arial, sans-serif",
  PennyTagBlackUnitMedium: "900 2.8rem/2.8rem 'Akko', Arial, sans-serif",
  PennyTagBlackUnitLarge: "900 3.6rem/3.6rem 'Akko', Arial, sans-serif",
  PennyTagBoldMedium: "700 1.6rem/1.6rem 'Akko', Arial, sans-serif",
  PennyTagBoldSmall: "700 1.6rem/1.6rem 'Akko', Arial, sans-serif",
  PennyDisplaySmall: "700 1.6rem/1.6rem 'Akko', Arial, sans-serif",
  PennyDisplayMedium: "700 2.0rem/2.0rem 'Akko', Arial, sans-serif",
  PennyDisplayLarge: "700 2.4rem/2.4rem 'Akko', Arial, sans-serif",
  PennyDisplayExtraLarge: "700 3.2rem/3.2rem 'Akko', Arial, sans-serif",
  PennyHeadlineSmall: "700 1.4rem/2.0rem 'Akko', Arial, sans-serif",
  PennyHeadlineMedium: "700 1.8rem/2.4rem 'Akko', Arial, sans-serif",
  PennyHeadlineLarge: "700 2.2rem/2.8rem 'Akko', Arial, sans-serif",
  PennyBodyLightSmall: "300 1.2rem/1.8rem 'Akko', Arial, sans-serif",
  PennyBodyLightMedium: "300 1.4rem/2.0rem 'Akko', Arial, sans-serif",
  PennyBodyLightLarge: "300 1.6rem/2.2rem 'Akko', Arial, sans-serif",
  PennyBodyBoldSmall: "700 1.2rem/1.8rem 'Akko', Arial, sans-serif",
  PennyBodyBoldMedium: "700 1.4rem/2.0rem 'Akko', Arial, sans-serif",
  PennyBodyBoldLarge: "700 1.6rem/2.2rem 'Akko', Arial, sans-serif",
  PennyLabelSmall: "700 1.2rem/1.2rem 'Akko', Arial, sans-serif",
  PennyLabelMedium: "700 1.4rem/1.4rem 'Akko', Arial, sans-serif",
  PennyLabelLarge: "700 1.6rem/1.6rem 'Akko', Arial, sans-serif",
  PennyLabelPromotion: "900 1.2rem/1.2rem 'Akko', Arial, sans-serif",

  JaTagBlackSmall: "900 4rem/4rem 'Praktika', Arial, sans-serif",
  JaTagBlackMedium: "900 5.6rem/5.6rem 'Praktika', Arial, sans-serif",
  JaTagBlackLarge: "900 7.2rem/7.2rem 'Praktika', Arial, sans-serif",
  JaTagBlackDecimalSmall: "900 1.4rem/1.4rem 'Praktika', Arial, sans-serif",
  JaTagBlackDecimalMedium: "900 1.8rem/1.8rem 'Praktika', Arial, sans-serif",
  JaTagBlackDecimalLarge: "900 2.2rem/2.2rem 'Praktika', Arial, sans-serif",
  JaTagBlackUnitSmall: "900 2rem/2rem 'Praktika', Arial, sans-serif",
  JaTagBlackUnitMedium: "900 2.8rem/2.8rem 'Praktika', Arial, sans-serif",
  JaTagBlackUnitLarge: "900 3.6rem/3.6rem 'Praktika', Arial, sans-serif",
  JaTagBoldMedium: "700 1.6rem/1.6rem 'PraktikaCondensed', Arial, sans-serif",
  JaDisplaySmall: "900 1.6rem/1.6rem 'Praktika', Arial, sans-serif",
  JaDisplayMedium: "900 2.0rem/2.0rem 'Praktika', Arial, sans-serif",
  JaDisplayLarge: "900 2.4rem/2.4rem 'Praktika', Arial, sans-serif",
  JaDisplayExtraLarge: "900 3.2rem/3.2rem 'Praktika', Arial, sans-serif",
  JaTagBoldSmall: "700 1.6rem/1.6rem 'PraktikaCondensed', Arial, sans-serif",
  JaHeadlineSmall: "900 1.4rem/2.0rem 'Praktika', Arial, sans-serif",
  JaHeadlineMedium: "900 1.8rem/2.4rem 'Praktika', Arial, sans-serif",
  JaHeadlineLarge: "900 2.2rem/2.8rem 'Praktika', Arial, sans-serif",
  JaBodyLightSmall: "400 1.2rem/1.8rem 'Poppins', Arial, sans-serif",
  JaBodyLightMedium: "400 1.4rem/2.0rem 'Poppins', Arial, sans-serif",
  JaBodyLightLarge: "400 1.6rem/2.2rem 'Poppins', Arial, sans-serif",
  JaBodyBoldSmall: "700 1.2rem/1.8rem 'Poppins', Arial, sans-serif",
  JaBodyBoldMedium: "700 1.4rem/2.0rem 'Poppins', Arial, sans-serif",
  JaBodyBoldLarge: "700 1.6rem/2.2rem 'Poppins', Arial, sans-serif",
  JaLabelSmall: "700 1.2rem/1.2rem 'Poppins', Arial, sans-serif",
  JaLabelMedium: "700 1.4rem/1.4rem 'Poppins', Arial, sans-serif",
  JaLabelLarge: "700 1.6rem/1.6rem 'Poppins', Arial, sans-serif",
  JaLabelPromotion: "900 1.2rem/1.2rem 'Praktika', Arial, sans-serif",
} satisfies Record<string, string>;

interface TrimFontValues {
  topHeightTrim: number;
  bottomHeightTrim: number;
}
export const trimFont = (variant: TypographyVariant) => {
  const { topHeightTrim, bottomHeightTrim } = trimVariantMapping[variant];

  return css`
    @supports (text-box-trim: trim-both) {
      text-box-trim: trim-both;
      text-box-edge: cap alphabetic;
    }

    @supports not (text-box-trim: trim-both) {
      &:before {
        content: "";
        margin-bottom: calc(-1em * ${topHeightTrim});
        display: table;
      }

      &:after {
        content: "";
        margin-top: calc(-1em * ${bottomHeightTrim});
        display: table;
      }
    }
  `;
};

const trimFontMappingCongstarWeb = {
  TagBlack: { topHeightTrim: 0.16, bottomHeightTrim: 0.14 },
  TagBold: {
    topHeightTrim: 0.16,
    bottomHeightTrim: 0.08,
  },

  Display: {
    topHeightTrim: 0.15,
    bottomHeightTrim: 0.11,
  },

  // TODO: Specify correct values, these are defaultValues
  HeadlineBlack: {
    topHeightTrim: 0.15,
    bottomHeightTrim: 0.11,
  },
  HeadlineBold: {
    topHeightTrim: 0.3,
    bottomHeightTrim: 0.2,
  },

  BodyBold: {
    topHeightTrim: 0.4,
    bottomHeightTrim: 0.3,
  },
  BodyLight: {
    topHeightTrim: 0.48,
    bottomHeightTrim: 0.38,
  },

  // TODO: Specify correct values, these are defaultValues
  LabelBlack: {
    topHeightTrim: 0.06,
    bottomHeightTrim: 0.08,
  },

  LabelBold: {
    topHeightTrim: 0.2,
    bottomHeightTrim: 0.08,
  },
} satisfies Record<string, TrimFontValues>;

const trimFontMappingCongstarApp = {
  TagBlack: { topHeightTrim: 0.16, bottomHeightTrim: 0.14 },
  BodyBold: {
    topHeightTrim: 0.4,
    bottomHeightTrim: 0.25,
  },
} satisfies Record<string, TrimFontValues>;

const trimFontMappingJa = {
  TagBlack: { topHeightTrim: 0.16, bottomHeightTrim: 0.16 },
  TagBlackDecimal: { topHeightTrim: 0.16, bottomHeightTrim: 0.14 },
  TagBlackUnit: { topHeightTrim: 0.16, bottomHeightTrim: 0.14 },
  BodyBold: {
    topHeightTrim: 0.2,
    bottomHeightTrim: 0.3,
  },
} satisfies Record<string, TrimFontValues>;

const trimFontMappingPenny = {
  TagBlack: { topHeightTrim: 0.17, bottomHeightTrim: 0.15 },
  TagBlackDecimal: { topHeightTrim: 0.16, bottomHeightTrim: 0.14 },
  TagBlackUnit: { topHeightTrim: 0.16, bottomHeightTrim: 0.14 },
  BodyBold: {
    topHeightTrim: 0.2,
    bottomHeightTrim: 0.3,
  },
} satisfies Record<string, TrimFontValues>;

const trimVariantMapping: Record<TypographyVariant, TrimFontValues> = {
  TagBlack16: trimFontMappingCongstarWeb.TagBlack,
  TagBlack24: trimFontMappingCongstarWeb.TagBlack,
  TagBlack32: trimFontMappingCongstarWeb.TagBlack,
  TagBlack40: trimFontMappingCongstarWeb.TagBlack,
  TagBlack48: trimFontMappingCongstarWeb.TagBlack,
  TagBlack56: trimFontMappingCongstarWeb.TagBlack,
  TagBlack64: trimFontMappingCongstarWeb.TagBlack,
  TagBlack96: trimFontMappingCongstarWeb.TagBlack,
  TagBlack128: trimFontMappingCongstarWeb.TagBlack,

  TagBold16: trimFontMappingCongstarWeb.TagBold,
  TagBold20: trimFontMappingCongstarWeb.TagBold,
  TagBold24: trimFontMappingCongstarWeb.TagBold,

  HeadlineBlack24: trimFontMappingCongstarWeb.HeadlineBlack,
  HeadlineBlack32: trimFontMappingCongstarWeb.HeadlineBlack,
  HeadlineBlack40: trimFontMappingCongstarWeb.HeadlineBlack,
  HeadlineBlack48: trimFontMappingCongstarWeb.HeadlineBlack,
  HeadlineBlack64: trimFontMappingCongstarWeb.HeadlineBlack,

  HeadlineBold20: trimFontMappingCongstarWeb.HeadlineBold,
  HeadlineBold24: trimFontMappingCongstarWeb.HeadlineBold,
  HeadlineBold28: trimFontMappingCongstarWeb.HeadlineBold,
  HeadlineBold32: trimFontMappingCongstarWeb.HeadlineBold,

  BodyBold12: trimFontMappingCongstarWeb.BodyBold,
  BodyBold14: trimFontMappingCongstarWeb.BodyBold,
  BodyBold16: trimFontMappingCongstarWeb.BodyBold,

  BodyLight12: trimFontMappingCongstarWeb.BodyLight,
  BodyLight14: trimFontMappingCongstarWeb.BodyLight,
  BodyLight16: trimFontMappingCongstarWeb.BodyLight,

  LabelBlack14: trimFontMappingCongstarWeb.LabelBlack,

  LabelBold12: trimFontMappingCongstarWeb.LabelBold,
  LabelBold14: trimFontMappingCongstarWeb.LabelBold,
  LabelBold16: trimFontMappingCongstarWeb.LabelBold,
  LabelBold20: trimFontMappingCongstarWeb.LabelBold,

  CongstarAppTagBlackSmall: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackMedium: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackLarge: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackDecimalSmall: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackDecimalMedium: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackDecimalLarge: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackUnitSmall: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackUnitMedium: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBlackUnitLarge: trimFontMappingCongstarApp.TagBlack,
  CongstarAppTagBoldMedium: trimFontMappingCongstarWeb.TagBold,
  CongstarAppTagBoldSmall: trimFontMappingCongstarWeb.TagBold,
  CongstarAppDisplaySmall: trimFontMappingCongstarWeb.Display,
  CongstarAppDisplayMedium: trimFontMappingCongstarWeb.Display,
  CongstarAppDisplayLarge: trimFontMappingCongstarWeb.Display,
  CongstarAppDisplayExtraLarge: trimFontMappingCongstarWeb.Display,
  CongstarAppHeadlineBlackSmall: trimFontMappingCongstarWeb.HeadlineBlack,
  CongstarAppHeadlineBlackMedium: trimFontMappingCongstarWeb.HeadlineBlack,
  CongstarAppHeadlineBlackLarge: trimFontMappingCongstarWeb.HeadlineBlack,
  CongstarAppHeadlineBoldSmall: trimFontMappingCongstarWeb.HeadlineBlack,
  CongstarAppHeadlineBoldMedium: trimFontMappingCongstarWeb.HeadlineBlack,
  CongstarAppHeadlineBoldLarge: trimFontMappingCongstarWeb.HeadlineBlack,
  CongstarAppBodyBoldSmall: trimFontMappingCongstarApp.BodyBold,
  CongstarAppBodyBoldMedium: trimFontMappingCongstarApp.BodyBold,
  CongstarAppBodyBoldLarge: trimFontMappingCongstarApp.BodyBold,
  CongstarAppBodyLightSmall: trimFontMappingCongstarWeb.BodyLight,
  CongstarAppBodyLightMedium: trimFontMappingCongstarWeb.BodyLight,
  CongstarAppBodyLightLarge: trimFontMappingCongstarWeb.BodyLight,
  CongstarAppLabelSmall: trimFontMappingCongstarWeb.LabelBold,
  CongstarAppLabelMedium: trimFontMappingCongstarWeb.LabelBold,
  CongstarAppLabelLarge: trimFontMappingCongstarWeb.LabelBold,
  CongstarAppLabelPromotion: trimFontMappingCongstarWeb.LabelBold,

  PennyTagBlackSmall: trimFontMappingPenny.TagBlack,
  PennyTagBlackMedium: trimFontMappingPenny.TagBlack,
  PennyTagBlackLarge: trimFontMappingPenny.TagBlack,
  PennyTagBlackDecimalSmall: trimFontMappingPenny.TagBlackDecimal,
  PennyTagBlackDecimalMedium: trimFontMappingPenny.TagBlackDecimal,
  PennyTagBlackDecimalLarge: trimFontMappingPenny.TagBlackDecimal,
  PennyTagBlackUnitSmall: trimFontMappingPenny.TagBlackUnit,
  PennyTagBlackUnitMedium: trimFontMappingPenny.TagBlackUnit,
  PennyTagBlackUnitLarge: trimFontMappingPenny.TagBlackUnit,
  PennyTagBoldSmall: trimFontMappingCongstarWeb.TagBold,
  PennyTagBoldMedium: trimFontMappingCongstarWeb.TagBold,
  PennyDisplaySmall: trimFontMappingCongstarWeb.Display,
  PennyDisplayMedium: trimFontMappingCongstarWeb.Display,
  PennyDisplayLarge: trimFontMappingCongstarWeb.Display,
  PennyDisplayExtraLarge: trimFontMappingCongstarWeb.Display,
  PennyHeadlineSmall: trimFontMappingCongstarWeb.HeadlineBlack,
  PennyHeadlineMedium: trimFontMappingCongstarWeb.HeadlineBlack,
  PennyHeadlineLarge: trimFontMappingCongstarWeb.HeadlineBlack,
  PennyBodyBoldSmall: trimFontMappingPenny.BodyBold,
  PennyBodyBoldMedium: trimFontMappingPenny.BodyBold,
  PennyBodyBoldLarge: trimFontMappingPenny.BodyBold,
  PennyBodyLightSmall: trimFontMappingCongstarWeb.BodyLight,
  PennyBodyLightMedium: trimFontMappingCongstarWeb.BodyLight,
  PennyBodyLightLarge: trimFontMappingCongstarWeb.BodyLight,
  PennyLabelSmall: trimFontMappingCongstarWeb.LabelBlack,
  PennyLabelMedium: trimFontMappingCongstarWeb.LabelBlack,
  PennyLabelLarge: trimFontMappingCongstarWeb.LabelBlack,
  PennyLabelPromotion: trimFontMappingCongstarWeb.LabelBold,

  JaTagBlackSmall: trimFontMappingJa.TagBlack,
  JaTagBlackMedium: trimFontMappingJa.TagBlack,
  JaTagBlackLarge: trimFontMappingJa.TagBlack,
  JaTagBlackDecimalSmall: trimFontMappingJa.TagBlackDecimal,
  JaTagBlackDecimalMedium: trimFontMappingJa.TagBlackDecimal,
  JaTagBlackDecimalLarge: trimFontMappingJa.TagBlackDecimal,
  JaTagBlackUnitSmall: trimFontMappingJa.TagBlackUnit,
  JaTagBlackUnitMedium: trimFontMappingJa.TagBlackUnit,
  JaTagBlackUnitLarge: trimFontMappingJa.TagBlackUnit,
  JaTagBoldSmall: trimFontMappingCongstarWeb.TagBold,
  JaTagBoldMedium: trimFontMappingCongstarWeb.TagBold,
  JaDisplaySmall: trimFontMappingCongstarWeb.Display,
  JaDisplayMedium: trimFontMappingCongstarWeb.Display,
  JaDisplayLarge: trimFontMappingCongstarWeb.Display,
  JaDisplayExtraLarge: trimFontMappingCongstarWeb.Display,
  JaHeadlineSmall: trimFontMappingCongstarWeb.HeadlineBlack,
  JaHeadlineMedium: trimFontMappingCongstarWeb.HeadlineBlack,
  JaHeadlineLarge: trimFontMappingCongstarWeb.HeadlineBlack,
  JaBodyBoldSmall: trimFontMappingJa.BodyBold,
  JaBodyBoldMedium: trimFontMappingJa.BodyBold,
  JaBodyBoldLarge: trimFontMappingJa.BodyBold,
  JaBodyLightSmall: trimFontMappingCongstarWeb.BodyLight,
  JaBodyLightMedium: trimFontMappingCongstarWeb.BodyLight,
  JaBodyLightLarge: trimFontMappingCongstarWeb.BodyLight,
  JaLabelSmall: trimFontMappingCongstarWeb.LabelBlack,
  JaLabelMedium: trimFontMappingCongstarWeb.LabelBlack,
  JaLabelLarge: trimFontMappingCongstarWeb.LabelBlack,
  JaLabelPromotion: trimFontMappingCongstarWeb.LabelBold,
};

export const truncateText = () => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
};
