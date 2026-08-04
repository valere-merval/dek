import { Brand } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { TypographyVariant } from "../../Typography/Typography";

export type AppTabsOptions = {
  tabList: {
    backgroundColor: ColorVariant;
  };
  trigger: {
    activeBackgroundColor: ColorVariant;
    activeTextColor: ColorVariant;
    inactiveTextColor: ColorVariant;
    activeFont: TypographyVariant;
    inactiveFont: TypographyVariant;
  };
};

export const AppTabsOptionMap: Record<Brand, AppTabsOptions> = {
  congstarWeb: {
    tabList: {
      backgroundColor: "NeutralShape20",
    },
    trigger: {
      activeBackgroundColor: "InteractiveBlue",
      activeTextColor: "NeutralPrimaryBlack",
      inactiveTextColor: "NeutralPrimaryWhite",
      activeFont: "CongstarAppBodyBoldMedium",
      inactiveFont: "CongstarAppBodyLightMedium",
    },
  },
  congstarApp: {
    tabList: {
      backgroundColor: "NeutralShape20",
    },
    trigger: {
      activeBackgroundColor: "InteractiveBlue",
      activeTextColor: "NeutralPrimaryBlack",
      inactiveTextColor: "NeutralPrimaryWhite",
      activeFont: "CongstarAppBodyBoldMedium",
      inactiveFont: "CongstarAppBodyLightMedium",
    },
  },
  ja: {
    tabList: {
      backgroundColor: "JaGeneralWhite",
    },
    trigger: {
      activeBackgroundColor: "JaAgave80",
      activeTextColor: "JaGeneralWhite",
      inactiveTextColor: "JaGeneralBlack",
      activeFont: "JaBodyBoldMedium",
      inactiveFont: "JaBodyLightMedium",
    },
  },
  penny: {
    tabList: {
      backgroundColor: "PennyNeutralWhite",
    },
    trigger: {
      activeBackgroundColor: "PennyRed",
      activeTextColor: "PennyNeutralWhite",
      inactiveTextColor: "PennyNeutralBlack",
      activeFont: "PennyBodyBoldMedium",
      inactiveFont: "PennyBodyLightMedium",
    },
  },
};
