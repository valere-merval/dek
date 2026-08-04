"use client";

import { ElementRef, forwardRef } from "react";
import { MessageStatusProps } from "./MessageStatus.types";
import * as Styled from "./MessageStatus.styles";
import {
  CheckCircleOutline,
  ClockCircleOutline,
  CrossCircleOutline,
  ExclamationMarkTriangleOutline,
} from "@fair/icons";

export const MessageStatus = forwardRef<
  ElementRef<typeof Styled.Root>,
  MessageStatusProps
>(({ message, variant, type, fullWidth, ...rest }: MessageStatusProps, ref) => {
  const fullWidthProp =
    typeof fullWidth === "boolean"
      ? { mobile: fullWidth, desktop: fullWidth }
      : fullWidth;

  return (
    <Styled.Root
      $variant={variant}
      $fullWidth={fullWidthProp}
      $type={type}
      ref={ref}
      {...rest}
    >
      <Styled.Content>
        <Styled.IconContainer>
          {type === "error" && <CrossCircleOutline aria-hidden />}
          {type === "warning" && <ExclamationMarkTriangleOutline aria-hidden />}
          {type === "pending" && <ClockCircleOutline aria-hidden />}
          {type === "success" && <CheckCircleOutline aria-hidden />}
        </Styled.IconContainer>
        <Styled.MessageContainer>{message}</Styled.MessageContainer>
      </Styled.Content>
    </Styled.Root>
  );
});
MessageStatus.displayName = "MessageStatus";
