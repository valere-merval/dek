import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconTile } from "./IconTile";
import { ThumbsUpFill } from "@fair/icons";

import { iconSelection, iconsMapping } from "../../stories/utils/icons";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue"],
};

const meta = {
  component: IconTile,
  argTypes: {
    icon: {
      options: iconSelection,
      description: "Icon",
      mapping: iconsMapping,
      control: {
        type: "select",
      },
    },
  },
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
} satisfies Meta<typeof IconTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <ThumbsUpFill />,
    color: "purple",
    variant: "filled",
    size: { minAvailableSpace: "small", maxAvailableSpace: "medium" },
  },
};

export const WithContainerQuery: Story = {
  args: {
    icon: <ThumbsUpFill />,
    color: "purple",
    variant: "filled",
    size: { minAvailableSpace: "small", maxAvailableSpace: "medium" },
    containerQueryConfiguration: {
      containerName: "icon-tile-container",
      containerBreakpoint: "500px",
    },
  },
  render: (args) => {
    return (
      <div
        style={{
          containerName: "icon-tile-container",
          containerType: "inline-size",
          width: "70%",
          backgroundColor: "gainsboro",
        }}
      >
        <IconTile {...args} />
      </div>
    );
  },
};
