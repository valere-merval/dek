import type { Meta, StoryObj } from "@storybook/react-vite";
import { PriceSummaryPrepaid } from "./PriceSummaryPrepaid";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { Text } from "../../../Typography/Text";
import { ButtonMoreDetails } from "../../../Button/ButtonMoreDetails";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["darkGrey"],
  congstarApp: ["darkGrey"],
  ja: ["jaAgaveOutlinesSecondary"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: PriceSummaryPrepaid,
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
} satisfies Meta<typeof PriceSummaryPrepaid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonProps: {
      text: "Bestellung absenden",
    },
    priceElement: {
      price: 10.0,
      description: "Kosten alle 4 Wochen",
    },
    overviewOneTimeDisplayPrice: {
      amount: 258.99,
      items: [],
    },
    prepaidMessageInfo: {
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
      children: (
        <>
          <Text variant="light" size="large">
            Du erhältst 10 € Startguthaben auf deine Prepaid-Karte. Die ersten{" "}
            <b>4 Wochen</b> sind somit mindestens abgedeckt.
          </Text>
          <ButtonMoreDetails onClick={() => alert("More details clicked")} />
        </>
      ),
    },
  },
};
