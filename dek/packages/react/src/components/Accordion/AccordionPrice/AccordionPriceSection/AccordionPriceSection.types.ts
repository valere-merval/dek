import { AccordionPriceSection } from "../AccordionPrice.types";
import { AccordionItemProps } from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef } from "react";

type AccordionPriceSectionBaseProps = AccordionPriceSection &
  AccordionItemProps;

export interface AccordionPriceSectionProps
  extends
    AccordionPriceSectionBaseProps,
    Omit<ComponentPropsWithoutRef<"div">, "title"> {}
