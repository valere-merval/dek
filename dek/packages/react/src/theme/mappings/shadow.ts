import * as tokens from "@fair/tokens";
import { ExtractTokenMapType } from "./extractTokenMapType";

export type ShadowVariant = keyof ExtractTokenMapType<"shadow">;

export const shadow: ExtractTokenMapType<"shadow"> = {
  Opacity50Elevation1: tokens.shadowOpacity50Elevation1,
  Opacity50Elevation2: tokens.shadowOpacity50Elevation2,
  Opacity50Elevation3: tokens.shadowOpacity50Elevation3,
  Opacity50Elevation4: tokens.shadowOpacity50Elevation4,
  Opacity50Elevation5: tokens.shadowOpacity50Elevation5,
  Opacity15Elevation1: tokens.shadowOpacity15Elevation1,
  Opacity15Elevation2: tokens.shadowOpacity15Elevation2,
  Opacity15Elevation3: tokens.shadowOpacity15Elevation3,
  Opacity15Elevation4: tokens.shadowOpacity15Elevation4,
  Opacity15Elevation5: tokens.shadowOpacity15Elevation5,
};
