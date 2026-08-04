import type { Meta, StoryObj } from "@storybook/react-vite";
import { Headline } from "./Headline";
import { disableControls } from "../../../stories/utils/disableControls";
import { HeadlineProps } from "./Headline.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
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
  component: Headline,
  argTypes: {
    ...disableControls<HeadlineProps>(["css", "data-testid"]),
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large", "extraLarge"],
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["black", "bold"],
    },
    as: {
      control: {
        type: "radio",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
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
} satisfies Meta<typeof Headline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    variant: "bold",
    as: "h2",
    children: "Der neue congstar Prepaid Tarif",
  },
};
