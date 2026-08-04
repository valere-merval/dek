import type { Meta, StoryObj } from "@storybook/react-vite";
import { LabelPromoted } from "./LabelPromoted";
import { disableControls } from "../../../stories/utils/disableControls";
import { LabelPromotedProps } from "./LabelPromoted.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
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
  component: LabelPromoted,
  argTypes: {
    ...disableControls<LabelPromotedProps>(["css", "as", "data-testid"]),
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
} satisfies Meta<typeof LabelPromoted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Promotion Label Default",
  },
  render: (args) => (
    <div
      style={{ padding: "5px", display: "inline-block" }}
      data-testid="labelPromotedWrapper"
    >
      <LabelPromoted {...args} />
    </div>
  ),
};

export const AsSpan: Story = {
  name: "As span",
  args: {
    children: "Promotion Label as span",
    as: "span",
  },
  render: (args) => (
    <div
      style={{ padding: "5px", display: "inline-block" }}
      data-testid="labelPromotedWrapper"
    >
      <LabelPromoted {...args} />
    </div>
  ),
};
