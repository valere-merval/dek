"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./StickyBoxSide.styles";
import { StickyBoxSideProps } from "./StickyBoxSide.types";
import { ThemeProvider } from "../../../../theme/ThemeProvider";

export const StickyBoxSide = forwardRef<
  ElementRef<typeof Styled.StickyBoxSide>,
  StickyBoxSideProps
>(({ children, ...rest }: StickyBoxSideProps, ref) => {
  return (
    <Styled.StickyBoxSide data-testid="sticky-box-side" ref={ref} {...rest}>
      <ThemeProvider backgroundColor="darkGrey">{children}</ThemeProvider>
    </Styled.StickyBoxSide>
  );
});
StickyBoxSide.displayName = "StickyBoxSide";
