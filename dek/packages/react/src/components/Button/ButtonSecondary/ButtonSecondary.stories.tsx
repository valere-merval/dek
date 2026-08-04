import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonSecondary } from "./ButtonSecondary";
import { ArrowRight } from "@fair/icons";
import { disableControls } from "../../../stories/utils/disableControls";
import { ButtonSecondaryProps } from "./ButtonSecondary.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
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
  component: ButtonSecondary,
  argTypes: {
    ...disableControls<ButtonSecondaryProps>([
      "asChild",
      "startIcon",
      "endIcon",
      "data-testid",
    ]),
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
} satisfies Meta<typeof ButtonSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    onClick: () => {
      alert("click");
    },
  },
};

export const AsAnchor: Story = {
  args: {
    children: <a href="https://www.congstar.de">Click me</a>,
    asChild: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    ...Default.args,
    startIcon: <ArrowRight />,
  },
};

export const WithEndIcon: Story = {
  args: {
    ...Default.args,
    endIcon: <ArrowRight />,
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    color: "white",
  },
};

export const NoTextStartIcon: Story = {
  args: {
    children: null,
    "aria-label": "Click me",
    startIcon: <ArrowRight />,
  },
};

export const NoTextEndIcon: Story = {
  args: {
    children: null,
    "aria-label": "Click me",
    endIcon: <ArrowRight />,
  },
};

export const NoTextAsChild: Story = {
  args: {
    // eslint-disable-next-line jsx-a11y/anchor-has-content -- icon-only link, accessible via aria-label on parent
    children: <a href="https://www.congstar.de"></a>,
    "aria-label": "Click me",
    asChild: true,
    endIcon: <ArrowRight />,
  },
};
