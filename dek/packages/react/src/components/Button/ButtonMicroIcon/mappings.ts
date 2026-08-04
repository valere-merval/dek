import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor } from "../../../theme/theme";

export const svgColorMap: Record<
  BackgroundColor,
  {
    color: ColorVariant;
  }
> = {
  black: {
    color: "InteractiveBlue",
  },
  lightGrey: {
    color: "InteractiveBlack",
  },
  darkGrey: {
    color: "InteractiveBlue",
  },
  blue: {
    color: "InteractiveBlack",
  },
  white: {
    color: "InteractiveBlack",
  },
  jaAgave20: { color: "JaAgaveSecondary" },
  jaAgave80: { color: "JaGeneralWhite" },
  jaAgaveOutlinesSecondary: { color: "JaGeneralWhite" },
  jaGeneralWhite: { color: "JaAgaveSecondary" },
  pennyNeutralLightGrey: { color: "PennyRed" },
  pennyNeutralWhite: { color: "PennyRed" },
  pennyRed: { color: "PennyNeutralWhite" },
  pennyRedDark: { color: "PennyNeutralWhite" },
};
