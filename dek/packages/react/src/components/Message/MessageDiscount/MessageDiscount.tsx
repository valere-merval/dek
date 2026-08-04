"use client";

import React, { forwardRef, ElementRef } from "react";
import {
  MessageDiscountProps,
  MessageDiscount as MessageDiscountType,
} from "./MessageDiscount.types";
import * as Styled from "./MessageDiscount.styles";
import * as MessageStyled from "../shared/MessageContent.styles";
import { LabelPromoted } from "../../Typography/LabelPromoted";

export const MessageDiscount = forwardRef<
  ElementRef<typeof MessageStyled.Root>,
  MessageDiscountProps
>(
  (
    {
      discounts,
      variant = "outlined",
      fullWidth,
      "aria-label": ariaLabel,
      ...rest
    }: MessageDiscountProps,
    ref,
  ) => {
    return (
      <Styled.Root
        $variant={variant}
        $fullWidth={fullWidth}
        ref={ref}
        {...rest}
      >
        <Styled.DiscountList aria-label={ariaLabel}>
          {discounts.map((discount, index) => (
            <React.Fragment key={index}>
              <Discount {...discount} />
              <Styled.DiscountDivider
                $noGap={true}
                $orientation="horizontal"
                aria-hidden
              />
            </React.Fragment>
          ))}
        </Styled.DiscountList>
      </Styled.Root>
    );
  },
);
MessageDiscount.displayName = "MessageDiscount";

const Discount = (discount: MessageDiscountType) => {
  const { label, headline, children } = discount;

  return (
    <Styled.DiscountItem>
      <Styled.DiscountItemWrapper>
        {label && <LabelPromoted>{label}</LabelPromoted>}
        <Styled.DiscountDetailsWrapper>
          {headline && <Styled.Headline>{headline}</Styled.Headline>}
          {children && <>{children}</>}
        </Styled.DiscountDetailsWrapper>
      </Styled.DiscountItemWrapper>
    </Styled.DiscountItem>
  );
};
