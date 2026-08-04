"use client";

import React, { ElementRef, forwardRef } from "react";
import { PriceProps } from "./Price.types";
import * as SharedStyled from "../shared/Price.styles";
import * as Styled from "./Price.styles";
import { ModalFootnotes } from "../../Modal/ModalFootnotes";
import { Amount, BillingPeriod } from "../shared/Price";
import { PriceStrikeThrough } from "../PriceStrikeThrough";
import { getCents, getEuros } from "../../../utils/pricing";
import { formatBillingPeriodForScreenreader } from "../../../utils/pricing/utils/formatBillingPeriod";
import { VisuallyHidden as ScreenReaderOnly } from "react-aria";

export const Price = forwardRef<
  ElementRef<typeof SharedStyled.Root>,
  PriceProps
>(
  (
    {
      size,
      footnotes,
      prefix,
      suffix,
      price,
      strikeThroughPrice,
      billingPeriod,
      ...rest
    }: PriceProps,
    ref,
  ) => {
    const screenReaderText = `${prefix || ""} ${getEuros(price)},${getCents(price)}€ ${(billingPeriod && formatBillingPeriodForScreenreader(billingPeriod)) || ""}`;
    return (
      <SharedStyled.Root ref={ref} {...rest}>
        <SharedStyled.PriceAndPrefixWrapper size={size}>
          <ScreenReaderOnly>{screenReaderText}</ScreenReaderOnly>
          {prefix && (
            <Styled.Prefix size={size} aria-hidden>
              {prefix}
            </Styled.Prefix>
          )}
          <SharedStyled.Wrapper size={size}>
            <Amount
              size={size}
              centString={getCents(price)}
              euroString={getEuros(price)}
              aria-hidden
            />
            {billingPeriod && (
              <BillingPeriod billingPeriod={billingPeriod} size={size}>
                {footnotes && footnotes.length > 0 && (
                  <>
                    &nbsp;
                    <ModalFootnotes
                      footnotes={footnotes}
                      trigger={<SharedStyled.Asterisk />}
                    />
                  </>
                )}
              </BillingPeriod>
            )}
            {strikeThroughPrice != undefined && price < strikeThroughPrice && (
              <>
                &nbsp;
                <PriceStrikeThrough price={strikeThroughPrice} size={size} />
              </>
            )}
          </SharedStyled.Wrapper>
        </SharedStyled.PriceAndPrefixWrapper>
        {suffix && (
          <SharedStyled.Suffix size={size}>{suffix}</SharedStyled.Suffix>
        )}
      </SharedStyled.Root>
    );
  },
);
Price.displayName = "Price";
