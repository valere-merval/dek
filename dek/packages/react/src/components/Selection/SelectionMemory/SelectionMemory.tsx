"use client";

import React, {
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from "react";
import * as Styled from "./SelectionMemory.styles";
import {
  SelectionMemoryItemProps,
  SelectionMemoryItemWrapperProps,
  SelectionMemoryRootProps,
  SelectionMemoryValueProps,
} from "./SelectionMemory.types";
import { Text } from "../../Typography/Text";

type ValueContextValue = string | undefined;
const ValueContext = createContext<ValueContextValue>("");

/**
 Note: The SelectionMemory.Root component does not support the `onChange` prop but rather the `onValueChange` prop.
 For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/toggle-group#toggle-group">Documentation</a>
 */
export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  SelectionMemoryRootProps
>(
  (
    {
      onChange,
      defaultValue,
      value,
      onValueChange,
      ...rest
    }: SelectionMemoryRootProps,
    ref,
  ) => {
    const handleValueChange = (value: string) => {
      if (value) {
        onValueChange(value);
      }
    };

    if (onChange)
      throw new Error(
        "SelectionMemory may only implement 'onValueChange' instead of 'onChange'",
      );

    return (
      <ValueContext.Provider value={value || defaultValue}>
        <Styled.Fieldset>
          <Styled.Root
            value={value}
            onValueChange={handleValueChange}
            defaultValue={defaultValue}
            ref={ref}
            {...rest}
            type="single"
          />
        </Styled.Fieldset>
      </ValueContext.Provider>
    );
  },
);
Root.displayName = "SelectionMemory.Root";

export const Item = forwardRef<
  ElementRef<typeof Styled.Item>,
  SelectionMemoryItemProps
>(({ children, unavailable, ...rest }: SelectionMemoryItemProps, ref) => {
  return (
    <Styled.Item
      ref={ref}
      {...rest}
      $unavailable={unavailable || rest.disabled}
      aria-label={
        unavailable
          ? `${rest["aria-label"] || rest.value} nicht vorhanden`
          : rest["aria-label"]
      }
    >
      <Styled.ItemText>{children}</Styled.ItemText>
    </Styled.Item>
  );
});
Item.displayName = "SelectionMemory.Item";

export const ItemWrapper = forwardRef<
  ElementRef<typeof Styled.ItemWrapper>,
  SelectionMemoryItemWrapperProps
>((props: SelectionMemoryItemWrapperProps, ref) => {
  return <Styled.ItemWrapper ref={ref} {...props} />;
});
ItemWrapper.displayName = "SelectionMemory.ItemWrapper";

export const Value = forwardRef<
  ElementRef<typeof Styled.Value>,
  SelectionMemoryValueProps
>(({ label, ...rest }: SelectionMemoryValueProps, ref) => {
  const value = useContext(ValueContext);
  return (
    <Styled.Value ref={ref} {...rest}>
      <Text variant="light" size="large">
        {label}
        <Text
          as="span"
          variant="bold"
          size="large"
          aria-description="ausgewählter Speicherplatz"
        >
          {value}
        </Text>
      </Text>
    </Styled.Value>
  );
});
Value.displayName = "SelectionMemory.Value";

export const SelectionMemory = {
  Root,
  Item,
  ItemWrapper,
  Value,
};
