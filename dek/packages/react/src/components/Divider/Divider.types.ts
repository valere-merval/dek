import { StyledComponentsBaseProps, WithTestId } from "../propTypes";
import { ComponentPropsWithoutRef } from "react";

export type DividerColor = "darkGrey" | "lightGrey" | "black";
export type DividerOrientation = "vertical" | "horizontal";

export interface DividerProps
  extends
    StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"hr">,
    WithTestId {
  /** The color prop is only usable with congstar brands */
  color?: DividerColor;
  /** Optional centered label. Rendered only on horizontal dividers; ignored when orientation is "vertical". */
  text?: string;
  noGap?: boolean;
  orientation?: DividerOrientation;
}
