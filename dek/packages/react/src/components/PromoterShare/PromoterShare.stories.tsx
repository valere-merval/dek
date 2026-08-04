import type { Meta, StoryObj } from "@storybook/react-vite";
import { PromoterShare } from "./PromoterShare";
import { ButtonMoreDetails } from "../Button/ButtonMoreDetails";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "lightGrey", "darkGrey"],
};

const meta = {
  component: PromoterShare,
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
} satisfies Meta<typeof PromoterShare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "93 % Weiterempfehlung",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonMoreDetails: (
      <ButtonMoreDetails
        onClick={() => {
          alert("click");
        }}
      />
    ),
  },
};

export const WithoutButton: Story = {
  args: {
    title: "93 % Weiterempfehlung",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "93 % Weiterempfehlung",
    buttonMoreDetails: (
      <ButtonMoreDetails
        onClick={() => {
          alert("click");
        }}
      />
    ),
  },
};
