"use client";

import * as Styled from "./CheckboxGroup.styles";
import { forwardRef, ElementRef } from "react";
import { CheckboxGroupProps } from "./CheckboxGroup.types";
import { useId, VisuallyHidden } from "react-aria";
import { defaultItemGapSize, ItemGapSize } from "../../shared/ItemGapSize";
import { useFieldMessages } from "../../shared/FieldMessages";
import * as CheckboxStyled from "../Checkbox/Checkbox.styles";
import { CheckboxProps } from "../Checkbox/Checkbox.types";
import { Label } from "react-aria-components";

/**
 * Note: The CheckboxGroup.Root component is using the [React Aria CheckboxGroup Component](https://react-aria.adobe.com/CheckboxGroup). The CheckboxGroup.Item component uses the [React Aria Checkbox Component](https://react-aria.adobe.com/Checkbox) for its core functionality.
 */
export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  CheckboxGroupProps
>((props, ref) => {
  const {
    children,
    label,
    hideLabel = false,
    description,
    itemGapSize: itemGapSizeProp,
    messages,
    name,
  } = props;

  const isTextString = typeof description === "string";

  const itemGapSize: Required<ItemGapSize> = {
    ...defaultItemGapSize,
    ...itemGapSizeProp,
  };

  const { inputProps, FieldMessages } = useFieldMessages(messages, name);
  const descriptionId = useId();

  const describedByIds = [description ? descriptionId : null]
    .filter(Boolean)
    .join(" ");

  const isInvalid = !!(props.isInvalid || inputProps["aria-invalid"]);

  return (
    <Styled.Root
      ref={ref}
      {...props}
      aria-describedby={describedByIds || undefined}
      isInvalid={isInvalid}
    >
      {hideLabel ? (
        <Label>
          <VisuallyHidden>{label}</VisuallyHidden>
        </Label>
      ) : (
        <Styled.Label $additionalMarginBottom={!description} elementType="div">
          {label}
        </Styled.Label>
      )}
      {isTextString ? (
        <Styled.Description
          as="span"
          size="large"
          variant="light"
          id={descriptionId}
        >
          {description}
        </Styled.Description>
      ) : (
        description
      )}

      <Styled.ItemContainer $itemGapSize={itemGapSize}>
        {children}
      </Styled.ItemContainer>
      <Styled.FieldError elementType="div">
        <div role="alert">
          <FieldMessages />
        </div>
      </Styled.FieldError>
    </Styled.Root>
  );
});

Root.displayName = "CheckboxGroup.Root";

export const Item = forwardRef<
  ElementRef<typeof CheckboxStyled.CheckboxContainer>,
  Omit<CheckboxProps, "name" | "messages">
>(({ children, ...props }: Omit<CheckboxProps, "name" | "messages">, ref) => {
  const isInvalid = !!props.isInvalid;
  const isTextString = typeof children === "string";
  return (
    <CheckboxStyled.CheckboxContainer
      ref={ref}
      {...props}
      isInvalid={isInvalid}
    >
      <CheckboxStyled.Indicator>
        <CheckboxStyled.Icon aria-hidden="true" />
      </CheckboxStyled.Indicator>
      {isTextString ? (
        <CheckboxStyled.CheckboxLabel>{children}</CheckboxStyled.CheckboxLabel>
      ) : (
        children
      )}
    </CheckboxStyled.CheckboxContainer>
  );
});

Item.displayName = "CheckboxGroup.Item";

export const CheckboxGroup = {
  Root,
  Item,
};
