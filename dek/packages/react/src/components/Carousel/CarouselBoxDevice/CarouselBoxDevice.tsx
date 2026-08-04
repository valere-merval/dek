"use client";

import { Carousel, CarouselSlideBreakpoints } from "../Carousel";
import { CarouselBoxDeviceProps } from "./CarouselBoxDevice.types";

const slideBreakpoints: CarouselSlideBreakpoints = {
  "0px": { slidesPerView: 1, teaseNextSlide: true },
  "606px": { slidesPerView: 2 },
  "936px": { slidesPerView: 3 },
  "1326px": { slidesPerView: 4 },
};

export const CarouselBoxDevice = ({
  children,
  ...rest
}: CarouselBoxDeviceProps) => (
  <Carousel slideBreakpoints={slideBreakpoints} gap="24" {...rest}>
    {children}
  </Carousel>
);
CarouselBoxDevice.displayName = "CarouselBoxDevice";
