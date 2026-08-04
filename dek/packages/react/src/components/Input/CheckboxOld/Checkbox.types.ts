import { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";
import { ComponentPropsWithoutRef } from "react";
import type { FormFieldMessages } from "../shared/FieldMessages";

export interface CheckboxProps
  extends Omit<RadixCheckboxProps, "aria-describedby" | "aria-invalid"> {}

export interface CheckboxLabelProps
  extends Omit<ComponentPropsWithoutRef<"label">, "aria-errormessage"> {
  id?: string;
  name: string;
  messages?: FormFieldMessages;
}
