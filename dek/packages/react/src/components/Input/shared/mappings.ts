import { BackgroundColor, Brand } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { TextFieldSize } from "../TextField/TextField.types";
import { SizeVariant } from "../../../theme/mappings/size";
import { SpaceVariant } from "../../../theme/mappings/space";
import { BorderRadiusVariant } from "../../../theme/mappings/borderRadius";
import { TypographyVariant } from "../../Typography/Typography";

export const BORDER_WIDTH = "2px";

// ToDo: backgroundColorDisabled hat im Design füt congstarWeb/congstarApp unterschiedliche Farben. Derzeit wird die Farbe von congstarApp genutzt
export const colorMapping: Record<
  BackgroundColor,
  {
    color?: ColorVariant;
    placeholderColor?: ColorVariant;
    colorDisabled: ColorVariant;
    backgroundColor: ColorVariant;
    backgroundColorDisabled: ColorVariant;
    borderColor?: ColorVariant;
    borderColorFocus?: ColorVariant;
    borderColorDisabled?: ColorVariant;
    errorColor: ColorVariant;
  }
> = {
  black: {
    colorDisabled: "NeutralSecondary40",
    backgroundColor: "NeutralPrimaryWhite",
    backgroundColorDisabled: "NeutralShape80",
    errorColor: "StatusOnDarkError",
  },
  darkGrey: {
    colorDisabled: "NeutralSecondary40",
    backgroundColor: "NeutralPrimaryWhite",
    backgroundColorDisabled: "NeutralShape80",
    errorColor: "StatusOnDarkError",
  },
  white: {
    colorDisabled: "NeutralSecondary60",
    backgroundColor: "NeutralPrimaryWhite",
    backgroundColorDisabled: "NeutralShape80",
    borderColor: "InteractiveBlack",
    borderColorDisabled: "NeutralSecondary60",
    errorColor: "StatusOnLightError",
  },
  lightGrey: {
    colorDisabled: "NeutralSecondary60",
    backgroundColor: "NeutralPrimaryWhite",
    backgroundColorDisabled: "NeutralShape80",
    borderColor: "InteractiveBlack",
    borderColorDisabled: "NeutralSecondary60",
    errorColor: "StatusOnLightError",
  },
  // note: no specific design available for blue theme
  blue: {
    colorDisabled: "NeutralSecondary60",
    backgroundColor: "NeutralPrimaryWhite",
    backgroundColorDisabled: "NeutralShape80",
    borderColor: "InteractiveBlack",
    borderColorDisabled: "NeutralSecondary60",
    errorColor: "StatusOnDarkError",
  },
  jaAgave20: {
    color: "JaAgaveSecondary",
    placeholderColor: "JaAgaveSecondary",
    colorDisabled: "JaAgave30",
    backgroundColor: "JaAgave10",
    backgroundColorDisabled: "JaAgave10",
    borderColor: "JaAgaveSecondary",
    borderColorFocus: "JaAgaveOutlinesSecondary",
    borderColorDisabled: "JaAgaveSecondary",
    errorColor: "JaStatusError",
  },
  jaAgave80: {
    color: "JaAgaveSecondary",
    placeholderColor: "JaAgaveSecondary",
    colorDisabled: "JaAgave30",
    backgroundColor: "JaAgave10",
    backgroundColorDisabled: "JaAgave10",
    borderColor: "JaAgave60",
    borderColorFocus: "JaAgaveOutlinesSecondary",
    borderColorDisabled: "JaAgave60",
    errorColor: "JaGeneralWhite",
  },
  jaAgaveOutlinesSecondary: {
    color: "JaAgaveSecondary",
    placeholderColor: "JaAgaveSecondary",
    colorDisabled: "JaAgave30",
    backgroundColor: "JaAgave10",
    backgroundColorDisabled: "JaAgave10",
    borderColor: "JaAgave60",
    borderColorFocus: "JaAgaveOutlinesSecondary",
    borderColorDisabled: "JaAgave60",
    errorColor: "JaGeneralWhite",
  },
  jaGeneralWhite: {
    color: "JaAgaveSecondary",
    placeholderColor: "JaAgaveSecondary",
    colorDisabled: "JaAgave30",
    backgroundColor: "JaAgave10",
    backgroundColorDisabled: "JaAgave10",
    borderColor: "JaAgave60",
    borderColorFocus: "JaAgaveOutlinesSecondary",
    borderColorDisabled: "JaAgave60",
    errorColor: "JaStatusError",
  },
  pennyNeutralLightGrey: {
    color: "PennyNeutralBlack",
    placeholderColor: "PennyMidnightBlue",
    colorDisabled: "PennyMidnightBlueLight",
    backgroundColor: "PennyNeutralWhite",
    backgroundColorDisabled: "PennyNeutralLightGrey",
    borderColor: "PennyMidnightBlue",
    borderColorFocus: "PennyMidnightBlue",
    borderColorDisabled: "PennyMidnightBlue",
    errorColor: "PennyStatusError",
  },
  pennyNeutralWhite: {
    color: "PennyNeutralBlack",
    placeholderColor: "PennyMidnightBlue",
    colorDisabled: "PennyMidnightBlueLight",
    backgroundColor: "PennyNeutralWhite",
    backgroundColorDisabled: "PennyNeutralLightGrey",
    borderColor: "PennyMidnightBlue",
    borderColorFocus: "PennyMidnightBlue",
    borderColorDisabled: "PennyMidnightBlue",
    errorColor: "PennyStatusError",
  },
  pennyRed: {
    color: "PennyNeutralBlack",
    placeholderColor: "PennyMidnightBlue",
    colorDisabled: "PennyMidnightBlueLight",
    backgroundColor: "PennyNeutralWhite",
    backgroundColorDisabled: "PennyNeutralLightGrey",
    borderColor: "PennyMidnightBlue",
    borderColorFocus: "PennyMidnightBlue",
    borderColorDisabled: "PennyMidnightBlue",
    errorColor: "PennyNeutralWhite",
  },
  pennyRedDark: {
    color: "PennyNeutralBlack",
    placeholderColor: "PennyMidnightBlue",
    colorDisabled: "PennyMidnightBlueLight",
    backgroundColor: "PennyNeutralWhite",
    backgroundColorDisabled: "PennyNeutralLightGrey",
    borderColor: "PennyMidnightBlue",
    borderColorFocus: "PennyMidnightBlue",
    borderColorDisabled: "PennyMidnightBlue",
    errorColor: "PennyNeutralWhite",
  },
};

