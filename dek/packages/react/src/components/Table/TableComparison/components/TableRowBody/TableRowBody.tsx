import { forwardRef, ElementRef } from "react";
import { TableRowBodyProps } from "./TableRowBody.types";
import * as Styled from "./TableRowBody.styles";

export const TableRowBody = forwardRef<
  ElementRef<typeof Styled.Root>,
  TableRowBodyProps
>((props: TableRowBodyProps, ref) => {
  return (
    <Styled.Root
      {...props}
      ref={ref}
      forwardedAs="div"
      size="large"
      variant="light"
    >
      {props.children}
    </Styled.Root>
  );
});
TableRowBody.displayName = "TableComparison.RowBody";
