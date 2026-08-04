import { ListBoxItemProps, Key } from "react-aria-components";
import * as Styled from "./Select.styles";

import { TextFieldSize } from "../TextField/TextField.types";
import type { FormFieldMessages } from "../shared/FieldMessages";
import { ComponentProps, ComponentPropsWithoutRef } from "react";

export type SelectPopoverAlignment = "left" | "right";

export type SelectValueKey = Key;

export interface SelectProps
  extends Omit<
    ComponentProps<typeof Styled.Select>,
    "value" | "defaultValue" | "onChange"
  > {
  id: string;
  name: string;
  placeholder: string;
  size?: TextFieldSize;
  disabled?: boolean;
  fullWidth?: boolean;
  messages?: FormFieldMessages;
  required?: boolean;
  /**
   * This defines on which side of the TextField the popover is aligned. The default is `left`.
   * Use `right` if there is not enough space on the right side.
   */
  popoverAlignment?: SelectPopoverAlignment;
  style?: ComponentPropsWithoutRef<"div">["style"];
  className?: ComponentPropsWithoutRef<"div">["className"];
  value?: SelectValueKey | SelectValueKey[] | null;
  defaultValue?: SelectValueKey | SelectValueKey[] | null;
  onChange?: (value: SelectValueKey | SelectValueKey[] | null) => void;
}

export interface SelectItemProps extends ListBoxItemProps {}
