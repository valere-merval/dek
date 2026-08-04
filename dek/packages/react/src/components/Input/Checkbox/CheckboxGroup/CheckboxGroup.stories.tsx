import type { Meta, StoryObj } from "@storybook/react-vite";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { CheckboxGroup } from "./CheckboxGroup";
import React from "react";

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
  component: CheckboxGroup.Root,
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof CheckboxGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "CheckboxOptionen",
    label: "Rechtliche Hinweise",
    description:
      "Hier findest du die vorvertraglichen Informationen und die Vertragszusammenfassung.",
    hideLabel: false,
  },
  render: (args) => (
    <form>
      <CheckboxGroup.Root {...args}>
        <CheckboxGroup.Item value="EVN">
          Ich möchte zur monatlichen Rechnung einen Einzelverbindungsnachweis
          (EVN) über meine kostenpflichtigen Verbindungen für die obige
          Rufnummer erhalten.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="AGB">
          Ich akzeptiere die Allgemeinen Geschäftsbedingungen.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="Datenschutz">
          Die Datenschutzhinweise nehme ich zur Kenntnis.
        </CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </form>
  ),
};

export const ItemWithDefaultSelected: Story = {
  args: {
    name: "CheckboxOptionen",
    label: "Rechtliche Hinweise",
  },
  render: (args) => (
    <form>
      <CheckboxGroup.Root {...args} defaultValue={["Datenschutz"]}>
        <CheckboxGroup.Item value="EVN">
          Ich möchte zur monatlichen Rechnung einen Einzelverbindungsnachweis
          (EVN) über meine kostenpflichtigen Verbindungen für die obige
          Rufnummer erhalten.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="AGB">
          Ich akzeptiere die Allgemeinen Geschäftsbedingungen.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item
          value="Datenschutz"
          onChange={(value) => {
            console.log(value);
          }}
        >
          Die Datenschutzhinweise nehme ich zur Kenntnis.
        </CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </form>
  ),
};

export const ItemDisabled: Story = {
  args: {
    name: "CheckboxOptionen",
    label: "Rechtliche Hinweise",
  },
  render: (args) => (
    <form>
      <CheckboxGroup.Root {...args}>
        <CheckboxGroup.Item value="EVN">
          Ich möchte zur monatlichen Rechnung einen Einzelverbindungsnachweis
          (EVN) über meine kostenpflichtigen Verbindungen für die obige
          Rufnummer erhalten.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="AGB">
          Ich akzeptiere die Allgemeinen Geschäftsbedingungen.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="Datenschutz" isDisabled>
          Die Datenschutzhinweise nehme ich zur Kenntnis.
        </CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </form>
  ),
};

export const ItemWithError: Story = {
  args: {
    name: "CheckboxOptionen",
    label: "Rechtliche Hinweise",
    description:
      "Hier findest du die vorvertraglichen Informationen und die Vertragszusammenfassung.",
    messages: [{ type: "error", message: "Du musst jedem Punkt zustimmen." }],
  },
  render: (args) => (
    <form>
      <CheckboxGroup.Root {...args}>
        <CheckboxGroup.Item value="EVN">
          Ich möchte zur monatlichen Rechnung einen Einzelverbindungsnachweis
          (EVN) über meine kostenpflichtigen Verbindungen für die obige
          Rufnummer erhalten.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="AGB" isInvalid>
          Ich akzeptiere die Allgemeinen Geschäftsbedingungen.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="Datenschutz" isInvalid>
          Die Datenschutzhinweise nehme ich zur Kenntnis.
        </CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </form>
  ),
};

export const LabelHidden: Story = {
  args: {
    name: "CheckboxOptionen",
    label: "Rechtliche Hinweise",
    hideLabel: true,
  },
  render: (args) => (
    <form>
      <CheckboxGroup.Root {...args}>
        <CheckboxGroup.Item value="EVN">
          Ich möchte zur monatlichen Rechnung einen Einzelverbindungsnachweis
          (EVN) über meine kostenpflichtigen Verbindungen für die obige
          Rufnummer erhalten.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="AGB">
          Ich akzeptiere die Allgemeinen Geschäftsbedingungen.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="Datenschutz">
          Die Datenschutzhinweise nehme ich zur Kenntnis.
        </CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </form>
  ),
};
