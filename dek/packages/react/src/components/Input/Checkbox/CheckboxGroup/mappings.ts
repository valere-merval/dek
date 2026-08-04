import { Brand } from "../../../../theme/theme";
import { TypographyVariant } from "../../../Typography/Typography";

export const typoMap: Record<
  Brand,
  Record<"desktop" | "mobile", TypographyVariant>
> = {
  congstarWeb: {
    desktop: "HeadlineBold20",
    mobile: "BodyBold16",
  },
  congstarApp: {
    desktop: "CongstarAppHeadlineBoldMedium",
    mobile: "CongstarAppHeadlineBoldMedium",
  },
  ja: {
    desktop: "JaHeadlineMedium",
    mobile: "JaHeadlineMedium",
  },
  penny: {
    desktop: "PennyHeadlineMedium",
    mobile: "PennyHeadlineMedium",
  },
};
