import React from "react";
import { ElementRef, forwardRef } from "react";
import * as Styled from "./SelectionBoxGrid.styles";
import { SelectionBoxGridProps } from "./SelectionBoxGrid.types";

export const SelectionBoxGrid = forwardRef<
  ElementRef<typeof Styled.Root>,
  SelectionBoxGridProps
>(({ children }: SelectionBoxGridProps, ref) => {
  return (
    <Styled.GridContainer>
      <Styled.Root ref={ref}>{children}</Styled.Root>
    </Styled.GridContainer>
  );
});
SelectionBoxGrid.displayName = `SelectionBox.Grid`; // this needs to be overridden!
