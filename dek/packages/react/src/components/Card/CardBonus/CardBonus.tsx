"use client";

import { CardPriceOverview } from "../CardPriceOverview";
import { Typography } from "../../Typography/Typography";
import { CardBonusProps } from "./CardBonus.types";
import * as Styled from "./CardBonus.styles";
import { ElementRef, forwardRef } from "react";

export const CardBonus = forwardRef<
  ElementRef<typeof CardPriceOverview>,
  CardBonusProps
>(({ overviewBonusDisplayPrices, variant }: CardBonusProps, ref) => {
  const { detailTexts, footnoteText, ...prices } = overviewBonusDisplayPrices;
  let details = null;

  if (detailTexts) {
    const detailTextItems = (
      <Styled.DetailTextItem>
        {detailTexts.map((text) => (
          <Styled.DetailTextParagraph key={text}>
            {text}
          </Styled.DetailTextParagraph>
        ))}
      </Styled.DetailTextItem>
    );

    details = {
      title: "Details zur Bonus Summe",
      description: detailTextItems,
      buttonText: "Details zur Bonus Summe",
    };
  }

  return (
    <CardPriceOverview
      ref={ref}
      prices={{ ...prices, title: "Bonus" }}
      variant={variant}
      details={details}
      headline="Dein Bonus"
      data-testid="shopping-cart-bonuses-container"
      valueName="bonus-display-price"
      description={
        footnoteText && (
          <Typography variant="BodyLight14">{footnoteText}</Typography>
        )
      }
    />
  );
});
CardBonus.displayName = "CardBonus";
