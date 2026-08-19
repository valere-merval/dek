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

export const AsAnchor: Story = {
  args: {
    asChild: true,
    children: <a href="https://www.congstar.de">Mehr Details</a>,
  },
};

export const AlternateText: Story = {
  args: {
    children: "Zum Router Check",
    linkText: "Deprecated label",
  },
};

export const DeprecatedLinkText: Story = {
  args: {
    linkText: "Deprecated label",
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
