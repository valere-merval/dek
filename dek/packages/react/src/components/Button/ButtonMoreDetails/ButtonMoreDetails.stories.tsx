import type { Meta, StoryObj } from "@storybook/react-vite";
import { Headline } from "../../Typography/Headline";
import { ButtonMoreDetails } from "./ButtonMoreDetails";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: ButtonMoreDetails,
  argTypes: {
    linkText: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["medium", "large"],
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
} satisfies Meta<typeof ButtonMoreDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AlternateLinkText: Story = {
  args: {
    linkText: "Zum Router Check",
  },
};

export const InheritedSize: Story = {
  args: {
    inheritFont: true,
    size: undefined,
  },
  render: (args) => {
    return (
      <Headline as="h1" size="large" variant="black">
        A headline <ButtonMoreDetails {...args} />
      </Headline>
    );
  },
};
