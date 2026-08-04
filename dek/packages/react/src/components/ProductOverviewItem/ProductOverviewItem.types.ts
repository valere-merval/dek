import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ProductOverviewItemProps
  extends ComponentPropsWithoutRef<"div"> {
  title: string;
  image: ReactNode;
  children?: ReactNode;
}

export interface ProductOverviewItemProductSpecsProps
  extends ComponentPropsWithoutRef<"div"> {
  productMemory?: `${number} TB` | `${number} GB`;
  productColor?: SpecsColor;
}

export type SpecsColor = {
  hex: string;
  name: string;
};
