import { ComponentPropsWithoutRef, ReactNode } from "react";
import { RadioGroupProps, RadioProps } from "../Input/RadioGroup";
import {
  CheckboxGroupProps,
  CheckboxGroupItemProps,
} from "../Input/Checkbox/CheckboxGroup";

export interface FilterCategoryFormLabel {
  label: string;
  selectedLabel: string;
  isEditable?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type FormNodes = ReactNode | ReactNode[];

export interface FilterBarFormUnit extends FilterCategoryFormLabel {
  form: FormNodes;
}

export interface FilterProps {
  filters: FilterBarFormUnit[];
  onOpenChange?: (open: boolean) => void;
}

export interface SortingProps {
  sorting: FilterBarFormUnit;
  onOpenChange?: (open: boolean) => void;
}

export interface FilterBarProps
  extends ComponentPropsWithoutRef<"div">,
    FilterProps,
    SortingProps {
  stickyOnMobile?: boolean;
}

export interface FilterBarRadioGroupRootProps
  extends Omit<RadioGroupProps, "messages" | "label" | "hideLabel"> {}

export interface FilterBarRadioItemProps extends RadioProps {}

export interface FilterBarCheckboxItemProps extends CheckboxGroupItemProps {
  itemCount: number;
}

export interface GroupLabelProps {
  id: string;
  label: string;
}

export interface FilterBarCheckboxGroupRootProps
  extends Omit<CheckboxGroupProps, "messages" | "label" | "hideLabel"> {}
