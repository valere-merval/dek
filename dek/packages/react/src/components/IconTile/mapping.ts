import { ColorVariant } from "../../theme/mappings/color";
import { SizeVariant } from "../../theme/mappings/size";
import { SpaceVariant } from "../../theme/mappings/space";
import { BackgroundColor, Brand } from "../../theme/theme";
import { IconTileColor, IconTileSize } from "./IconTile.types";
import { BorderRadiusVariant } from "../../theme/mappings/borderRadius";

export const IconTileColorMap: Record<IconTileColor, ColorVariant> = {
  green: "DecorativePrimaryGreen",
  orange: "DecorativePrimaryOrange",
  yellow: "DecorativePrimaryYellow",
  red: "DecorativeSecondaryRed",
  lime: "DecorativeSecondaryLime",
  purple: "DecorativeSecondaryPurple",
  white: "NeutralPrimaryWhite",
  black: "NeutralPrimaryBlack",
};

export const IconTileBorderColorMap: Record<BackgroundColor, ColorVariant> = {
  black: "NeutralPrimaryWhite",
  lightGrey: "NeutralPrimaryBlack",
  darkGrey: "NeutralPrimaryWhite",
  blue: "NeutralPrimaryBlack",
  white: "NeutralPrimaryBlack",
  jaAgave20: "NeutralPrimaryWhite",
  jaAgave80: "NeutralPrimaryWhite",
  jaAgaveOutlinesSecondary: "NeutralPrimaryWhite",
  jaGeneralWhite: "NeutralPrimaryWhite",
  pennyNeutralLightGrey: "NeutralPrimaryWhite",
  pennyNeutralWhite: "NeutralPrimaryWhite",
  pennyRed: "NeutralPrimaryWhite",
  pennyRedDark: "NeutralPrimaryWhite",
};

export const IconTileSizeMap: Record<
  Brand,
  Record<
    IconTileSize,
    {
      icon: SizeVariant;
      padding: SpaceVariant;
      borderRadius: BorderRadiusVariant;
    }
  >
> = {
  congstarWeb: {
    extraSmall: {
      icon: "24",
      padding: "08",
      borderRadius: "12",
    },
    small: {
      icon: "40",
      padding: "08",
      borderRadius: "16",
    },
    medium: {
      icon: "48",
      padding: "12",
      borderRadius: "20",
    },
    large: {
      icon: "64",
      padding: "12",
      borderRadius: "24",
    },
    extraLarge: {
      icon: "72",
      padding: "16",
      borderRadius: "32",
    },
  },
  congstarApp: {
    extraSmall: {
      icon: "24",
      padding: "08",
      borderRadius: "12",
    },
    small: {
      icon: "40",
      padding: "08",
      borderRadius: "16",
    },
    medium: {
      icon: "48",
      padding: "12",
      borderRadius: "12",
    },
    large: {
      icon: "64",
      padding: "08",
      borderRadius: "12",
    },
    extraLarge: {
      icon: "72",
      padding: "16",
      borderRadius: "12",
    },
  },
  ja: {
    extraSmall: {
      icon: "24",
      padding: "08",
      borderRadius: "12",
    },
    small: {
      icon: "40",
      padding: "08",
      borderRadius: "16",
    },
    medium: {
      icon: "48",
      padding: "12",
      borderRadius: "12",
    },
    large: {
      icon: "64",
      padding: "08",
      borderRadius: "12",
    },
    extraLarge: {
      icon: "72",
      padding: "16",
      borderRadius: "12",
    },
  },
  penny: {
    extraSmall: {
      icon: "24",
      padding: "08",
      borderRadius: "12",
    },
    small: {
      icon: "40",
      padding: "08",
      borderRadius: "16",
    },
    medium: {
      icon: "48",
      padding: "12",
      borderRadius: "12",
    },
    large: {
      icon: "64",
      padding: "08",
      borderRadius: "12",
    },
    extraLarge: {
      icon: "72",
      padding: "16",
      borderRadius: "12",
    },
  },
};
