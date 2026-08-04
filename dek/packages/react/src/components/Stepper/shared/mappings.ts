import { DefaultTheme } from "styled-components";
import { ColorVariant } from "../../../theme/mappings/color";
import { SizeVariant } from "../../../theme/mappings/size";
import { Brand } from "../../../theme/theme";
import { DividerColor } from "../../Divider";
import { TypographyVariant } from "../../Typography/Typography";
import { StepperItemState, StepperSize } from "./Stepper.types";

export const getSeparatorColor = (theme: DefaultTheme): DividerColor => {
  const brand = theme.contextSpecific.brand;
  return brand === "congstarApp" || brand === "congstarWeb"
    ? "darkGrey"
    : "black";
};

export const itemFontMap: Record<
  Brand,
  Record<StepperSize | "extraLarge", TypographyVariant>
> = {
  congstarWeb: {
    medium: "LabelBold14",
    large: "LabelBold20",
    extraLarge: "HeadlineBold28",
  },
  congstarApp: {
    medium: "CongstarAppLabelMedium",
    large: "CongstarAppLabelLarge",
    extraLarge: "CongstarAppTagBlackUnitMedium",
  },
  ja: {
    medium: "JaLabelMedium",
    large: "JaLabelLarge",
    extraLarge: "JaTagBlackUnitMedium",
  },
  penny: {
    medium: "PennyLabelMedium",
    large: "PennyLabelLarge",
    extraLarge: "PennyTagBlackUnitMedium",
  },
};

export const itemSizeMap: Record<
  StepperSize | "extraLarge",
  {
    indicatorDimension: SizeVariant;
    iconDimension: SizeVariant;
    padding: SizeVariant;
  }
> = {
  medium: {
    indicatorDimension: "24",
    iconDimension: "16",
    padding: "20",
  },
  large: {
    indicatorDimension: "40",
    iconDimension: "24",
    padding: "24",
  },
  extraLarge: {
    indicatorDimension: "56",
    iconDimension: "32",
    padding: "24",
  },
};

export const accentColorMap: Record<Brand, ColorVariant> = {
  congstarWeb: "DecorativePrimaryYellow",
  congstarApp: "DecorativePrimaryYellow",
  ja: "JaAgaveSecondary",
  penny: "PennyRed",
};

export const stepTextColorMap: Record<Brand, ColorVariant> = {
  congstarWeb: "NeutralPrimaryBlack",
  congstarApp: "NeutralPrimaryBlack",
  ja: "JaGeneralWhite",
  penny: "PennyNeutralWhite",
};

export const stepStatusToTextMap: Record<StepperItemState, string> = {
  open: "offen",
  completed: "abgeschlossen",
  current: "Aktueller Schritt",
  error: "Fehler",
  pending: "ausstehend",
};
