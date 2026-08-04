import { ComponentPropsWithoutRef } from "react";
import { ColorVariant } from "../../../theme/mappings/color";

export type LoaderSpinnerSize = "medium" | "large";

export interface LoaderSpinnerProps extends ComponentPropsWithoutRef<"svg"> {
  stroke?: ColorVariant;
  fallbackText?: string;
  size?: LoaderSpinnerSize;
}
