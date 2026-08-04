import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppTabs } from "./AppTabs";
import { disableControls } from "../../../stories/utils/disableControls";
import { AppTabsProps } from "./AppTabs.types";
import { Text } from "../../Typography/Text";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: [],
  congstarApp: ["black"],
};

const meta = {
  component: AppTabs,
  argTypes: {
    ...disableControls<AppTabsProps>(["asChild"]),
  },
  parameters: { allowedBackgroundColors },
  tags: [
    "!readyForJa",
    "!readyForPenny",
    "!notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "readyForCongstarApp",
  ],
} satisfies Meta<typeof AppTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "manual",
    ariaLabel: "Auswahl eSIM Aktivierung",
    tabs: [
      {
        id: "manual",
        label: "Manuell",
        content: (
          <>
            <Text size="large" variant="bold">
              eSIM manuell aktivieren
            </Text>
            <Text size="large" variant="light">
              Um deine eSIM manuell zu aktivieren, gehe in die Einstellungen
              deines Geräts und gib dort die unten angegebene SM-DP+ Adresse und
              den Aktivierungscode ein.
            </Text>
          </>
        ),
      },
      {
        id: "qrcode",
        label: "QR-Code",
        content: (
          <>
            <Text size="large" variant="bold">
              eSIM via QR-Code aktivieren
            </Text>
            <Text size="large" variant="light">
              Scanne den QR-Code mit der Kamera des Geräts, auf dem du die eSIM
              einrichten möchtest. Teile dazu ggf. den QR-Code mit einem anderen
              Gerät oder drucke ihn aus. Alternativ kannst du die eSIM auch
              manuell einrichten.
            </Text>
          </>
        ),
      },
    ],
  },
};

export const ThreeTabs: Story = {
  args: {
    defaultValue: "dsl",
    ariaLabel: "Produktauswahl",
    tabs: [
      {
        id: "dsl",
        label: "DSL",
        content: (
          <Text size="large" variant="light">
            Mit congstar DSL bietet congstar schnelles Internet für zuhause mit
            flexiblen Laufzeiten.
          </Text>
        ),
      },
      {
        id: "prepaid",
        label: "Prepaid",
        content: (
          <Text size="large" variant="light">
            Die Prepaid-Tarife von congstar ermöglichen maximale Kostenkontrolle
            ohne Vertragsbindung.
          </Text>
        ),
      },
      {
        id: "postpaid",
        label: "Postpaid",
        content: (
          <Text size="large" variant="light">
            congstar Postpaid-Tarife bieten günstige Mobilfunkoptionen mit
            monatlicher Abrechnung und flexiblen Datenpaketen.
          </Text>
        ),
      },
    ],
  },
};
