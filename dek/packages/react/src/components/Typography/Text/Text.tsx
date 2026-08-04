"use client";

import React, { ElementRef, forwardRef } from "react";
import { TextProps } from "./Text.types";
import * as Styled from "./Text.styles";

export const Text = forwardRef<ElementRef<typeof Styled.Root>, TextProps>(
  (
    { children, size, as, variant, color, trimmed, ...rest }: TextProps,
    ref,
  ) => {
    return (
      <Styled.Root
        size={size}
        as={as}
        $color={color}
        $variant={variant}
        $trimmed={trimmed}
        ref={ref}
        {...rest}
      >
        {children}
      </Styled.Root>
    );
  },
);
Text.displayName = "Text";
