import { Brand } from "../../theme/theme";
import { size } from "../../theme/mappings/size";

export type SizeVariant = keyof typeof size;
export const sizeMapping: Record<Brand, SizeVariant> = {
  congstarWeb: "02",
  congstarApp: "01",
  ja: "01",
  penny: "01",
};
