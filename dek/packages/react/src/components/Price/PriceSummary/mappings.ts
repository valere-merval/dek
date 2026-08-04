import { BackgroundColor, Brand } from "../../../theme/theme";
import { HeadlineSize } from "../../Typography/Headline";
import { TypographyVariant } from "../../Typography/Typography";

export const themeProviderBackgroundColorMapping: Record<
  Brand,
  BackgroundColor
> = {
  congstarWeb: "darkGrey",
  congstarApp: "darkGrey",
  ja: "jaAgaveOutlinesSecondary",
  penny: "pennyRedDark",
};

export const sideHeadlineMapping: Record<Brand, HeadlineSize> = {
  congstarWeb: "medium",
  congstarApp: "large",
  ja: "large",
  penny: "large",
};

type ResponsiveTypographyVariant = {
  mobile: TypographyVariant;
  desktop: TypographyVariant;
};

export const mainHeadlineMapping: Record<Brand, ResponsiveTypographyVariant> = {
  congstarWeb: { mobile: "HeadlineBold24", desktop: "HeadlineBold28" },
  congstarApp: {
    mobile: "CongstarAppDisplayLarge",
    desktop: "CongstarAppDisplayExtraLarge",
  },
  ja: { mobile: "JaDisplayLarge", desktop: "JaDisplayExtraLarge" },
  penny: { mobile: "PennyDisplayLarge", desktop: "PennyDisplayExtraLarge" },
};

export const priceInLineTextMapping: Record<
  Brand,
  ResponsiveTypographyVariant
> = {
  congstarWeb: { mobile: "BodyBold16", desktop: "HeadlineBold20" },
  congstarApp: {
    mobile: "CongstarAppHeadlineBoldSmall",
    desktop: "CongstarAppHeadlineBoldMedium",
  },
  ja: { mobile: "JaHeadlineSmall", desktop: "JaHeadlineMedium" },
  penny: { mobile: "PennyHeadlineSmall", desktop: "PennyHeadlineMedium" },
};
