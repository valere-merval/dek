import { Brand } from "../../../theme/theme";
import { TypographyVariant } from "../../Typography/Typography";

export const itemHeadlineMapping: Record<
  Brand,
  Record<"desktop" | "mobile", TypographyVariant>
> = {
  congstarWeb: {
    desktop: "HeadlineBold24",
    mobile: "HeadlineBold20",
  },
  congstarApp: {
    desktop: "CongstarAppHeadlineBoldLarge",
    mobile: "CongstarAppHeadlineBoldMedium",
  },
  ja: {
    desktop: "JaHeadlineLarge",
    mobile: "JaHeadlineMedium",
  },
  penny: {
    desktop: "PennyHeadlineLarge",
    mobile: "PennyHeadlineMedium",
  },
};
