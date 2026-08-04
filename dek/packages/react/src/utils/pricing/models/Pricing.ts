import { BillingPeriod } from "./BillingPeriod";

export type Price = {
  billingPeriod: BillingPeriod;
  amount: number;
};
