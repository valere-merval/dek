"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "../shared/Contingent.styles";
import { Amount, Suffix } from "../shared/Contingent";
import { ContingentRangeProps } from "./ContingentRange.types";
import { VisuallyHidden as ScreenReader } from "react-aria";
import { formatContingentUnitForScreenreader } from "../shared/utils/formatContingentUnitForScreenReader";

export const ContingentRange = forwardRef<
  ElementRef<typeof Styled.Root>,
  ContingentRangeProps
>(({ size, amountRange, suffix, unit, ...rest }: ContingentRangeProps, ref) => {
  const screenReaderText = `${amountRange.minimum} - ${amountRange.maximum} ${formatContingentUnitForScreenreader(unit)}`;
  return (
    <Styled.Root size={size} ref={ref} {...rest}>
      <Styled.Wrapper size={size}>
        <ScreenReader>{screenReaderText}</ScreenReader>
        <Amount
          size={size}
          unit={unit}
          amountString={`${amountRange.minimum} – ${amountRange.maximum}`}
        />
        {suffix && <Suffix size={size}>{suffix}</Suffix>}
      </Styled.Wrapper>
    </Styled.Root>
  );
});
ContingentRange.displayName = "ContingentRange";
