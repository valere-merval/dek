import { TextFieldProps } from "../TextField";

export interface PasswordFieldProps extends Omit<TextFieldProps, "icon"> {
  revealPasswordInitially?: boolean;
}
