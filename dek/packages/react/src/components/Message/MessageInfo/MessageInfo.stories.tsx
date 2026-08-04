import type { Meta, StoryObj } from "@storybook/react-vite";
import { MessageInfo } from "./MessageInfo";
import {
  ArrowRight,
  ExclamationMarkTriangleOutline,
  InfoCircleOutline,
} from "@fair/icons";
import { Text } from "../../Typography/Text";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite"],
  penny: ["pennyNeutralLightGrey", "pennyNeutralWhite"],
};

const meta = {
  component: MessageInfo,
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
} satisfies Meta<typeof MessageInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Bitte beachte",
    children: (
      <Text variant="light" size="large">
        Mit Klick auf “eSIM bestellen” wird deine alte SIM deaktiviert
      </Text>
    ),
    icon: <ExclamationMarkTriangleOutline role="img" aria-label="Achtung" />,
  },
};

export const WithoutIcon: Story = {
  args: {
    headline: "Bitte beachte",
    children: (
      <Text variant="light" size="large">
        Mit Klick auf “eSIM bestellen” wird deine alte SIM deaktiviert
      </Text>
    ),
  },
};

export const WithoutIconAndCustomHeadline: Story = {
  args: {
    headline: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text variant="bold" size="large">
          Guthaben auf Sim-Karte
        </Text>
        <Text variant="bold" size="large">
          10€
        </Text>
      </div>
    ),
    variant: "outlined",
    children: (
      <Text variant="light" size="large">
        Du erhältst 10 € Startguthaben auf deine Prepaid-Karte. Die ersten 4
        Wochen sind somit mindestens abgedeckt.
      </Text>
    ),
  },
};

export const WithoutHeadline: Story = {
  args: {
    icon: <ExclamationMarkTriangleOutline role="img" aria-label="Achtung" />,
    children: (
      <Text variant="light" size="large">
        Mit Klick auf “eSIM bestellen” wird deine alte SIM deaktiviert
      </Text>
    ),
  },
};

export const WithCustomChildren: Story = {
  args: {
    icon: <ExclamationMarkTriangleOutline role="img" aria-label="Achtung" />,
    headline: "Klassische SIM-Karte",
    children: (
      <Text variant="light" size="large">
        Eine SIM-Karte für alle gängigen Mobilfunkgeräte <br />
        Rufnummer: 0151-12345678
        <br />
        <strong>Tarif</strong>: Allnet Flat M<br />
        <a href="congstar.de">Link</a>
      </Text>
    ),
  },
};

export const WithOutline: Story = {
  args: {
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Text variant="light" size="large">
          Die Adresse kannst du in den Kundendaten anpassen.
        </Text>
        <ButtonSecondary
          onClick={() => alert("click")}
          endIcon={<ArrowRight />}
        >
          Adresse ändern
        </ButtonSecondary>
      </div>
    ),
    variant: "outlined",
    icon: <InfoCircleOutline role="img" aria-label="Information" />,
  },
};

export const WithOutlineFullWidth: Story = {
  args: {
    ...WithOutline.args,
    children: (
      <Text variant="light" size="large">
        Mit Klick auf “eSIM bestellen” wird deine alte SIM deaktiviert
      </Text>
    ),
    fullWidth: true,
  },
};

export const WithWordWrap: Story = {
  args: {
    ...Default.args,
    headline: "Bitte beachte, dass deine alte SIM deaktiviert wird",
  },
  render: (args) => (
    <div style={{ width: "320px" }}>
      <MessageInfo {...args} />
    </div>
  ),
};
