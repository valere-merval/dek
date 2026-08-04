import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselProductImage } from "./CarouselProductImage";
import styled from "styled-components";

import frontImage from "../../../../.storybook/assets/images/google-pixel-7a-sea-handyangebot-detail-0.png";
import sideImage from "../../../../.storybook/assets/images/google-pixel-7a-sea-detail-90.png";
import backImage from "../../../../.storybook/assets/images/google-pixel-7a-sea-detail-180.png";
import { AllowedBackgroundColors } from "../../../theme/theme";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: CarouselProductImage,
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
} satisfies Meta<typeof CarouselProductImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: "colorSilver",
    entries: [
      {
        carouselImage: <img src={frontImage} alt="Google Pixel 7a von vorne" />,
        thumbnailImage: {
          node: (
            <img src={frontImage} alt="Vorschau Google Pixel 7a Frontansicht" />
          ),
          ariaLabel: "Vorschau Google Pixel 7a Frontansicht",
        },
      },
      {
        carouselImage: <img src={sideImage} alt="Google Pixel 7a seitlich" />,
        thumbnailImage: {
          node: (
            <img src={sideImage} alt="Vorschau Google Pixel 7a Seitenansicht" />
          ),
          ariaLabel: "Vorschau Google Pixel 7a Seitenansicht",
        },
      },
      {
        carouselImage: <img src={backImage} alt="Google Pixel 7a hinten" />,
        thumbnailImage: {
          node: (
            <img src={backImage} alt="Vorschau Google Pixel 7a Rückansicht" />
          ),
          ariaLabel: "Vorschau Google Pixel 7a Rückansicht Vorschau",
        },
      },
    ],
  },
  render: (args) => (
    <Wrapper>
      <CarouselProductImage {...args} />
    </Wrapper>
  ),
};
