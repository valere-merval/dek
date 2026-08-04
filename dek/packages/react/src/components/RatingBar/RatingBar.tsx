"use client";

import React, { ElementRef, forwardRef } from "react";
import { RatingBarProps } from "./RatingBar.types";
import * as Styled from "./RatingBar.styles";
import { ProgressBar } from "../ProgressBar";

export const RatingBar = forwardRef<
  ElementRef<typeof Styled.Root>,
  RatingBarProps
>(({ icon, rating, description, ...rest }: RatingBarProps, ref) => {
  const ratingText =
    rating % 1 === 0 ? `${rating},0` : rating.toString().replace(".", ",");

  return (
    <Styled.ContainerProvider>
      <Styled.Root ref={ref} {...rest}>
        <Styled.DescriptionWrapper>
          {icon && (
            <Styled.Icon
              size={{
                minAvailableSpace: "small",
                maxAvailableSpace: "small",
              }}
              color="green"
              variant="outlined"
              icon={icon}
            />
          )}
          <Styled.Text>{description}</Styled.Text>
        </Styled.DescriptionWrapper>
        <Styled.BarWrapper>
          <ProgressBar size="medium" color="green" max={5} progress={rating} />
          <Styled.NumberWrapper>
            <Styled.Text>{ratingText}</Styled.Text>
          </Styled.NumberWrapper>
        </Styled.BarWrapper>
      </Styled.Root>
    </Styled.ContainerProvider>
  );
});
RatingBar.displayName = "RatingBar";
