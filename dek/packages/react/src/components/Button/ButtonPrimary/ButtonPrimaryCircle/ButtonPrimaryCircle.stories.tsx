import { ArrowRight, HouseOutline } from "@fair/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonPrimaryCircle } from "./ButtonPrimaryCircle";
import { disableControls } from "../../../../stories/utils/disableControls";
import { ButtonPrimaryCircleProps } from "./ButtonPrimaryCircle.types";
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
  component: ButtonPrimaryCircle,
  argTypes: {
    ...disableControls<ButtonPrimaryCircleProps>([
      "asChild",
      "$variant",
      "children",
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
} satisfies Meta<typeof ButtonPrimaryCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <ArrowRight />,
    variant: "primary",
    disabled: false,
    "aria-label": "weiter",
    onClick: () => {
      alert("click");
    },
  },
};

export const AsAnchor: Story = {
  args: {
    children: (
      <a href="https://congstar.de">
        <HouseOutline />
      </a>
    ),
    asChild: true,
    variant: "primary",
    disabled: false,
    "aria-label": "startseite",
  },
};
