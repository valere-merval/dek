"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";
import { mergeProps } from "react-aria";
import { useFieldMessages } from "../../shared/FieldMessages";

/**
 * Note: This component uses the [React Aria Checkbox Component](https://react-aria.adobe.com/Checkbox) for its core functionality.
 */
export const Root = forwardRef<
  ElementRef<typeof Styled.CheckboxContainer>,
  CheckboxProps
>(({ children, ...props }: CheckboxProps, ref) => {
  const { messages, name } = props;
  const { FieldMessages, inputProps } = useFieldMessages(messages, name);

  const mergedProps = mergeProps(props, inputProps);

  const isInvalid = !!(props.isInvalid || inputProps["aria-invalid"]);

  return (
    <Styled.Container>
      <Styled.CheckboxContainer
        ref={ref}
        {...mergedProps}
        isInvalid={isInvalid}
      >
        <Styled.Indicator>
          <Styled.Icon aria-hidden="true" />
        </Styled.Indicator>
        <Styled.CheckboxLabel>{children}</Styled.CheckboxLabel>
      </Styled.CheckboxContainer>
      {messages && <FieldMessages />}
    </Styled.Container>
  );
});

Root.displayName = "Checkbox.Root";

export const Checkbox = {
  Root,
};
