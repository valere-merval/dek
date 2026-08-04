"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./HeadlineHighlighted.styles";
import { HeadlineHighlightedProps } from "./HeadlineHighlighted.types";

export const HeadlineHighlighted = forwardRef<
  ElementRef<typeof Styled.HeadlineHighlighted>,
  HeadlineHighlightedProps
>(
  (
    {
      children,
      size = "medium",
      decorativeColor = "yellow",
      as = "h2",
      className,
      ...rest
    }: HeadlineHighlightedProps,
    ref,
  ) => {
    return (
      // wrapper to shield component off of external styling like display:flex;
      <Styled.HeadlineWrapper size={size} className={className}>
        <Styled.HeadlineHighlighted
          as={as}
          size={size}
          $decorativeColor={decorativeColor}
          ref={ref}
          {...rest}
        >
          {children}
        </Styled.HeadlineHighlighted>
      </Styled.HeadlineWrapper>
    );
  },
);
HeadlineHighlighted.displayName = "HeadlineHighlighted";
