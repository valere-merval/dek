"use client";

import React, { ElementRef, forwardRef } from "react";
import { ChipProps } from "./Chip.types";
import * as Styled from "./Chip.styles";

/**
 Note: The Chip component does not support the `onChange` prop but rather the `onPressedChange` prop.
 For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/toggle#root">Documentation</a>
 */
export const Chip = forwardRef<ElementRef<typeof Styled.Root>, ChipProps>(
  ({ children, ...rest }: ChipProps, ref) => {
    return (
      <Styled.Root ref={ref} {...rest}>
        <span>{children}</span>
        <Styled.ClosingIndicator />
      </Styled.Root>
    );
  },
);
Chip.displayName = "Chip";
