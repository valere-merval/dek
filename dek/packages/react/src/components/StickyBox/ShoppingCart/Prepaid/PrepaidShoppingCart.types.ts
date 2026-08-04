import { MouseEvent } from "react";
import { ReactElement, ReactNode } from "react";
import { PaymentMethod } from "../../../PaymentIcon/PaymentIcon.types";
import { ListDescriptionProps } from "../../../List/List.types";
import { PrepaidBillingPeriod } from "../../Base/Prepaid.types";

export type Option = {
  title: string;
  amount: number;
};

export type PrepaidPriceElement = {
  billingPeriod: PrepaidBillingPeriod;
  totalPriceAmount: number;
  starterKitAmount: number;
};

export enum PrepaidPlanType {
  ALLNET = "allnet",
  YEAR = "year",
  PWIW = "prepaid-wie-ich-will",
}

export type PrepaidPlanElement = {
  type: PrepaidPlanType;
};

export interface PrepaidShoppingCartProps {
  listItems: ReactElement<PrepaidShoppingCartListItemProps>[];
  priceElement: PrepaidPriceElement;
  planElement: PrepaidPlanElement;
  checkoutUrl?: string;
  checkoutButtonText?: string;
  paymentMethods?: PaymentMethod[];
  children?: ReactNode;
  onCheckout?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type PrepaidShoppingCartListItemProps = ListDescriptionProps;
