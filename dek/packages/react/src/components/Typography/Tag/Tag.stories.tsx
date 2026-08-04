import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";
import { disableControls } from "../../../stories/utils/disableControls";
import { TagProps } from "./Tag.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  argTypes: {
    ...disableControls<TagProps>(["css", "data-testid"]),
  },
  component: Tag,
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
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    as: "p",
    children: "Der neue congstar Prepaid Tarif",
    color: undefined,
  },
};
