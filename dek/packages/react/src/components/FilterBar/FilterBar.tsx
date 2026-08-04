"use client";

import React, { ElementRef, forwardRef, useContext } from "react";
import {
  FilterBarCheckboxGroupRootProps,
  FilterBarCheckboxItemProps,
  FilterBarProps,
  FilterBarRadioGroupRootProps,
  FilterBarRadioItemProps,
} from "./FilterBar.types";
import * as Desktop from "./desktop/FilterBar.styles";
import { DesktopFilterBar, GroupLabelContext } from "./desktop/FilterBar";
import { MobileFilterBar } from "./mobile/FilterBar";
import * as Styled from "./FilterBar.styles";
import { RadioGroup } from "../Input/RadioGroup";
/**
 API Reference:

 `sorting` and `filters` implement the following interface

 ```ts
 export interface FilterBarFormUnit {
  label: string;
  selectedLabel: string;
  form: ReactNode | ReactNode[];
}
 ```
 `label`: accepts a static or stateful string
 `selectedLabel`: accepts a static or stateful string

  This state is not managed within the Library.

 `form`: accepts one ReactNode which may contain `FilterBar.RadioGroup.RadioItem` or `FilterBar.CheckboxGroup.Item`, the container node may be a `FilterBar.RadioGroup.Root` or a `FilterBar.CheckboxGroup.Root` respectively.
 */
export const Root = forwardRef<ElementRef<typeof Desktop.Root>, FilterBarProps>(
  (props, ref) => {
    return (
      <>
        <DesktopFilterBar {...props} ref={ref} />
        <MobileFilterBar {...props} ref={ref} />
      </>
    );
  },
);
Root.displayName = "FilterBar.Root";

export const RadioGroupItem = forwardRef<
  ElementRef<"label">,
  FilterBarRadioItemProps
>(({ children, value, ...rest }, ref) => {
  return (
    <Styled.RadioItem value={value} ref={ref} {...rest}>
      {children}
    </Styled.RadioItem>
  );
});
RadioGroupItem.displayName = "FilterBar.RadioGroup.Item";

export const RadioGroupRoot = forwardRef<
  ElementRef<typeof RadioGroup.Root>,
  FilterBarRadioGroupRootProps
>(({ ...rest }, ref) => {
  const { id, label } = useContext(GroupLabelContext);

  return (
    <RadioGroup.Root
      id={id}
      ref={ref}
      label={label}
      hideLabel
      itemGapSize={{ vertical: { mobile: "24", desktop: "24" } }}
      {...rest}
    />
  );
});
RadioGroupRoot.displayName = "FilterBar.RadioGroupRoot.Root";

export const CheckboxGroupRoot = forwardRef<
  ElementRef<typeof Styled.CheckboxGroup>,
  FilterBarCheckboxGroupRootProps
>(({ ...rest }, ref) => {
  const { id, label } = useContext(GroupLabelContext);

  return (
    <Styled.CheckboxGroup
      id={id}
      ref={ref}
      label={label}
      hideLabel
      itemGapSize={{ vertical: { mobile: "24", desktop: "24" } }}
      {...rest}
    />
  );
});
CheckboxGroupRoot.displayName = "FilterBar.CheckboxGroup.Root";

export const CheckboxGroupItem = forwardRef<
  ElementRef<typeof Styled.CheckboxGroupItem>,
  FilterBarCheckboxItemProps
>(({ children, value, itemCount, ...rest }, ref) => {
  return (
    <Styled.CheckboxGroupItem value={value} ref={ref} {...rest}>
      <Styled.CheckboxLabelContainer>
        {children}
        <Styled.CheckboxCounter>{itemCount}</Styled.CheckboxCounter>
      </Styled.CheckboxLabelContainer>
    </Styled.CheckboxGroupItem>
  );
});
CheckboxGroupItem.displayName = "FilterBar.CheckboxGroup.Item";

export const FilterBar = {
  Root,
  RadioGroup: {
    Root: RadioGroupRoot,
    Item: RadioGroupItem,
  },
  CheckboxGroup: {
    Root: CheckboxGroupRoot,
    Item: CheckboxGroupItem,
  },
};
