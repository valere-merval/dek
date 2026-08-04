import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorVariants } from "./ColorVariants";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["lightGrey", "darkGrey", "black", "white"],
};

const meta = {
  component: ColorVariants,
  parameters: { allowedBackgroundColors },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof ColorVariants>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colors: [
      { hex: "#fff", name: "White" },
      { hex: "#bada55", name: "Lime Green" },
    ],
  },
};

export const WithExtraColors: Story = {
  args: {
    colors: [
      { hex: "#fff", name: "White" },
      { hex: "#123456", name: "Dark Blue" },
      { hex: "#643345", name: "Dark Red" },
      { hex: "#463345", name: "Dark Pink" },
      { hex: "#bada55", name: "Lime Green" },
    ],
  },
};
