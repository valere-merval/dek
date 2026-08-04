import { ColorMix, ColorVariant } from "../../../../theme/mappings/color";
import { BackgroundColor, Brand } from "../../../../theme/theme";
import { TypographyVariant } from "../../../Typography/Typography";

export const backgroundColorMap: Record<
  BackgroundColor,
  {
    color: ColorVariant;
    backgroundColor: ColorVariant;
    disabled: ColorVariant;
    error: ColorVariant;
    hover: ColorMix;
  }
> = {
  black: {
    color: "InteractiveBlue",
    backgroundColor: "NeutralPrimaryBlack",
    disabled: "NeutralSecondary40",
    error: "StatusOnDarkError",
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
    hover: {
      baseWeight: 0.75,
      baseColor: "NeutralPrimaryWhite",
      mixColor: "InteractiveBlue", // special case
    },
  },
  lightGrey: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "NeutralSecondary60",
    error: "StatusOnLightError",
    hover: {
      baseWeight: 0.85,
      baseColor: "NeutralPrimaryWhite",
      mixColor: "InteractiveBlack",
    },
  },
  jaAgave20: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "JaGeneralGrey",
    error: "JaStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  jaAgave80: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "JaGeneralGrey",
    error: "JaStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  jaAgaveOutlinesSecondary: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "JaGeneralGrey",
    error: "JaStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  jaGeneralWhite: {
    color: "InteractiveBlack",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "JaGeneralGrey",
    error: "JaStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyNeutralLightGrey: {
    color: "PennyMidnightBlue",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "PennyMidnightBlueLight",
    error: "PennyStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyNeutralWhite: {
    color: "PennyMidnightBlue",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "PennyMidnightBlueLight",
    error: "PennyStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyRed: {
    color: "PennyMidnightBlue",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "PennyMidnightBlueLight",
    error: "PennyStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
  pennyRedDark: {
    color: "PennyMidnightBlue",
    backgroundColor: "NeutralPrimaryWhite",
    disabled: "PennyMidnightBlueLight",
    error: "PennyStatusError",
    hover: {
      baseWeight: 0.85,
      baseColor: "InteractiveWhite",
      mixColor: "NeutralPrimaryBlack",
    },
  },
};

export const typoMap: Record<
  Brand,
  Record<"desktop" | "mobile", TypographyVariant>
> = {
  congstarWeb: {
    desktop: "BodyLight16",

    mobile: "BodyLight14",
  },
  congstarApp: {
    desktop: "CongstarAppBodyLightMedium",
    mobile: "CongstarAppBodyLightMedium",
  },
  ja: {
    desktop: "JaBodyLightMedium",
    mobile: "JaBodyLightMedium",
  },
  penny: {
    desktop: "PennyBodyLightMedium",
    mobile: "PennyBodyLightMedium",
  },
};
