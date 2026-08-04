import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoaderSkeleton } from "./LoaderSkeleton";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: LoaderSkeleton,
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
} satisfies Meta<typeof LoaderSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "400px",
    width: "100%",
  },
};

export const WithFixedWidth: Story = {
  args: {
    height: "400px",
    width: "500px",
  },
};

export const WithBackground: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div style={{ backgroundColor: "blue" }}>
      <LoaderSkeleton {...args} />
    </div>
  ),
};
