"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./CarouselProductImage.styles";
import { CarouselProductImageProps } from "./CarouselProductImage.types";
import { CarouselProductImageDesktop } from "./desktop/CarouselProductImageDesktop";
import { CarouselProductImageMobile } from "./mobile/CarouselProductImageMobile";

/**
 * The CarouselProductImage component takes a list of objects that each contain 2 React Nodes.
 * The Nodes represent the Image displayed inside the Carousel and the Image that will be displayed in the Thumbnails.
 *
 * This is intended to empower consumer's to utilize components like the `NextLink` or use custom URL's for each Image(which is required with services like ImageX).
 */
export const CarouselProductImage = forwardRef<
  ElementRef<"div">,
  CarouselProductImageProps
>(({ entries, ...rest }, ref) => {
  return (
    <Styled.CarouselContainer ref={ref} {...rest}>
      <Styled.DesktopWrapper>
        <CarouselProductImageDesktop entries={entries} />
      </Styled.DesktopWrapper>
      <Styled.MobileWrapper>
        <CarouselProductImageMobile entries={entries} />
      </Styled.MobileWrapper>
    </Styled.CarouselContainer>
  );
});
CarouselProductImage.displayName = "CarouselProductImage";
