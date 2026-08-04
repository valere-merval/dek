"use client";

import { forwardRef, ElementRef } from "react";
import { MessageInfoProps } from "./MessageInfo.types";
import * as Styled from "./MessageInfo.styles";
import * as MessageStyled from "../shared/MessageContent.styles";
import { Text } from "../../Typography/Text";
import { useTheme } from "styled-components";
import { headlineSize } from "./mappings";

export const MessageInfo = forwardRef<
  ElementRef<typeof MessageStyled.Root>,
  MessageInfoProps
>(
  (
    { icon, headline, children, variant, fullWidth, ...rest }: MessageInfoProps,
    ref,
  ) => {
    const {
      contextSpecific: { brand },
    } = useTheme();

    const headLineElement =
      typeof headline === "string" ? (
        <Text variant="bold" size={headlineSize[brand]}>
          {headline}
        </Text>
      ) : (
        <>{headline}</>
      );

    return (
      <MessageStyled.Root
        $variant={variant}
        $fullWidth={fullWidth}
        ref={ref}
        {...rest}
      >
        {icon && (
          <Styled.HeadlineContainer>
            <Styled.IconWrapper>{icon}</Styled.IconWrapper>
            {headline ? headLineElement : <>{children}</>}
          </Styled.HeadlineContainer>
        )}
        {!icon && headline && headLineElement}
        {headline && <>{children}</>}
      </MessageStyled.Root>
    );
  },
);

MessageInfo.displayName = "MessageInfo";
