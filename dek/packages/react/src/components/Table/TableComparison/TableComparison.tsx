"use client";

import {
  ElementRef,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useState,
} from "react";
import { VisuallyHidden } from "react-aria";

import * as Styled from "./TableComparison.styles";
import { BillingPeriod, formatBillingPeriod } from "../../../utils/pricing";
import { formatPrice } from "../../../utils/pricing/utils/formatPrice";
import { ButtonMoreDetails } from "../../Button/ButtonMoreDetails";
import { Select } from "../../Input/Select";
import { SelectValueKey } from "../../Input/Select/Select.types";
import { Headline } from "../../Typography/Headline";
import { Text } from "../../Typography/Text";
import { TableBasic } from "../shared";
import { CellIcon } from "./components/CellIcon";
import { TableCell } from "./components/TableCell";
import { TableRowBody } from "./components/TableRowBody/TableRowBody";
import { TableRowHead } from "./components/TableRowHead";
import {
  TableComparisonHeadProps,
  TableComparisonItem,
  TableComparisonProps,
  TableComparisonRow,
} from "./TableComparison.types";

export const TableComparison = forwardRef<
  ElementRef<typeof Styled.Root>,
  TableComparisonProps
>(
  (
    {
      data,
      title = "Tarif",
      headlineLevel = "h4",
      sticky = true,
      placeholder,
      showThirdColumn = false,
      children,
      ...rest
    }: TableComparisonProps,
    ref,
  ) => {
    const tableId = useId();
    const [announcement, setAnnouncement] = useState("");
    const [selectedItem, setSelectedItem] = useState(
      data
        .slice(0, showThirdColumn ? 3 : 2)
        .map((item: TableComparisonItem) => item),
    );
    const handleSelectChange = useCallback(
      (index: number, value: SelectValueKey | SelectValueKey[] | null) => {
        const newItemId = Number(value);
        if (selectedItem.find(({ id }) => id === newItemId)) {
          return; // Ignore if the item is already selected in another column
        }

        const newItem = data.find(({ id }) => id === newItemId);
        if (!newItem) {
          return;
        }

        setSelectedItem((selectedItemIds) => {
          const newSelectedItemIds = [...selectedItemIds];
          newSelectedItemIds[index] = newItem;
          return newSelectedItemIds;
        });
        setAnnouncement(
          `${newItem.value} wurde in Vergleichsspalte ${index + 1} ausgewählt. Die Vergleichsdaten wurden aktualisiert.`,
        );
      },
      [data, selectedItem],
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
        <VisuallyHidden role="log" aria-live="polite">
          {announcement}
        </VisuallyHidden>
        <Styled.ItemTitle>
          <Headline
            as={headlineLevel}
            size="medium"
            variant="bold"
            id={headlineId}
          >
            {title}
          </Headline>
        </Styled.ItemTitle>
        <TableBasic.Root
          aria-labelledby={headlineId}
          aria-colcount={selectedItem.length + 1}
        >
          <Head
            data={data}
            sticky={sticky}
            title={title}
            placeholder={placeholder}
            showThirdColumn={showThirdColumn}
            selectedItemIds={selectedItem.map(({ id }) => id)}
            handleSelectChange={handleSelectChange}
          />
          {filteredAndSortedRows.map((row: TableComparisonRow, rowIndex) => {
            const rowHeaderId = `${tableId}-rowheader-${rowIndex}`;

            return (
              <TableBasic.RowGroup key={row.title}>
                <TableBasic.Row>
                  <TableRowHead
                    id={rowHeaderId}
                    footnotes={row.footnotes}
                    title={row.title}
                    aria-colindex={1}
                  >
                    {row.title}
                  </TableRowHead>
                  <TableRowBody>
                    {selectedItem.map((selectedItem, columnIndex) => {
                      const selectedCell = selectedItem?.rows.find(
                        (rowItem: TableComparisonRow) =>
                          rowItem.title === row.title,
                      ); // Find the row with the same title
                      return (
                        <TableCell
                          key={`${row.title}-${selectedItem.id}`}
                          aria-colindex={columnIndex + 2}
                          aria-describedby={`${rowHeaderId}-title`}
                        >
                          {selectedCell ? (
                            <>
                              {selectedCell.state && (
                                <CellIcon state={selectedCell.state} />
                              )}
                              {selectedCell.image && selectedCell.image}
                              {selectedCell.description}
                              {selectedCell.link && (
                                <ButtonMoreDetails {...selectedCell.link} />
                              )}
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
            );
          })}
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
  showThirdColumn,
  selectedItemIds,
  handleSelectChange,
}: TableComparisonHeadProps) => {
  return (
    <Styled.Head $sticky={sticky} role="rowgroup">
      <Styled.HeadRowContainer>
        <Styled.HeadRow title={placeholder} role="row">
          <VisuallyHidden>
            <span role="columnheader" aria-colindex={1}>
              Merkmal
            </span>
          </VisuallyHidden>
          {selectedItemIds.map(
            (selectedItemId: number, columnIndex: number) => {
              const selectedItem: TableComparisonItem | undefined = data.find(
                (item: TableComparisonItem) => item.id === selectedItemId,
              );
              return (
                <TableCell
                  key={selectedItemId}
                  role="columnheader"
                  aria-colindex={columnIndex + 2}
                >
                  {data.length === selectedItemIds.length ? (
                    <Styled.HeadlineWrapper>
                      {showThirdColumn ? (
                        <Text as="p" size="large" variant="bold">
                          {selectedItem?.value}
                        </Text>
                      ) : (
                        <Headline as="div" size="medium" variant="bold">
                          {selectedItem?.value}
                        </Headline>
                      )}
                    </Styled.HeadlineWrapper>
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
                    </Styled.SelectWrapper>
                  )}
                </TableCell>
              );
            },
          )}
        </Styled.HeadRow>
        <Styled.HeadRow title="Preis" role="row">
          {selectedItemIds.map(
            (selectedItemId: number, columnIndex: number) => {
              const selectedItem: TableComparisonItem | undefined = data.find(
                (item: TableComparisonItem) => item.id === selectedItemId,
              );
              return (
                <Styled.HeadPriceCell
                  key={selectedItemId}
                  aria-colindex={columnIndex + 2}
                >
                  <Price>
                    {selectedItem?.price.priceUnknown ? (
                      "keine Preisangabe"
                    ) : (
                      <>
                        {formatPrice(selectedItem?.price.price as number)}{" "}
                        {formatBillingPeriod(
                          selectedItem?.price.billingPeriod as BillingPeriod,
                        )}
                      </>
                    )}
                  </Price>
                </Styled.HeadPriceCell>
              );
            },
          )}
        </Styled.HeadRow>
      </Styled.HeadRowContainer>
    </Styled.Head>
  );
};

const Price = ({ children }: { children: React.ReactNode }) => (
  <Styled.Price forwardedAs="div" size="large" variant="light">
    {children}
  </Styled.Price>
);
