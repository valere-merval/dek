import { TypographyVariant } from "../Typography";
import { TagSize } from "./Tag.types";

export const typoMap: Record<
  TagSize,
  Record<"desktop" | "mobile", TypographyVariant>
> = {
  large: {
    desktop: "TagBold24",
    mobile: "TagBold20",
  },
  medium: {
    desktop: "TagBold20",
    mobile: "TagBold16",
  },
  small: {
    desktop: "TagBold16",
    mobile: "TagBold16",
  },
};
