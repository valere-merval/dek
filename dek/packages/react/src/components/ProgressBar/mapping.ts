import { ColorVariant } from "../../theme/mappings/color";
import { BackgroundColor } from "../../theme/theme";
import { ProgressBarColor } from "./ProgressBar.types";

export const progressBarColorMap: Record<ProgressBarColor, ColorVariant> = {
  green: "DecorativePrimaryGreen",
  orange: "DecorativePrimaryOrange",
  yellow: "DecorativePrimaryYellow",
  red: "DecorativeSecondaryRed",
  lime: "DecorativeSecondaryLime",
  purple: "DecorativeSecondaryPurple",
};

export const progressBarBackgroundColorMap: Record<
  BackgroundColor,
  {
    backgroundColor: ColorVariant;
  }
> = {
  black: {
    backgroundColor: "NeutralSecondary40",
  },
  lightGrey: {
    backgroundColor: "NeutralSecondary60",
  },
  darkGrey: {
    backgroundColor: "NeutralSecondary40",
  },
  blue: {
    backgroundColor: "NeutralSecondary40",
  },
  white: {
    backgroundColor: "NeutralSecondary60",
  },
  jaAgave20: {
    backgroundColor: "NeutralSecondary60",
  },
  jaAgave80: {
    backgroundColor: "NeutralSecondary60",
  },
  jaAgaveOutlinesSecondary: {
    backgroundColor: "NeutralSecondary60",
  },
  jaGeneralWhite: {
    backgroundColor: "NeutralSecondary60",
  },
  pennyNeutralLightGrey: {
    backgroundColor: "NeutralSecondary60",
  },
  pennyNeutralWhite: {
    backgroundColor: "NeutralSecondary60",
  },
  pennyRed: {
    backgroundColor: "NeutralSecondary60",
  },
  pennyRedDark: {
    backgroundColor: "NeutralSecondary60",
  },
};
