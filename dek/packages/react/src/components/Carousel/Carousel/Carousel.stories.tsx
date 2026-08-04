import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./Carousel";
import { CarouselSlideBreakpoints } from "./Carousel.types";
import { LoaderSkeleton } from "../../Loader/LoaderSkeleton";
import styled from "styled-components";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: Carousel,
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
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const slideBreakpoints: CarouselSlideBreakpoints = {
  "0px": { slidesPerView: 1 },
  "370px": { slidesPerView: 1, teaseNextSlide: true },
  "700px": { slidesPerView: 2 },
  "1100px": { slidesPerView: 3 },
  "1450px": { slidesPerView: 4 },
};

const Slide = styled.div`
  min-width: 250px;
  max-width: 500px;
  height: 500px;
`;

export const Default: Story = {
  args: {
    slideBreakpoints,
    gap: "24",
  },
  render: (args) => (
    <Carousel {...args}>
      <Slide>
        <LoaderSkeleton />
      </Slide>
      <Slide>
        <LoaderSkeleton />
      </Slide>
      <Slide>
        <LoaderSkeleton />
      </Slide>
      <Slide>
        <LoaderSkeleton />
      </Slide>
      <Slide>
        <LoaderSkeleton />
      </Slide>
    </Carousel>
  ),
};

export const WithNavigationChips: Story = {
  args: {
    slideBreakpoints,
    navigationChips: [
      { title: "50 MB/s", secondLine: "15 €" },
      { title: "150 MB/s", secondLine: "35 €" },
      { title: "250 MB/s", secondLine: "45 €" },
    ],
    gap: "24",
  },
  render: (args) => (
    <Carousel {...args}>
      <Slide>
        <LoaderSkeleton />
      </Slide>
      <Slide>
        <LoaderSkeleton />
      </Slide>
      <Slide>
        <LoaderSkeleton />
      </Slide>
    </Carousel>
  ),
};

const multipleSlides = () => {
  const slides = 27;
  return Array.from({ length: slides }).map((_, index) => (
    <Slide key={index}>
      <LoaderSkeleton />
    </Slide>
  ));
};

export const WithMoreThan6Slides: Story = {
  args: {
    slideBreakpoints,
    gap: "24",
    children: multipleSlides(),
  },
};

export const WithStartIndex: Story = {
  ...Default,
  args: {
    ...Default.args,
    startIndex: 4,
  },
};
