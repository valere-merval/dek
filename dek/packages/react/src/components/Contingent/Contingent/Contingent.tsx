"use client";

import React, { ElementRef, forwardRef } from "react";
import {
  ContingentProps,
  ContingentStrikeThroughAmountProps,
} from "./Contingent.types";
import * as Styled from "./Contingent.styles";
import * as SharedStyled from "../shared/Contingent.styles";
import { Wrapper } from "../shared/Contingent.styles";
import { Amount, Suffix } from "../shared/Contingent";
import { VisuallyHidden as ScreenReader } from "react-aria";
import { formatContingentUnitForScreenreader } from "../shared/utils/formatContingentUnitForScreenReader";

export const Contingent = forwardRef<
  ElementRef<typeof SharedStyled.Root>,
  ContingentProps
>(
  (
    {
      size,
      suffix,
      amount,
      unit,
      strikeThroughAmount,
      strikeThroughAmountPrefix,
      ...rest
    }: ContingentProps,
    ref,
  ) => {
    const screenReaderText = `${amount} ${formatContingentUnitForScreenreader(unit)}`;
    return (
      <SharedStyled.Root size={size} ref={ref} {...rest}>
        <Wrapper size={size}>
          <ScreenReader>{screenReaderText}</ScreenReader>
          <Amount size={size} amountString={String(amount)} unit={unit} />
          {suffix && <Suffix size={size}>{suffix}&nbsp;</Suffix>}
          {strikeThroughAmount && amount > strikeThroughAmount && (
            <StrikeThroughAmount
              size={size}
              unit={unit}
              strikeThroughAmountPrefix={strikeThroughAmountPrefix}
              strikeThroughAmount={strikeThroughAmount}
            />
          )}
        </Wrapper>
      </SharedStyled.Root>
    );
  },
);
Contingent.displayName = "Contingent";

const StrikeThroughAmount = forwardRef<
  ElementRef<typeof Styled.StrikeThroughAmount>,
  ContingentStrikeThroughAmountProps
>(
  (
    { strikeThroughAmount, unit, strikeThroughAmountPrefix, size, ...rest },
    ref,
  ) => {
    return (
      <Styled.StrikeThroughAmount size={size} ref={ref} {...rest}>
        {strikeThroughAmountPrefix && strikeThroughAmountPrefix + " "}statt{" "}
        <Styled.StrikeThrough>
          {strikeThroughAmount} {unit}
        </Styled.StrikeThrough>
      </Styled.StrikeThroughAmount>
    );
  },
);
StrikeThroughAmount.displayName = "Contingent.StrikeThroughAmount";
