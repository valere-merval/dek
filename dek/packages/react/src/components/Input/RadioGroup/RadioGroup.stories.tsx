import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { Text } from "../../Typography/Text";
import { disableControls } from "../../../stories/utils/disableControls";
import { RadioGroupProps } from "./RadioGroup.types";
import { RadioItemText } from "./RadioGroup.styles";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave20", "jaAgave80", "jaAgaveOutlinesSecondary", "jaGeneralWhite"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: RadioGroup.Root,
  parameters: {
    allowedBackgroundColors,
  },
  argTypes: {
    ...disableControls<RadioGroupProps>(["children"]),
    orientation: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      table: {
        defaultValue: { summary: "vertical" },
        type: { summary: "union" },
      },
    },
    isDisabled: { control: "boolean" },
    isInvalid: { control: "boolean" },
  },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    onChange: (v) => console.log(v),
    label: "Was möchtest du kündigen?",
    description: "Wähle deine gewünschte Option aus:",
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="option-1">
          Prepaid-Vertrag (Zahlung via Guthaben)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-2">
          Mobilfunkvertrag (Zahlung auf Rechnung)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-3">
          Festnetz & DSL (inkl. Routermiete)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-4">Routermiete</RadioGroup.Item>
        <RadioGroup.Item value="option-5">Optionen</RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};

export const LabelHidden: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    onChange: (v) => console.log(v),
    label: (
      <Text variant="bold" size="large">
        Was möchtest du kündigen?
      </Text>
    ),
    hideLabel: true,
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="option-1">
          Prepaid-Vertrag (Zahlung via Guthaben)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-2">
          Mobilfunkvertrag (Zahlung auf Rechnung)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-3">
          Festnetz & DSL (inkl. Routermiete)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-4">Routermiete</RadioGroup.Item>
        <RadioGroup.Item value="option-5">Optionen</RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    isDisabled: true,
    onChange: (v) => console.log(v),
    label: (
      <Text variant="bold" size="large">
        Was möchtest du kündigen?
      </Text>
    ),
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="option-1">
          Prepaid-Vertrag (Zahlung via Guthaben)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-2">
          Mobilfunkvertrag (Zahlung auf Rechnung)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-3">
          Festnetz & DSL (inkl. Routermiete)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-4">Routermiete</RadioGroup.Item>
        <RadioGroup.Item value="option-5">Optionen</RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};

export const OneItemDisabled: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    onChange: (v) => console.log(v),
    label: (
      <Text variant="bold" size="large">
        Was möchtest du kündigen?
      </Text>
    ),
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="option-1">
          Prepaid-Vertrag (Zahlung via Guthaben)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-2">
          Mobilfunkvertrag (Zahlung auf Rechnung)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-3">
          Festnetz & DSL (inkl. Routermiete)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-4">Routermiete</RadioGroup.Item>
        <RadioGroup.Item value="option-5" isDisabled>
          Optionen
        </RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};

export const WithError: Story = {
  args: {
    name: "tarif",
    messages: [
      { message: "Es muss eine Option ausgewählt sein", type: "error" },
    ],
    onChange: (v) => console.log(v),
    label: (
      <Text variant="bold" size="large">
        Was möchtest du kündigen?
      </Text>
    ),
    description: (
      <Text variant="light" size="large" as="p">
        Wähle deine gewünschte Option aus:
      </Text>
    ),
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="option-1">
          Prepaid-Vertrag (Zahlung via Guthaben)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-2">
          Mobilfunkvertrag (Zahlung auf Rechnung)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-3">
          Festnetz & DSL (inkl. Routermiete)
        </RadioGroup.Item>
        <RadioGroup.Item value="option-4">Routermiete</RadioGroup.Item>
        <RadioGroup.Item value="option-5">Optionen</RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};

export const Horizontal: Story = {
  args: {
    defaultValue: "option-2",
    name: "tarif",
    orientation: "horizontal",
    onChange: (v) => console.log(v),
    label: (
      <Text variant="bold" size="large">
        Auswahloptionen
      </Text>
    ),
    hideLabel: true,
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="option-1">Mann</RadioGroup.Item>
        <RadioGroup.Item value="option-2">Frau</RadioGroup.Item>
        <RadioGroup.Item value="option-3">Divers</RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};

const Plan1 = (
  <div
    style={{
      display: "flex",
      width: "100%",
      gap: "20px",
      justifyContent: "space-between",
    }}
  >
    <Text as="div" variant="bold" size="large">
      5 GB
    </Text>
    <Text as="div" variant="bold" size="large">
      12,00 € mtl.
    </Text>
  </div>
);
const Plan2 = (
  <div
    style={{
      display: "flex",
      width: "100%",
      gap: "20px",
      justifyContent: "space-between",
    }}
  >
    <Text as="div" variant="bold" size="large">
      10 GB
    </Text>
    <Text as="div" variant="bold" size="large">
      24,00 € mtl.
    </Text>
  </div>
);

export const TextAsReactNode: Story = {
  args: {
    defaultValue: "5",
    name: "tarif",
    onChange: (v) => console.log(v),
    label: (
      <Text variant="bold" size="large">
        Wähle deinen Tarif
      </Text>
    ),
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="5">{Plan1}</RadioGroup.Item>
        <RadioGroup.Item value="10">{Plan2}</RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};

/**
 * This story demonstrates a controlled RadioGroup where the value is managed via React state.
 * Use `value` and `onChange` props to control the selected option programmatically.
 */
export const Controlled: Story = {
  args: {
    name: "controlled-tarif",
    label: (
      <Text variant="bold" size="large">
        Controlled RadioGroup
      </Text>
    ),
  },
  render: function ControlledRadioGroup(args) {
    const [selectedValue, setSelectedValue] = useState<string>("option-a");

    return (
      <form>
        <RadioGroup.Root
          {...args}
          value={selectedValue}
          onChange={setSelectedValue}
        >
          <RadioGroup.Item value="option-1">
            Prepaid-Vertrag (Zahlung via Guthaben)
          </RadioGroup.Item>
          <RadioGroup.Item value="option-2">
            Mobilfunkvertrag (Zahlung auf Rechnung)
          </RadioGroup.Item>
          <RadioGroup.Item value="option-3">
            Festnetz & DSL (inkl. Routermiete)
          </RadioGroup.Item>
          <RadioGroup.Item value="option-4">Routermiete</RadioGroup.Item>
          <RadioGroup.Item value="option-5">Optionen</RadioGroup.Item>
        </RadioGroup.Root>
        <Text variant="light" size="medium">
          Ausgewählter Wert: <strong>{selectedValue}</strong>
        </Text>
      </form>
    );
  },
};

export const WithHtml: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    onChange: (v) => console.log(v),
    label: "Was möchtest du kündigen?",
    description: "Wähle deine gewünschte Option aus:",
  },
  render: (args) => (
    <form>
      <RadioGroup.Root {...args}>
        <RadioGroup.Item value="option-1">
          <RadioItemText>
            Zum frühst möglichen Zeitpunkt kündigen
            <br />
            (28.03.2026)
          </RadioItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="option-2">
          <RadioItemText>Wunschtermin wählen</RadioItemText>
        </RadioGroup.Item>

        <RadioGroup.Item value="option-4">
          <RadioItemText>
            Außerordentliche Kündigung
            <br />
            (z. B. Umzug ins Ausland oder Todesfall)
          </RadioItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </form>
  ),
};
