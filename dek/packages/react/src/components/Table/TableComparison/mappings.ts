import { ColorVariant } from "../../../theme/mappings/color";
import { ShadowVariant } from "../../../theme/mappings/shadow";
import { BackgroundColor } from "../../../theme/theme";

export const colorMap: Record<
  BackgroundColor,
  {
    color: ColorVariant;
    backgroundColor: ColorVariant;
    shadow: ShadowVariant;
  }
> = {
  black: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralPrimaryBlack",
    shadow: "Opacity50Elevation2",
  },
  darkGrey: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralPrimaryBlack",
    shadow: "Opacity50Elevation2",
  },
  blue: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "NeutralPrimaryWhite",
    shadow: "Opacity50Elevation2",
  },
  white: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "NeutralPrimaryWhite",
    shadow: "Opacity15Elevation2",
  },
  lightGrey: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "NeutralPrimaryWhite",
    shadow: "Opacity15Elevation2",
  },
  jaAgave20: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
  jaAgave80: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
  jaAgaveOutlinesSecondary: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
  jaGeneralWhite: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
  pennyNeutralLightGrey: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
  pennyNeutralWhite: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
  pennyRed: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
  pennyRedDark: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    shadow: "Opacity50Elevation2",
  },
};
