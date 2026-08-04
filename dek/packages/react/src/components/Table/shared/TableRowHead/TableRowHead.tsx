import { ElementRef, forwardRef } from "react";
import { TableRowHeadProps } from "./TableRowHead.types";

export const TableRowHead = forwardRef<ElementRef<"div">, TableRowHeadProps>(
  (props: TableRowHeadProps, ref) => {
    return (
      <div ref={ref} {...props} role="rowheader">
        {props.children}
      </div>
    );
  },
);
TableRowHead.displayName = "Table.RowHead";
