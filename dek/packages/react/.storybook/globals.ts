import { BackgroundColor, Brand } from "../src";
import { AllowedBackgroundColors } from "../src/theme/theme";

export interface Globals {
  backgroundColor?: BackgroundColor;
  brand?: Brand;
  expandTextSpacing?: "true" | "false";
  allowedBackgroundColors?: Partial<AllowedBackgroundColors>;
  noPaddingX?: boolean;
}

export const setInitialGlobals = ({
  backgroundColor,
  brand,
  expandTextSpacing,
}: Globals) => ({
  backgroundColor: backgroundColor || "black",
  brand: brand || "congstarWeb",
  expandTextSpacing: expandTextSpacing || false,
});
