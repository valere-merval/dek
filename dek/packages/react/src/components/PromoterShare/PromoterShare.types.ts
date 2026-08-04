import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface PromoterShareProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  description?: string;
  buttonMoreDetails?: ReactNode;
}
