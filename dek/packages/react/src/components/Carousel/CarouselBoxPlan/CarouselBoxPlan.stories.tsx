import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselBoxPlan } from "./CarouselBoxPlan";
import styled, { css } from "styled-components";
import { BoxPlan } from "../../Box/BoxPlan";
import {
  allnetFlatM,
  allnetFlatS,
  fixed100mb,
  fixed250mb,
  fixed50mb,
  homeSpot,
  prepaidSixMonths,
} from "../../Box/BoxPlan/BoxPlan.mock";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { Headline } from "../../Typography/Headline";
import { CardFilled } from "../../Card/CardFilled";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: CarouselBoxPlan,
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
} satisfies Meta<typeof CarouselBoxPlan>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = styled.div(
  ({ theme }) => css`
    margin: -${theme.space["16"]} 0;
  `,
);

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <CarouselBoxPlan {...args}>
        <BoxPlan.Item {...prepaidSixMonths} />
        <BoxPlan.Item {...allnetFlatM} />
        <BoxPlan.Item {...allnetFlatS} />
        <BoxPlan.Item {...homeSpot} />
        <BoxPlan.Item {...allnetFlatS} />
        <BoxPlan.Item {...homeSpot} />
      </CarouselBoxPlan>
    </Wrapper>
  ),
};

export const WithNavigationChips: Story = {
  render: (args) => (
    <Wrapper>
      <CarouselBoxPlan
        {...args}
        navigationChips={[
          { title: "50 MBit/s", secondLine: "20 €" },
          { title: "100 MBit/s", secondLine: "35 €" },
          { title: "250 MBit/s", secondLine: "45 €" },
        ]}
      >
        <BoxPlan.Item {...fixed50mb} />
        <BoxPlan.Item {...fixed100mb} />
        <BoxPlan.Item {...fixed250mb} />
      </CarouselBoxPlan>
    </Wrapper>
  ),
};

export const WithOnly3Slides: Story = {
  render: (args) => (
    <Wrapper>
      <CarouselBoxPlan {...args}>
        <BoxPlan.Item {...prepaidSixMonths} />
        <BoxPlan.Item {...allnetFlatS} />
        <BoxPlan.Item {...homeSpot} />
      </CarouselBoxPlan>
    </Wrapper>
  ),
};

export const WithStartIndex: Story = {
  ...Default,
  args: {
    ...Default.args,
    startIndex: 2,
  },
};

const BoxPlanItemWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

/**
 * It is possible to wrap a BoxPlan to do events or hooks, but not to render another dom node around, because it would break the layout.
 */
export const WithItemWrapper: Story = {
  render: (args) => (
    <Wrapper>
      <CarouselBoxPlan {...args}>
        <BoxPlanItemWrapper>
          <BoxPlan.Item {...prepaidSixMonths} />
        </BoxPlanItemWrapper>
        <BoxPlanItemWrapper>
          <BoxPlan.Item {...allnetFlatM} />
        </BoxPlanItemWrapper>
        <BoxPlanItemWrapper>
          <BoxPlan.Item {...allnetFlatS} />
        </BoxPlanItemWrapper>
        <BoxPlanItemWrapper>
          <BoxPlan.Item {...homeSpot} />
        </BoxPlanItemWrapper>
        <BoxPlanItemWrapper>
          <BoxPlan.Item {...allnetFlatS} />
        </BoxPlanItemWrapper>
        <BoxPlanItemWrapper>
          <BoxPlan.Item {...homeSpot} />
        </BoxPlanItemWrapper>
      </CarouselBoxPlan>
    </Wrapper>
  ),
};

export const WithStartIndexToTestScrolling: Story = {
  ...Default,
  args: {
    ...Default.args,
    startIndex: 2,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "500px" }}>
      <Headline size="medium" variant="black" as="h3">
        Scroll down to see the Carousel
      </Headline>

      <Wrapper>
        <CarouselBoxPlan {...args}>
          <BoxPlan.Item {...prepaidSixMonths} />
          <BoxPlan.Item {...allnetFlatM} />
          <BoxPlan.Item {...allnetFlatS} />
          <BoxPlan.Item {...homeSpot} />
          <BoxPlan.Item {...allnetFlatS} />
          <BoxPlan.Item {...homeSpot} />
        </CarouselBoxPlan>
      </Wrapper>
    </div>
  ),
};

const FlexWrapper = styled(Wrapper)(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["32"]};
    justify-content: space-between;
  `,
);

export const WithSidebarOnTheRight: Story = {
  render: (args) => (
    <FlexWrapper>
      <div style={{ width: "100%" }}>
        <CarouselBoxPlan {...args}>
          <BoxPlan.Item {...prepaidSixMonths} />
          <BoxPlan.Item {...allnetFlatM} />
          <BoxPlan.Item {...allnetFlatS} />
          <BoxPlan.Item {...homeSpot} />
          <BoxPlan.Item {...allnetFlatS} />
          <BoxPlan.Item {...homeSpot} />
        </CarouselBoxPlan>
      </div>
      <CardFilled.Root
        backgroundColor="darkGrey"
        size="medium"
        style={{ width: "200px", margin: "16px 0", height: "300px" }}
      >
        <Headline size="medium" variant="black" as="h3">
          Sidebar
        </Headline>
      </CardFilled.Root>
    </FlexWrapper>
  ),
};
