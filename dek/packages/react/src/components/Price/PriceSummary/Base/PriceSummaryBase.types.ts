import { ComponentPropsWithoutRef, ReactNode } from "react";
import { MessageInfoProps } from "../../../Message/MessageInfo";
import { HeadlineTag } from "../../../Typography/Headline";
import { FormFieldMessages } from "../../../Input/shared/FieldMessages";

type MessageInfo = Omit<MessageInfoProps, "fullWidth" | "outline">;

type ButtonProps = {
  text: string;
  loading?: boolean;
};

/** @internal Basis-Komponente für PriceSummary */
export interface PriceSummaryBaseProps extends ComponentPropsWithoutRef<"div"> {
  buttonProps: ButtonProps;
  shippingCostFree?: boolean;
  leftSide: ReactNode;
  rightSide: ReactNode;
  nextStepMessageInfo?: MessageInfo;
  /**
   * Ausgangs-Headline-Level für die Accessibility-Hierarchie
   * @default "h2"
   */
  headlineLevel?: HeadlineTag;
  messages?: FormFieldMessages;
}
