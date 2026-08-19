import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableComparison } from "./TableComparison";
import type { TableComparisonProps } from "./TableComparison.types";
import {
  plansMock,
  plansMockOnlyTwo,
  plansMockPhone,
  routersMock,
} from "./TableComparison.mock";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
};

const meta = {
  component: TableComparison,
  parameters: {
    noPaddingX: true,
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
} satisfies Meta<typeof TableComparison>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: plansMock,
    placeholder: "congstar Zuhause Flex",
    title: "congstar Zuhause Flex",
  },
};

export const WithOnlyTwoPlans: Story = {
  args: {
    data: plansMockOnlyTwo,
    placeholder: "congstar Zuhause Flex",
    title: "congstar Zuhause Flex",
  },
};

export const WithoutSticky: Story = {
  args: {
    data: plansMock,
    sticky: false,
    placeholder: "congstar Zuhause Flex",
    title: "congstar Zuhause Flex",
  },
};

export const WithOnlyTwoPlansWithoutSticky: Story = {
  args: {
    data: plansMockOnlyTwo,
    sticky: false,
    placeholder: "congstar Zuhause Flex",
    title: "congstar Zuhause Flex",
  },
};

export const WithVerticalImages: Story = {
  args: {
    data: plansMockPhone,
    placeholder: "congstar Zuhause Flex",
    title: "congstar Zuhause Flex",
  },
};

export const WithThirdColumn: Story = {
  args: {
    data: routersMock,
    showThirdColumn: true,
    placeholder: "Router-Option",
    title: "Mit Router oder ohne?",
  },
  render: (args: TableComparisonProps) => (
    <TableComparison
      key={args.showThirdColumn ? "three-columns" : "two-columns"}
      {...args}
    />
  ),
};
