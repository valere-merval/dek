import { forwardRef, ElementRef } from "react";
import { TableProps } from "./TableRoot.types";

export const TableRoot = forwardRef<ElementRef<"div">, TableProps>(
  (props: TableProps, ref) => {
    return (
      <div ref={ref} {...props} role="table">
        {props.children}
      </div>
    );
  },
);
TableRoot.displayName = "Table.Root";
