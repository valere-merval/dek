"use client";

import { forwardRef } from "react";
import { PriceSummarySubHeadlineProps } from "./PriceSummarySubHeadline.types";
import { PriceText } from "../PriceSummaryBase.styles";
import { formatPrice } from "../../../../../utils/pricing";

export const PriceSummarySubHeadline = forwardRef<
  HTMLParagraphElement,
  PriceSummarySubHeadlineProps
>(({ children, price, ...rest }, ref) => {
  return (
    <PriceText ref={ref} size="medium" variant="bold" forwardedAs="p" {...rest}>
      {children}
      <PriceText size="medium" variant="bold" forwardedAs="span" trimmed $price>
        {formatPrice(price)}
      </PriceText>
    </PriceText>
  );
});
PriceSummarySubHeadline.displayName = "PriceSummarySubHeadline";
