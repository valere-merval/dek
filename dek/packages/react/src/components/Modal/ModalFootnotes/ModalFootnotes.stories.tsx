import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalFootnotes } from "./ModalFootnotes";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { ArrowRight } from "@fair/icons";
import { ButtonMicroIcon } from "../../Button/ButtonMicroIcon";
import { Headline } from "../../Typography/Headline";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { HtmlParser } from "../../HtmlParser";
import { Text } from "../../Typography/Text";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave20", "jaAgave80", "jaAgaveOutlinesSecondary", "jaGeneralWhite"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: ModalFootnotes,
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
} satisfies Meta<typeof ModalFootnotes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footnotes: [
      {
        header: "eSIM",
        description: (
          <div
            style={{ display: "flex", gap: "12px", flexDirection: "column" }}
          >
            <p style={{ margin: 0 }}>
              Mit der eSIM benötigst du die klassische SIM-Karte (Mini-, Micro-
              oder Nano-SIM) aus Plastik nicht mehr. Stattdessen werden alle
              notwendigen Infos rund um deinen Tarif per eSIM-Profil direkt auf
              deinem Gerät gespeichert.
            </p>
            <p style={{ margin: 0 }}>
              Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
              Denn nicht alle Smartphones sind schon eSIM-fähig.
            </p>
            <p style={{ margin: 0 }}>
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
};

export const WithMultipleFootnotes: Story = {
  args: {
    footnotes: [
      {
        header: "Allnet Flat M",
        description: (
          <Text variant="light" size="large">
            Aktion für Neukunden bei Buchung über congstar.de bis zum
            18.09.2023: Die congstar Allnet Flat M mit GB+ kostet monatlich 22
            €. Mindestvertragslaufzeit 24 Monate. Einmaliger
            Bereitstellungspreis 15 €. Im Rahmen der Aktion wird die Bandbreite
            ab einem Datenvolumen von 22 GB statt 10 GB im jeweiligen Monat auf
            max. 32 Kbit/s im Download und Upload beschränkt. GB+: Das
            monatliche Datenvolumen erhöht sich alle 12 Monate automatisch um
            jeweils 5 GB. Bei Tarifwechsel entfällt die jährliche Erhöhung des
            Datenvolumens und das angesammelte, zusätzliche Datenvolumen wird
            nicht auf den neuen Tarif übertragen. Es gelten dann die Konditionen
            des neuen Tarifs.
          </Text>
        ),
      },
      {
        header: "Video Option – Disney+",
        description: (
          <>
            <Text variant="light" size="large">
              Die neuesten Blockbuster und jede Menge Serien von Disney, Pixar,
              Marvel, Star Wars, National Geographic und Star: gefühlvoll,
              fesselnd, aufregend und mitreißend. Disney+ fasziniert jede Woche
              mit neuen Inhalten. Einfach für jede Stimmung genau das Richtige!
              UND: Jederzeit auf all deinen Geräten verfügbar.
            </Text>
            <Text variant="light" size="large">
              Die neuesten Blockbuster, exklusive Original-Produktionen und jede
              Menge Serien
            </Text>
            <Text variant="light" size="large">
              Nutze bis zu 4 mobile Geräte & TV gleichzeitig
            </Text>
            <Text variant="light" size="large">
              Monatlich kündbar
            </Text>
            <Text variant="light" size="large">
              Einfach zu deinem Tarif dazubuchen
            </Text>
          </>
        ),
      },
      {
        header: "Allnet Flat L mit GB+",
        description: (
          <Text variant="light" size="large">
            Aktion für Neukunden bei Buchung über congstar.de bis zum
            17.02.2026: Die congstar Allnet Flat L mit GB+ kostet monatlich 29
            €. Mindestvertragslaufzeit 24 Monate. Einmaliger
            Bereitstellungspreis 0 € statt 15 €. Die Bandbreite wird ab einem
            Datenvolumen von 150 GB statt 20 GB im jeweiligen Monat von max. 50
            Mbit/s im Download und 25 Mbit/s im Upload auf max. 32 Kbit/s im
            Download und Upload beschränkt. Voraussetzung für das Surfen im
            5G-Netz ist die Verfügbarkeit von 5G am Standort und ein 5G-fähiges
            Endgerät. Sofern 5G am jeweiligen Standort nicht verfügbar ist,
            surfst Du mit EDGE / LTE. GB+: Das monatliche Datenvolumen erhöht
            sich im Tarif Allnet Flat L alle 12 Monate um jeweils 10 GB. Bei
            Tarifwechsel in einen anderen Tarif gelten die Konditionen des neuen
            Tarifes. Für jedes Vertragsjahr im bisherigen Tarif erhält der Kunde
            das GB+ Volumen, welches für den neuen Tarif gilt. Das heißt: GB+
            Volumen pro Vertragsjahr im bisherigen Tarif bei Wechsel in einen
            anderen Postpaid Tarif, z.B. in die Allnet Flat XS 1 GB, in die
            Allnet Flat S 2 GB oder in die Allnet Flat M 5 GB.
          </Text>
        ),
      },
    ],
  },
};

export const WithHTMLInDescription: Story = {
  args: {
    footnotes: [
      {
        header: "Allnet Flat M",
        description: (
          <p style={{ margin: 0 }}>
            Aktion für Neukunden bei Buchung über congstar.de bis zum
            18.09.2023: Die congstar Allnet Flat M mit GB+ kostet monatlich 22
            €. Mindestvertragslaufzeit 24 Monate. Einmaliger
            Bereitstellungspreis 15 €. Im Rahmen der Aktion wird die Bandbreite
            ab einem Datenvolumen von 22 GB statt 10 GB im jeweiligen Monat auf
            max. 32 Kbit/s im Download und Upload beschränkt. GB+: Das
            monatliche Datenvolumen erhöht sich alle 12 Monate automatisch um
            jeweils 5 GB. Bei Tarifwechsel entfällt die jährliche Erhöhung des
            Datenvolumens und das angesammelte, zusätzliche Datenvolumen wird
            nicht auf den neuen Tarif übertragen. Es gelten dann die Konditionen
            des neuen Tarifs.
          </p>
        ),
      },
      {
        header: "Video Option – Disney+",
        description: (
          <div
            style={{ display: "flex", gap: "12px", flexDirection: "column" }}
          >
            <p style={{ margin: 0 }}>
              Die neuesten Blockbuster und jede Menge Serien von Disney, Pixar,
              Marvel, Star Wars, National Geographic und Star: gefühlvoll,
              fesselnd, aufregend und mitreißend. Disney+ fasziniert jede Woche
              mit neuen Inhalten. Einfach für jede Stimmung genau das Richtige!
              UND: Jederzeit auf all deinen Geräten verfügbar.
            </p>

            <p style={{ margin: 0 }}>
              Die neuesten Blockbuster, exklusive Original-Produktionen und jede
              Menge Serien
            </p>

            <p style={{ margin: 0 }}>
              Nutze bis zu 4 mobile Geräte & TV gleichzeitig
            </p>

            <p style={{ margin: 0 }}>Monatlich kündbar</p>

            <p style={{ margin: 0 }}>Einfach zu deinem Tarif dazubuchen</p>
          </div>
        ),
      },
    ],
  },
};

export const WithHTMLParserInDescription: Story = {
  args: {
    footnotes: [
      {
        header: "Allnet Flat M",
        description: (
          <HtmlParser
            html={`<p>
            Aktion für Neukunden bei Buchung über congstar.de bis zum
            18.09.2023: Die congstar Allnet Flat M mit GB+ kostet monatlich 22
            €. Mindestvertragslaufzeit 24 Monate. Einmaliger
            Bereitstellungspreis 15 €. Im Rahmen der Aktion wird die Bandbreite
            ab einem Datenvolumen von 22 GB statt 10 GB im jeweiligen Monat auf
            max. 32 Kbit/s im Download und Upload beschränkt. GB+: Das
            monatliche Datenvolumen erhöht sich alle 12 Monate automatisch um
            jeweils 5 GB. Bei Tarifwechsel entfällt die jährliche Erhöhung des
            Datenvolumens und das angesammelte, zusätzliche Datenvolumen wird
            nicht auf den neuen Tarif übertragen. Es gelten dann die Konditionen
            des neuen Tarifs.
          </p>`}
          />
        ),
      },
      {
        header: "Video Option – Disney+",
        description: (
          <HtmlParser
            html={`<div
            style={{ display: "flex", gap: "12px", flexDirection: "column" }}
          >
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
          </div>`}
          />
        ),
      },
    ],
  },
};

export const WithStringInDescription: Story = {
  args: {
    footnotes: [
      {
        header: "Allnet Flat M",
        description:
          "Aktion für Neukunden bei Buchung über congstar.de bis zum 18.09.2023: Die congstar Allnet Flat M mit GB+ kostet monatlich 22 €. Mindestvertragslaufzeit 24 Monate. Einmaliger Bereitstellungspreis 15 €. Im Rahmen der Aktion wird die Bandbreite ab einem Datenvolumen von 22 GB statt 10 GB im jeweiligen Monat auf max. 32 Kbit/s im Download und Upload beschränkt. GB+: Das monatliche Datenvolumen erhöht sich alle 12 Monate automatisch um jeweils 5 GB. Bei Tarifwechsel entfällt die jährliche Erhöhung des Datenvolumens und das angesammelte, zusätzliche Datenvolumen wird nicht auf den neuen Tarif übertragen. Es gelten dann die Konditionen des neuen Tarifs.",
      },
      {
        header: "Allnet Flat L mit GB+",
        description:
          "Aktion für Neukunden bei Buchung über congstar.de bis zum 17.02.2026: Die congstar Allnet Flat L mit GB+ kostet monatlich 29 €. Mindestvertragslaufzeit 24 Monate. Einmaliger Bereitstellungspreis 0 € statt 15 €. Die Bandbreite wird ab einem Datenvolumen von 150 GB statt 20 GB im jeweiligen Monat von max. 50 Mbit/s im Download und 25 Mbit/s im Upload auf max. 32 Kbit/s im Download und Upload beschränkt. Voraussetzung für das Surfen im 5G-Netz ist die Verfügbarkeit von 5G am Standort und ein 5G-fähiges Endgerät. Sofern 5G am jeweiligen Standort nicht verfügbar ist, surfst Du mit EDGE / LTE. GB+: Das monatliche Datenvolumen erhöht sich im Tarif Allnet Flat L alle 12 Monate um jeweils 10 GB. Bei Tarifwechsel in einen anderen Tarif gelten die Konditionen des neuen Tarifes. Für jedes Vertragsjahr im bisherigen Tarif erhält der Kunde das GB+ Volumen, welches für den neuen Tarif gilt. Das heißt: GB+ Volumen pro Vertragsjahr im bisherigen Tarif bei Wechsel in einen anderen Postpaid Tarif, z.B. in die Allnet Flat XS 1 GB, in die Allnet Flat S 2 GB oder in die Allnet Flat M 5 GB.",
      },
    ],
  },
};

export const WithButtonAsteriskTrigger: Story = {
  args: {
    trigger: <ButtonMicroIcon />,
    footnotes: [
      {
        header: "eSIM",
        description: (
          <div
            style={{ display: "flex", gap: "12px", flexDirection: "column" }}
          >
            <p style={{ margin: 0 }}>
              Mit der eSIM benötigst du die klassische SIM-Karte (Mini-, Micro-
              oder Nano-SIM) aus Plastik nicht mehr. Stattdessen werden alle
              notwendigen Infos rund um deinen Tarif per eSIM-Profil direkt auf
              deinem Gerät gespeichert.
            </p>
            <p style={{ margin: 0 }}>
              Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
              Denn nicht alle Smartphones sind schon eSIM-fähig.
            </p>
            <p style={{ margin: 0 }}>
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
};

export const WithButtonSecondaryTrigger: Story = {
  args: {
    trigger: (
      <ButtonSecondary endIcon={<ArrowRight />}>
        Alle Gerätedetails anzeigen
      </ButtonSecondary>
    ),
    footnotes: [
      {
        header: "eSIM",
        description: (
          <div
            style={{ display: "flex", gap: "12px", flexDirection: "column" }}
          >
            <p style={{ margin: 0 }}>
              Mit der eSIM benötigst du die klassische SIM-Karte (Mini-, Micro-
              oder Nano-SIM) aus Plastik nicht mehr. Stattdessen werden alle
              notwendigen Infos rund um deinen Tarif per eSIM-Profil direkt auf
              deinem Gerät gespeichert.
            </p>
            <p style={{ margin: 0 }}>
              Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
              Denn nicht alle Smartphones sind schon eSIM-fähig.
            </p>
            <p style={{ margin: 0 }}>
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
};

export const WithEmptyFootnotes: Story = {
  args: {
    trigger: (
      <ButtonSecondary endIcon={<ArrowRight />}>
        Alle Gerätedetails anzeigen
      </ButtonSecondary>
    ),
    footnotes: [],
  },
};

export const WithInheritFontTrigger: Story = {
  args: {
    trigger: { inheritFont: true },
    footnotes: [
      {
        header: "eSIM",
        description: (
          <div
            style={{ display: "flex", gap: "12px", flexDirection: "column" }}
          >
            <p style={{ margin: 0 }}>
              Mit der eSIM benötigst du die klassische SIM-Karte (Mini-, Micro-
              oder Nano-SIM) aus Plastik nicht mehr. Stattdessen werden alle
              notwendigen Infos rund um deinen Tarif per eSIM-Profil direkt auf
              deinem Gerät gespeichert.
            </p>
            <p style={{ margin: 0 }}>
              Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
              Denn nicht alle Smartphones sind schon eSIM-fähig.
            </p>
            <p style={{ margin: 0 }}>
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
  render: (args) => {
    return (
      <Headline as="h1" size="large" variant="black">
        A headline <ModalFootnotes {...args} />
      </Headline>
    );
  },
};
