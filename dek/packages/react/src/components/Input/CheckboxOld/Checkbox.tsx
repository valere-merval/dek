import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./Checkbox.styles";
import { CheckboxLabelProps, CheckboxProps } from "./Checkbox.types";
import { useFieldMessages } from "../shared/FieldMessages";
import { createPropContext } from "../../../hooks/PropContext";
import type { UseFieldMessagesInputProps } from "../shared/FieldMessages";

const { usePropContext, PropContextProvider } =
  createPropContext<UseFieldMessagesInputProps>(
    {} as UseFieldMessagesInputProps,
  );

/**
 Note: The Checkbox.Root component does not support the `onChange` prop but rather the `onCheckedChange` prop.
 For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/checkbox">Documentation</a>
 */
export const Root = forwardRef<ElementRef<typeof Styled.Root>, CheckboxProps>(
  ({ onChange, ...rest }, ref) => {
    if (onChange)
      throw new Error(
        "onChange property is Invalid for Radix, please use the onCheckedChange property",
      );

    const inputProps = usePropContext();

    return (
      <Styled.Root ref={ref} {...inputProps} {...rest}>
        <Styled.Indicator>
          <Styled.Icon />
        </Styled.Indicator>
      </Styled.Root>
    );
  },
);
Root.displayName = "Checkbox.Root";

const Label = forwardRef<ElementRef<typeof Styled.Label>, CheckboxLabelProps>(
  ({ children, id, name, messages, ...rest }, ref) => {
    const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
      messages,
      name,
    );

    return (
      <Styled.LabelWrapper {...wrapperProps}>
        <PropContextProvider value={inputProps}>
          <Styled.Label {...rest} ref={ref}>
            {children}
          </Styled.Label>
          <FieldMessages />
        </PropContextProvider>
      </Styled.LabelWrapper>
    );
  },
);
Label.displayName = "Checkbox.Label";

export const Checkbox = {
  Root,
  Label,
};
