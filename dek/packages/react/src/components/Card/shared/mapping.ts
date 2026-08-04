import { SizeVariant } from "../../../theme/mappings/size";
import { SpaceVariant } from "../../../theme/mappings/space";
import { CardSize } from "./Card.types";
import { Brand } from "../../../theme/theme";

export type CardOptions = {
  paddingX: SpaceVariant;
  paddingY: SpaceVariant;
  borderRadius: SizeVariant;
};

export const CardOptionMap: Record<
  Brand,
  Record<
    CardSize,
    {
      mobile: CardOptions;
      desktop: CardOptions;
    }
  >
> = {
  congstarWeb: {
    extraSmall: {
      mobile: {
        paddingX: "16",
        paddingY: "16",
        borderRadius: "12",
      },
      desktop: {
        paddingX: "16",
        paddingY: "16",
        borderRadius: "12",
      },
    },
    small: {
      mobile: {
        paddingX: "16",
        paddingY: "16",
        borderRadius: "12",
      },
      desktop: {
        paddingX: "24",
        paddingY: "24",
        borderRadius: "16",
      },
    },
    medium: {
      mobile: {
        paddingX: "16",
        paddingY: "16",
        borderRadius: "16",
      },
      desktop: {
        paddingX: "32",
        paddingY: "32",
        borderRadius: "24",
      },
    },
    large: {
      mobile: {
        paddingX: "16",
        paddingY: "16",
        borderRadius: "24",
      },
      desktop: {
        paddingX: "40",
        paddingY: "40",
        borderRadius: "32",
      },
    },
    extraLarge: {
      mobile: {
        paddingX: "16",
        paddingY: "16",
        borderRadius: "32",
      },
      desktop: {
        paddingX: "40",
        paddingY: "40",
        borderRadius: "40",
      },
    },
  },
  congstarApp: {
    extraSmall: {
      mobile: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "12",
      },
      desktop: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "12",
      },
    },
    small: {
      mobile: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "12",
      },
      desktop: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "12",
      },
    },
    medium: {
      mobile: {
        paddingX: "20",
        paddingY: "16",
        borderRadius: "16",
      },
      desktop: {
        paddingX: "20",
        paddingY: "16",
        borderRadius: "16",
      },
    },
    large: {
      mobile: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
      desktop: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
    },
    extraLarge: {
      mobile: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
      desktop: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
    },
  },
  penny: {
    extraSmall: {
      mobile: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
      desktop: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
    },
    small: {
      mobile: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
      desktop: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
    },
    medium: {
      mobile: {
        paddingX: "20",
        paddingY: "16",
        borderRadius: "15",
      },
      desktop: {
        paddingX: "20",
        paddingY: "16",
        borderRadius: "15",
      },
    },
    large: {
      mobile: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
      desktop: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
    },
    extraLarge: {
      mobile: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
      desktop: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
    },
  },
  ja: {
    extraSmall: {
      mobile: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
      desktop: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
    },
    small: {
      mobile: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
      desktop: {
        paddingX: "16",
        paddingY: "12",
        borderRadius: "15",
      },
    },
    medium: {
      mobile: {
        paddingX: "20",
        paddingY: "16",
        borderRadius: "15",
      },
      desktop: {
        paddingX: "20",
        paddingY: "16",
        borderRadius: "15",
      },
    },
    large: {
      mobile: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
      desktop: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
    },
    extraLarge: {
      mobile: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
      desktop: {
        paddingX: "24",
        paddingY: "20",
        borderRadius: "20",
      },
    },
  },
};
