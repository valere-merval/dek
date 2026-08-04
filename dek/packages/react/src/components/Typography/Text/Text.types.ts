import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps, WithTestId } from "../../propTypes";
import { TextColor } from "../themeBackgroundColorMapping";

export type TextVariant = "light" | "bold";
export type TextSize = "small" | "medium" | "large";

export interface TextProps
  extends ComponentPropsWithoutRef<"p">,
    WithTestId,
    StyledComponentsBaseProps {
  size: TextSize;
  variant: TextVariant;
  color?: TextColor;
  trimmed?: boolean;
}
