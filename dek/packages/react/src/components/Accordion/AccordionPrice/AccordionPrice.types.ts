import { WithTestId } from "../../propTypes";
import { ComponentPropsWithoutRef } from "react";

export interface AccordionPriceItem {
  title: string;
  amount: number;
  descriptions?: string[];
}

export interface AccordionPriceSection {
  title: string;
  amount: number;
  items: AccordionPriceItem[];
}

export type AccordionPriceSections =
  | AccordionPriceSection[]
  | AccordionPriceSection;

export interface AccordionPriceProps
  extends WithTestId, ComponentPropsWithoutRef<"div"> {
  prices: AccordionPriceSections;
  valueName: string;
  defaultValueIndex?: number;
}
