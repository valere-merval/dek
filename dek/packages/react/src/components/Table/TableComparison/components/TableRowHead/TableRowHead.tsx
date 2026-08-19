import { forwardRef, ElementRef, useId } from "react";
import * as Styled from "./TableRowHead.styles";
import { ModalFootnotes } from "../../../../Modal/ModalFootnotes";
import { InfoCircleFill } from "@fair/icons";
import { TableRowHeadProps } from "./TableRowHead.types";
import { ButtonMicroIcon } from "../../../../Button/ButtonMicroIcon";

export const TableRowHead = forwardRef<
  ElementRef<typeof Styled.Root>,
  TableRowHeadProps
>(
  (
    { id, title = "icon", footnotes, children, ...rest }: TableRowHeadProps,
    ref,
  ) => {
    const accessibleId = useId();
    const titleId = id ? `${id}-title` : `${accessibleId}-title`;

    return (
      <Styled.Root
        ref={ref}
        {...rest}
        id={id}
        role="rowheader"
        aria-labelledby={titleId}
      >
        <Styled.RowHeader forwardedAs="div" size="large" variant="bold">
          <span id={titleId}>{children}</span>
          {footnotes && (
            <ModalFootnotes
              trigger={
                <ButtonMicroIcon
                  label={"Mehr Details zu " + title}
                  icon={<InfoCircleFill aria-hidden="true" />}
                  align="center"
                />
              }
              footnotes={footnotes}
            />
          )}
        </Styled.RowHeader>
      </Styled.Root>
    );
  },
);
TableRowHead.displayName = "TableComparison.RowHead";
