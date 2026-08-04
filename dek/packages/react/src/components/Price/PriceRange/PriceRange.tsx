"use client";

import React, { ElementRef, forwardRef } from "react";
import { PriceRangeProps } from "./PriceRange.types";
import * as Styled from "../shared/Price.styles";
import { Amount, BillingPeriod } from "../shared/Price";
import { ModalFootnotes } from "../../Modal/ModalFootnotes";
import { VisuallyHidden as ScreenReaderOnly } from "react-aria";
import { formatBillingPeriodForScreenreader } from "../../../utils/pricing/utils/formatBillingPeriod";

export const PriceRange = forwardRef<
  ElementRef<typeof Styled.Root>,
  PriceRangeProps
>(
  (
    {
      size,
      priceRange,
      suffix,
      billingPeriod,
      footnotes,
      ...rest
    }: PriceRangeProps,
    ref,
  ) => {
    const screenReaderText = `${priceRange.minimum} bis ${priceRange.maximum}€ ${(billingPeriod && formatBillingPeriodForScreenreader(billingPeriod)) || ""}`;
    return (
      <Styled.Root ref={ref} {...rest}>
        <Styled.PriceAndPrefixWrapper size={size}>
          <ScreenReaderOnly> {screenReaderText}</ScreenReaderOnly>
          <Styled.Wrapper size={size}>
            <Amount
              size={size}
              euroString={`${priceRange.minimum} – ${priceRange.maximum}`}
              aria-hidden
            />
            {billingPeriod && (
              <BillingPeriod
                billingPeriod={billingPeriod}
                size={size}
                aria-hidden
              />
            )}
            {footnotes && footnotes.length > 0 && (
              <>
                &nbsp;
                <ModalFootnotes
                  footnotes={footnotes}
                  trigger={<Styled.Asterisk />}
                />
              </>
            )}
          </Styled.Wrapper>
        </Styled.PriceAndPrefixWrapper>
        {suffix && <Styled.Suffix size={size}>{suffix}</Styled.Suffix>}
      </Styled.Root>
    );
  },
);
PriceRange.displayName = "PriceRange";
