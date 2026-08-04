import { PaymentMethod } from "../../../..";
import { SelectionBoxRadioGroupProps } from "../SelectionBoxRadio/SelectionBoxRadio.types";

export interface SelectionBoxPaymentGroupProps extends Omit<
  SelectionBoxRadioGroupProps,
  "noGrid"
> {}

export interface SelectionBoxPaymentItemProps {
  value: string;
  label: string;
  paymentMethods?: PaymentMethod[];
}
