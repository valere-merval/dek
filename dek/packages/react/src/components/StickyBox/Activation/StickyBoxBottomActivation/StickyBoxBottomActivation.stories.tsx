import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyBoxBottomActivation } from "./StickyBoxBottomActivation";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { BillingPeriod } from "../../../Price/Price";
import { listItems, yearPacketListItems } from "../Activation.mock";

import { useState } from "react";
import { ActivationProps } from "../Activation.types";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: StickyBoxBottomActivation,
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
} satisfies Meta<typeof StickyBoxBottomActivation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: ActivationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <StickyBoxBottomActivation
      {...args}
      open={isOpen}
      onOpenChange={onOpenChange}
      onButtonClick={() => alert("Button clicked")}
    />
  );
};

export const Default: Story = {
  args: {
    price: { price: 10, billingPeriod: BillingPeriod.FOUR_WEEKS },
    header: "Prepaid Allnet M",
    listItems: listItems,
  },
  render: (args) => <Component {...args} />,
  globals: {
    viewport: {
      value: "sm",
      isRotated: false,
    },
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
  render: (args) => <Component {...args} />,
  globals: {
    viewport: {
      value: "sm",
      isRotated: false,
    },
  },
};
