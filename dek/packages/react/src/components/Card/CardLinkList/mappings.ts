import { Brand } from "../../../theme/theme";
import { TypographyVariant } from "../../Typography/Typography";

export const typoMap: Record<
  Brand,
  Record<"desktop" | "mobile", TypographyVariant>
> = {
  congstarWeb: {
    desktop: "BodyBold14",
    mobile: "BodyBold14",
  },
  congstarApp: {
    desktop: "CongstarAppBodyBoldMedium",
    mobile: "CongstarAppBodyBoldMedium",
  },
  penny: {
    desktop: "PennyBodyBoldMedium",
    mobile: "PennyBodyBoldMedium",
  },
  ja: {
    desktop: "JaBodyBoldMedium",
    mobile: "JaBodyBoldMedium",
  },
};
