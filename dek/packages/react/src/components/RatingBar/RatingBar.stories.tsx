import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingBar } from "./RatingBar";
import { ThumbsUpFill, Wlan, HeadphonesFill, ArrowLoop } from "@fair/icons";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "lightGrey", "darkGrey"],
};

const meta = {
  component: RatingBar,
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
} satisfies Meta<typeof RatingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <ThumbsUpFill />,
    rating: 4.1,
    description: "Fairness",
  },
};

export const Multiple: Story = {
  args: {
    icon: <ThumbsUpFill />,
    rating: 4.1,
    description: "Fairness",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <RatingBar rating={4} description="Fairness" icon={<ThumbsUpFill />} />
      <RatingBar rating={4.1} description="Netz" icon={<Wlan />} />
      <RatingBar rating={4.8} description="Flexibilität" icon={<ArrowLoop />} />
      <RatingBar
        rating={4.2}
        description="Kundenservice"
        icon={<HeadphonesFill />}
      />
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    rating: 4.1,
    description: "Fairness",
  },
};
