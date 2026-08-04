import { ColorVariant } from "../../../../../theme/mappings/color";
import { BackgroundColor } from "../../../../../theme/theme";
import { CellIconStatusType } from "./CellIcon.types";

export const iconColors: Record<
  CellIconStatusType,
  Record<BackgroundColor, ColorVariant>
> = {
  "not-available": {
    black: "StatusOnDarkError",
    darkGrey: "StatusOnDarkError",
    white: "StatusOnLightError",
    lightGrey: "StatusOnLightError",
    blue: "StatusOnLightError",
    jaAgave20: "JaStatusError",
    jaAgave80: "JaStatusError",
    jaAgaveOutlinesSecondary: "JaStatusError",
    jaGeneralWhite: "JaStatusError",
    pennyNeutralLightGrey: "PennyStatusError",
    pennyNeutralWhite: "PennyStatusError",
    pennyRed: "PennyStatusError",
    pennyRedDark: "PennyStatusError",
  },
  available: {
    black: "StatusOnDarkSuccess",
    darkGrey: "StatusOnDarkSuccess",
    white: "StatusOnLightSuccess",
    lightGrey: "StatusOnLightSuccess",
    blue: "StatusOnLightSuccess",
    jaAgave20: "JaStatusSuccess",
    jaAgave80: "JaStatusSuccess",
    jaAgaveOutlinesSecondary: "JaStatusSuccess",
    jaGeneralWhite: "JaStatusSuccess",
    pennyNeutralLightGrey: "PennyStatusSuccess",
    pennyNeutralWhite: "PennyStatusSuccess",
    pennyRed: "PennyStatusSuccess",
    pennyRedDark: "PennyStatusSuccess",
  },
};
