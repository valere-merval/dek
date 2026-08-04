import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardOutlined } from "./CardOutlined";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import { Headline } from "../../Typography/Headline";
import { CardOutlinedProps } from "./CardOutlined.types";
import { disableControls } from "../../../stories/utils/disableControls";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarApp: ["black"],
  ja: ["jaAgave20", "jaGeneralWhite"],
  penny: ["pennyNeutralLightGrey", "pennyNeutralWhite"],
};

const meta = {
  component: CardOutlined,
  argTypes: {
    ...disableControls<CardOutlinedProps>(["data-testid", "as", "css"]),
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
} satisfies Meta<typeof CardOutlined>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    children: (
      <>
        <Headline size="large" variant="bold" as="h1">
          Card
        </Headline>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <ButtonPrimary variant="outlined">Button</ButtonPrimary>
        </div>
      </>
    ),
  },
};
