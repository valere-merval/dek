import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField";
import { MailOutline } from "@fair/icons";
import { disableControls } from "../../../stories/utils/disableControls";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: TextField,
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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    size: {
      control: "radio",
      options: ["medium", "large"],
    },
    ...disableControls([
      "data-testid",
      "icon",
      "buttonAriaLabel",
      "onIconClick",
    ]),
  },
  args: {
    id: "mail",
    name: "mail",
    placeholder: "E-Mail",
    required: false,
    disabled: false,
    fullWidth: false,
    messages: [],
  },
};

export const WithError: Story = {
  ...Default,
  args: {
    ...Default.args,
    id: "mail-error",
    name: "mail-error",
    messages: [{ message: "Deine Angabe ist ungültig.", type: "error" }],
  },
};

export const WithMultipleErrors: Story = {
  ...Default,
  args: {
    ...Default.args,
    id: "mail-errors",
    name: "mail-errors",
    messages: [
      { message: "Deine Angabe ist ungültig.", type: "error" },
      {
        message: "Die Email-Adresse konnte nicht gefunden werden.",
        type: "error",
      },
    ],
  },
};

export const OnlyNumber: Story = {
  ...Default,
  args: {
    ...Default.args,
    id: "number",
    placeholder: "PLZ",
    name: "number",
    type: "number",
    inputMode: "numeric",
  },
};

export const WithIcon: Story = {
  ...Default,
  args: {
    ...Default.args,
    id: "mail-icon",
    name: "mail-icon",
    icon: <MailOutline />,
    buttonAriaLabel: "Send E-Mail",
  },
};

export const FullWidth: Story = {
  args: {
    id: "mail-full",
    name: "mail-full",
    placeholder: "E-Mail",
    required: false,
    disabled: false,
    messages: [],
    fullWidth: true,
  },
  render: (args) => (
    <div
      id="fullWidthContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        rowGap: "12px",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "8px",
          rowGap: "12px",
          grid: "auto-flow dense / 2fr 1fr",
        }}
      >
        <div>
          <TextField {...args} />
        </div>
        <div>
          <TextField {...args} placeholder="PLZ" id="zip" name="zip" />
        </div>
      </div>
    </div>
  ),
};
