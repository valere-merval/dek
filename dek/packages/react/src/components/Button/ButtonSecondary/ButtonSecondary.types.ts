import { WithTestId } from "../../propTypes";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonSecondaryColor = "blue" | "black" | "white";

export interface ButtonSecondaryProps
  extends ComponentPropsWithoutRef<"button">,
    WithTestId {
  color?: ButtonSecondaryColor;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  asChild?: boolean;
}
