import { ComponentPropsWithoutRef, ReactNode } from "react";

export type Alignment = "top" | "center";

export interface ButtonMicroIconProps
  extends ComponentPropsWithoutRef<"button"> {
  icon?: ReactNode;
  label?: string;
  align?: Alignment;
}
