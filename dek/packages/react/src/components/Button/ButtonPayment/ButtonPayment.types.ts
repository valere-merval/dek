import { WithTestId } from "../../propTypes";
import { PaymentMethod } from "../../PaymentIcon/PaymentIcon.types";
import { ComponentProps } from "react";

export type ButtonPaymentSize = "medium" | "large";
export type ButtonPaymentFullWidth =
  | boolean
  | { mobile: boolean; desktop: boolean };

export interface ButtonPaymentProps
  extends ComponentProps<"button">, WithTestId {
  size?: ButtonPaymentSize;
  paymentMethod: PaymentMethod;
  fullWidth?: ButtonPaymentFullWidth;
}

export interface IconProps {
  size?: ButtonPaymentSize;
}
