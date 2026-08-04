import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor } from "../../../theme/theme";

export const skeletonColorMapping: Record<
  BackgroundColor,
  {
    borderColor: ColorVariant;
    backgroundColor: ColorVariant;
    colorStop1: ColorVariant;
    colorStop2: ColorVariant;
  }
> = {
  black: {
    borderColor: "NeutralShape20",
    backgroundColor: "NeutralShape20",
    colorStop1: "NeutralShape20",
    colorStop2: "InteractiveBlack",
  },
  lightGrey: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  darkGrey: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  blue: {
    borderColor: "NeutralShape20",
    backgroundColor: "NeutralShape20",
    colorStop1: "NeutralShape20",
    colorStop2: "NeutralSecondary40",
  },
  white: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  jaAgave20: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  jaAgave80: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  jaAgaveOutlinesSecondary: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  jaGeneralWhite: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  pennyNeutralLightGrey: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  pennyNeutralWhite: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  pennyRed: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
  pennyRedDark: {
    borderColor: "NeutralSecondary60",
    backgroundColor: "NeutralSecondary60",
    colorStop1: "NeutralSecondary60",
    colorStop2: "NeutralShape80",
  },
};

export const skeletonBackgroundMapping: Record<BackgroundColor, ColorVariant> =
  {
    black: "InteractiveBlack",
    white: "InteractiveWhite",
    lightGrey: "NeutralSecondary60",
    darkGrey: "NeutralSecondary60",
    blue: "NeutralShape20",
    jaAgave20: "NeutralSecondary60",
    jaAgave80: "NeutralSecondary60",
    jaAgaveOutlinesSecondary: "NeutralSecondary60",
    jaGeneralWhite: "NeutralSecondary60",
    pennyNeutralLightGrey: "NeutralSecondary60",
    pennyNeutralWhite: "NeutralSecondary60",
    pennyRed: "NeutralSecondary60",
    pennyRedDark: "NeutralSecondary60",
  };
