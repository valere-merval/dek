import { ColorMix, ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor } from "../../../theme/theme";

export const colorMap: Record<
  BackgroundColor,
  {
    color: ColorVariant;
    backgroundColor: ColorVariant;
    hover: ColorMix;
    borderColor: ColorVariant;
    borderColorActive: ColorVariant;
    indicatorColor: ColorVariant;
  }
> = {
  black: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryBlack",
      mixColor: "InteractiveBlue",
    },
    borderColor: "NeutralShape20",
    borderColorActive: "InteractiveBlue",
    indicatorColor: "InteractiveBlue",
  },
  white: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "NeutralShape80",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralShape80",
    borderColorActive: "NeutralPrimaryBlack",
    indicatorColor: "NeutralPrimaryBlack",
  },
  darkGrey: {
    color: "NeutralPrimaryWhite",
    backgroundColor: "NeutralShape20",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryBlack",
      mixColor: "InteractiveBlue",
    },
    borderColor: "NeutralShape20",
    borderColorActive: "InteractiveBlue",
    indicatorColor: "InteractiveBlue",
  },
  blue: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "NeutralShape80",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryWhite",
      mixColor: "InteractiveBlue", // special case
    },
    borderColor: "NeutralShape80",
    borderColorActive: "NeutralPrimaryBlack",
    indicatorColor: "NeutralPrimaryBlack",
  },
  lightGrey: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "NeutralShape80",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryWhite",
      mixColor: "InteractiveBlack",
    },
    borderColor: "NeutralShape80",
    borderColorActive: "NeutralPrimaryBlack",
    indicatorColor: "NeutralPrimaryBlack",
  },
  jaAgave20: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "JaAgave80",
    indicatorColor: "JaAgave80",
  },
  jaAgave80: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "JaAgave80",
    indicatorColor: "JaAgave80",
  },
  jaAgaveOutlinesSecondary: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "JaAgave80",
    indicatorColor: "JaAgave80",
  },
  jaGeneralWhite: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "JaAgave80",
    indicatorColor: "JaAgave80",
  },
  pennyNeutralLightGrey: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "PennyRed",
    indicatorColor: "PennyRed",
  },
  pennyNeutralWhite: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "PennyRed",
    indicatorColor: "PennyRed",
  },
  pennyRed: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "PennyRed",
    indicatorColor: "PennyRed",
  },
  pennyRedDark: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
    borderColor: "NeutralSecondary60",
    borderColorActive: "PennyRed",
    indicatorColor: "PennyRed",
  },
};
