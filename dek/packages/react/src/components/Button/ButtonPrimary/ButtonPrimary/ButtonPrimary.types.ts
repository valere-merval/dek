import { WithTestId } from "../../../propTypes";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonPrimaryVariant = "primary" | "outlined" | "inverted";
export type ButtonPrimarySize = "medium" | "large";
export type ButtonPrimaryFullWidth =
  | boolean
  | { mobile: boolean; desktop: boolean };

export interface ButtonPrimaryProps
  extends ComponentPropsWithoutRef<"button">,
    WithTestId {
  isLoading?: boolean;
  variant?: ButtonPrimaryVariant;
  size?: ButtonPrimarySize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: ButtonPrimaryFullWidth;
  asChild?: boolean;
}

export interface IconProps {
  $startIcon?: ReactNode;
  $endIcon?: ReactNode;
  $size?: ButtonPrimarySize;
  $isLoading?: boolean;
}

export interface ChildrenWrapperProps extends IconProps {
  children: ReactNode;
}
