"use client";

import { forwardRef, ElementRef } from "react";
import { EnergyLabelProps } from "./EnergyLabel.types";
import * as Styled from "./EnergyLabel.styles";
import { energyLabelMap } from "./mapping";
import { ModalFootnotes } from "../Modal/ModalFootnotes";

export const EnergyLabel = forwardRef<
  ElementRef<typeof Styled.Button>,
  EnergyLabelProps
>(({ rating, footnotes }: EnergyLabelProps, ref) => {
  const src = energyLabelMap[rating].image;
  const alt = energyLabelMap[rating].label;

  if (footnotes && footnotes.length > 0) {
    return (
      <ModalFootnotes
        footnotes={footnotes}
        trigger={
          <Styled.Button ref={ref} aria-label={`Details zur ${alt}`}>
            <Styled.Image src={src} alt="" role="presentation" />
          </Styled.Button>
        }
      />
    );
  }

  return <Styled.Image src={src} alt={alt} />;
});
EnergyLabel.displayName = "EnergyLabel";