export const fontMapping: Record<
  Brand,
  {
    inputFont: TypographyVariant;
    placeholderFont: TypographyVariant;
    floatingPlaceholderFont: TypographyVariant;
  }
> = {
  congstarWeb: {
    inputFont: "BodyLight16",
    placeholderFont: "BodyLight16",
    floatingPlaceholderFont: "BodyLight12",
  },
  congstarApp: {
    inputFont: "CongstarAppBodyLightMedium",
    placeholderFont: "CongstarAppBodyLightMedium",
    floatingPlaceholderFont: "CongstarAppBodyLightSmall",
  },
  ja: {
    inputFont: "JaBodyLightMedium",
    placeholderFont: "JaBodyLightMedium",
    floatingPlaceholderFont: "JaBodyLightSmall",
  },
  penny: {
    inputFont: "PennyBodyLightMedium",
    placeholderFont: "PennyBodyLightMedium",
    floatingPlaceholderFont: "PennyBodyLightSmall",
  },
};

export const borderWidthMapping: Record<
  Brand,
  {
    default: SizeVariant;
    error: SizeVariant;
    focus: SizeVariant;
  }
> = {
  congstarWeb: {
    default: "02",
    error: "02",
    focus: "02",
  },
  congstarApp: {
    default: "01",
    error: "02",
    focus: "02",
  },
  ja: {
    default: "01",
    error: "02",
    focus: "02",
  },
  penny: {
    default: "01",
    error: "02",
    focus: "02",
  },
};

export const iconPadding: SpaceVariant = "16";

export const borderRadiusMapping: Record<
  Brand,
  Record<TextFieldSize, BorderRadiusVariant>
> = {
  congstarWeb: {
    medium: "12",
    large: "16",
  },
  congstarApp: {
    medium: "16",
    large: "16",
  },
  ja: {
    medium: "Ja10",
    large: "Ja10",
  },
  penny: {
    medium: "Penny10",
    large: "Penny10",
  },
};

export const inputSizeMapping: Record<
  TextFieldSize,
  {
    inputWidth: string;
    inputHeight: SizeVariant;
    inputPaddingTop: SpaceVariant;
  }
> = {
  medium: {
    inputWidth: "320px",
    inputHeight: "56",
    inputPaddingTop: "16",
  },
  large: {
    inputWidth: "360px",
    inputHeight: "64",
    inputPaddingTop: "20",
  },
};
