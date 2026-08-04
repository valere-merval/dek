import { ComponentPropsWithoutRef, ReactNode } from "react";
import { WithTestId } from "../../propTypes";
import { AccordionPriceProps } from "../../Accordion/AccordionPrice/";

export interface CardPriceOverviewDetailsProps {
  title: string;
  description: ReactNode;
  buttonText?: string;
  className?: string;
}

export type CardPriceOverviewVariant = "default" | "outlined";

export interface CardPriceOverviewProps
  extends WithTestId, AccordionPriceProps, ComponentPropsWithoutRef<"div"> {
  headline: string;
  description?: ReactNode;
  details?: CardPriceOverviewDetailsProps | null;
  variant?: CardPriceOverviewVariant;
}
