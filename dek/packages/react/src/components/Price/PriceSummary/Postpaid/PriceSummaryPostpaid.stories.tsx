import type { Meta, StoryObj } from "@storybook/react-vite";
import { PriceSummaryPostpaid } from "./PriceSummaryPostpaid";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { Text } from "../../../Typography/Text";
import { InfoCircleOutline } from "@fair/icons";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["darkGrey"],
  congstarApp: ["darkGrey"],
  ja: ["jaAgaveOutlinesSecondary"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: PriceSummaryPostpaid,
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
} satisfies Meta<typeof PriceSummaryPostpaid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonProps: {
      text: "Bestellung absenden",
    },
    overviewRecurringDisplayPrices: [
      {
        title: "1. bis 24. Monat",
        amount: 57,
        items: [],
      },
      {
        title: "ab dem 25. Monat",
        amount: 33,
        items: [],
      },
    ],
    overviewOneTimeDisplayPrice: {
      amount: 258.99,
      items: [],
    },
    nextStepMessageInfo: {
      icon: <InfoCircleOutline />,
      children: (
        <Text variant="light" size="large">
          Im nächsten Schritt gelangst du zu Apple Pay, um die Bestellung
          abzuschließen.
        </Text>
      ),
    },
  },
};

export const WithBringback: Story = {
  args: {
    ...Default.args,
    bringback: {
      sectionHeader: "Schlussrate Endgerät",
      mainTitle: "37. Monat, deine Optionen",
      subTitle:
        "Du verkaufst das Gerät an Recommerce Solutions SA im folgenden Zustand:",
      priceOptions: [
        {
          title: 'a) "Gebraucht"',
          amount: "Keine Kosten",
        },
        {
          title: 'b) "Gebrochen"',
          amount: 99,
        },
      ],
      lastBoldOption: {
        title: 'Das Gerät ist "Defekt" oder du behältst es',
        amount: 180,
      },
    },
  },
};
