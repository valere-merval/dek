"use client";

import React, { ElementRef, forwardRef } from "react";
import { PriceStrikeThroughProps } from "./PriceStrikeThrough.types";
import * as Styled from "./PriceStrikeThrough.styles";
import { formatPrice } from "../../../utils/pricing";

export const PriceStrikeThrough = forwardRef<
  ElementRef<"div">,
  PriceStrikeThroughProps
>(({ price, ...rest }: PriceStrikeThroughProps, ref) => {
  return (
    <Styled.Root ref={ref} {...rest}>
      {"statt "}
      <Styled.StrikeThrough>{formatPrice(price)}</Styled.StrikeThrough>
      <>&nbsp;</>
    </Styled.Root>
  );
});
PriceStrikeThrough.displayName = "PriceStrikeThrough";
