"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./LabelPromoted.styles";
import { LabelPromotedProps } from "./LabelPromoted.types";

export const LabelPromoted = forwardRef<
  ElementRef<typeof Styled.LabelPromoted>,
  LabelPromotedProps
>(
  (
    {
      children,
      decorativeColor,
      as = "div",
      "data-testid": testId = "label-promoted",
      ...rest
    }: LabelPromotedProps,
    ref,
  ) => {
    return children?.toString().trim() ? (
      <Styled.LabelPromoted
        as={as}
        color="inherit"
        $decorativeColor={decorativeColor}
        data-testid={testId}
        ref={ref}
        {...rest}
      >
        {children}
      </Styled.LabelPromoted>
    ) : null;
  },
);
LabelPromoted.displayName = "LabelPromoted";
