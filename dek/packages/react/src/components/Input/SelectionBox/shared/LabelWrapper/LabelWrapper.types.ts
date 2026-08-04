import { ComponentPropsWithoutRef, ReactNode } from "react";
import { BillingPeriod } from "../../../../Price/Price";

export interface LabelWrapperProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> {
  label: string | ReactNode;
  priceDetails?: PriceDetails;
}

export type PriceDetails = {
  price: number;
  billingPeriod?: BillingPeriod;
  prefix?: string;
};
