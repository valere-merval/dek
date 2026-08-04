import { Brand } from "../../../../../theme/theme";
import { TypographyVariant } from "../../../../Typography/Typography";

export const basicFontMapping: Record<
  Brand,
  { mobile: TypographyVariant; desktop: TypographyVariant }
> = {
  congstarWeb: { mobile: "BodyBold16", desktop: "HeadlineBold20" },
  congstarApp: {
    mobile: "CongstarAppBodyBoldLarge",
    desktop: "CongstarAppBodyBoldLarge",
  },
  ja: { mobile: "JaBodyBoldLarge", desktop: "JaBodyBoldLarge" },
  penny: { mobile: "PennyBodyBoldLarge", desktop: "PennyBodyBoldLarge" },
};

export const priceFontMapping: Record<Brand, TypographyVariant> = {
  congstarWeb: "TagBold20",
  congstarApp: "CongstarAppTagBoldSmall",
  ja: "JaTagBoldSmall",
  penny: "PennyTagBoldSmall",
};
