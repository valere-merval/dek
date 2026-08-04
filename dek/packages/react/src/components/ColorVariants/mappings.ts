import { BackgroundColor } from "../../theme/theme";
import { ColorVariant } from "../../theme/mappings/color";

export const outlinedColorMapping: Record<
  BackgroundColor,
  {
    borderColor: ColorVariant;
  }
> = {
  black: {
    borderColor: "NeutralSecondary60",
  },
  darkGrey: {
    borderColor: "NeutralSecondary60",
  },
  blue: {
    borderColor: "NeutralSecondary60",
  },
  white: {
    borderColor: "NeutralSecondary40",
  },
  lightGrey: {
    borderColor: "NeutralSecondary40",
  },
  jaAgave20: { borderColor: "NeutralSecondary40" },
  jaAgave80: { borderColor: "NeutralSecondary40" },
  jaAgaveOutlinesSecondary: { borderColor: "NeutralSecondary40" },
  jaGeneralWhite: { borderColor: "NeutralSecondary40" },
  pennyNeutralLightGrey: { borderColor: "NeutralSecondary40" },
  pennyNeutralWhite: { borderColor: "NeutralSecondary40" },
  pennyRed: { borderColor: "NeutralSecondary40" },
  pennyRedDark: { borderColor: "NeutralSecondary40" },
};
