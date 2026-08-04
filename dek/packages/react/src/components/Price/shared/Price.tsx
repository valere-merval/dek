import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./Price.styles";
import { BillingPeriodProps, PriceAmountProps } from "./Price.types";
import { formatBillingPeriod } from "../../../utils/pricing";

export const Amount = forwardRef<
  ElementRef<typeof Styled.Amount>,
  PriceAmountProps
>(({ euroString, centString, size, ...rest }: PriceAmountProps, ref) => {
  return (
    <Styled.Amount size={size} ref={ref} {...rest}>
      <Styled.Euro size={size}>{euroString}</Styled.Euro>
      <div>
        {centString && parseInt(centString) > 0 && (
          <Styled.Cent size={size}>{centString}</Styled.Cent>
        )}
        <Styled.Currency size={size}>€</Styled.Currency>
      </div>
    </Styled.Amount>
  );
});
Amount.displayName = "Price.Amount";

export const BillingPeriod = forwardRef<
  ElementRef<typeof Styled.BillingPeriod>,
  BillingPeriodProps
>(({ billingPeriod, children, ...rest }: BillingPeriodProps, ref) => {
  return (
    <Styled.BillingPeriod ref={ref} {...rest}>
      &nbsp;
      <span aria-hidden>{formatBillingPeriod(billingPeriod)}</span>
      {children}
    </Styled.BillingPeriod>
  );
});
BillingPeriod.displayName = "Price.BillingPeriod";
