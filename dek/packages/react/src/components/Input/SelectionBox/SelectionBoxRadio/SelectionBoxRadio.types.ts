import { RadioGroupProps, RadioProps } from "../../RadioGroup";
import { BaseProps } from "../shared/Base";
import { LabelWrapperProps } from "../shared/LabelWrapper/LabelWrapper.types";

export interface SelectionBoxRadioGroupProps extends Omit<
  RadioGroupProps,
  "itemGapSize" | "description" | "isDisabled"
> {
  noGrid?: boolean;
}

type ReducedBaseProps = Omit<
  BaseProps,
  "interactiveElement" | "interactiveElementRef" | "selected" | "contentId"
>;
type RadioAndLabelProps = LabelWrapperProps & Omit<RadioProps, "children">;
type SelectionBoxRadioItemBaseProps = Omit<
  ReducedBaseProps,
  keyof RadioAndLabelProps
> &
  RadioAndLabelProps;

export type SelectionBoxRadioItemProps = SelectionBoxRadioItemBaseProps & {
  value: string;
};
