import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps } from "../../propTypes";

export type StepperItemState =
  | "open"
  | "current"
  | "completed"
  | "error"
  | "pending";
export type StepperSize = "medium" | "large";

export interface StepperRootProps
  extends StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"div"> {
  size?: StepperSize;
}

export interface StepperItemProps
  extends StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"li"> {
  state: StepperItemState;
  size?: StepperSize;
}

export interface StepperIndicatorProps
  extends StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"div"> {
  state: StepperItemState;
  step: number;
  checkout?: boolean;
}

export interface StepperContentProps
  extends StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"div"> {}

export type StepInformation =
  | {
      index: number;
      total: number;
    }
  | undefined;
