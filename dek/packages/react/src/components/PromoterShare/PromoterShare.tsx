"use client";

import React, { ElementRef, forwardRef } from "react";
import { PromoterShareProps } from "./PromoterShare.types";
import * as Styled from "./PromoterShare.styles";
import HAPPY_SCORE_GRAPHIC from "./assets/graphic-happy-score.svg";

export const PromoterShare = forwardRef<
  ElementRef<typeof Styled.Root>,
  PromoterShareProps
>(
  (
    { title, description, buttonMoreDetails, ...rest }: PromoterShareProps,
    ref,
  ) => {
    return (
      <Styled.ContainerProvider>
        <Styled.Root ref={ref} {...rest}>
          <Styled.PromoterGraphic>
            <img src={HAPPY_SCORE_GRAPHIC} alt="congstar happy score" />
          </Styled.PromoterGraphic>
          <Styled.TextWrapper>
            <Styled.Title size="large" variant="bold">
              {title}
            </Styled.Title>
            {description && (
              <Styled.Description size="medium" variant="bold">
                {description}
              </Styled.Description>
            )}
            {buttonMoreDetails && (
              <Styled.ButtonMoreDetailsWrapper $hasDescription={!!description}>
                {buttonMoreDetails}
              </Styled.ButtonMoreDetailsWrapper>
            )}
          </Styled.TextWrapper>
        </Styled.Root>
      </Styled.ContainerProvider>
    );
  },
);
PromoterShare.displayName = "PromoterShare";
