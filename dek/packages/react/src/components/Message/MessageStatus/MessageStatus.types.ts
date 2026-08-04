import { ReactNode } from "react";

export type MessageStatusType = "error" | "warning" | "pending" | "success";
export type MessageStatusVariant = "primary" | "outlined";
export type MessageStatusFullWidth =
  | boolean
  | { mobile: boolean; desktop: boolean };

export interface MessageStatusProps {
  message: string | ReactNode;
  type: MessageStatusType;
  variant?: MessageStatusVariant;
  id?: string;
  fullWidth?: MessageStatusFullWidth;
}
