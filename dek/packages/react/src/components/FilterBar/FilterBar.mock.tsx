import { FilterBar } from "./FilterBar";
import React from "react";
import { FilterBarProps } from "./FilterBar.types";

export const defaultArgs: FilterBarProps = {
  onOpenChange: (open) => console.log("open", open),
  sorting: {
    label: "Sortierung",
    selectedLabel: "Beliebtheit",
    form: (
      <FilterBar.RadioGroup.Root defaultValue="beliebtheit" name="sorting">
        <FilterBar.RadioGroup.Item value="beliebtheit">
          Beliebtheit
        </FilterBar.RadioGroup.Item>
        <FilterBar.RadioGroup.Item value="niedrigster-preis">
          Niedrigster Preis
        </FilterBar.RadioGroup.Item>
        <FilterBar.RadioGroup.Item value="höchster-preis">
          Höchster Preis
        </FilterBar.RadioGroup.Item>
      </FilterBar.RadioGroup.Root>
    ),
  },
  filters: [
    {
      label: "Gerätekategorie",
      selectedLabel: "Alle (3)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Gerätekategorie"
          defaultValue={["handy", "tablet", "gadget"]}
        >
          <FilterBar.CheckboxGroup.Item value="handy" id="handy" itemCount={9}>
            Handy
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="tablet"
            id="tablet"
            itemCount={46}
          >
            Tablet
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="gadget"
            id="gadget"
            itemCount={4}
          >
            Gadget
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
    {
      label: "Hersteller",
      selectedLabel: "Alle (4)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Hersteller"
          defaultValue={[
            "apple",
            "google",
            "samsung",
            "Xiaomi",
            "Fairphone",
            "Nothing",
          ]}
        >
          <FilterBar.CheckboxGroup.Item value="apple" id="apple" itemCount={15}>
            Apple
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="google"
            id="google"
            itemCount={18}
          >
            Google
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="samsung"
            id="samsung"
            itemCount={19}
          >
            Samsung
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="Xiaomi"
            id="Xiaomi"
            itemCount={22}
          >
            Xiaomi
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="Fairphone"
            id="Fairphone"
            itemCount={22}
          >
            Fairphone
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="Nothing"
            id="Nothing"
            itemCount={22}
          >
            Nothing
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
    {
      label: "Eigenschaften",
      selectedLabel: "Alle (3)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Eigenschaften"
          defaultValue={["neu", "esim-fähig", "neuwertig"]}
        >
          <FilterBar.CheckboxGroup.Item value="neu" id="neu" itemCount={15}>
            neu
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="esim-fähig"
            id="esim-fähig"
            itemCount={19}
          >
            esim-fähig
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="neuwertig"
            id="neuwertig"
            itemCount={28}
          >
            neuwertig
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
  ],
};

export const differentLabels: FilterBarProps = {
  sorting: {
    label: "Sortierung",
    selectedLabel: "Beliebtheit",
    form: (
      <FilterBar.RadioGroup.Root defaultValue="beliebtheit" name="sorting">
        <FilterBar.RadioGroup.Item value="beliebtheit">
          Beliebtheit
        </FilterBar.RadioGroup.Item>
        <FilterBar.RadioGroup.Item value="niedrigster-preis">
          Niedrigster Preis
        </FilterBar.RadioGroup.Item>
        <FilterBar.RadioGroup.Item value="höchster-preis">
          Höchster Preis
        </FilterBar.RadioGroup.Item>
      </FilterBar.RadioGroup.Root>
    ),
  },
  filters: [
    {
      label: "Hersteller",
      selectedLabel: "Alle (4)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Hersteller"
          defaultValue={[
            "apple",
            "google",
            "samsung",
            "Xiaomi",
            "Fairphone",
            "Nothing",
          ]}
        >
          <FilterBar.CheckboxGroup.Item value="apple" id="apple" itemCount={15}>
            Apple
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="google"
            id="google"
            itemCount={18}
          >
            Google
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="samsung"
            id="samsung"
            itemCount={19}
          >
            Samsung
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="etc..."
            id="etc..."
            itemCount={22}
          >
            etc...
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
    {
      label: "Eigenschaften",
      selectedLabel: "Alle (3)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Eigenschaften"
          defaultValue={["neu", "esim-fähig", "neuwertig"]}
        >
          <FilterBar.CheckboxGroup.Item value="neu" id="neu" itemCount={15}>
            neu
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="esim-fähig"
            id="esim-fähig"
            itemCount={19}
          >
            esim-fähig
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="neuwertig"
            id="neuwertig"
            itemCount={28}
          >
            neuwertig
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
    {
      label: "Gerätekategorie",
      selectedLabel: "Alle (3)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Gerätekategorie"
          defaultValue={["handy", "tablet", "gadget"]}
        >
          <FilterBar.CheckboxGroup.Item value="handy" id="handy" itemCount={9}>
            Handy
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="tablet"
            id="tablet"
            itemCount={46}
          >
            Tablet
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="gadget"
            id="gadget"
            itemCount={4}
          >
            Gadget
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
  ],
};

const onlyApple: FilterBarProps = {
  sorting: {
    label: "Sortierung",
    selectedLabel: "Beliebtheit",
    form: (
      <FilterBar.RadioGroup.Root defaultValue="beliebtheit" name="sorting">
        <FilterBar.RadioGroup.Item value="beliebtheit">
          Beliebtheit
        </FilterBar.RadioGroup.Item>
        <FilterBar.RadioGroup.Item value="niedrigster-preis">
          Niedrigster Preis
        </FilterBar.RadioGroup.Item>
        <FilterBar.RadioGroup.Item value="höchster-preis">
          Höchster Preis
        </FilterBar.RadioGroup.Item>
      </FilterBar.RadioGroup.Root>
    ),
  },
  filters: [
    {
      isEditable: false,
      label: "Hersteller",
      selectedLabel: "Apple",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Hersteller"
          defaultValue={[
            "apple",
            "google",
            "samsung",
            "Xiaomi",
            "Fairphone",
            "Nothing",
          ]}
        >
          <FilterBar.CheckboxGroup.Item value="apple" id="apple" itemCount={15}>
            Apple
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="google"
            id="google"
            itemCount={18}
          >
            Google
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="samsung"
            id="samsung"
            itemCount={19}
          >
            Samsung
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="etc..."
            id="etc..."
            itemCount={22}
          >
            etc...
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
    {
      label: "Eigenschaften",
      selectedLabel: "Alle (3)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Eigenschaften"
          defaultValue={["neu", "esim-fähig", "neuwertig"]}
        >
          <FilterBar.CheckboxGroup.Item value="neu" id="neu" itemCount={15}>
            neu
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="esim-fähig"
            id="esim-fähig"
            itemCount={19}
          >
            esim-fähig
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="neuwertig"
            id="neuwertig"
            itemCount={28}
          >
            neuwertig
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
    {
      label: "Gerätekategorie",
      selectedLabel: "Alle (3)",
      form: (
        <FilterBar.CheckboxGroup.Root
          name="filter-Gerätekategorie"
          defaultValue={["handy", "tablet", "gadget"]}
        >
          <FilterBar.CheckboxGroup.Item value="handy" id="handy" itemCount={9}>
            Handy
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="tablet"
            id="tablet"
            itemCount={46}
          >
            Tablet
          </FilterBar.CheckboxGroup.Item>
          <FilterBar.CheckboxGroup.Item
            value="gadget"
            id="gadget"
            itemCount={4}
          >
            Gadget
          </FilterBar.CheckboxGroup.Item>
        </FilterBar.CheckboxGroup.Root>
      ),
    },
  ],
};
export default onlyApple;
