import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextFieldCopy } from "./TextFieldCopy";
import { Default as TextFieldDefaultStory } from "../TextField/TextField.stories";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "lightGrey", "darkGrey"],
};

const meta = {
  component: TextFieldCopy,
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
} satisfies Meta<typeof TextFieldCopy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...TextFieldDefaultStory,
};
