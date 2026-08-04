"use client";

import { ElementRef, forwardRef } from "react";
import { LabelBoxedProps } from "./LabelBoxed.types";
import * as Styled from "./LabelBoxed.styles";
import { ThemeProvider } from "../../../../theme/ThemeProvider";

export const LabelBoxed = forwardRef<
  ElementRef<typeof Styled.Root>,
  LabelBoxedProps
>(
  (
    { children, as, labelText, discountText, ...rest }: LabelBoxedProps,
    ref,
  ) => (
    <Styled.Root ref={ref} as={as} {...rest}>
      <ThemeProvider backgroundColor="lightGrey">
        <Styled.Content>
          {labelText && (
            <Styled.LabelPromoted decorativeColor="black">
              {labelText}
            </Styled.LabelPromoted>
          )}
          {children}
        </Styled.Content>
        {discountText && (
          <Styled.Discount variant="TagBold16" color="white">
            {discountText}
          </Styled.Discount>
        )}
      </ThemeProvider>
    </Styled.Root>
  ),
);
LabelBoxed.displayName = "LabelBoxed";
