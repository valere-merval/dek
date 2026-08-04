"use client";

import { ElementRef, forwardRef } from "react";
import { BoxProps } from "./Box.types";
import * as Styled from "./Box.styles";

/**
 * This is a generic Box component. Please take a look at the more specific ones first e.g. BoxDevice.
 */
export const Box = forwardRef<ElementRef<typeof Styled.Root>, BoxProps>(
  (
    {
      promotionLabel,
      promotionLabelColor = "black",
      discountText,
      children,
      ...rest
    }: BoxProps, // TODO: Remove the redundant type when issue is resolved: https://github.com/reactjs/react-docgen/issues/883
    ref,
  ) => {
    return (
      <Styled.Root ref={ref} {...rest}>
        {promotionLabel && (
          <Styled.DecorationLabel decorativeColor={promotionLabelColor}>
            {promotionLabel}
          </Styled.DecorationLabel>
        )}
        {children}
        {discountText && (
          <Styled.DiscountText>{discountText}</Styled.DiscountText>
        )}
      </Styled.Root>
    );
  },
);
Box.displayName = "Box";
