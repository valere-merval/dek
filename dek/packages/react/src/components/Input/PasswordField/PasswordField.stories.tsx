import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordField } from "./PasswordField";
import { Default as TextFieldDefaultStory } from "../TextField/TextField.stories";
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
  component: PasswordField,
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
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...TextFieldDefaultStory,
  args: {
    ...TextFieldDefaultStory.args,
    placeholder: "Passwort",
    id: "password",
    name: "password",
    required: true,
  },
};

export const WithError: Story = {
  ...Default,
  args: {
    ...Default.args,
    id: "password-error",
    name: "password-error",
    messages: [
      { message: "Nutze mindestens ein Sonderzeichen.", type: "error" },
    ],
  },
};

export const WithPasswordRevealedInitially: Story = {
  ...Default,
  args: {
    ...Default.args,
    id: "password",
    name: "password",
    revealPasswordInitially: true,
  },
};

export const LegitimationPin: Story = {
  ...TextFieldDefaultStory,
  args: {
    ...TextFieldDefaultStory.args,
    placeholder: "Legitimations-PIN",
    id: "legitimationPin",
    name: "legitimationPin",
    required: true,
  },
};
