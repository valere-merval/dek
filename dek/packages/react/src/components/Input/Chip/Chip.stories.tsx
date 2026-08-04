import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./Chip";
import { ChipProps } from "./Chip.types";
import { disableControls } from "../../../stories/utils/disableControls";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: Chip,
  argTypes: disableControls<ChipProps>(["asChild"]),
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
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Für Zuhause",
    onPressedChange: (v: boolean) => console.log(v),
  },
};
