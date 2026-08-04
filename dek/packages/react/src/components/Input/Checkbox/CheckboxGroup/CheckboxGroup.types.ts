import { ReactNode } from "react";
import { CheckboxProps as BaseCheckboxProps } from "../Checkbox/Checkbox.types";
import { ItemGapSize } from "../../shared/ItemGapSize";
import { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components";
import { FormFieldMessages } from "../../shared/FieldMessages";

export interface CheckboxGroupProps extends Omit<
  AriaCheckboxGroupProps,
  "validate"
> {
  /** The name of the input element, used when submitting an HTML form. */
  name: string;
  /** A label for the fieldset. */
  label: ReactNode;
  hideLabel?: boolean;
  /** A description for the fieldset. Should be short. */
  description?: ReactNode;
  itemGapSize?: ItemGapSize;
  children?: ReactNode;
  messages?: FormFieldMessages;
}

export interface CheckboxGroupItemProps extends Omit<
  BaseCheckboxProps,
  "name"
> {}
