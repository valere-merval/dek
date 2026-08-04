import { ColorMix, ColorVariant } from "../../../../theme/mappings/color";
import { BackgroundColor } from "../../../../theme/theme";

export const backgroundColorMap: Record<
  BackgroundColor,
  {
    color: ColorVariant;
    backgroundColor: ColorVariant;
    disabled: ColorVariant;
    error: ColorVariant;
    selected: ColorVariant;
    hover: ColorMix;
  }
> = {
  black: {
    color: "InteractiveBlue",
    backgroundColor: "NeutralPrimaryBlack",
    disabled: "NeutralSecondary40",
    error: "StatusOnDarkError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryBlack",
      mixColor: "InteractiveBlue",
    },
  },
  white: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  darkGrey: {
    color: "InteractiveBlue",
    backgroundColor: "NeutralShape20",
    disabled: "NeutralSecondary40",
    error: "StatusOnDarkError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralShape20",
      mixColor: "InteractiveBlue",
    },
  },
  blue: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryWhite",
      mixColor: "InteractiveBlue", // special case
    },
  },
  lightGrey: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryWhite",
      mixColor: "InteractiveBlack",
    },
  },
  jaAgave20: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  jaAgave80: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  jaAgaveOutlinesSecondary: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  jaGeneralWhite: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyNeutralLightGrey: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyNeutralWhite: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyRed: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyRedDark: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    selected: "NeutralPrimaryWhite",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
};
