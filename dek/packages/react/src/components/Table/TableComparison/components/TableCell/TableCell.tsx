import { forwardRef, ElementRef } from "react";
import { TableCellProps } from "./TableCell.types";
import * as Styled from "./TableCell.styles";

export const TableCell = forwardRef<
  ElementRef<typeof Styled.Root>,
  TableCellProps
>(({ children, ...rest }: TableCellProps, ref) => {
  return (
    <Styled.Root ref={ref} {...rest}>
      {children}
    </Styled.Root>
  );
});
TableCell.displayName = "TableComparison.Cell";
