"use client";

import { Carousel, CarouselSlideBreakpoints } from "../Carousel";
import { CarouselBoxPlanProps } from "./CarouselBoxPlan.types";

const slideBreakpoints: CarouselSlideBreakpoints = {
  "0px": { slidesPerView: 1, teaseNextSlide: true },
  "606px": { slidesPerView: 2 },
  "936px": { slidesPerView: 3 },
  "1326px": { slidesPerView: 4 },
};

export const CarouselBoxPlan = ({
  children,
  ...rest
}: CarouselBoxPlanProps) => (
  <Carousel slideBreakpoints={slideBreakpoints} gap="24" {...rest}>
    {children}
  </Carousel>
);
CarouselBoxPlan.displayName = "CarouselBoxPlan";
