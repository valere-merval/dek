import { ComponentPropsWithoutRef } from "react";
import { WithTestId } from "../../../propTypes";
import { ButtonPrimaryVariant } from "../ButtonPrimary/ButtonPrimary.types";

export interface ButtonPrimaryCircleProps
  extends ComponentPropsWithoutRef<"button">,
    WithTestId {
  variant?: ButtonPrimaryVariant;
  // transient prop necessary for radix slot usage
  $variant?: ButtonPrimaryVariant;
  asChild?: boolean;
}
