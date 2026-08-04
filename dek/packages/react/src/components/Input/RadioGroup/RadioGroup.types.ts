import { ReactNode } from "react";
import {
  RadioGroupProps as ReactAriaRadioGroupProps,
  RadioProps as ReactAriaRadioProps,
} from "react-aria-components";
import { FormFieldMessages } from "../shared/FieldMessages";
import { ItemGapSize } from "../shared/ItemGapSize";

/**
 * Props for the RadioGroup component.
 * @extends ReactAriaRadioGroupProps from react-aria-components
 */
export interface RadioGroupProps extends Omit<
  ReactAriaRadioGroupProps,
  "validate"
> {
  /** The name of the input element, used when submitting an HTML form. */
  name: string;
  /** A label for the group. */
  label: ReactNode;
  hideLabel?: boolean;

  children?: ReactNode;
  messages?: FormFieldMessages;
  itemGapSize?: ItemGapSize;
  /** A description for the group. Should be short. */
  description?: ReactNode;
}
/**
 * Props for the Radio component.
 * @extends ReactAriaRadioProps from react-aria-components
 */
export interface RadioProps extends Omit<ReactAriaRadioProps, "children"> {
  children?: ReactNode;
}
