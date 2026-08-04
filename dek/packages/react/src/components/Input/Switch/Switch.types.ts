import { ComponentPropsWithoutRef } from "react";
import { TypographyProps } from "../../Typography/Typography";
import { FormFieldMessages } from "../shared/FieldMessages";

export type { SwitchProps } from "@radix-ui/react-switch";
export type SwitchLabelProps = ComponentPropsWithoutRef<"label"> &
  TypographyProps;

export interface SwitchRootWrapperProps
  extends ComponentPropsWithoutRef<"div"> {
  name: string;
  messages?: FormFieldMessages;
}
