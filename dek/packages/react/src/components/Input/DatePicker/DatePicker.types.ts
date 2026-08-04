import { CalendarProps, DateValue } from "react-aria-components";
import { TextFieldProps } from "../TextField";
import { CSSProperties } from "react";
import { FormFieldMessages } from "../shared/FieldMessages";

export interface DatePickerProps {
  id: string;
  name: string;
  value?: DateValue | undefined;
  onChange?: (value: DateValue) => void;
  messages?: FormFieldMessages;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  style?: CSSProperties;
  className?: string;
  fullWidth?: boolean;
  /**
   * For Calendar Props see the [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Calendar.html#calendar-1)
   */
  calendarProps: Omit<
    CalendarProps<DateValue>,
    | "value"
    | "defaultValue"
    | "onChange"
    | "id"
    | "name"
    | "visibleDuration"
    | "pageBehavior"
  >;
  textFieldProps?: Omit<
    TextFieldProps,
    | "id"
    | "name"
    | "value"
    | "defaultValue"
    | "onChange"
    | "icon"
    | "onIconClick"
    | "messages"
    | "placeholder"
    | "aria-label"
    | "disabled"
    | "required"
    | "className"
    | "style"
    | "fullWidth"
  >;
}
