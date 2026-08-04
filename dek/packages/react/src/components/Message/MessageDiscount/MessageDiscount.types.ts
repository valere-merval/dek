import { MessageContentProps } from "../shared/MessageContent.types";
import { ReactNode } from "react";

export interface MessageDiscount {
  label?: string;
  headline?: string;
  children?: ReactNode;
}

export interface MessageDiscountProps extends Omit<
  MessageContentProps,
  "aria-label"
> {
  discounts: MessageDiscount[];
  "aria-label": string;
}
