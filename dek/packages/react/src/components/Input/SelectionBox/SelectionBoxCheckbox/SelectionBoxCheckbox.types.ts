import {
  CheckboxGroupItemProps,
  CheckboxGroupProps,
} from "../../Checkbox/CheckboxGroup";
import { BaseProps } from "../shared/Base";
import { LabelWrapperProps } from "../shared/LabelWrapper/LabelWrapper.types";

export interface SelectionBoxCheckboxGroupProps extends Omit<
  CheckboxGroupProps,
  "itemGapSize" | "description" | "isDisabled"
> {
  noGrid?: boolean;
}

type ReducedBaseProps = Omit<
  BaseProps,
  "interactiveElement" | "interactiveElementRef" | "contentId"
>;
type CheckboxAndLabelProps = LabelWrapperProps &
  Omit<CheckboxGroupItemProps, "children">;
type SelectionBoxCheckboxItemBaseProps = Omit<
  ReducedBaseProps,
  keyof CheckboxAndLabelProps
> &
  CheckboxAndLabelProps;

export type SelectionBoxCheckboxItemProps =
  SelectionBoxCheckboxItemBaseProps & {
    value: string;
  };
