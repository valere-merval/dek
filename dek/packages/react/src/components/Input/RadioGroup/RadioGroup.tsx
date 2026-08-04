"use client";

import { forwardRef, ElementRef } from "react";
import { RadioGroupProps, RadioProps } from "./RadioGroup.types";
import * as Styled from "./RadioGroup.styles";
import { useFieldMessages } from "../shared/FieldMessages";
import { useId, VisuallyHidden } from "react-aria";
import { Label } from "react-aria-components";
import { defaultItemGapSize, ItemGapSize } from "../shared/ItemGapSize";

/**
 * Note: This component uses the [React Aria RadioGroup Component](https://react-aria.adobe.com/RadioGroup) for its core functionality.
 */

export const Root = forwardRef<ElementRef<typeof Styled.Root>, RadioGroupProps>(
  (
    {
      label,
      children,
      name = "",
      hideLabel = false,
      description,
      itemGapSize: itemGapSizeProp,
      messages,
      ...props
    }: RadioGroupProps,
    ref,
  ) => {
    const itemGapSize: Required<ItemGapSize> = {
      ...defaultItemGapSize,
      ...itemGapSizeProp,
    };

    const errorId = useId();
    const descriptionId = useId();
    const { inputProps, FieldMessages } = useFieldMessages(messages, name);

    const describedByIds = [description ? descriptionId : null]
      .filter(Boolean)
      .join(" ");

    const isInvalid = !!(props.isInvalid || inputProps["aria-invalid"]);
    const hasMessages = messages && messages.length > 0;

    return (
      <Styled.Root
        ref={ref}
        {...props}
        aria-errormessage={messages?.length ? errorId : undefined}
        aria-describedby={describedByIds || undefined}
        isInvalid={isInvalid}
      >
        {hideLabel ? (
          <Label>
            <VisuallyHidden>{label}</VisuallyHidden>
          </Label>
        ) : (
          <Styled.Label
            $additionalMarginBottom={!description}
            elementType="div"
          >
            {label}
          </Styled.Label>
        )}
        {description && (
          <Styled.Description id={descriptionId}>
            {description}
          </Styled.Description>
        )}

        <Styled.ItemContainer $itemGapSize={itemGapSize}>
          {children}
        </Styled.ItemContainer>
        {hasMessages && (
          // toDO: analyze if we can use FieldError component from react-aria-components like in CheckboxGroup
          <Styled.ErrorBlock id={errorId} role="alert">
            <FieldMessages />
          </Styled.ErrorBlock>
        )}
      </Styled.Root>
    );
  },
);
Root.displayName = "RadioGroup.Root";

export const Item = forwardRef<ElementRef<typeof Styled.RadioItem>, RadioProps>(
  ({ children, ...props }: RadioProps, ref) => {
    return (
      <Styled.RadioItem ref={ref} {...props}>
        <>
          <Styled.Indicator>
            <Styled.Dot />
          </Styled.Indicator>
          <Styled.RadioItemText>{children}</Styled.RadioItemText>
        </>
      </Styled.RadioItem>
    );
  },
);
Item.displayName = "RadioGroup.Item";

export const RadioGroup = {
  Root,
  Item,
};
