import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";
import { disableControls } from "../../../stories/utils/disableControls";
import { TextProps } from "./Text.types";
import { ExternalLink } from "@fair/icons";
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
  component: Text,
  argTypes: {
    ...disableControls<TextProps>(["css", "data-testid"]),
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
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    variant: "light",
    as: "p",
    children:
      "Wir und unsere Drittanbieter nutzen Technologien (z. B. Cookies), um Informationen auf Nutzergeräten zu speichern und abzurufen, um persönliche Daten, wie IP-Adressen oder Browserdaten zu verarbeiten. Du kannst der Verarbeitung deiner persönlichen Daten für die unten aufgelisteten Verarbeitungszwecke zustimmen oder alternativ bevorzugte Einstellungen vornehmen, bevor du Cookies zustimmst oder ablehnst. Bitte beachte, dass manche Anbieter basierend auf legitimen Geschäftsinteressen deine persönlichen Daten verarbeiten, ohne nach deiner Zustimmung zu fragen. Um dein Recht auf Widerspruch gegen die Verarbeitung auf der Basis von legitimen Geschäftsinteressen auszuüben, schau dir bitte unsere Anbieterliste an. Deine Einwilligung umfasst gem. Art. 49 Abs. 1 lit. a DSGVO auch die Übermittlung in Drittländer, bspw. in die USA. Du kannst deine Privatsphäre-Einstellungen jederzeit ändern oder deine Zustimmung zurückziehen, indem du auf den Privacy Button klickst.",
    color: undefined,
  },
};

export const Nested: Story = {
  args: {
    size: "large",
    variant: "light",
    as: "p",
  },
  render: (args) => (
    <Text {...args} variant="light" size="large">
      <Text as="strong" variant="bold" size="large">
        Wichtig:{" "}
      </Text>
      Stelle sicher, dass du dich während der eSIM-Aktivierung in einem stabilen
      WLAN befindest.
    </Text>
  ),
};
export const BasicTextStylesLight: Story = {
  args: {
    size: "large",
    variant: "light",
    as: "div",
  },
  render: (args) => (
    <Text {...args}>
      <strong>ein strong-Tag</strong> <br />
      <b>ein b-Tag</b>
      <br />
      <u>ein u-Tag</u>
      <br />
      <del>ein del-Tag</del>
      <br />
      <a href="https://example.com">ein a-Tag</a>
      <br />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <a href="https://example.com">
        ein a-Tag mit icon <ExternalLink />{" "}
      </a>
      <br />
    </Text>
  ),
};
export const BasicTextStylesBold: Story = {
  args: {
    size: "large",
    variant: "bold",
    as: "p",
  },
  render: (args) => (
    <Text {...args}>
      <strong>ein strong-Tag</strong> <br />
      <b>ein b-Tag</b>
      <br />
      <u>ein u-Tag</u>
      <br />
      <del>ein del-Tag</del>
      <br />
      <a href="https://example.com">ein a-Tag</a>
      <br />
      <a href="https://example.com">
        ein a-Tag mit icon <ExternalLink />{" "}
      </a>
      <br />
    </Text>
  ),
};
export const BlockTextWithIconLink: Story = {
  args: {
    size: "large",
    variant: "light",
    as: "p",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "12px" }}>
      <div style={{ maxWidth: "360px" }}>
        <Text {...args} variant="bold">
          Lorem, ipsum dolor sit amet{" "}
          <a href="https://example.com">ein a-Tag</a> consectetur adipisicing
          elit. Sequi, nisi sed ullam cumque{" "}
          <a href="https://example.com">
            ein a-Tag mit icon <ExternalLink />
          </a>{" "}
          facere mollitia nihil explicabo quia laboriosam enim obcaecati
          architecto perferendis omnis id amet molestias ipsam corrupti
          reprehenderit?
          <br />
        </Text>
      </div>
    </div>
  ),
};
