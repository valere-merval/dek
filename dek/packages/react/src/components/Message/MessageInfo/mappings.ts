import { Brand } from "../../../theme/theme";
import { TextSize } from "../../Typography/Text";
import { SpaceVariant } from "../../../theme/mappings/space";
import { SizeVariant } from "../../../theme/mappings/size";

export const headlineSize: Record<Brand, TextSize> = {
  congstarWeb: "large",
  congstarApp: "medium",
  ja: "medium",
  penny: "medium",
};

export const headlineGap: Record<Brand, SpaceVariant> = {
  congstarWeb: "12",
  congstarApp: "08",
  ja: "08",
  penny: "08",
};

export const iconSize: Record<Brand, SizeVariant> = {
  congstarWeb: "24",
  congstarApp: "16",
  ja: "16",
  penny: "16",
};

export const iconTranslateY: Record<
  Brand,
  { mobile: string; desktop: string }
> = {
  congstarWeb: { mobile: "-1px", desktop: "1px" },
  congstarApp: { mobile: "2px", desktop: "2px" },
  ja: { mobile: "2px", desktop: "2px" },
  penny: { mobile: "2px", desktop: "2px" },
};
