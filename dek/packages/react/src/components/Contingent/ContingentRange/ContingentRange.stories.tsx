import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContingentRange } from "./ContingentRange";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: ContingentRange,
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
} satisfies Meta<typeof ContingentRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    amountRange: { minimum: 5, maximum: 20 },
    unit: "GB",
  },
};

export const Bandwidth: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    amountRange: { minimum: 5, maximum: 20 },
    unit: "Mbit/s",
    suffix: "Download",
  },
};

export const ContingentRangeLargeAndSmall: Story = {
  args: {
    ...Default.args,
    size: {
      mobile: "small",
      desktop: "large",
    },
  },
};

export const BandwidthLargeAndSmall: Story = {
  args: {
    ...Bandwidth.args,
    size: {
      mobile: "small",
      desktop: "large",
    },
  },
};
