import type { Meta, StoryObj } from "@storybook/react-vite";
import { PriceRow } from "./PriceRow";
import { disableControls } from "../../../stories/utils/disableControls";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: PriceRow.Root,
  argTypes: {
    ...disableControls(["css", "as"]),
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
} satisfies Meta<typeof PriceRow.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price
          prefix="Monatliche Kosten"
          suffix="24 Monate Laufzeit"
          price={27.99}
        />
        <PriceRow.Price
          prefix="Einmalige Kosten"
          suffix="Bereitstellungspreis"
          price={10.99}
        />
      </>
    ),
  },
};

export const AlignLeftOnly: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price
          prefix="Monatliche Kosten"
          suffix="24 Monate Laufzeit"
          price={27.99}
        />
      </>
    ),
  },
};

export const AlignRightOnly: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price
          prefix="Einmalige Kosten"
          suffix="Bereitstellungspreis"
          price={10.99}
        />
      </>
    ),
    onlyRight: true,
  },
};

export const WithPrefixOnly: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price prefix="Monatliche Kosten" price={27.99} />
        <PriceRow.Price prefix="Einmalige Kosten" price={10.99} />
      </>
    ),
  },
};

export const WithSuffixOnly: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price suffix="24 Monate Laufzeit" price={27.99} />
        <PriceRow.Price suffix="Bereitstellungspreis" price={10.99} />
      </>
    ),
  },
};

export const WithStrikeThroughPrice: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price
          prefix="Monatliche Kosten"
          suffix="24 Monate Laufzeit"
          price={27.99}
          strikeThroughPrice={29.99}
        />
        <PriceRow.Price
          prefix="Einmalige Kosten"
          suffix="Bereitstellungspreis"
          price={10.99}
          strikeThroughPrice={12.99}
        />
      </>
    ),
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price prefix="Einmalige Kosten" price={27.99} />
        <PriceRow.Price suffix="24 Monate Laufzeit" price={10.99} />
      </>
    ),
  },
};

export const WithFootnotes: Story = {
  args: {
    children: (
      <>
        <PriceRow.Price
          prefix="Monatliche Kosten"
          suffix="24 Monate Laufzeit"
          price={27.99}
          strikeThroughPrice={29.99}
          footnotes={esimFootnotes()}
        />
        <PriceRow.Price
          prefix="Einmalige Kosten"
          suffix="Bereitstellungspreis"
          price={10.99}
          strikeThroughPrice={12.99}
          footnotes={esimFootnotes()}
        />
      </>
    ),
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
