import { ColorVariant } from "../../../theme/mappings/color";
import { BackgroundColor, Brand } from "../../../theme/theme";
import { TypographyVariant } from "../../Typography/Typography";

export const modalBackgroundColorMapping: Record<Brand, BackgroundColor> = {
  congstarWeb: "white",
  congstarApp: "white",
  ja: "jaAgave20",
  penny: "pennyNeutralLightGrey",
};

export const modalTitleColorMapping: Record<Brand, ColorVariant> = {
  congstarWeb: "InteractiveBlack",
  congstarApp: "InteractiveBlack",
  ja: "JaAgaveSecondary",
  penny: "PennyRed",
};

export const defaultTextMapping: Record<
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
