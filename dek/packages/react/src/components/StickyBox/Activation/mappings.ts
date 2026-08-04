import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor, Brand } from "../../../theme/theme";
import { TypographyVariant } from "../../Typography/Typography";

export const stickyBoxBackgroundColorMapping: Record<Brand, BackgroundColor> = {
  congstarWeb: "darkGrey",
  congstarApp: "darkGrey",
  ja: "jaGeneralWhite",
  penny: "pennyNeutralWhite",
};

interface TypographyMapping {
  headline: TypographyVariant;
  boldText: TypographyVariant;
  bottomSheetText: TypographyVariant;
  bottomSheetBoldText: TypographyVariant;
}

export const typographyMapping: Record<Brand, TypographyMapping> = {
  congstarWeb: {
    headline: "HeadlineBold20",
    boldText: "BodyBold14",
    bottomSheetText: "BodyBold14",
    bottomSheetBoldText: "TagBold16",
  },
  congstarApp: {
    headline: "CongstarAppHeadlineBoldLarge",
    boldText: "CongstarAppBodyBoldMedium",
    bottomSheetText: "CongstarAppTagBoldMedium",
    bottomSheetBoldText: "CongstarAppTagBoldMedium",
  },
  ja: {
    headline: "JaHeadlineLarge",
    boldText: "JaBodyBoldMedium",
    bottomSheetText: "JaTagBoldMedium",
    bottomSheetBoldText: "JaTagBoldMedium",
  },
  penny: {
    headline: "PennyHeadlineLarge",
    boldText: "PennyBodyBoldMedium",
    bottomSheetText: "PennyTagBoldMedium",
    bottomSheetBoldText: "PennyTagBoldMedium",
  },
};

interface TriggerMapping {
  color: ColorVariant;
  typography: TypographyVariant;
}

export const triggerMapping: Record<Brand, TriggerMapping> = {
  congstarWeb: {
    color: "InteractiveBlue",
    typography: "BodyLight12",
  },
  congstarApp: {
    color: "InteractiveBlue",
    typography: "CongstarAppBodyLightSmall",
  },
  ja: {
    color: "JaAgaveSecondary",
    typography: "JaBodyLightSmall",
  },
  penny: {
    color: "PennyRed",
    typography: "PennyBodyLightSmall",
  },
};
