import { forwardRef, ElementRef } from "react";
import { TableCellProps } from "./TableCell.types";

export const TableCell = forwardRef<ElementRef<"div">, TableCellProps>(
  ({ children, role = "cell", ...rest }: TableCellProps, ref) => {
    return (
      <div ref={ref} role={role} {...rest}>
        {children}
      </div>
    );
  },
);
TableCell.displayName = "Table.Cell";
