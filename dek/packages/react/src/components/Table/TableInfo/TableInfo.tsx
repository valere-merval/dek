"use client";

import { forwardRef, ElementRef } from "react";
import {
  TableInfoCellProps,
  TableInfoRootProps,
  TableInfoRowHeadProps,
  TableInfoRowProps,
} from "./TableInfo.types";
import * as Styled from "./TableInfo.styles";
import { Headline } from "../../Typography/Headline";
import { Text } from "../../Typography/Text";
import { VisuallyHidden } from "react-aria";
import { Divider } from "../../Divider";
import { ButtonMicroIcon } from "../../Button/ButtonMicroIcon";
import { InfoCircleFill } from "@fair/icons";
import { Footnote, ModalFootnotes } from "../../Modal/ModalFootnotes";

export const TableInfoRoot = forwardRef<
  ElementRef<typeof Styled.Root>,
  TableInfoRootProps
>(
  (
    {
      id,
      headline,
      headlineHidden = false,
      children,
      ...rest
    }: TableInfoRootProps,
    ref,
  ) => {
    const head = (
      <Styled.Head>
        <Headline size="medium" variant="bold" id={id} as="div">
          {headline}
        </Headline>
        <Divider noGap />
      </Styled.Head>
    );
    return (
      <Styled.Root ref={ref} aria-labelledby={id} {...rest}>
        {headlineHidden ? <VisuallyHidden>{head}</VisuallyHidden> : head}
        <Styled.Body>{children}</Styled.Body>
      </Styled.Root>
    );
  },
);
TableInfoRoot.displayName = "TableInfo.Root";

export const TableInfoRow = forwardRef<
  ElementRef<typeof Styled.Row>,
  TableInfoRowProps
>(({ ...rest }: TableInfoRowProps, ref) => {
  return (
    <>
      <Styled.Row ref={ref} {...rest} />
      <Styled.RowDivider noGap />
    </>
  );
});
TableInfoRow.displayName = "TableInfo.Row";

const TableInfoRowHeadModal = ({
  footnotes,
  headline,
}: {
  footnotes?: Footnote[];
  headline: string;
}) => {
  if (footnotes && footnotes.length > 0) {
    return (
      <ModalFootnotes
        footnotes={footnotes}
        trigger={
          <ButtonMicroIcon
            icon={<InfoCircleFill />}
            label={`Mehr Details zu ${headline}`}
            align="center"
          />
        }
      />
    );
  }

  return null;
};

export const TableInfoRowHead = forwardRef<
  ElementRef<typeof Styled.Row>,
  TableInfoRowHeadProps
>(({ headline, footnotes, ...rest }: TableInfoRowHeadProps, ref) => {
  return (
    <Styled.RowHead ref={ref} {...rest}>
      <Styled.RowHeadText size="large" variant="bold">
        {headline}
        <TableInfoRowHeadModal footnotes={footnotes} headline={headline} />
      </Styled.RowHeadText>
    </Styled.RowHead>
  );
});
TableInfoRowHead.displayName = "TableInfo.RowHead";

export const TableInfoCell = forwardRef<
  ElementRef<typeof Styled.Row>,
  TableInfoCellProps
>(({ children, ...rest }: TableInfoCellProps, ref) => {
  return (
    <Styled.Cell ref={ref} {...rest}>
      <Text size="large" variant="light">
        {children}
      </Text>
    </Styled.Cell>
  );
});
TableInfoCell.displayName = "TableInfo.Cell";

export const TableInfo = {
  Root: TableInfoRoot,
  Row: TableInfoRow,
  RowHead: TableInfoRowHead,
  Cell: TableInfoCell,
};
