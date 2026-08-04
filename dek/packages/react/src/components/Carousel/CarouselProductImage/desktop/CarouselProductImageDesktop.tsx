import React, { ElementRef, forwardRef, useState } from "react";
import * as Styled from "./CarouselProductImageDesktop.styles";
import { SelectionThumbnail } from "../../../Selection/SelectionThumbnail";
import { CarouselProductImageProps } from "../CarouselProductImage.types";

export const CarouselProductImageDesktop = forwardRef<
  ElementRef<"div">,
  Omit<CarouselProductImageProps, "key">
>(({ entries }, ref) => {
  const [selectedImage, setSelectedImage] = useState("0");

  return (
    <Styled.DesktopWrapper ref={ref}>
      {entries.map((image, index) => (
        <React.Fragment key={index}>
          <Styled.ImageContainer $hide={index.toString() !== selectedImage}>
            {image.carouselImage}
          </Styled.ImageContainer>
        </React.Fragment>
      ))}
      <SelectionThumbnail.Root
        aria-label="Ansichtsauswahl"
        defaultValue={selectedImage}
        value={selectedImage}
        onValueChange={(value) => {
          if (value) setSelectedImage(value);
        }}
      >
        {entries.map((image, index) => (
          <SelectionThumbnail.Item
            aria-label={image.thumbnailImage.ariaLabel}
            key={index}
            value={index.toString()}
          >
            {image.thumbnailImage.node}
          </SelectionThumbnail.Item>
        ))}
      </SelectionThumbnail.Root>
    </Styled.DesktopWrapper>
  );
});
CarouselProductImageDesktop.displayName = "CarouselProductImageDesktop";
