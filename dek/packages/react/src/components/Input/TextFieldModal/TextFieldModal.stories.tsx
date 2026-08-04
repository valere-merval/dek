import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextFieldModal } from "./TextFieldModal";
import { Default as TextFieldDefaultStory } from "../TextField/TextField.stories";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: TextFieldModal,
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
} satisfies Meta<typeof TextFieldModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...TextFieldDefaultStory,
  args: {
    ...TextFieldDefaultStory.args,
    modalContent: { title: "Hinweis", description: <p>Schönen Tag</p> },
  },
};
