import { ElementRef, forwardRef } from "react";
import { CellIconProps } from "./CellIcon.types";
import * as Styled from "./CellIcon.styles";
import { Check, Cross } from "@fair/icons";

export const CellIcon = forwardRef<
  ElementRef<typeof Styled.Root>,
  CellIconProps
>(({ state = "available", ...rest }: CellIconProps, ref) => {
  return (
    <Styled.Root ref={ref} {...rest} $state={state}>
      {state === "available" ? (
        <Check aria-label="verfügbar" role="img" />
      ) : (
        <Cross aria-label="nicht verfügbar" role="img" />
      )}
    </Styled.Root>
  );
});

CellIcon.displayName = "TableComparison.CellIcon";
