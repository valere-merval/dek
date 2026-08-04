import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";
import { disableControls } from "../../../stories/utils/disableControls";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  argTypes: {
    ...disableControls(["css", "data-testid"]),
  },
  component: Label,
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    as: "p",
    children: "Aktion",
    color: undefined,
  },
};
