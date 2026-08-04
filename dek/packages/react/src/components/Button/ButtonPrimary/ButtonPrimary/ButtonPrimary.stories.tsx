import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonPrimary } from "./ButtonPrimary";
import { ArrowRight } from "@fair/icons";
import { disableControls } from "../../../../stories/utils/disableControls";
import { ButtonPrimaryProps } from "./ButtonPrimary.types";
import { AllowedBackgroundColors } from "../../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave20", "jaAgave80", "jaAgaveOutlinesSecondary", "jaGeneralWhite"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: ButtonPrimary,
  argTypes: {
    ...disableControls<ButtonPrimaryProps>(["asChild", "endIcon", "startIcon"]),
    fullWidth: {
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "boolean | { mobile: boolean; desktop: boolean }",
        },
      },
    },
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
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "data-testid": "button",
    onClick: () => {
      alert("click");
    },
    variant: "primary",
    size: "medium",
    isLoading: false,
    fullWidth: false,
    disabled: false,
    children: "Click me",
  },
};

export const AsAnchor: Story = {
  args: {
    children: <a href="https://www.congstar.de">Click me</a>,
    asChild: true,
    disabled: false,
  },
};

export const AsAnchorWithStartIcon: Story = {
  args: {
    children: <a href="https://www.congstar.de">Click me</a>,
    asChild: true,
    disabled: false,
    startIcon: <ArrowRight />,
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

export const Loading: Story = {
  argTypes: {
    ...disableControls<ButtonPrimaryProps>(["disabled"]),
  },
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const TwentySecondsLoading: Story = {
  argTypes: {
    ...disableControls<ButtonPrimaryProps>(["disabled"]),
  },
  args: {
    ...Default.args,
    isLoading: true,
  },
  render: () => <LoadingButton />,
};

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 20000);

  return <ButtonPrimary isLoading={isLoading}>Click me</ButtonPrimary>;
};
LoadingButton.displayName = "LoadingButton";
