import { Carousel, CarouselSlideBreakpoints } from "../../Carousel";
import * as StyledParent from "../CarouselProductImage.styles";
import { CarouselProductImageProps } from "../CarouselProductImage.types";

const slideBreakpoints: CarouselSlideBreakpoints = {
  "0px": { slidesPerView: 1 },
};

export const CarouselProductImageMobile = ({
  entries,
  ...rest
}: Omit<CarouselProductImageProps, "key">) => (
  <Carousel
    slideBreakpoints={slideBreakpoints}
    gap="24"
    childrenFocusable={false}
    {...rest}
  >
    {entries.map((image, index) => (
      <StyledParent.ImageContainer key={index}>
        {image.carouselImage}
      </StyledParent.ImageContainer>
    ))}
  </Carousel>
);
CarouselProductImageMobile.displayName = "CarouselProductImageMobile";
