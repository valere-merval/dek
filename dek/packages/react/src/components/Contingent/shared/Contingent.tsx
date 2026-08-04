import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./Contingent.styles";
import {
  ContingentAmountProps,
  ContingentSuffixProps,
} from "./Contingent.types";

export const Amount = forwardRef<
  ElementRef<typeof Styled.AmountWrapper>,
  ContingentAmountProps
>(({ amountString, unit, size, ...rest }: ContingentAmountProps, ref) => {
  return (
    <Styled.AmountWrapper size={size} ref={ref} aria-hidden {...rest}>
      <Styled.Amount size={size}>{amountString}</Styled.Amount>
      <div>
        <Styled.AmountUnit size={size}>{unit}</Styled.AmountUnit>
      </div>
    </Styled.AmountWrapper>
  );
});
Amount.displayName = "Contingent.Amount";

export const Suffix = forwardRef<
  ElementRef<typeof Styled.SuffixWrapper>,
  ContingentSuffixProps
>(({ children, size }, ref) => {
  return (
    <Styled.SuffixWrapper size={size} ref={ref}>
      {children}
    </Styled.SuffixWrapper>
  );
});
Suffix.displayName = "Contingent.Suffix";
