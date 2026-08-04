import { ReactNode } from "react";
import { SwitchProps } from "../../Switch/Switch.types";
import { FormFieldMessages } from "../../shared/FieldMessages";

export interface SelectionBoxSwitchProps extends SwitchProps {
  id: string;
  name: string;
  title: string;
  description: string;
  switchDescription: string;
  headlineLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  icon?: ReactNode;
  moreDetails?: ReactNode;
  messages?: FormFieldMessages;
}
