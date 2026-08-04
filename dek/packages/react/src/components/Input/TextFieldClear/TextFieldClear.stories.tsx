import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextFieldClear } from "./TextFieldClear";
import { Default as TextFieldDefaultStory } from "../TextField/TextField.stories";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: TextFieldClear,
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
} satisfies Meta<typeof TextFieldClear>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...TextFieldDefaultStory,
};
