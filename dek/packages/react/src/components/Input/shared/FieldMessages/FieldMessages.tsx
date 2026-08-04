"use client";

import {
  FieldMessagesProps,
  FormFieldMessages,
  UseFieldMessagesReturn,
} from "./FieldMessages.types";
import * as Styled from "./FieldMessages.styles";
import { MessageStatusVariant } from "../../../Message/MessageStatus";
import { MessageStatusFullWidth } from "../../../Message/MessageStatus/MessageStatus.types";

const getDescribedBy = (name: string) => `messages-${name}`;

export const FieldMessages = ({
  messages,
  name,
  variant = "primary",
  fullWidth,
}: FieldMessagesProps) => {
  const describedBy = getDescribedBy(name);
  return (
    <Styled.Wrapper id={describedBy}>
      {messages.map(({ message, type }, index) => (
        <Styled.MessageStatus
          type={type}
          message={message}
          key={`${describedBy}-${index}`}
          id={`${describedBy}-${index}`}
          variant={variant}
          fullWidth={fullWidth}
        />
      ))}
    </Styled.Wrapper>
  );
};

export const useFieldMessages = (
  messages: FormFieldMessages,
  name: string,
  variant?: MessageStatusVariant,
  fullWidth?: MessageStatusFullWidth,
): UseFieldMessagesReturn => {
  const hasMessages = messages && messages.length > 0;
  const hasErrors = !!messages?.find(({ type }) => type === "error");

  const FieldMessagesPrepared = () => (
    <>
      {hasMessages && (
        <FieldMessages
          messages={messages}
          name={name}
          variant={variant}
          fullWidth={fullWidth}
        />
      )}
    </>
  );

  return {
    FieldMessages: FieldMessagesPrepared,
    inputProps: {
      "aria-describedby": hasMessages ? getDescribedBy(name) : undefined,
      "aria-invalid": hasErrors || undefined,
    },
    wrapperProps: {
      "aria-live": hasMessages ? "polite" : undefined,
    },
  };
};
