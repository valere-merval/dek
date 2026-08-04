import { ReactNode } from "react";
import { MessageContentProps } from "../shared/MessageContent.types";

export interface MessageInfoProps extends MessageContentProps {
  icon?: ReactNode;
  headline?: string | ReactNode;
  children: ReactNode;
}
