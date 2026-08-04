import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "./ProgressBar";
import { CardFilled } from "../Card/CardFilled";
import { Text } from "../Typography/Text";
import { Typography } from "../Typography/Typography";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "lightGrey", "darkGrey"],
};

const meta = {
  component: ProgressBar,
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
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 33.33,
  },
};

export const Empty: Story = {
  args: {
    progress: 0,
  },
};

export const Filled: Story = {
  args: {
    progress: 100,
  },
};

export const Colored: Story = {
  args: {
    color: "purple",
    progress: 100,
  },
};

export const DifferentMetric: Story = {
  args: {
    color: "purple",
    progress: 4.5,
    max: 5,
  },
};

export const WithSizeOverride: Story = {
  args: {
    color: "purple",
    progress: 4.5,
    max: 5,
    size: "medium",
  },
};

export const WithContext: Story = {
  args: {
    progress: 21,
    max: 24,
  },
  render: (args) => (
    <CardFilled.Root backgroundColor="darkGrey" size="small">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          alignItems: "end",
        }}
        id="progressbar-label"
      >
        <Typography variant="HeadlineBold20" trimFont>
          21
        </Typography>
        <Text size="large" variant="light" trimmed>
          von
        </Text>
        <Typography variant="HeadlineBold20" trimFont>
          24
        </Typography>
        <Text size="large" variant="light" trimmed>
          Raten übrig
        </Text>
      </div>
      <div style={{ height: "12px" }} />
      <ProgressBar {...args} progress={args.progress} />
    </CardFilled.Root>
  ),
};
