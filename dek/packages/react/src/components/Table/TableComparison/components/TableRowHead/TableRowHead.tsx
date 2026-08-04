import { forwardRef, ElementRef } from "react";
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
    { title = "icon", footnotes, children, ...rest }: TableRowHeadProps,
    ref,
  ) => {
    return (
      <Styled.Root ref={ref} {...rest} role="rowheader">
        <Styled.RowHeader id={`rowheader-${title.replace(/\s+/g, "-")}`}>
          {children}
          {footnotes && (
            <ModalFootnotes
              trigger={
                <ButtonMicroIcon
                  label={"Mehr Details zu " + title}
                  icon={
                    <InfoCircleFill
                      titleId={`rowheader-${title.replace(/\s+/g, "-")}`}
                    />
                  }
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
