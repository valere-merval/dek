import type { Meta, StoryObj } from "@storybook/react-vite";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { StickyBoxSideActivation } from ".";
import { listItems, yearPacketListItems } from "../Activation.mock";
import { BillingPeriod } from "../../../Price/Price";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: StickyBoxSideActivation,
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
} satisfies Meta<typeof StickyBoxSideActivation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: { price: 10, billingPeriod: BillingPeriod.FOUR_WEEKS },
    header: "Prepaid Allnet M",
    listItems: listItems,
  },
};

export const PrepaidYearPlan: Story = {
  args: {
    price: {
      price: 100,
      billingPeriod: BillingPeriod.TWELVE_MONTHS,
      footnotes: [
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
                Mit der eSIM benötigst du die klassische SIM-Karte (Mini-,
                Micro- oder Nano-SIM) aus Plastik nicht mehr. Stattdessen werden
                alle notwendigen Infos rund um deinen Tarif per eSIM-Profil
                direkt auf deinem Gerät gespeichert.
              </p>
              <p>
                Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
                Denn nicht alle Smartphones sind schon eSIM-fähig.
              </p>
              <p>
                Nach deiner Bestellung erhältst du eine E-Mail von uns, sobald
                dein eSIM-Profil zur Aktivierung bereitsteht. Du kannst es dann
                über die congstar App oder das meincongstar Kundencenter
                installieren.
              </p>
            </div>
          ),
        },
      ],
    },
    header: "Prepaid Jahrespaket",
    listItems: yearPacketListItems,
  },
};
