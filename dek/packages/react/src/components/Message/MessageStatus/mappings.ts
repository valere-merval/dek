import { BackgroundColor, Brand } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { MessageStatusType } from "./MessageStatus.types";
import { BorderRadiusVariant } from "../../../theme/mappings/borderRadius";
import { SizeVariant } from "../../../theme/mappings/size";
import { SpaceVariant } from "../../../theme/mappings/space";
import { TypographyVariant } from "../../../theme/mappings/typography";

export const borderRadii: Record<Brand, BorderRadiusVariant> = {
  congstarWeb: "12",
  congstarApp: "08",
  ja: "Ja10",
  penny: "Penny10",
};

export const borderWidths: Record<Brand, SizeVariant> = {
  congstarWeb: "02",
  congstarApp: "01",
  ja: "01",
  penny: "01",
};

export const paddings: Record<Brand, { x: SpaceVariant; y: SpaceVariant }> = {
  congstarWeb: {
    x: "16",
    y: "12",
  },
  congstarApp: {
    x: "16",
    y: "08",
  },
  ja: {
    x: "16",
    y: "08",
  },
  penny: {
    x: "16",
    y: "08",
  },
};

export const fonts: Record<Brand, TypographyVariant> = {
  congstarWeb: "BodyLight14",
  congstarApp: "CongstarAppBodyLightSmall",
  ja: "JaBodyLightSmall",
  penny: "PennyBodyLightSmall",
};

// note: success and warnings colors from ja/penny are too low contrast,
// so we use the congstar colors on purpose.
export const textColors: Record<
  MessageStatusType,
  Record<BackgroundColor, ColorVariant>
> = {
  error: {
    black: "StatusOnDarkError",
    darkGrey: "StatusOnDarkError",
    white: "StatusOnLightError",
    lightGrey: "StatusOnLightError",
    blue: "StatusOnLightError",
    jaAgave20: "JaStatusError",
    jaAgave80: "JaGeneralWhite",
    jaAgaveOutlinesSecondary: "JaGeneralWhite",
    jaGeneralWhite: "JaStatusError",
    pennyNeutralLightGrey: "PennyStatusError",
    pennyNeutralWhite: "PennyStatusError",
    pennyRed: "PennyNeutralWhite",
    pennyRedDark: "PennyNeutralWhite",
  },
  success: {
    black: "StatusOnDarkSuccess",
    darkGrey: "StatusOnDarkSuccess",
    white: "StatusOnLightSuccess",
    lightGrey: "StatusOnLightSuccess",
    blue: "StatusOnLightSuccess",
    jaAgave20: "StatusOnLightSuccess", // congstar color on purpose
    jaAgave80: "JaGeneralWhite",
    jaAgaveOutlinesSecondary: "JaGeneralWhite",
    jaGeneralWhite: "StatusOnLightSuccess", // congstar color on purpose
    pennyNeutralLightGrey: "StatusOnLightSuccess", // congstar color on purpose
    pennyNeutralWhite: "StatusOnLightSuccess", // congstar color on purpose
    pennyRed: "PennyNeutralWhite",
    pennyRedDark: "PennyNeutralWhite",
  },
  warning: {
    black: "StatusOnDarkWarning",
    darkGrey: "StatusOnDarkWarning",
    white: "StatusOnLightWarning",
    lightGrey: "StatusOnLightWarning",
    blue: "StatusOnLightWarning",
    jaAgave20: "StatusOnLightWarning", // congstar color on purpose
    jaAgave80: "JaGeneralWhite",
    jaAgaveOutlinesSecondary: "JaGeneralWhite",
    jaGeneralWhite: "StatusOnLightWarning", // congstar color on purpose
    pennyNeutralLightGrey: "StatusOnLightWarning", // congstar color on purpose
    pennyNeutralWhite: "StatusOnLightWarning", // congstar color on purpose
    pennyRed: "PennyNeutralWhite",
    pennyRedDark: "PennyNeutralWhite",
  },
  pending: {
    black: "StatusOnDarkWarning",
    darkGrey: "StatusOnDarkWarning",
    white: "StatusOnLightWarning",
    lightGrey: "StatusOnLightWarning",
    blue: "StatusOnLightWarning",
    jaAgave20: "StatusOnLightWarning", // congstar color on purpose
    jaAgave80: "JaGeneralWhite",
    jaAgaveOutlinesSecondary: "JaGeneralWhite",
    jaGeneralWhite: "StatusOnLightWarning", // congstar color on purpose
    pennyNeutralLightGrey: "StatusOnLightWarning", // congstar color on purpose
    pennyNeutralWhite: "StatusOnLightWarning", // congstar color on purpose
    pennyRed: "PennyNeutralWhite",
    pennyRedDark: "PennyNeutralWhite",
  },
};
