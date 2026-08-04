"use client";

import React, { forwardRef, ElementRef } from "react";
import { ProgressBarProps } from "./ProgressBar.types";
import * as Styled from "./ProgressBar.styles";

export const ProgressBar = forwardRef<
  ElementRef<typeof Styled.Root>,
  ProgressBarProps
>(
  (
    { progress, size, color = "yellow", max = 100, ...rest }: ProgressBarProps,
    ref,
  ) => {
    const visualProgress = (progress / max) * 100;
    return (
      <Styled.Root ref={ref} role="presentation" $size={size} {...rest}>
        <Styled.Fill $progress={visualProgress} $color={color} />
      </Styled.Root>
    );
  },
);
ProgressBar.displayName = "ProgressBar";
