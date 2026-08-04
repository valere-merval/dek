import { LabelBoxedProps, LabelBoxedSize } from "../LabelBoxed";
import { RadioGroupItemProps } from "@radix-ui/react-radio-group";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { BillingPeriod } from "../../../../utils/pricing";
import { FormFieldMessages } from "../../../Input/shared/FieldMessages";
import { CheckboxProps } from "../../CheckboxOld";

export type HeaderImageSize = "medium" | "large";

export interface SelectionBoxRootProps
  extends Omit<LabelBoxedProps, "sizeMapping" | "aria-errormessage"> {
  name: string;
  messages?: FormFieldMessages;
  headerImage?: HeaderImage;
}

export interface SizeConsumerProps {
  size: LabelBoxedSize;
}

export type SelectionBoxRadioProps = RadioGroupItemProps;

export type SelectionBoxCheckboxProps = CheckboxProps;

export interface SelectionBoxItemProps
  extends ComponentPropsWithoutRef<"label"> {
  label?: string;
  labelDescription?: ReactNode;
  price?: number;
  moreDetails?: ReactNode;
  billingPeriod?: BillingPeriod;
  paymentOptionImages?: PaymentOptionImage[];
}

export type HeaderImage = {
  src: string;
  alt?: string; // only fill out alt text if the images needs to be described
  size?: HeaderImageSize;
};

export type PaymentOptionImage = {
  src: string;
  alt?: string; // only fill out alt text if the images needs to be described
};
