import { forwardRef, ElementRef } from "react";
import { TableRowBodyProps } from "./TableRowBody.types";
import * as Styled from "./TableRowBody.styles";

export const TableRowBody = forwardRef<
  ElementRef<typeof Styled.Root>,
  TableRowBodyProps
>((props: TableRowBodyProps, ref) => {
  return (
    <Styled.Root ref={ref} {...props}>
      {props.children}
    </Styled.Root>
  );
});
TableRowBody.displayName = "TableComparison.RowBody";
