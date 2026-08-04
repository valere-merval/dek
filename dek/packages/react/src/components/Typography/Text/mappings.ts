import { TextSize, TextVariant } from "./Text.types";
import { TypographyVariant } from "../Typography";
import { Brand } from "../../../theme/theme";

export const typoMap: Record<
  Brand,
  Record<
    TextVariant,
    Record<TextSize, Record<"desktop" | "mobile", TypographyVariant>>
  >
> = {
  congstarWeb: {
    bold: {
      large: {
        desktop: "BodyBold16",
        mobile: "BodyBold14",
      },
      medium: {
        desktop: "BodyBold14",
        mobile: "BodyBold12",
      },
      small: {
        desktop: "BodyBold12",
        mobile: "BodyBold12",
      },
    },
    light: {
      large: {
        desktop: "BodyLight16",
        mobile: "BodyLight14",
      },
      medium: {
        desktop: "BodyLight14",
        mobile: "BodyLight12",
      },
      small: {
        desktop: "BodyLight12",
        mobile: "BodyLight12",
      },
    },
  },
  congstarApp: {
    bold: {
      large: {
        desktop: "CongstarAppBodyBoldLarge",
        mobile: "CongstarAppBodyBoldLarge",
      },
      medium: {
        desktop: "CongstarAppBodyBoldMedium",
        mobile: "CongstarAppBodyBoldMedium",
      },
      small: {
        desktop: "CongstarAppBodyBoldSmall",
        mobile: "CongstarAppBodyBoldSmall",
      },
    },
    light: {
      large: {
        desktop: "CongstarAppBodyLightLarge",
        mobile: "CongstarAppBodyLightLarge",
      },
      medium: {
        desktop: "CongstarAppBodyLightMedium",
        mobile: "CongstarAppBodyLightMedium",
      },
      small: {
        desktop: "CongstarAppBodyLightSmall",
        mobile: "CongstarAppBodyLightSmall",
      },
    },
  },
  // Please note: ja and penny value adjustments are a temporary workaround until design systems have been merged. CongstarApp values can not be aligned with the ja and penny values, because they will be used via webview
  penny: {
    bold: {
      large: {
        desktop: "PennyBodyBoldLarge",
        mobile: "PennyBodyBoldMedium",
      },
      medium: {
        desktop: "PennyBodyBoldMedium",
        mobile: "PennyBodyBoldSmall",
      },
      small: {
        desktop: "PennyBodyBoldSmall",
        mobile: "PennyBodyBoldSmall",
      },
    },
    light: {
      large: {
        desktop: "PennyBodyLightLarge",
        mobile: "PennyBodyLightMedium",
      },
      medium: {
        desktop: "PennyBodyLightMedium",
        mobile: "PennyBodyLightSmall",
      },
      small: {
        desktop: "PennyBodyLightSmall",
        mobile: "PennyBodyLightSmall",
      },
    },
  },
  ja: {
    bold: {
      large: {
        desktop: "JaBodyBoldLarge",
        mobile: "JaBodyBoldMedium",
      },
      medium: {
        desktop: "JaBodyBoldMedium",
        mobile: "JaBodyBoldSmall",
      },
      small: {
        desktop: "JaBodyBoldSmall",
        mobile: "JaBodyBoldSmall",
      },
    },
    light: {
      large: {
        desktop: "JaBodyLightLarge",
        mobile: "JaBodyLightMedium",
      },
      medium: {
        desktop: "JaBodyLightMedium",
        mobile: "JaBodyLightSmall",
      },
      small: {
        desktop: "JaBodyLightSmall",
        mobile: "JaBodyLightSmall",
      },
    },
  },
};
