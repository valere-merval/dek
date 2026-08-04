import { ComponentPropsWithoutRef } from "react";
import { StepperItemProps, StepperRootProps } from "../shared";

export interface StepperCheckoutProps extends ComponentPropsWithoutRef<"div"> {}

export type StepperCheckoutRootProps = Omit<StepperRootProps, "size">;

export type StepperCheckoutItemProps = Omit<StepperItemProps, "size"> & {
  label: string;
  hideLabel?: boolean;
  link?: string;
};
