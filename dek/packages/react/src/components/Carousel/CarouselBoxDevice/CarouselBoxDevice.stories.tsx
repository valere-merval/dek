import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselBoxDevice } from "./CarouselBoxDevice";
import {
  appleIphone14,
  fairphone4,
  fairphone5,
  nothingPhone,
  samsungS23Ultra,
} from "../../Box/BoxDevice/BoxDevicePlan/BoxDevicePlan.mock";
import { BoxDevicePlan } from "../../Box/BoxDevice/BoxDevicePlan";
import styled, { css } from "styled-components";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: CarouselBoxDevice,
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
} satisfies Meta<typeof CarouselBoxDevice>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = styled.div(
  ({ theme }) => css`
    margin: -${theme.space["16"]} 0;
  `,
);

export const Default: Story = {
  render: () => (
    <Wrapper>
      <CarouselBoxDevice>
        <BoxDevicePlan.Item {...samsungS23Ultra} />
        <BoxDevicePlan.Item {...fairphone4} />
        <BoxDevicePlan.Item {...nothingPhone} />
        <BoxDevicePlan.Item {...appleIphone14} />
        <BoxDevicePlan.Item {...fairphone5} />
      </CarouselBoxDevice>
    </Wrapper>
  ),
};

export const WithOnly3Slides: Story = {
  render: () => (
    <Wrapper>
      <CarouselBoxDevice>
        <BoxDevicePlan.Item {...fairphone4} />
        <BoxDevicePlan.Item {...nothingPhone} />
        <BoxDevicePlan.Item {...appleIphone14} />
      </CarouselBoxDevice>
    </Wrapper>
  ),
};

export const WithOnly1Slide: Story = {
  render: () => (
    <Wrapper>
      <CarouselBoxDevice>
        <BoxDevicePlan.Item {...fairphone4} />
      </CarouselBoxDevice>
    </Wrapper>
  ),
};

export const WithMoreThan6Slides: Story = {
  render: () => (
    <Wrapper>
      <CarouselBoxDevice>
        <BoxDevicePlan.Item {...samsungS23Ultra} />
        <BoxDevicePlan.Item {...fairphone4} />
        <BoxDevicePlan.Item {...nothingPhone} />
        <BoxDevicePlan.Item {...appleIphone14} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
        <BoxDevicePlan.Item {...fairphone5} />
      </CarouselBoxDevice>
    </Wrapper>
  ),
};
