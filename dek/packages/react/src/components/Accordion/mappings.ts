import { TypographyVariant } from "../Typography/Typography";
import { AccordionSize } from "./Accordion.types";
import { ColorVariant } from "../../theme/mappings/color";
import { BackgroundColor, Brand } from "../../theme/theme";
import { DividerColor } from "../Divider";

export const typoMap: Record<
  Brand,
  Record<
    AccordionSize,
    { [P in "label" | "price" | "info"]: TypographyVariant }
  >
> = {
  congstarWeb: {
    medium: {
      label: "BodyBold16",
      price: "TagBold20",
      info: "BodyLight14",
    },
    large: {
      label: "HeadlineBold20",
      price: "TagBold24",
      info: "BodyLight16",
    },
  },
  congstarApp: {
    medium: {
      label: "CongstarAppBodyBoldMedium",
      price: "CongstarAppBodyBoldMedium",
      info: "CongstarAppBodyLightMedium",
    },
    large: {
      label: "CongstarAppBodyBoldLarge",
      price: "CongstarAppBodyBoldLarge",
      info: "CongstarAppBodyLightLarge",
    },
  },
  ja: {
    medium: {
      label: "JaBodyBoldMedium",
      price: "JaBodyBoldMedium",
      info: "JaBodyLightMedium",
    },
    large: {
      label: "JaBodyBoldLarge",
      price: "JaBodyBoldLarge",
      info: "JaBodyLightLarge",
    },
  },
  penny: {
    medium: {
      label: "PennyBodyBoldMedium",
      price: "PennyBodyBoldMedium",
      info: "PennyBodyLightMedium",
    },
    large: {
      label: "PennyBodyBoldLarge",
      price: "PennyBodyBoldLarge",
      info: "PennyBodyLightLarge",
    },
  },
};

export const svgColorMap: Record<BackgroundColor, ColorVariant> = {
  lightGrey: "InteractiveBlack",
  white: "InteractiveBlack",
  blue: "InteractiveBlack",
  darkGrey: "InteractiveBlue",
  black: "InteractiveBlue",
  jaAgave20: "JaAgaveSecondary",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaAgaveSecondary",
  pennyNeutralLightGrey: "PennyRed",
  pennyNeutralWhite: "PennyRed",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};

export const dividerColorMap: Record<BackgroundColor, DividerColor> = {
  black: "lightGrey",
  darkGrey: "black",
  blue: "black",
  white: "black",
  lightGrey: "black",
  jaAgave20: "black",
  jaAgave80: "lightGrey",
  jaAgaveOutlinesSecondary: "lightGrey",
  jaGeneralWhite: "black",
  pennyNeutralLightGrey: "black",
  pennyNeutralWhite: "black",
  pennyRed: "lightGrey",
  pennyRedDark: "lightGrey",
};
