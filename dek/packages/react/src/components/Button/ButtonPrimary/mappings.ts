import { BackgroundColor, Brand } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { SpaceVariant } from "../../../theme/mappings/space";
import { ButtonPrimarySize } from "./ButtonPrimary/ButtonPrimary.types";
import { TypographyVariant } from "../../Typography/Typography";
import { css, DefaultTheme } from "styled-components";

export const primaryBackgroundColorMapping: Record<
  BackgroundColor,
  {
    color: ColorVariant;
    backgroundColor: ColorVariant;
    colorDisabled: ColorVariant;
    backgroundColorDisabled: ColorVariant;
  }
> = {
  black: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "InteractiveBlue",
    backgroundColorDisabled: "NeutralSecondary40",
    colorDisabled: "NeutralShape20",
  },
  lightGrey: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "InteractiveBlue",
    backgroundColorDisabled: "NeutralSecondary60",
    colorDisabled: "NeutralSecondary40",
  },
  darkGrey: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "InteractiveBlue",
    backgroundColorDisabled: "NeutralSecondary40",
    colorDisabled: "NeutralShape20",
  },
  blue: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "InteractiveBlue",
    backgroundColorDisabled: "NeutralSecondary40",
    colorDisabled: "NeutralShape20",
  },
  white: {
    color: "NeutralPrimaryBlack",
    backgroundColor: "InteractiveBlue",
    backgroundColorDisabled: "NeutralSecondary60",
    colorDisabled: "NeutralSecondary40",
  },
  jaAgave20: {
    color: "JaGeneralWhite",
    backgroundColor: "JaAgaveSecondary",
    backgroundColorDisabled: "JaGeneralGrey",
    colorDisabled: "JaGeneralWhite",
  },
  jaAgave80: {
    color: "JaAgaveSecondary",
    backgroundColor: "JaGeneralWhite",
    backgroundColorDisabled: "JaGeneralWhite",
    colorDisabled: "JaGeneralGrey",
  },
  jaAgaveOutlinesSecondary: {
    color: "JaAgaveSecondary",
    backgroundColor: "JaGeneralWhite",
    backgroundColorDisabled: "JaGeneralWhite",
    colorDisabled: "JaGeneralGrey",
  },
  jaGeneralWhite: {
    color: "JaGeneralWhite",
    backgroundColor: "JaAgaveSecondary",
    backgroundColorDisabled: "JaGeneralGrey",
    colorDisabled: "JaGeneralWhite",
  },
  pennyNeutralLightGrey: {
    color: "PennyNeutralWhite",
    backgroundColor: "PennyRed",
    backgroundColorDisabled: "PennyRed",
    colorDisabled: "PennyRedDisabled",
  },
  pennyNeutralWhite: {
    color: "PennyNeutralWhite",
    backgroundColor: "PennyRed",
    backgroundColorDisabled: "PennyRed",
    colorDisabled: "PennyRedDisabled",
  },
  pennyRed: {
    color: "PennyRed",
    backgroundColor: "PennyNeutralWhite",
    backgroundColorDisabled: "PennyNeutralWhite",
    colorDisabled: "PennyRedDisabled",
  },
  pennyRedDark: {
    color: "PennyRed",
    backgroundColor: "PennyNeutralWhite",
    backgroundColorDisabled: "PennyNeutralWhite",
    colorDisabled: "PennyRedDisabled",
  },
};

export const outlinedColorMapping: Record<
  BackgroundColor,
  {
    color: ColorVariant;
    colorDisabled: ColorVariant;
  }
