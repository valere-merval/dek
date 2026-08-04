import { ColorVariant } from "../../../theme/mappings/color";
import { Brand } from "../../../theme/theme";

export const buttonColorMapping: Record<
  Brand,
  {
    color: ColorVariant;
  }
> = {
  congstarWeb: {
    color: "InteractiveBlue",
  },
  congstarApp: {
    color: "InteractiveBlue",
  },
  ja: {
    color: "JaAgave80",
  },
  penny: {
    color: "PennyRed",
  },
};
