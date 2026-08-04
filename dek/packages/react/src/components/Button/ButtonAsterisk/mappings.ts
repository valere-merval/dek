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
    color: "InteractiveBlue",
  },
  darkGrey: {
    color: "InteractiveBlue",
  },
  blue: {
    color: "InteractiveBlack",
  },
  white: {
    color: "InteractiveBlue",
  },
  jaAgave20: { color: "JaAgave80" },
  jaAgave80: { color: "JaGeneralWhite" },
  jaAgaveOutlinesSecondary: { color: "JaGeneralWhite" },
  jaGeneralWhite: { color: "JaAgave80" },
  pennyNeutralLightGrey: { color: "PennyRed" },
  pennyNeutralWhite: { color: "PennyRed" },
  pennyRed: { color: "PennyNeutralWhite" },
  pennyRedDark: { color: "PennyNeutralWhite" },
};
