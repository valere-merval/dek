"use client";

import { ElementRef, forwardRef, useCallback, useMemo, useState } from "react";
import * as Styled from "./TableComparison.styles";
import { TableCell } from "./components/TableCell";
import { TableRowHead } from "./components/TableRowHead";
import { CellIcon } from "./components/CellIcon";
import { Select } from "../../Input/Select";
import {
  TableComparisonHeadProps,
  TableComparisonItem,
  TableComparisonProps,
  TableComparisonRow,
} from "./TableComparison.types";
import { Headline } from "../../Typography/Headline";
import { formatPrice } from "../../../utils/pricing/utils/formatPrice";
import { BillingPeriod, formatBillingPeriod } from "../../../utils/pricing";
import { TableRowBody } from "./components/TableRowBody/TableRowBody";
import { TableBasic } from "../shared";
import { SelectValueKey } from "../../Input/Select/Select.types";

export const TableComparison = forwardRef<
  ElementRef<typeof Styled.Root>,
  TableComparisonProps
>(
  (
    {
      data,
      title = "Tarif",
      sticky = true,
      placeholder,
      children,
      ...rest
    }: TableComparisonProps,
    ref,
  ) => {
    const [selectedItem, setSelectedItem] = useState(
      data.slice(0, 2).map((item: TableComparisonItem) => item),
    );

    const handleSelectChange = useCallback(
      (index: number, value: SelectValueKey | SelectValueKey[] | null) => {
        const newItemId = Number(value);
        if (selectedItem.find(({ id }) => id === newItemId)) {
          return; // Ignore if the item is already selected in another column
        }

        setSelectedItem((selectedItemIds) => {
          const newSelectedItemIds = [...selectedItemIds];
          newSelectedItemIds[index] = data.find(({ id }) => id === newItemId)!;
          return newSelectedItemIds;
        });
      },
      [selectedItem],
    );

    const filteredAndSortedRows = useMemo(
      () =>
        data.reduce(
          (filteredRows: TableComparisonRow[], item: TableComparisonItem) => {
            item.rows.forEach((row: TableComparisonRow) => {
              const existingRow = filteredRows.find(
                (filteredRow) => filteredRow.title === row.title,
              );
              if (!existingRow) {
                filteredRows.push(row);
              }
            });
            return filteredRows;
          },
          [],
        ),
      [data],
    );

    const headlineId = `table-${placeholder.replace(/\s/g, "-")}`;

    return (
      <Styled.Root ref={ref} {...rest}>
        <Styled.ItemTitle>
          <Headline as="h4" size="medium" variant="bold" id={headlineId}>
            {title}
          </Headline>
        </Styled.ItemTitle>
        <TableBasic.Root aria-labelledby={headlineId}>
          <Head
            data={data}
            sticky={sticky}
            title={title}
            placeholder={placeholder}
            selectedItemIds={selectedItem.map(({ id }) => id)}
            handleSelectChange={handleSelectChange}
          />
          {filteredAndSortedRows.map((row: TableComparisonRow) => (
            <TableBasic.RowGroup key={row.title}>
              <TableBasic.Row>
                <TableRowHead footnotes={row.footnotes} title={row.title}>
                  {row.title}
                </TableRowHead>
                <TableRowBody>
                  {selectedItem.map((selectedItem) => {
                    const selectedCell = selectedItem?.rows.find(
                      (rowItem: TableComparisonRow) =>
                        rowItem.title === row.title,
                    ); // Find the row with the same title
                    return (
                      <TableCell key={`${row.title}-${selectedItem.id}`}>
                        {selectedCell ? (
                          <>
                            {selectedCell.state && (
                              <CellIcon state={selectedCell.state} />
                            )}
                            {selectedCell.image && selectedCell.image}
                            {selectedCell.description}
                          </>
                        ) : (
                          <span>Nicht verfügbar</span>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRowBody>
              </TableBasic.Row>
            </TableBasic.RowGroup>
          ))}
        </TableBasic.Root>
      </Styled.Root>
    );
  },
);
TableComparison.displayName = "TableComparison";

const Head = ({
  data,
  placeholder,
  sticky,
  selectedItemIds,
  handleSelectChange,
}: TableComparisonHeadProps) => {
  return (
    <Styled.Head $sticky={sticky} role="rowgroup">
      <TableRowBody title={placeholder} role="row">
        {selectedItemIds.map((selectedItemId: number, columnIndex: number) => {
          const selectedItem: TableComparisonItem | undefined = data.find(
            (item: TableComparisonItem) => item.id === selectedItemId,
          );
          return (
            <TableCell key={selectedItemId}>
              {data.length === 2 ? (
                <>
                  {selectedItem && (
                    <Styled.ItemGroup>{placeholder}</Styled.ItemGroup>
                  )}
                  <Headline as="h3" size="medium" variant="bold">
                    {selectedItem?.value}
                  </Headline>
                  <Styled.Price>
                    {formatPrice(selectedItem?.price as number)}{" "}
                    {formatBillingPeriod(
                      selectedItem?.billingPeriod as BillingPeriod,
                    )}
                  </Styled.Price>
                </>
              ) : (
                <Styled.SelectWrapper>
                  <Styled.Form>
                    <Select.Root
                      id={`select-${columnIndex}`}
                      name={`select-${columnIndex}`}
                      aria-label={`Auswahl ${columnIndex + 1}`}
                      fullWidth
                      placeholder={placeholder}
                      onChange={(value) =>
                        handleSelectChange(columnIndex, value)
                      }
                      defaultValue={selectedItemId.toString()}
                    >
                      {data
                        .filter(
                          (item: TableComparisonItem) =>
                            !selectedItemIds.includes(item.id) ||
                            item.id === selectedItemId,
                        )
                        .map((item: TableComparisonItem) => (
                          <Select.Item
                            key={item.id}
                            id={item.id.toString()}
                            textValue={item.value}
                          />
                        ))}
                    </Select.Root>
                  </Styled.Form>
                  <Styled.Price>
                    {formatPrice(selectedItem?.price as number)}{" "}
                    {formatBillingPeriod(
                      selectedItem?.billingPeriod as BillingPeriod,
                    )}
                  </Styled.Price>
                </Styled.SelectWrapper>
              )}
            </TableCell>
          );
        })}
      </TableRowBody>
    </Styled.Head>
  );
};
