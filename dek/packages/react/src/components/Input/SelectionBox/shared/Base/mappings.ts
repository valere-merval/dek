import { ColorVariant } from "../../../../../theme/mappings/color";
import { SpaceVariant } from "../../../../../theme/mappings/space";
import { BackgroundColor, Brand } from "../../../../../theme/theme";
import { TypographyVariant } from "../../../../Typography/Typography";

export const boxColorMapping: Record<
  BackgroundColor,
  { backgroundColor: ColorVariant; colorIfSelected: ColorVariant }
> = {
  black: {
    backgroundColor: "NeutralSecondary30",
    colorIfSelected: "InteractiveBlue",
  },
  lightGrey: {
    backgroundColor: "NeutralShape80",
    colorIfSelected: "InteractiveBlue",
  },
  darkGrey: {
    backgroundColor: "NeutralSecondary30",
    colorIfSelected: "InteractiveBlue",
  },
  blue: {
    backgroundColor: "NeutralShape80",
    colorIfSelected: "InteractiveBlue",
  },
  white: {
    backgroundColor: "NeutralShape80",
    colorIfSelected: "InteractiveBlue",
  },
  jaAgave20: { backgroundColor: "JaAgave20", colorIfSelected: "JaAgave80" },
  jaAgave80: { backgroundColor: "JaAgave20", colorIfSelected: "JaAgave80" },
  jaAgaveOutlinesSecondary: {
    backgroundColor: "JaAgave20",
    colorIfSelected: "JaAgave80",
  },
  jaGeneralWhite: {
    backgroundColor: "JaAgave20",
    colorIfSelected: "JaAgave80",
  },
  pennyNeutralLightGrey: {
    backgroundColor: "PennyNeutralLightGrey",
    colorIfSelected: "PennyRed",
  },
  pennyNeutralWhite: {
    backgroundColor: "PennyNeutralLightGrey",
    colorIfSelected: "PennyRed",
  },
  pennyRed: {
    backgroundColor: "PennyNeutralLightGrey",
    colorIfSelected: "PennyRed",
  },
  pennyRedDark: {
    backgroundColor: "PennyNeutralLightGrey",
    colorIfSelected: "PennyRed",
  },
};

export const boxColorBackgroundMapping: Record<
  BackgroundColor,
  { backgroundColor: BackgroundColor; colorIfSelected: BackgroundColor }
> = {
  black: {
    backgroundColor: "darkGrey",
    colorIfSelected: "blue",
  },
  lightGrey: {
    backgroundColor: "lightGrey",
    colorIfSelected: "blue",
  },
  darkGrey: {
    backgroundColor: "darkGrey",
    colorIfSelected: "blue",
  },
  blue: { backgroundColor: "blue", colorIfSelected: "blue" },
  white: { backgroundColor: "lightGrey", colorIfSelected: "blue" },
  jaAgave20: { backgroundColor: "jaAgave20", colorIfSelected: "jaAgave80" },
  jaAgave80: { backgroundColor: "jaAgave20", colorIfSelected: "jaAgave80" },
  jaAgaveOutlinesSecondary: {
    backgroundColor: "jaAgave20",
    colorIfSelected: "jaAgave80",
  },
  jaGeneralWhite: {
    backgroundColor: "jaAgave20",
    colorIfSelected: "jaAgave80",
  },
  pennyNeutralLightGrey: {
    backgroundColor: "pennyNeutralLightGrey",
    colorIfSelected: "pennyRed",
  },
  pennyNeutralWhite: {
    backgroundColor: "pennyNeutralLightGrey",
    colorIfSelected: "pennyRed",
  },
  pennyRed: {
    backgroundColor: "pennyNeutralLightGrey",
    colorIfSelected: "pennyRed",
  },
  pennyRedDark: {
    backgroundColor: "pennyNeutralLightGrey",
    colorIfSelected: "pennyRed",
  },
};

export const fontMappings = {
  priceLabel: {
    congstarWeb: { mobile: "BodyLight14", desktop: "BodyLight16" },
    congstarApp: {
      mobile: "CongstarAppBodyLightMedium",
      desktop: "CongstarAppBodyLightMedium",
    },
    ja: { mobile: "JaBodyLightMedium", desktop: "JaBodyLightMedium" },
    penny: { mobile: "PennyBodyLightMedium", desktop: "PennyBodyLightMedium" },
  },
  strikeThroughAndTotalPriceLabel: {
    congstarWeb: { mobile: "BodyLight12", desktop: "BodyLight14" },
    congstarApp: {
      mobile: "CongstarAppBodyLightSmall",
      desktop: "CongstarAppBodyLightSmall",
    },
    ja: { mobile: "JaBodyLightSmall", desktop: "JaBodyLightSmall" },
    penny: { mobile: "PennyBodyLightSmall", desktop: "PennyBodyLightSmall" },
  },
  priceTag: {
    congstarWeb: { mobile: "TagBold16", desktop: "TagBold20" },
    congstarApp: {
      mobile: "CongstarAppTagBoldSmall",
      desktop: "CongstarAppTagBoldSmall",
    },
    ja: { mobile: "JaTagBoldSmall", desktop: "JaTagBoldSmall" },
    penny: { mobile: "PennyTagBoldSmall", desktop: "PennyTagBoldSmall" },
  },
} as const satisfies Record<
  string,
  Record<Brand, { mobile: TypographyVariant; desktop: TypographyVariant }>
>;

export const discountFontMap: Record<Brand, TypographyVariant> = {
  congstarWeb: "TagBold16",
  congstarApp: "CongstarAppTagBoldSmall",
  ja: "JaTagBoldSmall",
  penny: "PennyTagBoldSmall",
};

