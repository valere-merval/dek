import { typography } from "../../../theme/mappings/typography";
import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps, WithTestId } from "../../propTypes";
import { TextColor } from "../themeBackgroundColorMapping";

export type TypographyColor = "white" | "black" | "inherit";
export type TypographyVariant = keyof typeof typography;

export interface TypographyProps
  extends StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"div">,
    WithTestId {
  color?: TextColor;
  variant: TypographyVariant;
  // transient prop necessary for radix slot usage
  $variant?: TypographyVariant;
  trimFont?: boolean;
  // transient prop necessary for radix slot usage
  $trimFont?: boolean;
  asChild?: boolean;
}
