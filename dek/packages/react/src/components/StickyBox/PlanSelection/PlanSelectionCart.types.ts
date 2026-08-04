import { PropsWithChildren } from "react";
import { Price } from "../../../utils/pricing";
import { RadioGroupProps, RadioProps } from "../../Input/RadioGroup";

export type PlanSelectionPlan = {
  id: number;
  title: string;
  contingent: string;
  price: Price;
};

export interface PlanSelectionCartProps extends PropsWithChildren {
  title: string;
  pibHref: string;
}

export interface PlanSelectionCartRadioRootProps extends RadioGroupProps {}

export interface PlanSelectionCartRadioItemProps
  extends RadioProps,
    Omit<PlanSelectionPlan, "title" | "id"> {}
