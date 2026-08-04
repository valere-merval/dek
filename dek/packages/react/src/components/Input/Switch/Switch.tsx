"use client";

import React, { ElementRef, forwardRef } from "react";
import {
  SwitchLabelProps,
  SwitchProps,
  SwitchRootWrapperProps,
} from "./Switch.types";
import * as Styled from "./Switch.styles";
import {
  useFieldMessages,
  UseFieldMessagesInputProps,
} from "../shared/FieldMessages";
import { createPropContext } from "../../../hooks/PropContext";
import * as TextFieldShared from "../shared/TextField.styles";

const { usePropContext, PropContextProvider } =
  createPropContext<UseFieldMessagesInputProps>(
    {} as UseFieldMessagesInputProps,
  );

/**
 Note: The Switch.Root component does not support the `onChange` prop but rather the `onCheckedChange` prop.
 For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/switch#switch">Documentation</a>
 */
export const Root = forwardRef<ElementRef<typeof Styled.Root>, SwitchProps>(
  (props: SwitchProps, ref) => {
    const inputProps = usePropContext();

    return (
      <Styled.Root ref={ref} {...inputProps} {...props}>
        <Styled.Thumb />
      </Styled.Root>
    );
  },
);
Root.displayName = "Switch.Root";

const Label = forwardRef<ElementRef<"label">, SwitchLabelProps>(
  ({ children, ...rest }: SwitchLabelProps, ref) => {
    if (rest.onChange)
      throw new Error(
        "onChange property is Invalid for Radix, please use the onCheckedChange property",
      );

    return (
      <Styled.Label asChild {...rest}>
        <label ref={ref}>{children}</label>
      </Styled.Label>
    );
  },
);
Label.displayName = "Switch.Label";

const RootWrapper = forwardRef<
  ElementRef<typeof Styled.RootWrapper>,
  SwitchRootWrapperProps
>(({ children, name, messages }, ref) => {
  const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
    messages,
    name,
  );
  return (
    <Styled.RootWrapper ref={ref} {...wrapperProps}>
      <PropContextProvider value={inputProps}>
        <TextFieldShared.InputContainer>
          {children}
          <FieldMessages />
        </TextFieldShared.InputContainer>
      </PropContextProvider>
    </Styled.RootWrapper>
  );
});
RootWrapper.displayName = "Switch.RootWrapper";

export const Switch = {
  Root,
  RootWrapper,
  Label,
};
