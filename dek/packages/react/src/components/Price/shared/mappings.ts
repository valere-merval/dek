import { PrizeSize } from "./Price.types";
import { TypographyVariant } from "../../Typography/Typography";
import { SpaceVariant } from "../../../theme/mappings/space";

import { Brand } from "../../../theme/theme";

export const priceTypographyMap: Record<
  Brand,
  Record<
    PrizeSize,
    {
      [Property in
        | "euro"
        | "cents"
        | "currency"
        | "billingPeriod"
        | "suffix"]: TypographyVariant;
    }
  >
> = {
  congstarWeb: {
    small: {
      euro: "TagBlack48",
      cents: "TagBlack16",
      currency: "TagBlack24",
      billingPeriod: "BodyBold16",
      suffix: "BodyLight16",
    },
    medium: {
      euro: "TagBlack64",
      cents: "TagBlack24",
      currency: "TagBlack32",
      billingPeriod: "BodyBold16",
      suffix: "BodyLight16",
    },
    large: {
      euro: "TagBlack96",
      cents: "TagBlack40",
      currency: "TagBlack48",
      billingPeriod: "BodyBold16",
      suffix: "BodyLight16",
    },
  },
  congstarApp: {
    small: {
      euro: "CongstarAppTagBlackSmall",
      cents: "CongstarAppTagBlackDecimalSmall",
      currency: "CongstarAppTagBlackUnitSmall",
      billingPeriod: "CongstarAppBodyBoldLarge",
      suffix: "CongstarAppBodyLightSmall",
    },
    medium: {
      euro: "CongstarAppTagBlackMedium",
      cents: "CongstarAppTagBlackDecimalMedium",
      currency: "CongstarAppTagBlackUnitMedium",
      billingPeriod: "CongstarAppBodyBoldLarge",
      suffix: "CongstarAppBodyLightSmall",
    },
    large: {
      euro: "CongstarAppTagBlackLarge",
      cents: "CongstarAppTagBlackDecimalLarge",
      currency: "CongstarAppTagBlackUnitLarge",
      billingPeriod: "CongstarAppBodyBoldLarge",
      suffix: "CongstarAppBodyLightSmall",
    },
  },
  penny: {
    small: {
      euro: "PennyTagBlackSmall",
      cents: "PennyTagBlackDecimalSmall",
      currency: "PennyTagBlackUnitSmall",
      billingPeriod: "PennyBodyBoldLarge",
      suffix: "PennyBodyLightSmall",
    },
    medium: {
      euro: "PennyTagBlackMedium",
      cents: "PennyTagBlackDecimalMedium",
      currency: "PennyTagBlackUnitMedium",
      billingPeriod: "PennyBodyBoldLarge",
      suffix: "PennyBodyLightSmall",
    },
    large: {
      euro: "PennyTagBlackLarge",
      cents: "PennyTagBlackDecimalLarge",
      currency: "PennyTagBlackUnitLarge",
      billingPeriod: "PennyBodyBoldLarge",
      suffix: "PennyBodyLightSmall",
    },
  },
  ja: {
    small: {
      euro: "JaTagBlackSmall",
      cents: "JaTagBlackDecimalSmall",
      currency: "JaTagBlackUnitSmall",
      billingPeriod: "JaBodyBoldLarge",
      suffix: "JaBodyLightSmall",
    },
    medium: {
      euro: "JaTagBlackMedium",
      cents: "JaTagBlackDecimalMedium",
      currency: "JaTagBlackUnitMedium",
      billingPeriod: "JaBodyBoldLarge",
      suffix: "JaBodyLightSmall",
    },
    large: {
      euro: "JaTagBlackLarge",
      cents: "JaTagBlackDecimalLarge",
      currency: "JaTagBlackUnitLarge",
      billingPeriod: "JaBodyBoldLarge",
      suffix: "JaBodyLightSmall",
    },
  },
};

export const gapMapping: Record<
  PrizeSize,
  { [Property in "eurosToCents" | "rows"]: SpaceVariant }
> = {
  small: {
    eurosToCents: "04",
    rows: "12",
  },
  medium: {
    eurosToCents: "06",
    rows: "16",
  },
  large: {
    eurosToCents: "08",
    rows: "20",
  },
};
