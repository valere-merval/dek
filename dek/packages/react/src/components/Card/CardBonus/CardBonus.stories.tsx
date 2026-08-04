import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardBonus } from "../CardBonus/CardBonus";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
};

const meta = {
  component: CardBonus,
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
} satisfies Meta<typeof CardBonus>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  overviewBonusDisplayPrices: {
    title: "Summe Bonus",
    amount: 100,
    detailTexts: [
      "Der Bonus wird über 3 Monate verteilt, d. h. du erhältst 3 x 30 € Rabatt auf den monatlichen Grundpreis.",
      "In den ersten 3 Monaten zahlst du 7 € monatlich, ab dem 4. Monat 35 € monatlich für deinen Tarif.",
    ],
    footnoteText:
      "Werden über die ersten 3 Monate in Höhe von 30 Euro pro Monat auf die monatlichen Tarifkosten gutgeschrieben.",
    items: [
      {
        title: "Starter-Bonus",
        amount: 70,
      },
      {
        title: "Extra-Bonus",
        amount: 30,
      },
    ],
  },
};

export const Default: Story = {
  args: baseArgs,
};

export const Outlined: Story = {
  args: {
    overviewBonusDisplayPrices: {
      ...baseArgs.overviewBonusDisplayPrices,
    },
    variant: "outlined",
  },
};

export const WithoutDetails: Story = {
  args: {
    overviewBonusDisplayPrices: {
      ...baseArgs.overviewBonusDisplayPrices,
      detailTexts: null,
    },
    variant: "outlined",
  },
};
