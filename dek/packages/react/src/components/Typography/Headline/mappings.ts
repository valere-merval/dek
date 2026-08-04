import { HeadlineSize, HeadlineVariant } from "./Headline.types";
import { TypographyVariant } from "../Typography";

import { Brand } from "../../../theme/theme";

export const typoMap: Record<
  Brand,
  Record<
    HeadlineVariant,
    Record<HeadlineSize, Record<"desktop" | "mobile", TypographyVariant>>
  >
> = {
  congstarWeb: {
    black: {
      extraLarge: {
        desktop: "HeadlineBlack64",
        mobile: "HeadlineBlack48",
      },
      large: {
        desktop: "HeadlineBlack48",
        mobile: "HeadlineBlack40",
      },
      medium: {
        desktop: "HeadlineBlack40",
        mobile: "HeadlineBlack32",
      },
      small: {
        desktop: "HeadlineBlack32",
        mobile: "HeadlineBlack24",
      },
    },
    bold: {
      extraLarge: {
        desktop: "HeadlineBold32",
        mobile: "HeadlineBold28",
      },
      large: {
        desktop: "HeadlineBold28",
        mobile: "HeadlineBold24",
      },
      medium: {
        desktop: "HeadlineBold24",
        mobile: "HeadlineBold20",
      },
      small: {
        desktop: "HeadlineBold20",
        mobile: "BodyBold16",
      },
    },
  },
  congstarApp: {
    black: {
      /** There is no extraLarge in congstarApp */
      extraLarge: {
        desktop: "HeadlineBlack64",
        mobile: "HeadlineBlack48",
      },
      large: {
        desktop: "CongstarAppHeadlineBlackLarge",
        mobile: "CongstarAppHeadlineBlackLarge",
      },
      medium: {
        desktop: "CongstarAppHeadlineBlackMedium",
        mobile: "CongstarAppHeadlineBlackMedium",
      },
      small: {
        desktop: "CongstarAppHeadlineBlackSmall",
        mobile: "CongstarAppHeadlineBlackSmall",
      },
    },
    bold: {
      /** There is no extraLarge in congstarApp */
      extraLarge: {
        desktop: "HeadlineBold32",
        mobile: "HeadlineBold28",
      },
      large: {
        desktop: "CongstarAppHeadlineBoldLarge",
        mobile: "CongstarAppHeadlineBoldLarge",
      },
      medium: {
        desktop: "CongstarAppHeadlineBoldMedium",
        mobile: "CongstarAppHeadlineBoldMedium",
      },
      small: {
        desktop: "CongstarAppHeadlineBoldSmall",
        mobile: "CongstarAppHeadlineBoldSmall",
      },
    },
  },
  penny: {
    black: {
      /** There is no extraLarge in pennyApp */
      extraLarge: {
        desktop: "HeadlineBlack64",
        mobile: "HeadlineBlack48",
      },
      large: {
        desktop: "PennyHeadlineLarge",
        mobile: "PennyHeadlineLarge",
      },
      medium: {
        desktop: "PennyHeadlineMedium",
        mobile: "PennyHeadlineMedium",
      },
      small: {
        desktop: "PennyHeadlineSmall",
        mobile: "PennyHeadlineSmall",
      },
    },
    /** There are no bold Headlines for penny. Therefore the default Headline fonts will be used */
    bold: {
      /** There is no extraLarge in pennyApp */
      extraLarge: {
        desktop: "HeadlineBold32",
        mobile: "HeadlineBold28",
      },
      large: {
        desktop: "PennyHeadlineLarge",
        mobile: "PennyHeadlineLarge",
      },
      medium: {
        desktop: "PennyHeadlineMedium",
        mobile: "PennyHeadlineMedium",
      },
      small: {
        desktop: "PennyHeadlineSmall",
        mobile: "PennyHeadlineSmall",
      },
    },
  },
  ja: {
    black: {
      /** There is no extraLarge in jaApp */
      extraLarge: {
        desktop: "HeadlineBlack64",
        mobile: "HeadlineBlack48",
      },
      large: {
        desktop: "JaHeadlineLarge",
        mobile: "JaHeadlineLarge",
      },
      medium: {
        desktop: "JaHeadlineMedium",
        mobile: "JaHeadlineMedium",
      },
      small: {
        desktop: "JaHeadlineSmall",
        mobile: "JaHeadlineSmall",
      },
    },
    /** There are no bold Headlines for ja. Therefore the default Headline fonts will be used */
    bold: {
      /** There is no extraLarge in jaApp */
      extraLarge: {
        desktop: "HeadlineBold32",
        mobile: "HeadlineBold28",
      },
      large: {
        desktop: "JaHeadlineLarge",
        mobile: "JaHeadlineLarge",
      },
      medium: {
        desktop: "JaHeadlineMedium",
        mobile: "JaHeadlineMedium",
      },
      small: {
        desktop: "JaHeadlineSmall",
        mobile: "JaHeadlineSmall",
      },
    },
  },
};
