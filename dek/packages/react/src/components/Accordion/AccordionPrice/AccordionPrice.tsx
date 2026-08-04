import { Accordion } from "../index";
import { AccordionPriceSection } from "./AccordionPriceSection";
import { AccordionPriceProps } from "./AccordionPrice.types";
import React, { ElementRef, forwardRef } from "react";

export const AccordionPrice = forwardRef<
  ElementRef<typeof Accordion.Root>,
  AccordionPriceProps
>(
  (
    {
      prices,
      defaultValueIndex,
      valueName,
      "data-testid": dataTestId,
    }: AccordionPriceProps,
    ref,
  ) => {
    return (
      <Accordion.Root
        ref={ref}
        type="single"
        collapsible
        size="medium"
        defaultValue={
          defaultValueIndex !== undefined
            ? `${valueName}-${defaultValueIndex}`
            : undefined
        }
        data-testid={dataTestId}
      >
        {Array.isArray(prices) ? (
          prices.map((price, index) => (
            <AccordionPriceSection
              key={`${valueName}-${index}`}
              amount={price.amount}
              items={price.items}
              title={price.title}
              value={`${valueName}-${index}`}
            />
          ))
        ) : (
          <AccordionPriceSection
            amount={prices.amount}
            items={prices.items}
            title={prices.title}
            value={`${valueName}-0`}
          />
        )}
      </Accordion.Root>
    );
  },
);
AccordionPrice.displayName = "AccordionPrice";
