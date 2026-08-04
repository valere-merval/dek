import {
  DateFieldProps as AriaDateFieldProps,
  DateValue,
} from "react-aria-components";
import React, { ComponentPropsWithoutRef } from "react";
import { TextFieldSize } from "../TextField/TextField.types";
import {
  FormFieldMessages,
  UseFieldMessagesInputProps,
} from "../shared/FieldMessages";

export interface DateFieldProps
  extends
    Omit<AriaDateFieldProps<DateValue>, "onChange" | "aria-errormessage">,
    React.RefAttributes<HTMLDivElement> {
  id: string;
  name: string;
  placeholder?: string;
  size?: TextFieldSize;
  messages?: FormFieldMessages;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;

  /**
   * Handler that is called with a typed `DateValue`, once all segments are filled or the date is updated.
   * @param dateValue DateValue, or undefined when field is cleared
   */
  onValueChange?: (dateValue: DateValue | null) => void;

  /**
   * Handler that is called on every input even when date is only partial.
   * @param value partial date string including placeholders, e.g. `01.mm.jjjj`, `12.03.jjjj`, `12.03.1990`.
   */
  onChange?: (value: string) => void;
  style?: ComponentPropsWithoutRef<"div">["style"];
  className?: ComponentPropsWithoutRef<"div">["className"];
  styleDateField?: AriaDateFieldProps<DateValue>["style"];
  classNameDateField?: AriaDateFieldProps<DateValue>["className"];
}

export interface DateFieldInternalProps
  extends
    Pick<
      DateFieldProps,
      "placeholder" | "size" | "required" | "onChange" | "isDisabled"
    >,
    UseFieldMessagesInputProps {}
