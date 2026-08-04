import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as Styled from "./BoxDevice.styles";

export const BoxDeviceGrid = forwardRef<
  ElementRef<typeof Styled.GridContainer>,
  ComponentPropsWithoutRef<"div">
>(({ children, ...rest }: ComponentPropsWithoutRef<"div">, ref) => {
  return (
    <Styled.GridContainer ref={ref} {...rest}>
      <Styled.Grid>{children}</Styled.Grid>
    </Styled.GridContainer>
  );
});
BoxDeviceGrid.displayName = "BoxDeviceGrid";
