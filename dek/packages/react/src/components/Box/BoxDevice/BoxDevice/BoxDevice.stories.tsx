import { ComponentPropsWithoutRef } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoxDevice } from "./BoxDevice";
import {
  appleIphone14,
  appleIphone14BringbackMulti,
  fairphone4,
  fairphone6,
  nothingPhone,
  samsungS23Ultra,
  samsungS23UltraBringback,
} from "./BoxDevice.mock";
import { disableControls } from "../../../../stories/utils/disableControls";
import { BoxDeviceProps } from "./BoxDevice.types";
import { AllowedBackgroundColors } from "../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "lightGrey"],
};

const meta = {
  component: BoxDevice.Item,
  argTypes: {
    ...disableControls<BoxDeviceProps>(["image"]),
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
} satisfies Meta<typeof BoxDevice.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...fairphone4,
  },
};

export const Grid: Story = {
  args: fairphone4,
  render: (args) => (
    <BoxDevice.Grid>
      <BoxDevice.Item {...args} />
      <BoxDevice.Item {...samsungS23Ultra} />
      <BoxDevice.Item {...appleIphone14} />
      <BoxDevice.Item {...nothingPhone} />
    </BoxDevice.Grid>
  ),
};

const omitOnClick = (props: BoxDeviceProps) => {
  const { buttonPrimaryProps, ...propsWithoutOnClick } = props;
  return {
    ...propsWithoutOnClick,
    buttonPrimaryProps: { href: "https://google.com" },
  };
};

export const AsLink: Story = {
  args: omitOnClick(fairphone4),
  render: (args) => (
    <BoxDevice.Grid>
      <BoxDevice.Item {...args} />
      <BoxDevice.Item {...omitOnClick(samsungS23Ultra)} />
      <BoxDevice.Item {...omitOnClick(appleIphone14)} />
      <BoxDevice.Item {...omitOnClick(nothingPhone)} />
    </BoxDevice.Grid>
  ),
};

const FrameworkLink = (props: ComponentPropsWithoutRef<"a">) => (
  <a {...props}>{props.children}</a>
);

export const AsRenderLink: Story = {
  args: {
    ...fairphone4,
    buttonPrimaryProps: {
      ...fairphone4.buttonPrimaryProps,
      renderAnchor: (props: ComponentPropsWithoutRef<"a">) => (
        <FrameworkLink
          {...props}
          href="https://www.congstar.de/geraete/fairphone/fairphone-5"
        />
      ),
    },
  },
  render: (args) => (
    <BoxDevice.Grid>
      <BoxDevice.Item {...args} />
    </BoxDevice.Grid>
  ),
};

export const Skeleton: Story = {
  args: fairphone4,
  render: () => (
    <BoxDevice.Grid>
      <BoxDevice.Skeleton />
      <BoxDevice.Skeleton />
      <BoxDevice.Skeleton />
      <BoxDevice.Skeleton />
    </BoxDevice.Grid>
  ),
};

export const WithLongSecondaryInfoText: Story = {
  args: {
    ...fairphone6,
  },
};

export const WithDifferentHeadlineLevel: Story = {
  args: fairphone4,
  render: (args) => (
    <BoxDevice.Grid>
      <BoxDevice.Item {...args} headlineLevel="h4" />
      <BoxDevice.Item {...samsungS23Ultra} headlineLevel="h4" />
      <BoxDevice.Item {...appleIphone14} headlineLevel="h4" />
      <BoxDevice.Item {...nothingPhone} headlineLevel="h4" />
    </BoxDevice.Grid>
  ),
};

export const WithBringback: Story = {
  args: fairphone4,
  render: (args) => (
    <BoxDevice.Grid>
      <BoxDevice.Item {...args} headlineLevel="h4" />
      <BoxDevice.Item {...samsungS23UltraBringback} headlineLevel="h4" />
      <BoxDevice.Item {...appleIphone14BringbackMulti} headlineLevel="h4" />
      <BoxDevice.Item {...nothingPhone} headlineLevel="h4" />
    </BoxDevice.Grid>
  ),
};

export const WithLongBringbackInfoText: Story = {
  args: {
    ...samsungS23UltraBringback,
    price: {
      ...samsungS23UltraBringback.price,
      bringbackInformation:
        'inkl. 234 € Vorteil bei Verkauf im Zustand "Gebraucht"',
    },
  },
};

export const WithPib: Story = {
  args: {
    ...fairphone4,
    pibHref: "https://www.congstar.de/geraete/fairphone/fairphone-5",
  },
};
