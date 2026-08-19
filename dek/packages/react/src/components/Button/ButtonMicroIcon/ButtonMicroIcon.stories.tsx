import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoCircleFill } from "@fair/icons";
import { ButtonMicroIcon } from "./ButtonMicroIcon";
import { Text } from "../../Typography/Text";
import { ButtonMoreDetails } from "../ButtonMoreDetails";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey", "blue"],
  ja: ["jaAgave20", "jaAgave80", "jaAgaveOutlinesSecondary", "jaGeneralWhite"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: ButtonMicroIcon,
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
} satisfies Meta<typeof ButtonMicroIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div
      style={{ display: "flex", padding: "8px", width: "360px" }}
      id="button-micro-icon"
    >
      <ButtonMicroIcon {...args} />
    </div>
  ),
};
export const WithDifferentIcon: Story = {
  args: {
    icon: <InfoCircleFill />,
  },
  render: (args) => (
    <div
      style={{ display: "flex", padding: "8px", width: "360px" }}
      id="button-micro-icon"
    >
      <ButtonMicroIcon {...args} />
    </div>
  ),
};

export const WithinText: Story = {
  args: {
    onClick: () => {
      console.log("ButtonMicroIcon clicked");
    },
  },
  render: (args) => (
    <div
      style={{ display: "flex", padding: "8px", width: "360px" }}
      id="button-micro-icon"
    >
      <Text size="medium" variant="bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <ButtonMicroIcon {...args} /> Sed do eiusmod tempor incididunt ut dolore{" "}
        <ButtonMoreDetails
          inheritFont
          onClick={() => {
            console.log("ButtonMoreDetails clicked");
          }}
        />{" "}
        aliqua.
      </Text>
    </div>
  ),
};
