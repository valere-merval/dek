"use client";

import React, {
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from "react";
import * as Styled from "./SelectionColor.styles";
import {
  SelectionColorItemProps,
  SelectionColorItemWrapperProps,
  SelectionColorRootProps,
  SelectionColorValueProps,
} from "./SelectionColor.types";
import { Text } from "../../Typography/Text";

type ValueContextValue = string | undefined;
const ValueContext = createContext<ValueContextValue>("");

/**
 Note: The SelectionColor.Root component does not support the `onChange` prop but rather the `onValueChange` prop.
 For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/toggle-group#toggle-group">Documentation</a>.
 */
export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  SelectionColorRootProps
>(
  (
    {
      onChange,
      defaultValue,
      value,
      onValueChange,
      ...rest
    }: SelectionColorRootProps,
    ref,
  ) => {
    const handleValueChange = (value: string) => {
      if (value) {
        onValueChange(value);
      }
    };

    if (onChange)
      throw new Error(
        "SelectionColor may only implement 'onValueChange' instead of 'onChange'",
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
Root.displayName = "SelectionColor.Root";

export const Item = forwardRef<
  ElementRef<typeof Styled.Item>,
  SelectionColorItemProps
>(({ children, hexValue, ...rest }: SelectionColorItemProps, ref) => {
  return (
    <Styled.Item ref={ref} {...rest}>
      <Styled.ItemInnerRing $hexValue={hexValue}>
        <Styled.ItemIcon $hexValue={hexValue} />{" "}
        <Styled.highContrastText>{rest["aria-label"]}</Styled.highContrastText>
      </Styled.ItemInnerRing>
    </Styled.Item>
  );
});
Item.displayName = "SelectionColor.Item";

export const ItemWrapper = forwardRef<
  ElementRef<typeof Styled.ItemWrapper>,
  SelectionColorItemWrapperProps
>((props: SelectionColorItemWrapperProps, ref) => {
  return <Styled.ItemWrapper ref={ref} {...props} />;
});
ItemWrapper.displayName = "SelectionColor.ItemWrapper";

export const Value = forwardRef<
  ElementRef<typeof Styled.Value>,
  SelectionColorValueProps
>(({ label, ...rest }: SelectionColorValueProps, ref) => {
  const value = useContext(ValueContext);
  return (
    <Styled.Value ref={ref} {...rest}>
      <Text size="large" variant="light">
        {label}
        <Text
          as="span"
          size="large"
          variant="bold"
          aria-description="ausgewählte Farbe"
        >
          {value}
        </Text>
      </Text>
    </Styled.Value>
  );
});
Value.displayName = "SelectionColor.Value";

export const SelectionColor = {
  Root,
  Item,
  ItemWrapper,
  Value,
};
