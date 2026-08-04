import { ComponentPropsWithoutRef } from "react";

export type MessageContentVariant = "primary" | "outlined";

export interface MessageContentProps extends ComponentPropsWithoutRef<"div"> {
  variant?: MessageContentVariant;
  fullWidth?: boolean;
}
