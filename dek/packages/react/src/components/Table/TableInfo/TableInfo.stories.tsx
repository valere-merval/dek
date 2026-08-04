import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableInfo } from "./TableInfo";
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
  component: TableInfo.Root,
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
} satisfies Meta<typeof TableInfo.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "anschluesse1",
    headline: "Anschlüsse & Schnittstellen",
    children: (
      <>
        <TableInfo.Row>
          <TableInfo.RowHead
            headline="DSL-Anschluss"
            footnotes={[
              {
                header: "DSL-Anschluss",
                description: (
                  <p>
                    Unsere Internet Anschlüsse basieren auf DSL-Technologie, die
                    stabile und zuverlässige Verbindungen bietet. DSL hat
                    gegenüber einem „shared medium“ wie dem Koaxialkabel mehrere
                    Vorteile. Es bietet in der Regel eine dedizierte Bandbreite,
                    was bedeutet, dass die Geschwindigkeit weniger von der
                    Anzahl der gleichzeitig aktiven Nutzer abhängt. Zudem ist
                    DSL weniger anfällig für Bandbreitenengpässe während
                    Stoßzeiten, was eine stabilere und zuverlässigere
                    Internetverbindung ermöglicht.
                  </p>
                ),
              },
            ]}
          />
          <TableInfo.Cell>
            ADSL/VDSL bis 300 MBit/s (Supervectoring)
          </TableInfo.Cell>
        </TableInfo.Row>
        <TableInfo.Row>
          <TableInfo.RowHead headline="Netzwerkanschlüsse" />
          <TableInfo.Cell>
            4x Gigabit-LAN (WAN über LAN 1 möglich)
          </TableInfo.Cell>
        </TableInfo.Row>
        <TableInfo.Row>
          <TableInfo.RowHead headline="Anschlüsse" />
          <TableInfo.Cell>1x USB 3.0 für Speicher & Drucker</TableInfo.Cell>
        </TableInfo.Row>
      </>
    ),
  },
};

export const WithoutHead: Story = {
  args: {
    id: "anschluesse2",
    headline: "Anschlüsse & Schnittstellen",
    headlineHidden: true,
    children: (
      <>
        <TableInfo.Row>
          <TableInfo.RowHead headline="DSL-Anschluss" />
          <TableInfo.Cell>
            ADSL/VDSL bis 300 MBit/s (Supervectoring)
          </TableInfo.Cell>
        </TableInfo.Row>
        <TableInfo.Row>
          <TableInfo.RowHead headline="Netzwerkanschlüsse" />
          <TableInfo.Cell>
            4x Gigabit-LAN (WAN über LAN 1 möglich)
          </TableInfo.Cell>
        </TableInfo.Row>
        <TableInfo.Row>
          <TableInfo.RowHead headline="Anschlüsse" />
          <TableInfo.Cell>1x USB 3.0 für Speicher & Drucker</TableInfo.Cell>
        </TableInfo.Row>
      </>
    ),
  },
};
