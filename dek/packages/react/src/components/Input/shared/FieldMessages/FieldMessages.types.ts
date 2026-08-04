import {
  MessageStatusFullWidth,
  MessageStatusProps,
  MessageStatusVariant,
} from "../../../Message/MessageStatus/MessageStatus.types";
import { ComponentPropsWithoutRef, ReactElement } from "react";

export type FormFieldMessages = Message[] | undefined;

export interface Message extends Omit<
  MessageStatusProps,
  "id" | "variant" | "fullWidth"
> {}

export interface FieldMessagesProps {
  messages: Message[];
  name: string;
  variant?: MessageStatusVariant;
  fullWidth?: MessageStatusFullWidth;
}

export interface UseFieldMessagesInputProps extends Pick<
  ComponentPropsWithoutRef<"input">,
  "aria-describedby" | "aria-invalid"
> {}

export interface UseFieldMessagesWrapperProps extends Pick<
  ComponentPropsWithoutRef<"div">,
  "aria-live"
> {}

export interface UseFieldMessagesReturn {
  inputProps: UseFieldMessagesInputProps;
  wrapperProps: UseFieldMessagesWrapperProps;
  FieldMessages: () => ReactElement;
}
