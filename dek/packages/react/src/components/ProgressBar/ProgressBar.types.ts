import { ComponentPropsWithoutRef } from "react";

export type ProgressBarColor =
  | "yellow"
  | "orange"
  | "green"
  | "red"
  | "lime"
  | "purple";

export type ProgressBarSize = "medium" | "large";

export interface ProgressBarProps extends ComponentPropsWithoutRef<"div"> {
  progress: number;
  max?: number;
  color?: ProgressBarColor;
  size?: ProgressBarSize;
}
