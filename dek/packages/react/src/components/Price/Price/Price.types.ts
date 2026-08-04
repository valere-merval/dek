import { TypographyProps } from "../../Typography/Typography";
import { BillingPeriod as BillingPeriodEnum } from "../../../utils/pricing/";
import { ReactNode } from "react";
import { Footnote } from "../../Modal/ModalFootnotes";
import { PriceMediaSize } from "../shared/Price.types";

export interface PriceProps {
  /**
   * The component automatically responds to the viewport depending on the values set for the mobile and desktop viewports.
   */
  size: PriceMediaSize;
  price: number;
  billingPeriod?: BillingPeriodEnum;
  prefix?: ReactNode;
  suffix?: string;
  strikeThroughPrice?: number;
  footnotes?: Footnote[];
}

export interface OldPriceProps
  extends Omit<TypographyProps, "variant" | "color" | "as"> {
  strikeThroughPrice: number;
}
