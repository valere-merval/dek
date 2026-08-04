"use client";

import React, { ElementRef, forwardRef } from "react";
import { TagProps } from "./Tag.types";
import * as Styled from "./Tag.styles";

export const Tag = forwardRef<ElementRef<typeof Styled.Root>, TagProps>(
  ({ children, size, as, color, ...rest }: TagProps, ref) => {
    return (
      <Styled.Root size={size} as={as} $color={color} ref={ref} {...rest}>
        {children}
      </Styled.Root>
    );
  },
);
Tag.displayName = "Tag";
