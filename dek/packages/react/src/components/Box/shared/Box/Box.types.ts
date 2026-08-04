import { ComponentPropsWithoutRef, ReactNode } from "react";
import { LabelPromotedColor } from "../../../Typography/LabelPromoted";

export interface BoxProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  promotionLabel?: string;
  promotionLabelColor?: LabelPromotedColor;
  discountText?: string;
}
