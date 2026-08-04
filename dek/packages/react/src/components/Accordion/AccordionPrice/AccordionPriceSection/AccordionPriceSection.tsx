import { Accordion } from "../../index";
import * as Styled from "./AccordionPriceSection.styles";
import { Typography } from "../../../Typography/Typography";
import { formatPrice } from "../../../../utils/pricing";
import React, { ElementRef, forwardRef, Fragment } from "react";
import { AccordionPriceSectionProps } from "./AccordionPriceSection.types";
import { AccordionContent } from "./AccordionPriceSection.styles";

export const AccordionPriceSection = forwardRef<
  ElementRef<typeof Accordion.Item>,
  AccordionPriceSectionProps
>(({ amount, title, items, value }: AccordionPriceSectionProps, ref) => (
  <Accordion.Item value={value} ref={ref}>
    <Accordion.Header price={amount}>Summe {title}</Accordion.Header>
    <AccordionContent data-testid="recurring-display-price-content" isIndented>
      <Styled.AccordionContentBody>
        {items.map((item) => (
          <Fragment key={item.title}>
            <Styled.SpaceBetweenOptionContainer>
              <Typography variant="BodyLight14">{item.title}</Typography>
              <Typography variant="BodyLight14">
                {formatPrice(item.amount)}
              </Typography>
            </Styled.SpaceBetweenOptionContainer>
            {item.descriptions &&
              item.descriptions.map((description) => (
                <Typography variant="BodyLight12" key={description}>
                  {description}
                </Typography>
              ))}
          </Fragment>
        ))}
      </Styled.AccordionContentBody>
    </AccordionContent>
  </Accordion.Item>
));
AccordionPriceSection.displayName = "AccordionPriceSection";
