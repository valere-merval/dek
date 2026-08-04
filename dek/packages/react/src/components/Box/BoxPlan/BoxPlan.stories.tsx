import { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoxPlan } from "./BoxPlan";
import {
  allnetFlatM,
  allnetFlatS,
  fixed50mb,
  fixedHomeSpotFallback,
  homeSpot,
  prepaidWieIchWill,
} from "./BoxPlan.mock";
import { disableControls } from "../../../stories/utils/disableControls";
import { BoxPlanProps } from "./BoxPlan.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black"],
  congstarApp: ["black"],
  penny: ["pennyNeutralLightGrey"],
  ja: ["jaAgave20"],
};

export type SingleRange = "single" | "range";

type Mapping = {
  options: SingleRange[];
  mapping: Record<SingleRange, ReactNode>;
};

const singleRangeMapping: Record<"contingent" | "price", Mapping> = {
  contingent: {
    options: ["single", "range"],
    mapping: {
      single: allnetFlatM.contingent,
      range: prepaidWieIchWill.contingent,
    },
  },
  price: {
    options: ["single", "range"],
    mapping: {
      single: allnetFlatM.price,
      range: prepaidWieIchWill.price,
    },
  },
};

const meta = {
  component: BoxPlan.Item,
  argTypes: {
    ...disableControls<BoxPlanProps>(["discountText"]),
    ...singleRangeMapping,
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
} satisfies Meta<typeof BoxPlan.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...allnetFlatM,
  },
};

export const WithUsps: Story = {
  args: {
    ...fixed50mb,
  },
};

export const WithCustomButtonLabel: Story = {
  args: {
    ...fixedHomeSpotFallback,
  },
};

export const Row: Story = {
  args: {
    ...allnetFlatM,
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "32px",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <BoxPlan.Item {...args} />
      <BoxPlan.Item {...allnetFlatS} />
      <BoxPlan.Item {...homeSpot} />
      <BoxPlan.Item {...prepaidWieIchWill} />
    </div>
  ),
};

const omitOnClick = (props: BoxPlanProps, href: string) => {
  const { buttonPrimaryProps, ...propsWithoutOnClick } = props;
  return {
    ...propsWithoutOnClick,
    buttonPrimaryProps: {
      href,
    },
  };
};

export const AsLink: Story = {
  args: {
    ...omitOnClick(
      allnetFlatM,
      "https://www.congstar.de/handytarife/allnet-flat-tarife/allnet-flat-m/",
    ),
  },
};

export const WithDifferentHeadlineLevel: Story = {
  args: {
    ...allnetFlatM,
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "32px",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <BoxPlan.Item {...args} headlineLevel="h4" />
      <BoxPlan.Item {...allnetFlatS} headlineLevel="h4" />
      <BoxPlan.Item {...homeSpot} headlineLevel="h4" />
      <BoxPlan.Item {...prepaidWieIchWill} headlineLevel="h4" />
    </div>
  ),
};
