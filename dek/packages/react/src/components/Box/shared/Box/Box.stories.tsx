import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./Box";
import { AllowedBackgroundColors } from "../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: Box,
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
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero debitis laudantium perspiciatis quis inventore cupiditate at eveniet impedit error ut in, aliquid, neque perferendis quos nulla quibusdam obcaecati cum.",
  },
};

export const WithDecorationLabel: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    promotionLabel: "Aktion",
    promotionLabelColor: "black",
    discountText: "inkl. 5€ Rabatt",
  },
  render: (args) => <Box {...args}>{args.children}</Box>,
};
