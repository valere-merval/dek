import * as Styled from "./CardPriceOverview.styles";
import React, { ElementRef, forwardRef, useMemo } from "react";
import { CardPriceOverviewProps } from "./CardPriceOverview.types";
import { CardOutlined } from "../CardOutlined";
import { CardPriceOverviewDetails } from "./CardPriceOverviewDetails";
import { Typography } from "../../Typography/Typography";
import { AccordionPrice } from "../../Accordion/AccordionPrice";

export const CardPriceOverview = forwardRef<
  ElementRef<typeof Styled.CardPriceOverviewContainer>,
  CardPriceOverviewProps
>(
  (
    {
      description,
      details,
      headline,
      prices,
      valueName,
      defaultValueIndex,
      variant = "default",
      "data-testid": dataTestId,
    }: CardPriceOverviewProps,
    ref,
  ) => {
    const content = useMemo(
      () => (
        <Styled.CardPriceOverviewContainer ref={ref}>
          <Styled.Headline size="medium" variant="black" as="h3">
            {headline}
          </Styled.Headline>
          <AccordionPrice
            prices={prices}
            valueName={valueName}
            data-testid={dataTestId}
            defaultValueIndex={defaultValueIndex}
          />
          {(description || details) && (
            <Styled.CardPriceOverviewDescriptionContainer>
              {description && (
                <Typography variant="BodyLight14">{description}</Typography>
              )}
              {details && <CardPriceOverviewDetails {...details} />}
            </Styled.CardPriceOverviewDescriptionContainer>
          )}
        </Styled.CardPriceOverviewContainer>
      ),
      [description, details, dataTestId, prices, valueName],
    );

    if (variant === "outlined") {
      return <CardOutlined size="small">{content}</CardOutlined>;
    }

    return content;
  },
);
CardPriceOverview.displayName = "CardPriceOverview";
