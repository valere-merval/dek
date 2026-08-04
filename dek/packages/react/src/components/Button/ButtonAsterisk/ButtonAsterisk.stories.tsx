import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonAsterisk } from "./ButtonAsterisk";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: ButtonAsterisk,
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
} satisfies Meta<typeof ButtonAsterisk>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
