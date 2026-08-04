import { Brand } from "../../../theme/theme";
import { TypographyVariant } from "../../../theme/mappings/typography";

export const priceRowPriceTypographyMap: Record<
  Brand,
  {
    mobile: TypographyVariant;
    desktop: TypographyVariant;
  }
> = {
  congstarWeb: {
    mobile: "TagBlack24",
    desktop: "TagBlack32",
  },
  congstarApp: {
    mobile: "CongstarAppTagBlackUnitMedium",
    desktop: "CongstarAppTagBlackUnitMedium",
  },
  penny: {
    mobile: "PennyTagBlackUnitMedium",
    desktop: "PennyTagBlackUnitMedium",
  },
  ja: {
    mobile: "JaTagBlackUnitMedium",
    desktop: "JaTagBlackUnitMedium",
  },
};

export const priceRowPriceStrikeThroughTypographyMap: Record<
  Brand,
  TypographyVariant
> = {
  congstarWeb: "BodyBold16",
  congstarApp: "CongstarAppBodyBoldMedium",
  penny: "PennyBodyBoldMedium",
  ja: "JaBodyBoldMedium",
};
