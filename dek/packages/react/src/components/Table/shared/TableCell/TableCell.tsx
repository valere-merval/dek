import { forwardRef, ElementRef } from "react";
import { TableCellProps } from "./TableCell.types";

export const TableCell = forwardRef<ElementRef<"div">, TableCellProps>(
  ({ children, ...rest }: TableCellProps, ref) => {
    return (
      <div ref={ref} {...rest} role={`cell`}>
        {children}
      </div>
    );
  },
);
TableCell.displayName = "Table.Cell";
