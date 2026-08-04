import { ComponentPropsWithoutRef } from "react";

export type CellIconStatusType = "available" | "not-available";

export interface CellIconProps extends ComponentPropsWithoutRef<"div"> {
  state?: CellIconStatusType;
}
