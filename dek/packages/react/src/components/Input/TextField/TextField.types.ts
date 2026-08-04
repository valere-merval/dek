import React, { ComponentPropsWithoutRef, MouseEventHandler } from "react";

import { FormFieldMessages } from "../shared/FieldMessages";

export type TextFieldSize = "medium" | "large";

export interface TextFieldProps
  extends Omit<
    ComponentPropsWithoutRef<"input">,
    "size" | "placeholder" | "aria-errormessage"
  > {
  id: string;
  name: string;
  fullWidth?: boolean;
  buttonAriaLabel?: string;
  size?: TextFieldSize;
  icon?: React.JSX.Element;
  onIconClick?: MouseEventHandler<HTMLButtonElement>;
  messages?: FormFieldMessages;
  placeholder: string;
}
