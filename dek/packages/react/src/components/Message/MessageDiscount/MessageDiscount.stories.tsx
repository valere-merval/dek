import type { Meta, StoryObj } from "@storybook/react-vite";
import { MessageDiscount } from "./MessageDiscount";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { Text } from "../../Typography/Text";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { ArrowRight } from "@fair/icons";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave80", "jaGeneralWhite", "jaAgaveOutlinesSecondary", "jaAgave20"],
  penny: [
    "pennyRed",
    "pennyNeutralWhite",
    "pennyRedDark",
    "pennyNeutralLightGrey",
  ],
};

const meta = {
  component: MessageDiscount,
  parameters: {
    allowedBackgroundColors,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "primary"],
    },
    fullWidth: {
      control: "boolean",
    },
  },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
} satisfies Meta<typeof MessageDiscount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Deine Rabatte",
    discounts: [
      {
        label: "Dein persönlicher Rabatt",
        headline: "Nur 2 € im ersten Monat",
        children: (
          <Text variant="light" size="large">
            Dein persönlicher Rabatt macht den Einstieg leicht – starte
            entspannt und günstig!
          </Text>
        ),
      },
      {
        headline: "Teste den Tarif im ersten Monat für nur 1,99 €",
      },
    ],
  },
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Deine Rabatte",
    discounts: [
      {
        headline: "Nur 2 € im ersten Monat",
        children: (
          <Text variant="light" size="large">
            Dein persönlicher Rabatt macht den Einstieg leicht – starte
            entspannt und günstig!
          </Text>
        ),
      },
      {
        headline: "Teste den Tarif im ersten Monat für nur 1,99 €",
        children: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Text variant="light" size="large">
              Dein persönlicher Rabatt macht den Einstieg leicht – starte
              entspannt und günstig!
            </Text>
            <ButtonSecondary
              onClick={() => alert("click")}
              endIcon={<ArrowRight />}
            >
              Zur Aktion
            </ButtonSecondary>
          </div>
        ),
      },
    ],
  },
};

export const WithoutChildren: Story = {
  args: {
    "aria-label": "Deine Rabatte",
    discounts: [
      {
        label: "Dein persönlicher Rabatt",
        headline: "Nur 2 € im ersten Monat",
      },
      {
        label: "Aktion",
        headline: "Teste den Tarif im ersten Monat für nur 1,99 €",
      },
    ],
  },
};
export const WithoutDiscountHeadline: Story = {
  args: {
    "aria-label": "Deine Rabatte",
    variant: "primary",
    discounts: [
      {
        label: "Dein persönlicher Rabatt",
        children: (
          <Text variant="light" size="large">
            Starter-Bonus 60 € <br />
            Extra-Bonus 30 €
          </Text>
        ),
      },
    ],
  },
};

export const WithOneItem: Story = {
  args: {
    "aria-label": "Deine Rabatte",
    discounts: [
      {
        label: "Aktion",
        headline: "Teste den Tarif im ersten Monat für nur 1,99 €",
        children: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Text variant="light" size="large">
              Dein persönlicher Rabatt macht den Einstieg leicht – starte
              entspannt und günstig!
            </Text>
            <ButtonSecondary
              onClick={() => alert("click")}
              endIcon={<ArrowRight />}
            >
              Zur Aktion
            </ButtonSecondary>
          </div>
        ),
      },
    ],
  },
};
