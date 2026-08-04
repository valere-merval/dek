import { ComponentProps } from "react";
import { ReactNode } from "react";

export interface ButtonBaseProps extends ComponentProps<"button"> {
  asChild?: boolean;
  childrenWrapperFunction?: (children: ReactNode) => ReactNode;
}
