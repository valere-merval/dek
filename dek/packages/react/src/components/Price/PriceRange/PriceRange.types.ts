import { BillingPeriod as BillingPeriodEnum } from "../../../utils/pricing/";
import { PriceMediaSize } from "../shared/Price.types";
import { Footnote } from "../../Modal/ModalFootnotes";

export type PriceRange = {
  minimum: number;
  maximum: number;
};

export interface PriceRangeProps {
  /**
   * The component automatically responds to the viewport depending on the values set for the mobile and desktop viewports.
   */
  size: PriceMediaSize;
  priceRange: PriceRange;
  suffix?: string;
  billingPeriod?: BillingPeriodEnum;
  footnotes?: Footnote[];
}
