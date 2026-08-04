import type { Meta, StoryObj } from "@storybook/react-vite";
import { MessageStatus } from "./MessageStatus";
import { statusMock } from "./MessageStatus.mock";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { Typography } from "../../Typography/Typography";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: MessageStatus,
  argTypes: {
    variant: ["primary", "outlined"],
    fullWidth: {
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "boolean | { mobile: boolean; desktop: boolean }",
        },
      },
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
} satisfies Meta<typeof MessageStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: statusMock.error,
    type: "error",
  },
};

export const Error: Story = {
  args: {
    message: statusMock.error,
    type: "error",
  },
};

export const Warning: Story = {
  args: {
    message: statusMock.warning,
    type: "warning",
  },
};

export const Pending: Story = {
  args: {
    message: statusMock.pending,
    type: "pending",
  },
};

export const Success: Story = {
  args: {
    message: statusMock.success,
    type: "success",
  },
};

// ToDo: Größe des Buttons anpassen, sobald die Größe des Buttons einstellbar ist
export const CustomMessage: Story = {
  args: {
    message: (
      <>
        <Typography variant="BodyLight14" color="inherit" as="p">
          Die Rufnummer, die du mitnehmen willst, ist bereits bei congstar
          registriert. Du erreichst uns Mo. – Sa. von 8 – 22 Uhr, an Sonn- und
          Feiertagen von 9 – 18 Uhr unter{" "}
          <Typography as="strong" variant="BodyBold14" color="inherit">
            0221 79 700 700
          </Typography>
          .
        </Typography>
        <ButtonSecondary
          asChild
          style={{ color: "inherit", marginBottom: "4px" }}
        >
          <a href="https://www.congstar.de">Rufnummer ändern</a>
        </ButtonSecondary>
      </>
    ),
    type: "error",
    variant: "outlined",
  },
};

export const WithOutline: Story = {
  args: {
    message: statusMock.error,
    type: "error",
    variant: "outlined",
  },
};
export const WithOutlineFullWidth: Story = {
  args: {
    message: statusMock.error,
    type: "error",
    variant: "outlined",
    fullWidth: true,
  },
};
