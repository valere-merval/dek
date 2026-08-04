import { TypographyProps } from "../../Typography/Typography";
import { BillingPeriod as BillingPeriodEnum } from "../../../utils/pricing/";

export interface BillingPeriodProps
  extends Omit<TypographyProps, "variant" | "color" | "as"> {
  billingPeriod: BillingPeriodEnum;
  size: PriceMediaSize;
}

export type PrizeSize = "small" | "medium" | "large";

export type PriceMediaSize = {
  mobile: PrizeSize;
  desktop: PrizeSize;
};

export interface PriceAmountProps {
  euroString: string;
  centString?: string;
  size: PriceMediaSize;
}
