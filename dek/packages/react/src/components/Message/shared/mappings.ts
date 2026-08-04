import { BackgroundColor, Brand } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { BorderRadiusVariant } from "../../../theme/mappings/borderRadius";
import { SizeVariant } from "../../../theme/mappings/size";
import { SpaceVariant } from "../../../theme/mappings/space";

export const borderRadii: Record<
  Brand,
  {
    mobile: BorderRadiusVariant;
    desktop: BorderRadiusVariant;
  }
> = {
  congstarWeb: {
    mobile: "12",
    desktop: "16",
  },
  congstarApp: {
    mobile: "08",
    desktop: "08",
  },
  ja: {
    mobile: "Ja10",
    desktop: "Ja10",
  },
  penny: {
    mobile: "Penny10",
    desktop: "Penny10",
  },
};

export const borderWidths: Record<Brand, SizeVariant> = {
  congstarWeb: "02",
  congstarApp: "01",
  ja: "01",
  penny: "01",
};

export const paddings: Record<
  Brand,
  {
    x: { mobile: SpaceVariant; desktop: SpaceVariant };
    y: { mobile: SpaceVariant; desktop: SpaceVariant };
  }
> = {
  congstarWeb: {
    x: { mobile: "16", desktop: "24" },
    y: { mobile: "16", desktop: "24" },
  },
  congstarApp: {
    x: { mobile: "16", desktop: "16" },
    y: { mobile: "12", desktop: "12" },
  },
  ja: {
    x: { mobile: "16", desktop: "16" },
    y: { mobile: "12", desktop: "12" },
  },
  penny: {
    x: { mobile: "16", desktop: "16" },
    y: { mobile: "12", desktop: "12" },
  },
};

export const contentGap: Record<
  Brand,
  {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  }
> = {
  congstarWeb: {
    mobile: "04",
    desktop: "06",
  },
  congstarApp: {
    mobile: "08",
    desktop: "08",
  },
  ja: {
    mobile: "08",
    desktop: "08",
  },
  penny: {
    mobile: "08",
    desktop: "08",
  },
};

export const colors: Record<
  BackgroundColor,
  {
    border: ColorVariant;
    text: ColorVariant;
  }
> = {
  black: {
    border: "NeutralSecondary40",
    text: "NeutralPrimaryWhite",
  },
  darkGrey: {
    border: "NeutralSecondary40",
    text: "NeutralPrimaryWhite",
  },
  blue: {
    border: "NeutralPrimaryBlack",
    text: "NeutralPrimaryBlack",
  },
  white: {
    border: "NeutralSecondary60",
    text: "NeutralPrimaryBlack",
  },
  lightGrey: {
    border: "NeutralSecondary60",
    text: "NeutralPrimaryBlack",
  },
  jaAgave20: {
    border: "JaGeneralBlack",
    text: "JaGeneralBlack",
  },
  jaAgave80: {
    border: "JaGeneralWhite",
    text: "JaGeneralWhite",
  },
  jaAgaveOutlinesSecondary: {
    border: "JaGeneralWhite",
    text: "JaGeneralWhite",
  },
  jaGeneralWhite: {
    border: "JaGeneralBlack",
    text: "JaGeneralBlack",
  },
  pennyNeutralLightGrey: {
    border: "PennyMidnightBlue",
    text: "PennyMidnightBlue",
  },
  pennyNeutralWhite: {
    border: "PennyMidnightBlue",
    text: "PennyMidnightBlue",
  },
  pennyRed: {
    border: "PennyNeutralWhite",
    text: "PennyNeutralWhite",
  },
  pennyRedDark: {
    border: "PennyNeutralWhite",
    text: "PennyNeutralWhite",
  },
};
