import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface RatingBarProps extends ComponentPropsWithoutRef<"div"> {
  rating: number;
  description: string;
  icon?: ReactNode;
}
