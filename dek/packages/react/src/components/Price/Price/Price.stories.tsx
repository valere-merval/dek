import type { Meta, StoryObj } from "@storybook/react-vite";
import { Price } from "./Price";
import { BillingPeriod } from "../../../utils/pricing";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey", "blue"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: Price,
  argTypes: {
    billingPeriod: {
      control: {
        type: "radio",
      },
      options: Object.values(BillingPeriod),
    },
  },
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
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    prefix: "Mindestens",
    price: 25.99,
    billingPeriod: BillingPeriod.SIX_MONTHS,
  },
};

export const WithoutBillingperiod: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    prefix: "Mindestens",
    price: 25.99,
    footnotes: esimFootnotes(),
  },
};

export const WithStrikeThroughPrice: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    billingPeriod: BillingPeriod.SIX_MONTHS,
    prefix: "Mindestens",
    price: 25.33,
    strikeThroughPrice: 30.99,
    footnotes: esimFootnotes(),
  },
};

export const PriceLarge: Story = {
  args: {
    ...Default.args,
    size: {
      mobile: "large",
      desktop: "large",
    },
  },
};

export const WithoutBillingperiodLarge: Story = {
  args: {
    ...WithoutBillingperiod.args,
    size: {
      mobile: "large",
      desktop: "large",
    },
  },
};

export const WithStrikeThroughPriceLarge: Story = {
  args: {
    ...WithStrikeThroughPrice.args,
    size: {
      mobile: "large",
      desktop: "large",
    },
  },
};

export const WithSuffix: Story = {
  args: {
    ...Default.args,
    suffix: "zzgl. 50,00 € Bereitstellungspreis",
  },
};

function esimFootnotes() {
  return [
    {
      header: "eSIM",
      description: (
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexDirection: "column",
          }}
        >
          <p>
            Mit der eSIM benötigst du die klassische SIM-Karte (Mini-, Micro-
            oder Nano-SIM) aus Plastik nicht mehr. Stattdessen werden alle
            notwendigen Infos rund um deinen Tarif per eSIM-Profil direkt auf
            deinem Gerät gespeichert.
          </p>
          <p>
            Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt. Denn
            nicht alle Smartphones sind schon eSIM-fähig.
          </p>
          <p>
            Nach deiner Bestellung erhältst du eine E-Mail von uns, sobald dein
            eSIM-Profil zur Aktivierung bereitsteht. Du kannst es dann über die
            congstar App oder das meincongstar Kundencenter installieren.
          </p>
        </div>
      ),
    },
  ];
}
