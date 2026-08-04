import type {
  RadioGroupItemProps as RadixRadioGroupItemProps,
  RadioGroupProps,
} from "@radix-ui/react-radio-group";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StyledComponentsBaseProps } from "../../propTypes";
import { FormFieldMessages } from "../shared/FieldMessages";

export interface RadioGroupOldRootProps
  extends Omit<RadioGroupProps, "aria-errormessage"> {
  name: string;
  messages?: FormFieldMessages;
}

export type RadioGroupOldItemProps = RadixRadioGroupItemProps;
export type RadioGroupOldLabelProps = ComponentPropsWithoutRef<"label">;

export interface RadioGroupOldItemContentProps
  extends StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"div"> {
  text: string;
  subtext?: ReactNode;
}
