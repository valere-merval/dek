import { Price } from "../../../../utils/pricing";
import {
  PlanSelectionCartProps,
  PlanSelectionCartRadioItemProps,
  PlanSelectionCartRadioRootProps,
} from "../PlanSelectionCart.types";
import { CollapsibleProps } from "@radix-ui/react-collapsible";

export interface StickyBoxBottomPlanSelectionProps
  extends Omit<PlanSelectionCartProps, "title">,
    Omit<CollapsibleProps, "asChild" | "title"> {
  selectedTitle: string;
  selectedContingent: string;
  selectedPrice: Price;
}

export type StickyBoxBottomPlanSelectionRadioGroupRootProps =
  PlanSelectionCartRadioRootProps;

export type StickyBoxBottomPlanSelectionItemProps =
  PlanSelectionCartRadioItemProps;
