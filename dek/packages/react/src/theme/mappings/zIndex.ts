import * as tokens from "@fair/tokens";
import { ExtractTokenMapType } from "./extractTokenMapType";

export type zIndexVariant = keyof ExtractTokenMapType<"zIndexIndex">;

export const zIndex: ExtractTokenMapType<"zIndexIndex"> = {
  "10": tokens.zIndexIndex10,
  "20": tokens.zIndexIndex20,
  "30": tokens.zIndexIndex30,
  "40": tokens.zIndexIndex40,
  "50": tokens.zIndexIndex50,
  "60": tokens.zIndexIndex60,
  "70": tokens.zIndexIndex70,
  "80": tokens.zIndexIndex80,
  "90": tokens.zIndexIndex90,
  "100": tokens.zIndexIndex100,
  "110": tokens.zIndexIndex110,
  "120": tokens.zIndexIndex120,
  "130": tokens.zIndexIndex130,
  "140": tokens.zIndexIndex140,
  "150": tokens.zIndexIndex150,
  "160": tokens.zIndexIndex160,
};
