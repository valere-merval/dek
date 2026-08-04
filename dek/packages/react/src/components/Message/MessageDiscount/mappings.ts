import { Brand } from "../../../theme/theme";
import { TypographyVariant } from "../../Typography/Typography";
import { SpaceVariant } from "../../../theme/mappings/space";

export const headlineTypographyMap: Record<
  Brand,
  {
    mobile: TypographyVariant;
    desktop: TypographyVariant;
  }
> = {
  congstarWeb: {
    desktop: "HeadlineBold20",
    mobile: "BodyBold16",
  },
  congstarApp: {
    desktop: "CongstarAppHeadlineBoldMedium",
    mobile: "CongstarAppBodyBoldMedium",
  },
  penny: {
    desktop: "PennyHeadlineMedium",
    mobile: "PennyBodyBoldMedium",
  },
  ja: {
    desktop: "JaHeadlineMedium",
    mobile: "JaBodyBoldMedium",
  },
};

export const contentGap: Record<
  Brand,
  {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  }
> = {
  congstarWeb: {
    mobile: "20",
    desktop: "24",
  },
  congstarApp: {
    mobile: "16",
    desktop: "24",
  },
  ja: {
    mobile: "16",
    desktop: "24",
  },
  penny: {
    mobile: "16",
    desktop: "24",
  },
};
