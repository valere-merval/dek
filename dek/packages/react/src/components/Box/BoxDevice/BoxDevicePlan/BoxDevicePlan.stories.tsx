import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoxDevicePlan } from "./BoxDevicePlan";
import {
  appleIphone14,
  fairphone4,
  nothingPhone,
  samsungS23Ultra,
} from "./BoxDevicePlan.mock";
import { disableControls } from "../../../../stories/utils/disableControls";
import { BoxDevicePlanProps } from "./BoxDevicePlan.types";
import { AllowedBackgroundColors } from "../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: BoxDevicePlan.Item,
  argTypes: {
    ...disableControls<BoxDevicePlanProps>(["image"]),
    promotionLabelColor: {
      control: {
        type: "radio",
      },
      options: ["pink", "black"],
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
} satisfies Meta<typeof BoxDevicePlan.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...fairphone4,
  },
};

export const Grid: Story = {
  args: { ...fairphone4 },
  render: (args) => (
    <BoxDevicePlan.Grid>
      <BoxDevicePlan.Item {...args} />
      <BoxDevicePlan.Item {...samsungS23Ultra} />
      <BoxDevicePlan.Item {...appleIphone14} />
      <BoxDevicePlan.Item {...nothingPhone} />
    </BoxDevicePlan.Grid>
  ),
};

const omitOnClick = (props: BoxDevicePlanProps) => {
  const { buttonPrimaryProps, ...propsWithoutOnClick } = props;
  return {
    ...propsWithoutOnClick,
    buttonPrimaryProps: { href: "https://google.com" },
  };
};

export const AsLink: Story = {
  args: omitOnClick(fairphone4),
  render: (args) => (
    <BoxDevicePlan.Grid>
      <BoxDevicePlan.Item {...args} />
      <BoxDevicePlan.Item {...omitOnClick(samsungS23Ultra)} />
      <BoxDevicePlan.Item {...omitOnClick(appleIphone14)} />
      <BoxDevicePlan.Item {...omitOnClick(nothingPhone)} />
    </BoxDevicePlan.Grid>
  ),
};

export const WithEqualStrikeThroughAndPrice: Story = {
  args: {
    ...{
      ...samsungS23Ultra,
      price: {
        ...samsungS23Ultra.price,
        strikeThroughPrice: 20,
      },
    },
  },
};

export const WithDifferentHeadlineLevel: Story = {
  args: { ...fairphone4 },
  render: (args) => (
    <BoxDevicePlan.Grid>
      <BoxDevicePlan.Item {...args} headlineLevel="h2" />
      <BoxDevicePlan.Item {...samsungS23Ultra} headlineLevel="h2" />
      <BoxDevicePlan.Item {...appleIphone14} headlineLevel="h2" />
      <BoxDevicePlan.Item {...nothingPhone} headlineLevel="h2" />
    </BoxDevicePlan.Grid>
  ),
};
