import { ReactNode } from "react";
import { FormFieldMessages } from "../../shared/FieldMessages";
import { CheckboxProps as ReactAriaCheckboxProps } from "react-aria-components";

/**
 * Props for the Checkbox component.
 * @extends ReactAriaCheckboxProps from react-aria-components
 */
export interface CheckboxProps
  extends Omit<ReactAriaCheckboxProps, "children"> {
  /** The name of the input element, used when submitting an HTML form. */
  name: string;
  /** An array providing descriptions for the field such as error messages */
  messages?: FormFieldMessages;
  /** The label for the Checkbox. */
  children?: ReactNode;
}
