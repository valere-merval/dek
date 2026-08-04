import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps, WithTestId } from "../../propTypes";

export type LabelPromotedColor =
  | "black"
  | "pink"
  | "jaWhite"
  | "jaBlack"
  | "pennyWhite"
  | "pennyMidnightBlue";

export interface LabelPromotedProps
  extends ComponentPropsWithoutRef<"div">,
    WithTestId,
    StyledComponentsBaseProps {
  decorativeColor?: LabelPromotedColor;
}