type DiscountSpaceMapping = {
  border: {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  };
  paddingX: {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  };
  paddingY: {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  };
  marginRight: {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  };
  marginBottom: {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  };
};

export const discountSpaceMap: Record<Brand, DiscountSpaceMapping> = {
  congstarWeb: {
    border: {
      mobile: "12",
      desktop: "16",
    },
    paddingX: {
      mobile: "12",
      desktop: "16",
    },
    paddingY: {
      mobile: "08",
      desktop: "08",
    },
    marginRight: {
      mobile: "20",
      desktop: "24",
    },
    marginBottom: {
      mobile: "16",
      desktop: "24",
    },
  },
  congstarApp: {
    border: {
      mobile: "12",
      desktop: "12",
    },
    paddingX: {
      mobile: "12",
      desktop: "12",
    },
    paddingY: {
      mobile: "08",
      desktop: "08",
    },
    marginRight: {
      mobile: "16",
      desktop: "16",
    },
    marginBottom: {
      mobile: "12",
      desktop: "12",
    },
  },
  penny: {
    border: {
      mobile: "12",
      desktop: "12",
    },
    paddingX: {
      mobile: "12",
      desktop: "12",
    },
    paddingY: {
      mobile: "08",
      desktop: "08",
    },
    marginRight: {
      mobile: "16",
      desktop: "16",
    },
    marginBottom: {
      mobile: "12",
      desktop: "12",
    },
  },
  ja: {
    border: {
      mobile: "12",
      desktop: "12",
    },
    paddingX: {
      mobile: "12",
      desktop: "12",
    },
    paddingY: {
      mobile: "08",
      desktop: "08",
    },
    marginRight: {
      mobile: "16",
      desktop: "16",
    },
    marginBottom: {
      mobile: "12",
      desktop: "12",
    },
  },
};

export const discountBackgroundColorMapping: Record<
  BackgroundColor,
  {
    backgroundColor: ColorVariant;
    backgroundcolorSelected: ColorVariant;
    textColor: ColorVariant;
    textColorSelected: ColorVariant;
  }
> = {
  black: {
    backgroundColor: "DecorativePromotionPink",
    backgroundcolorSelected: "DecorativePromotionPink",
    textColor: "InteractiveBlack",
    textColorSelected: "InteractiveBlack",
  },
  lightGrey: {
    backgroundColor: "InteractiveBlack",
    backgroundcolorSelected: "InteractiveBlack",
    textColor: "InteractiveWhite",
    textColorSelected: "InteractiveWhite",
  },
  darkGrey: {
    backgroundColor: "DecorativePromotionPink",
    backgroundcolorSelected: "DecorativePromotionPink",
    textColor: "InteractiveBlack",
    textColorSelected: "InteractiveBlack",
  },
  blue: {
    backgroundColor: "InteractiveBlack",
    backgroundcolorSelected: "InteractiveBlack",
    textColor: "InteractiveWhite",
    textColorSelected: "InteractiveWhite",
  },
  white: {
    backgroundColor: "InteractiveBlack",
    backgroundcolorSelected: "InteractiveBlack",
    textColor: "InteractiveWhite",
    textColorSelected: "InteractiveWhite",
  },
  jaAgave20: {
    backgroundColor: "JaGeneralBlack",
    backgroundcolorSelected: "JaGeneralBlack",
    textColor: "JaGeneralWhite",
    textColorSelected: "JaGeneralWhite",
  },
  jaAgave80: {
    backgroundColor: "JaGeneralBlack",
    backgroundcolorSelected: "JaGeneralBlack",
    textColor: "JaGeneralWhite",
    textColorSelected: "JaGeneralWhite",
  },
  jaAgaveOutlinesSecondary: {
    backgroundColor: "JaGeneralBlack",
    backgroundcolorSelected: "JaGeneralBlack",
    textColor: "JaGeneralWhite",
    textColorSelected: "JaGeneralWhite",
  },
  jaGeneralWhite: {
    backgroundColor: "JaGeneralBlack",
    backgroundcolorSelected: "JaGeneralBlack",
    textColor: "JaGeneralWhite",
    textColorSelected: "JaGeneralWhite",
  },
  pennyNeutralLightGrey: {
    backgroundColor: "PennyMidnightBlue",
    backgroundcolorSelected: "PennyMidnightBlue",
    textColor: "PennyNeutralWhite",
    textColorSelected: "PennyNeutralWhite",
  },
  pennyNeutralWhite: {
    backgroundColor: "PennyMidnightBlue",
    backgroundcolorSelected: "PennyMidnightBlue",
    textColor: "PennyNeutralWhite",
    textColorSelected: "PennyNeutralWhite",
  },
  pennyRed: {
    backgroundColor: "PennyMidnightBlue",
    backgroundcolorSelected: "PennyMidnightBlue",
    textColor: "PennyNeutralWhite",
    textColorSelected: "PennyNeutralWhite",
  },
  pennyRedDark: {
    backgroundColor: "PennyMidnightBlue",
    backgroundcolorSelected: "PennyMidnightBlue",
    textColor: "PennyNeutralWhite",
    textColorSelected: "PennyNeutralWhite",
  },
};

export const errorColorMap: Record<BackgroundColor, ColorVariant> = {
  black: "StatusOnDarkError",
  darkGrey: "StatusOnDarkError",
  lightGrey: "StatusOnLightError",
  white: "StatusOnLightError",
  blue: "StatusOnLightError",
  jaAgave20: "JaStatusError",
  jaAgave80: "JaStatusError",
  jaAgaveOutlinesSecondary: "JaStatusError",
  jaGeneralWhite: "JaStatusError",
  pennyNeutralLightGrey: "PennyStatusError",
  pennyNeutralWhite: "PennyStatusError",
  pennyRed: "PennyStatusError",
  pennyRedDark: "PennyStatusError",
};
