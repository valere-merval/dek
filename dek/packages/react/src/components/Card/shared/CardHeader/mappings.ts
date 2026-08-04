import { Brand } from "../../../../theme/theme";
import { TypographyVariant } from "../../../Typography/Typography";
import { ColorVariant } from "../../../../theme/mappings/color";
import { SpaceVariant } from "../../../../theme/mappings/space";

export const headlineTypoMap: Record<
  Brand,
  Record<"desktop" | "mobile", TypographyVariant>
> = {
  congstarWeb: {
    desktop: "HeadlineBlack24",
    mobile: "HeadlineBlack24",
  },
  congstarApp: {
    desktop: "CongstarAppDisplayMedium",
    mobile: "CongstarAppDisplayMedium",
  },
  penny: {
    desktop: "PennyDisplayMedium",
    mobile: "PennyDisplayMedium",
  },
  ja: {
    desktop: "JaDisplayMedium",
    mobile: "JaDisplayMedium",
  },
};

export const headlineColorMap: Record<Brand, ColorVariant> = {
  congstarWeb: "NeutralPrimaryWhite",
  congstarApp: "NeutralPrimaryWhite",
  ja: "JaAgaveSecondary",
  penny: "PennyRed",
};

export const paddingBottomMap: Record<Brand, SpaceVariant> = {
  congstarWeb: "16",
  congstarApp: "12",
  ja: "12",
  penny: "12",
};
