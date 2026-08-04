import { LabelSize } from "./Label.types";
import { TypographyVariant } from "../Typography";
import { Brand } from "../../../theme/theme";

export const typoMap: Record<Brand, Record<LabelSize, TypographyVariant>> = {
  congstarWeb: {
    extraLarge: "LabelBold20",
    large: "LabelBold16",
    medium: "LabelBold14",
    small: "LabelBold12",
  },
  congstarApp: {
    extraLarge: "LabelBold20",
    large: "CongstarAppLabelLarge",
    medium: "CongstarAppLabelMedium",
    small: "CongstarAppLabelSmall",
  },
  ja: {
    extraLarge: "LabelBold20",
    large: "LabelBold16",
    medium: "LabelBold14",
    small: "LabelBold12",
  },
  penny: {
    extraLarge: "LabelBold20",
    large: "LabelBold16",
    medium: "LabelBold14",
    small: "LabelBold12",
  },
};
