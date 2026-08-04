import { BackgroundColor, Brand } from "../../../theme/theme";
import { ColorMix, ColorVariant } from "../../../theme/mappings/color";
import { TypographyVariant } from "../../Typography/Typography";
import { SpaceVariant } from "../../../theme/mappings/space";

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
    desktop: "HeadlineBold20",
    mobile: "BodyBold16",
  },
  congstarApp: {
    desktop: "CongstarAppHeadlineBoldMedium",
    mobile: "CongstarAppHeadlineBoldMedium",
  },
  ja: {
    desktop: "JaHeadlineMedium",
    mobile: "JaHeadlineMedium",
  },
  penny: {
    desktop: "PennyHeadlineMedium",
    mobile: "PennyHeadlineMedium",
  },
};

export const descriptionTypoMap: Record<
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

export const radioItemTypoMap: Record<
  Brand,
  Record<"desktop" | "mobile", TypographyVariant>
> = {
  congstarWeb: {
    desktop: "BodyLight16",
    mobile: "BodyLight14",
  },
  congstarApp: {
    desktop: "CongstarAppBodyLightLarge",
    mobile: "CongstarAppBodyLightMedium",
  },
  ja: {
    desktop: "JaBodyLightLarge",
    mobile: "JaBodyLightMedium",
  },
  penny: {
    desktop: "PennyBodyLightLarge",
    mobile: "PennyBodyLightMedium",
  },
};

export const indicatorMap: Record<
  Brand,
  Record<"desktop" | "mobile", { space: SpaceVariant; topSwift: string }>
> = {
  congstarWeb: {
    desktop: { space: "16", topSwift: "0.2rem" },
    mobile: { space: "12", topSwift: "0" },
  },
  congstarApp: {
    desktop: { space: "12", topSwift: "-0.1rem" },
    mobile: { space: "12", topSwift: "-0.1rem" },
  },
  ja: {
    desktop: { space: "12", topSwift: "-0.1rem" },
    mobile: { space: "12", topSwift: "-0.1rem" },
  },
  penny: {
    desktop: { space: "12", topSwift: "-0.1rem" },
    mobile: { space: "12", topSwift: "-0.1rem" },
  },
};
