import { ElementRef, forwardRef } from "react";
import { TableRowProps } from "./TableRow.types";

export const TableRow = forwardRef<ElementRef<"div">, TableRowProps>(
  (props: TableRowProps, ref) => {
    return (
      <div ref={ref} {...props} role="row">
        {props.children}
      </div>
    );
  },
);
TableRow.displayName = "Table.Row";
