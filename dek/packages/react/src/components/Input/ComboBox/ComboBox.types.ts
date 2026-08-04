import { ComponentPropsWithoutRef, ElementRef, ForwardedRef } from "react";
import { Input, Key, ListBoxItemProps } from "react-aria-components";
import type { ComboBoxProps as AriaComboBoxProps } from "react-stately";
import { TextFieldSize } from "../TextField/TextField.types";
import { AriaTextFieldProps } from "react-aria";
import type { FormFieldMessages } from "../shared/FieldMessages";

export type PopoverAlignment = "left" | "right";

export interface ComboBoxProps<T extends object> extends AriaComboBoxProps<T> {
  id: string;
  style?: ComponentPropsWithoutRef<"div">["style"];
  className?: ComponentPropsWithoutRef<"div">["className"];
  messages?: FormFieldMessages;
  name: string;
  size?: TextFieldSize;
  placeholder: string;
  ariaLabel: string;
  fullWidth?: boolean;
  disabled?: boolean;
  autoComplete?: AriaTextFieldProps<T>["autoComplete"];
  isLoading?: boolean;
  hideChevron?: boolean;
  // must be set if hideChevron is false
  buttonAriaLabel?: string;
  comboboxRef?: ForwardedRef<HTMLDivElement>;
  inputRef?: ForwardedRef<ElementRef<typeof Input>>;
  /**
   * This defines on which side of the TextField the popover is aligned. The default is `left`.
   * Use `right` if there is not enough space on the right side.
   */
  popoverAlignment?: PopoverAlignment;
  shouldCloseOnBlur?: boolean;
  shouldFocusFirstItem?: boolean;
  value?: Key | null;
  onChange?: (value: Key | null) => void;
}

export interface ComboBoxItemProps extends ListBoxItemProps {
  id: string;
}
