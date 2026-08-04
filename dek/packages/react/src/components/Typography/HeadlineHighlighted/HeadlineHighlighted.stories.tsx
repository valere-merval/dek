import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeadlineHighlighted } from "./HeadlineHighlighted";
import { disableControls } from "../../../stories/utils/disableControls";
import { HeadlineHighlightedProps } from "./HeadlineHighlighted.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "darkGrey"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: HeadlineHighlighted,
  argTypes: {
    as: {
      control: {
        type: "radio",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    ...disableControls<HeadlineHighlightedProps>([
      "css",
      "className",
      "data-testid",
    ]),
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
} satisfies Meta<typeof HeadlineHighlighted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Highlighted Headline Default",
    size: "medium",
    decorativeColor: "yellow",
  },
};

export const AsH1: Story = {
  name: "As H1",
  args: {
    children: "Highlighted Headline as H1",
    as: "h1",
  },
};
