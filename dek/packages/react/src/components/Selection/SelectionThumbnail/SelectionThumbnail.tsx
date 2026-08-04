"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./SelectionThumbnail.styles";
import {
  SelectionThumbnailItemProps,
  SelectionThumbnailRootProps,
} from "./SelectionThumbnail.types";

/**
 Note: The SelectionThumbnail.Root component does not support the `onChange` prop but rather the `onValueChange` prop.
 For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/toggle-group#toggle-group">Documentation</a>
 */
export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  SelectionThumbnailRootProps
>(
  (
    {
      onChange,
      defaultValue,
      value,
      onValueChange,
      ...rest
    }: SelectionThumbnailRootProps,
    ref,
  ) => {
    const handleValueChange = (value: string) => {
      if (value) {
        onValueChange(value);
      }
    };

    if (onChange)
      throw new Error(
        "SelectionThumbnail may only implement 'onValueChange' instead of 'onChange'",
      );

    return (
      <Styled.Root
        value={value}
        onValueChange={handleValueChange}
        defaultValue={defaultValue}
        ref={ref}
        {...rest}
        type="single"
      />
    );
  },
);
Root.displayName = "SelectionThumbnail.Root";

export const Item = forwardRef<
  ElementRef<typeof Styled.Item>,
  SelectionThumbnailItemProps
>(({ children, ...rest }: SelectionThumbnailItemProps, ref) => {
  return (
    <Styled.Item ref={ref} {...rest}>
      {children}
    </Styled.Item>
  );
});
Item.displayName = "SelectionThumbnail.Item";

export const SelectionThumbnail = {
  Root,
  Item,
};
