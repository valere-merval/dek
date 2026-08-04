import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { Text } from "../../../Typography/Text";
import React, { useState } from "react";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { CheckboxProps } from "./Checkbox.types";
import { disableControls } from "../../../../stories/utils/disableControls";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: Checkbox.Root,
  parameters: {
    allowedBackgroundColors,
  },
  argTypes: {
    ...disableControls<CheckboxProps>(["children"]),
    isDisabled: { control: "boolean" },
    isInvalid: { control: "boolean" },
    defaultSelected: { control: "boolean" },
  },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDisabled: false,
    onChange: (value) => {
      console.log(value);
    },
    name: "CheckboxOption",
  },
  render: (args) => (
    <form>
      <Checkbox.Root {...args}>
        Die Datenschutzhinweise nehme ich zur Kenntnis.
      </Checkbox.Root>
    </form>
  ),
};

export const CustomLabel: Story = {
  args: {
    isDisabled: false,
    onChange: (value) => {
      console.log(value);
    },
    name: "CheckboxOption",
  },
  render: (args) => (
    <form>
      <Checkbox.Root {...args}>
        <Text variant="bold" size="large" as="span">
          Die Datenschutzhinweise nehme ich zur Kenntnis.
        </Text>
      </Checkbox.Root>
    </form>
  ),
};

export const DefaultSelected: Story = {
  args: {
    isDisabled: false,
    onChange: (value) => {
      console.log(value);
    },
    name: "CheckboxOption",
    defaultSelected: true,
  },
  render: (args) => (
    <form>
      <Checkbox.Root {...args}>
        Die Datenschutzhinweise nehme ich zur Kenntnis.
      </Checkbox.Root>
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    onChange: (value) => {
      console.log(value);
    },
    name: "CheckboxOption",
  },
  render: (args) => (
    <form>
      <Checkbox.Root {...args}>
        Die Datenschutzhinweise nehme ich zur Kenntnis.
      </Checkbox.Root>
    </form>
  ),
};

export const WithError: Story = {
  args: {
    isInvalid: true,
    onChange: (value) => {
      console.log(value);
    },
    name: "CheckboxOption",
    messages: [
      {
        message: "Diese Option muss ausgewählt werden.",
        type: "error",
      },
    ],
  },
  render: (args) => (
    <form>
      <Checkbox.Root {...args}>
        Die Datenschutzhinweise nehme ich zur Kenntnis.
      </Checkbox.Root>
    </form>
  ),
};

export const WithLink: Story = {
  args: {
    onChange: (value) => {
      console.log(value);
    },
    name: "CheckboxOption",
  },
  render: (args) => (
    <form>
      <Checkbox.Root {...args}>
        <Text size="large" variant="light">
          Ich bin damit einverstanden,{" "}
          <a href="https://www.congstar.de">
            dass meine Vertrags-, Nutzungs- und Endgerätedaten
          </a>{" "}
          der von mir genutzten{" "}
          <a href="https://www.congstar.de">Produkte und Dienste</a>, der
          Telekom Deutschland GmbH abgerufen, analysiert und zur individuellen
          Beratung verwendet werden. Ich kann meine Einwilligungen jederzeit
          widerrufen. Die Hinweise zum{" "}
          <a href="https://www.congstar.de">Widerrufsrecht</a>, die
          Begriffsdefinitionen sowie den{" "}
          <a href="https://www.congstar.de">Datenschutzhinweis</a> habe ich zur
          Kenntnis genommen.
        </Text>
      </Checkbox.Root>
    </form>
  ),
};

const ControlledComponent = (props: CheckboxProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <form>
      <Checkbox.Root {...props} isSelected={selected} onChange={setSelected}>
        Die Datenschutzhinweise nehme ich zur Kenntnis.
      </Checkbox.Root>
      <Text variant="light" size="large" as="span">
        Aktueller Wert: <strong>{selected.toString()}</strong>
      </Text>
    </form>
  );
};

export const Controlled: Story = {
  args: {
    isDisabled: false,
    name: "CheckboxOption",
  },
  render: (args) => <ControlledComponent {...args} />,
};
