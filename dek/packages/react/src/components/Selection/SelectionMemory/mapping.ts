import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor } from "../../../theme/theme";

export const backgroundColorMap: Record<
  BackgroundColor,
  {
    backgroundColorHover: ColorVariant;
    color: ColorVariant;
    disabled: ColorVariant;
  }
> = {
  black: {
    backgroundColorHover: "NeutralShape20",
    color: "InteractiveBlue",
    disabled: "NeutralSecondary40",
  },
  white: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary40",
  },
  darkGrey: {
    backgroundColorHover: "NeutralShape20",
    color: "InteractiveBlue",
    disabled: "NeutralSecondary40",
  },
  blue: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  lightGrey: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  jaAgave20: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  jaAgave80: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  jaAgaveOutlinesSecondary: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  jaGeneralWhite: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  pennyNeutralLightGrey: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  pennyNeutralWhite: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  pennyRed: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
  pennyRedDark: {
    backgroundColorHover: "NeutralShape80",
    color: "InteractiveBlack",
    disabled: "NeutralSecondary60",
  },
};
