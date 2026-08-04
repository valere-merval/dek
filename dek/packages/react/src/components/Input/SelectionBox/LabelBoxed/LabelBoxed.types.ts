import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StyledComponentsBaseProps } from "../../../propTypes";

export type LabelBoxedSize = "medium" | "large";

export interface LabelBoxedProps
  extends ComponentPropsWithoutRef<"label">,
    StyledComponentsBaseProps {
  discountText?: ReactNode;
  labelText?: string;
  name?: string;
}
