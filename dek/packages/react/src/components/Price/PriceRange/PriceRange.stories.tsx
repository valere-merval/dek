import type { Meta, StoryObj } from "@storybook/react-vite";
import { PriceRange } from "./PriceRange";
import { BillingPeriod } from "../../../utils/pricing";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: PriceRange,
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
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof PriceRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    priceRange: { minimum: 15, maximum: 20 },
    billingPeriod: BillingPeriod.SIX_MONTHS,
  },
};

export const WithFootnotes: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    priceRange: { minimum: 15, maximum: 20 },
    billingPeriod: BillingPeriod.SIX_MONTHS,
    footnotes: footnotes(),
  },
};

export const WithoutBillingperiod: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    priceRange: { minimum: 15, maximum: 20 },
    footnotes: footnotes(),
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

export const WithFootnotesLarge: Story = {
  args: {
    ...WithFootnotes.args,
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

export const WithSuffix: Story = {
  args: {
    ...Default.args,
    suffix: "zzgl. 50,00 € Bereitstellungspreis",
  },
};

function footnotes() {
  return [
    {
      header: "Preis A",
      description: (
        <p>
          Aktion für Neukunden bei Buchung über congstar.de bis zum 18.09.2023:
          Die congstar Allnet Flat M mit GB+ kostet monatlich 22 €.
          Mindestvertragslaufzeit 24 Monate. Einmaliger Bereitstellungspreis 15
          €. Im Rahmen der Aktion wird die Bandbreite ab einem Datenvolumen von
          22 GB statt 10 GB im jeweiligen Monat auf max. 32 Kbit/s im Download
          und Upload beschränkt. GB+: Das monatliche Datenvolumen erhöht sich
          alle 12 Monate automatisch um jeweils 5 GB. Bei Tarifwechsel entfällt
          die jährliche Erhöhung des Datenvolumens und das angesammelte,
          zusätzliche Datenvolumen wird nicht auf den neuen Tarif übertragen. Es
          gelten dann die Konditionen des neuen Tarifs.
        </p>
      ),
    },
    {
      header: "Preis B",
      description: (
        <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
          <p>
            Die neuesten Blockbuster und jede Menge Serien von Disney, Pixar,
            Marvel, Star Wars, National Geographic und Star: gefühlvoll,
            fesselnd, aufregend und mitreißend. Disney+ fasziniert jede Woche
            mit neuen Inhalten. Einfach für jede Stimmung genau das Richtige!
            UND: Jederzeit auf all deinen Geräten verfügbar.
          </p>

          <p>
            Die neuesten Blockbuster, exklusive Original-Produktionen und jede
            Menge Serien
          </p>

          <p>Nutze bis zu 4 mobile Geräte & TV gleichzeitig</p>

          <p>Monatlich kündbar</p>

          <p>Einfach zu deinem Tarif dazubuchen</p>
        </div>
      ),
    },
  ];
}
