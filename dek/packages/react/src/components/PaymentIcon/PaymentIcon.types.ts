import { ComponentPropsWithoutRef } from "react";

export interface PaymentIconProps extends ComponentPropsWithoutRef<"div"> {
  paymentMethod: PaymentMethod;
  size?: PaymentIconSize;
}

export type PaymentIconSize = "small" | "medium";

export enum PaymentMethod {
  PAYPAL = "PayPal",
  VISA = "Visa",
  MASTERCARD = "Mastercard",
  DIRECT_DEBIT = "Sepa Lastschrift",
  KLARNA = "Klarna",
  GOOGLE_PAY = "Google Pay",
  APPLE_PAY = "Apple Pay",
}
