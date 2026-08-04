import { ComponentPropsWithoutRef } from "react";

export interface Color {
  hex: string;
  name: string;
}

export interface ColorVariantsProps extends ComponentPropsWithoutRef<"div"> {
  colors: Color[];
}
