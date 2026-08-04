import { useAsyncList } from "react-stately";
import { ComboBox, ComboBoxProps } from "@fair/react";

export type ZipAndCityAutocompleteResult = {
  zipCode?: string;
  city: string;
  locality?: string;
};

export const AvailabilityCheckCity = (
  props: Partial<ComboBoxProps<ZipAndCityAutocompleteResult>>,
) => {
  const list = useAsyncList<ZipAndCityAutocompleteResult>({
    async load({ signal, filterText }) {
      if (filterText && filterText.length > 0) {
        const res = await fetch(
          `https://www.nicotuadev.de/fixed-address-service/address/cities?search=${filterText}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "eowa",
            },
            signal,
          },
        );

        if (res.ok) {
          const result = await res.json();

          return {
            items: result,
          };
        } else {
          return {
            items: [],
          };
        }
      }
      return {
        items: [],
      };
    },
  });

  return (
    <ComboBox.Root
      name="ort"
      id="ort"
      ariaLabel="Auswahl Ort / PLZ"
      placeholder="Ort / PLZ"
      buttonAriaLabel="zeige Orte"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      isLoading={list.isLoading}
      {...props}
    >
      {({ city, zipCode, locality }) => {
        const textValue = `${zipCode ? `${zipCode}, ` : ""}${city}${locality ? ` (${locality})` : ""}`;
        return (
          <ComboBox.Item textValue={textValue} key={textValue}>
            {textValue}
          </ComboBox.Item>
        );
      }}
    </ComboBox.Root>
  );
};
AvailabilityCheckCity.displayName = "AvailabilityCheckCity";
