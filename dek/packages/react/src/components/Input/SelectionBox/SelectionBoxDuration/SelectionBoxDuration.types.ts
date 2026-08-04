import { LabelBoxedProps } from "../LabelBoxed";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  RadioGroupItemProps,
  RadioGroupProps,
} from "@radix-ui/react-radio-group";

export interface SelectionBoxDurationRootProps
  extends Omit<LabelBoxedProps, "sizeMapping"> {
  moreDetails?: ReactNode;
}

export type SelectionBoxDurationRadioItemProps = RadioGroupItemProps;

export type SelectionBoxDurationRadioGroupRootProps = RadioGroupProps;

export type SelectionBoxDurationPricesProps = ComponentPropsWithoutRef<"div">;

export interface SelectionBoxDurationPriceProps {
  priceLabel: string;
  price: number;
  strikeThroughPrice?: number;
}

export interface SelectionBoxDurationTotalPriceProps {
  priceLabel: string;
  price: number;
  strikeThroughPrice?: number;
}
