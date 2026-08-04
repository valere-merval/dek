import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";
import { disableControls } from "../../stories/utils/disableControls";
import { DividerProps } from "./Divider.types";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey", "blue"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: Divider,
  argTypes: {
    ...disableControls<DividerProps>(["css", "as", "data-testid"]),
  },
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "darkGrey",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    color: "darkGrey",
  },
  render: (args) => (
    <div style={{ height: "300px" }}>
      <Divider {...args}></Divider>
    </div>
  ),
};

export const NoGap: Story = {
  args: {
    ...Default.args,
    noGap: true,
  },
};

export const WithText: Story = {
  args: {
    text: "oder",
    color: "darkGrey",
  },
};
