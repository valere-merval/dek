import { BackgroundColor } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";

export const backgroundColorMapping: Partial<
  Record<
    BackgroundColor,
    {
      backgroundColor: ColorVariant;
      backgroundColorHover: ColorVariant;
    }
  >
> = {
  black: {
    backgroundColor: "NeutralPrimaryBlack",
    backgroundColorHover: "NeutralShape20",
  },
  white: {
    backgroundColor: "NeutralPrimaryWhite",
    backgroundColorHover: "NeutralShape80",
  },
};
