import { SpaceVariant } from "../../../theme/mappings/space";

export type ItemGapSize = {
  horizontal?: {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  };
  vertical?: {
    mobile: SpaceVariant;
    desktop: SpaceVariant;
  };
};

export const defaultItemGapSize: Required<ItemGapSize> = {
  vertical: { mobile: "12", desktop: "16" },
  horizontal: { mobile: "24", desktop: "32" },
};
