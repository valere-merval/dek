"use client";

import React, { ElementRef, forwardRef } from "react";
import { AvailabilityCheckStartProps } from "./AvailabilityCheckStart.types";
import * as Styled from "./AvailabilityCheckStart.styles";
import { ButtonPrimaryCircle } from "../../Button/ButtonPrimary";
import { ArrowRight } from "@fair/icons";
import { ThemeProvider } from "../../../theme/ThemeProvider";
export const AvailabilityCheckStart = forwardRef<
  ElementRef<typeof Styled.Root>,
  AvailabilityCheckStartProps
>(
  (
    {
      text,
      onButtonClick,
      backgroundColor = "white",
      ...rest
    }: AvailabilityCheckStartProps,
    ref,
  ) => {
    return (
      <ThemeProvider backgroundColor={backgroundColor}>
        <Styled.Root ref={ref} {...rest}>
          <Styled.Head id="availability-check-start">{text}</Styled.Head>
          <ButtonPrimaryCircle
            onClick={onButtonClick}
            aria-labelledby="availability-check-start"
          >
            <ArrowRight />
          </ButtonPrimaryCircle>
        </Styled.Root>
      </ThemeProvider>
    );
  },
);
AvailabilityCheckStart.displayName = "AvailabilityCheckStart";
