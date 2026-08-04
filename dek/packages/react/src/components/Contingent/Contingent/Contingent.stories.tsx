import type { Meta, StoryObj } from "@storybook/react-vite";
import { Contingent } from "./Contingent";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: Contingent,
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
} satisfies Meta<typeof Contingent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    amount: 16,
    unit: "GB",
  },
};

export const Bandwidth: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    amount: 16,
    unit: "Mbit/s",
    suffix: "Download",
  },
};

export const WithStrikeThroughAmount: Story = {
  args: {
    size: {
      mobile: "small",
      desktop: "medium",
    },
    amount: 20,
    unit: "GB",
    strikeThroughAmount: 15,
    strikeThroughAmountPrefix: "dauerhaft",
  },
};

export const ContingentSmallAndLarge: Story = {
  args: {
    ...Default.args,
    size: {
      mobile: "small",
      desktop: "large",
    },
  },
};

export const BandwidthSmallAndLarge: Story = {
  args: {
    ...Bandwidth.args,
    size: {
      mobile: "small",
      desktop: "large",
    },
  },
};
export const WithStrikeThroughAmountSmallAndLarge: Story = {
  args: {
    ...WithStrikeThroughAmount.args,
    size: {
      mobile: "small",
      desktop: "large",
    },
  },
};