> = {
  black: {
    color: "InteractiveBlue",
    colorDisabled: "NeutralSecondary40",
  },
  darkGrey: {
    color: "InteractiveBlue",
    colorDisabled: "NeutralSecondary40",
  },
  blue: {
    color: "InteractiveBlack",
    colorDisabled: "NeutralSecondary40",
  },
  white: {
    color: "InteractiveBlack",
    colorDisabled: "NeutralSecondary60",
  },
  lightGrey: {
    color: "InteractiveBlack",
    colorDisabled: "NeutralSecondary60",
  },
  jaAgave20: { color: "JaAgaveSecondary", colorDisabled: "JaGeneralGrey" },
  jaAgave80: { color: "JaGeneralWhite", colorDisabled: "JaAgave30" },
  jaAgaveOutlinesSecondary: {
    color: "JaGeneralWhite",
    colorDisabled: "JaAgave30",
  },
  jaGeneralWhite: {
    color: "JaAgaveSecondary",
    colorDisabled: "JaGeneralGrey",
  },
  pennyNeutralLightGrey: {
    color: "PennyRed",
    colorDisabled: "PennyRedDisabled",
  },
  pennyNeutralWhite: { color: "PennyRed", colorDisabled: "PennyRedDisabled" },
  pennyRed: {
    color: "PennyNeutralWhite",
    colorDisabled: "PennyRedDisabled",
  },
  pennyRedDark: {
    color: "PennyNeutralWhite",
    colorDisabled: "PennyRedDisabled",
  },
};

export const invertedColorMapping: Record<
  BackgroundColor,
  {
    backgroundColor: ColorVariant;
    color: ColorVariant;
    colorDisabled: ColorVariant;
  }
> = {
  black: {
    backgroundColor: "NeutralShape20",
    color: "InteractiveBlue",
    colorDisabled: "NeutralSecondary40",
  },
  darkGrey: {
    backgroundColor: "NeutralShape20",
    color: "InteractiveBlue",
    colorDisabled: "NeutralSecondary40",
  },
  blue: {
    backgroundColor: "NeutralShape20",
    color: "InteractiveBlue",
    colorDisabled: "NeutralSecondary60",
  },
  white: {
    backgroundColor: "NeutralShape80",
    color: "InteractiveBlack",
    colorDisabled: "NeutralSecondary60",
  },
  lightGrey: {
    backgroundColor: "NeutralShape80",
    color: "InteractiveBlack",
    colorDisabled: "NeutralSecondary60",
  },
  jaAgave20: {
    backgroundColor: "JaGeneralWhite",
    color: "JaAgaveSecondary",
    colorDisabled: "JaGeneralGrey",
  },
  jaAgave80: {
    backgroundColor: "JaAgaveSecondary",
    color: "JaGeneralWhite",
    colorDisabled: "JaAgave30",
  },
  jaAgaveOutlinesSecondary: {
    backgroundColor: "JaAgave10",
    color: "JaGeneralWhite",
    colorDisabled: "JaAgave30",
  },
  jaGeneralWhite: {
    backgroundColor: "JaAgave10",
    color: "JaAgaveSecondary",
    colorDisabled: "JaGeneralGrey",
  },
  pennyNeutralLightGrey: {
    backgroundColor: "PennyNeutralWhite",
    color: "PennyRed",
    colorDisabled: "PennyRedDisabled",
  },
  pennyNeutralWhite: {
    backgroundColor: "PennyNeutralLightGrey",
    color: "PennyRed",
    colorDisabled: "PennyRedDisabled",
  },
  pennyRed: {
    backgroundColor: "PennyRedDark",
    color: "PennyNeutralWhite",
    colorDisabled: "PennyRedDisabled",
  },
  pennyRedDark: {
    backgroundColor: "PennyNeutralLightGrey",
    color: "PennyRed",
    colorDisabled: "PennyRedDisabled",
  },
};

export const heightMapping: Record<ButtonPrimarySize, SpaceVariant> = {
  medium: "48",
  large: "56",
};

export const calculateBorderRadius = (
  theme: DefaultTheme,
  size: ButtonPrimarySize,
) => {
  const brand = theme.contextSpecific.brand;
  const heightToCutInHalf: SpaceVariant =
    brand === "ja" ? "20" : heightMapping[size];

  return css`
    border-radius: calc(${theme.space[heightToCutInHalf]} / 2);
  `;
};

export const ButtonPrimaryTypographyMap: Record<Brand, TypographyVariant> = {
  congstarWeb: "LabelBold16",
  congstarApp: "CongstarAppLabelLarge",
  ja: "JaLabelLarge",
  penny: "PennyLabelLarge",
};
