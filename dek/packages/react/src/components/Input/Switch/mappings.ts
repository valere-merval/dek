import { BackgroundColor } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";

export const backgroundColorMap: Record<
  BackgroundColor,
  {
    color: ColorVariant;
    backgroundColor: ColorVariant;
    disabled: ColorVariant;
    error: ColorVariant;
  }
> = {
  black: {
    color: "InteractiveBlue",
    backgroundColor: "InteractiveBlack",
    disabled: "NeutralSecondary40",
    error: "StatusOnDarkError",
  },
  white: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  darkGrey: {
    color: "InteractiveBlue",
    backgroundColor: "NeutralShape20",
    disabled: "NeutralSecondary40",
    error: "StatusOnDarkError",
  },
  blue: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralShape20",
    error: "StatusOnLightError",
  },
  lightGrey: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  jaAgave20: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  jaAgave80: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  jaAgaveOutlinesSecondary: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  jaGeneralWhite: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  pennyNeutralLightGrey: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  pennyNeutralWhite: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  pennyRed: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
  pennyRedDark: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
  },
};
