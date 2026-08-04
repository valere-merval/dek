import { ElementRef, forwardRef } from "react";
import { TableRowGroupProps } from "./TableRowGroup.types";

export const TableRowGroup = forwardRef<ElementRef<"div">, TableRowGroupProps>(
  (props: TableRowGroupProps, ref) => {
    return (
      <div ref={ref} {...props} role="rowgroup">
        {props.children}
      </div>
    );
  },
);
TableRowGroup.displayName = "Table.RowGroup";
