"use client";

import React, { ElementRef, forwardRef } from "react";
import { LabelProps } from "./Label.types";
import * as Styled from "./Label.styles";

export const Label = forwardRef<ElementRef<typeof Styled.Root>, LabelProps>(
  ({ children, size, as, color, ...rest }: LabelProps, ref) => {
    return (
      <Styled.Root size={size} as={as} $color={color} ref={ref} {...rest}>
        {children}
      </Styled.Root>
    );
  },
);
Label.displayName = "Label";
