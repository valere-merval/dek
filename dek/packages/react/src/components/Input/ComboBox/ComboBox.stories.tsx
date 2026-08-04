import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComboBox } from "./ComboBox";
import { disableControls } from "../../../stories/utils/disableControls";
import { ComboBoxProps } from "./ComboBox.types";
import { defaultMock } from "./ComboBox.mock";
import { useAsyncList } from "react-stately";
import { HeadlineHighlighted } from "../../Typography/HeadlineHighlighted";
import { EmptySpace } from "../../../storybookComponents/EmptySpace/EmptySpace";
import { Text } from "../../Typography/Text";
import { CardFilled } from "../../Card/CardFilled";
import { Modal } from "../../Modal/Modal";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { action } from "storybook/actions";
import { useState } from "react";
import { Key } from "react-aria-components";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: ComboBox.Root,
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["medium", "large"],
    },
    shouldCloseOnBlur: {
      control: {
        type: "boolean",
      },
    },
    shouldFocusFirstItem: {
      control: {
        type: "boolean",
      },
    },
    ...disableControls<ComboBoxProps<object>>(["children"]),
  },
} satisfies Meta<typeof ComboBox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: undefined,
    name: "country",
    id: "country-id",
    ariaLabel: "Länderauswahl",
    buttonAriaLabel: "Zeige Länder",
    placeholder: "Dein Land",
    messages: undefined,
    disabled: false,
    fullWidth: false,
    onSelectionChange: action("selectionChange"),
    children: defaultMock,
  },
  parameters: {
    docs: {
      description: {
        story:
          "⚠️ Achtung: ComboBox Items können nicht in andere Komponenten ausgelagert werden. Sie müssen als direkte children an die ComboBox übergeben werden.",
      },
    },
  },
};

export const WithError: Story = {
  ...Default,
  args: {
    ...Default.args,
    messages: [{ message: "Deine Angabe ist ungültig.", type: "error" }],
  },
};

export const Disabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
};

export const FullWidth: Story = {
  ...Default,
  args: { ...Default.args, fullWidth: true },
};

export const FocusFirstItem: Story = {
  ...Default,
  args: { ...Default.args, shouldFocusFirstItem: true },
};

export const Emtpy: Story = {
  ...Default,
  args: { ...Default.args, children: null },
};

export const InitialLoading: Story = {
  ...Default,
  args: { ...Default.args, children: null, isLoading: true },
};

export type ZipAndCityComboBoxResult = {
  zipCode?: string;
  city: string;
  locality?: string;
};

const AvailabilityCheckApiExample = (
  props: Partial<ComboBoxProps<ZipAndCityComboBoxResult>>,
) => {
  const list = useAsyncList<ZipAndCityComboBoxResult>({
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
      id="ort-id"
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
        return <ComboBox.Item key={textValue}>{textValue}</ComboBox.Item>;
      }}
    </ComboBox.Root>
  );
};
AvailabilityCheckApiExample.displayName = "AvailabilityCheckApi";

export const AvailabilityCheck: Story = {
  args: {
    size: undefined,
    id: "ort-id",
    name: "ort",
    ariaLabel: "Auswahl Ort / PLZ",
    placeholder: "Ort / PLZ",
    buttonAriaLabel: "zeige Orte",
    autoComplete: "postal-code",
    messages: undefined,
    disabled: false,
    fullWidth: true,
    shouldFocusFirstItem: true,
    onSelectionChange: action("selectionChange"),
    children: defaultMock,
  },
  parameters: {
    docs: {
      description: {
        story:
          "⚠️ Achtung: Bei allen Feldern wird die gleiche Schnittstelle aufgerufen welche lediglich Orte zurück gibt.",
      },
    },
  },
  render: () => (
    <div style={{ minHeight: "600px" }}>
      <HeadlineHighlighted>
        Verfügbarkeitsprüfung mit asynchronen Comboboxen
      </HeadlineHighlighted>

      <EmptySpace spaceCount={2} />

      <Text variant="light" size="medium">
        Achtung: Bei allen Feldern wird die gleiche Schnittstelle aufgerufen
        welche lediglich Orte zurück gibt.
      </Text>

      <EmptySpace spaceCount={3} />

      <CardFilled.Root
        backgroundColor="darkGrey"
        size="small"
        style={{ maxWidth: "400px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <AvailabilityCheckApiExample
            name="ort"
            ariaLabel="Auswahl Ort / PLZ"
            placeholder="Ort / PLZ"
            buttonAriaLabel="zeige Orte"
            fullWidth
            shouldFocusFirstItem
            autoComplete="address-level2"
          />
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <AvailabilityCheckApiExample
              fullWidth
              name="strasse"
              ariaLabel="Auswahl Straße"
              placeholder="Straße"
              buttonAriaLabel="zeige Straßen"
              autoComplete="street-address"
              shouldFocusFirstItem
            />
            <AvailabilityCheckApiExample
              fullWidth
              name="hausnummer"
              ariaLabel="Auswahl Hausnummer"
              placeholder="Hausnr."
              buttonAriaLabel="zeige Hausnummern"
              popoverAlignment="right"
              style={{ maxWidth: "100px" }}
              hideChevron={true}
              shouldFocusFirstItem
            />
          </div>
        </div>
      </CardFilled.Root>
    </div>
  ),
};

export const InModal: Story = {
  args: AvailabilityCheck.args,
  render: (args) => (
    <Modal.Root>
      <Modal.Trigger>Mehr Details</Modal.Trigger>
      <Modal.Content>
        <Modal.Title>
          Verfügbarkeitsprüfung mit asynchronen Comboboxen
        </Modal.Title>
        <Modal.Description>
          <AvailabilityCheckApiExample
            name={args.name}
            ariaLabel={args.ariaLabel}
            placeholder={args.placeholder}
            buttonAriaLabel={args.buttonAriaLabel}
            fullWidth={args.fullWidth}
            autoComplete={args.autoComplete}
            autoFocus={args.autoFocus}
            shouldFocusFirstItem={args.shouldFocusFirstItem}
          />
          <p>
            Stattdessen haben wir folgende Addresse geprüft: <br />
            Mock-Available-Str. 12292-1 <br />
            12292 Mockstadt
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>
  ),
};

export const NoCloseOnBlur: Story = {
  args: {
    ...AvailabilityCheck.args,
  },
  argTypes: {
    shouldCloseOnBlur: {
      control: false,
    },
  },
  render: (args) => (
    <AvailabilityCheckApiExample
      name={args.name}
      ariaLabel={args.ariaLabel}
      placeholder={args.placeholder}
      buttonAriaLabel={args.buttonAriaLabel}
      autoComplete={args.autoComplete}
      shouldCloseOnBlur={false}
      fullWidth={args.fullWidth}
      shouldFocusFirstItem={args.shouldFocusFirstItem}
    />
  ),
};

export const WithDefaultSelectedKey: Story = {
  args: {
    ...Default.args,
    defaultSelectedKey: "de",
  },
};

export const NoCloseOnScroll: Story = {
  ...Default,
  render: (args) => (
    <div style={{ minHeight: "600px" }}>
      <ComboBox.Root {...args} />
    </div>
  ),
};

const ControlledCombobox = (props: ComboBoxProps<object>) => {
  const [value, setValue] = useState<ComboBoxProps<object>["value"]>("de");

  const handleChange = (value: Key | null) => {
    console.log(`Changed to value ${value}`);
    setValue(value);
  };

  return <ComboBox.Root {...props} value={value} onChange={handleChange} />;
};

export const Controlled: Story = {
  args: Default.args,
  render: (args) => <ControlledCombobox {...args} />,
};
