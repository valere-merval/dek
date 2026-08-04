import {
  PlanSelectionCartProps,
  PlanSelectionCartRadioItemProps,
  PlanSelectionCartRadioRootProps,
} from "../PlanSelectionCart.types";

export type StickyBoxSidePlanSelectionProps = Omit<
  PlanSelectionCartProps,
  "title"
> & {
  selectedTitle: string;
};

export type StickyBoxSidePlanSelectionRadioGroupRootProps =
  PlanSelectionCartRadioRootProps;

export type StickyBoxSidePlanSelectionItemProps =
  PlanSelectionCartRadioItemProps;
