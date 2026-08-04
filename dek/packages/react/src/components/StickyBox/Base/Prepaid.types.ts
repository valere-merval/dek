import { BillingPeriod } from "../../Price/Price";

export type PrepaidBillingPeriod = Exclude<
  BillingPeriod,
  BillingPeriod.ONE_TIME | BillingPeriod.MONTHLY | BillingPeriod.USAGE
>;

export const mapBillingPeriod = (billingPeriod: PrepaidBillingPeriod) => {
  switch (billingPeriod) {
    case BillingPeriod.FOUR_WEEKS:
      return "4 Wochen";
    case BillingPeriod.SIX_MONTHS:
      return "6 Monate";
    case BillingPeriod.TWELVE_MONTHS:
      return "12 Monate";
    case BillingPeriod.THIRTY_DAYS:
      return "30 Tage";
  }
};
