import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./RadioGroupOld.styles";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import {
  RadioGroupOldItemContentProps,
  RadioGroupOldItemProps,
  RadioGroupOldLabelProps,
  RadioGroupOldRootProps,
} from "./RadioGroupOld.types";
import { Text } from "../../Typography/Text";
import { useFieldMessages } from "../shared/FieldMessages";
import * as TextFieldShared from "../shared/TextField.styles";

/**
 Note: The RadioGroup.Root component does not support the `onChange` prop but rather the `onValueChange` prop.
 For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/radio-group">Documentation</a>
 */
export const Root = forwardRef<
  ElementRef<typeof RadixRadioGroup.Root>,
  RadioGroupOldRootProps
>(({ children, messages, name, ...rest }: RadioGroupOldRootProps, ref) => {
  if (rest.onChange)
    throw new Error(
      "onChange property is invalid for Radix, please use the onValueChange property",
    );

  const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
    messages,
    name,
  );

  return (
    <TextFieldShared.InputContainer>
      <Styled.Root
        ref={ref}
        name={name}
        {...rest}
        {...wrapperProps}
        {...inputProps}
      >
        {children}
      </Styled.Root>
      <FieldMessages />
    </TextFieldShared.InputContainer>
  );
});
Root.displayName = "RadioGroupOld.Root";

export const Item = forwardRef<
  ElementRef<typeof Styled.Item>,
  RadioGroupOldItemProps
>((props: RadioGroupOldItemProps, ref) => {
  return (
    <Styled.Item ref={ref} {...props}>
      <Styled.Indicator />
    </Styled.Item>
  );
});
Item.displayName = "RadioGroupOld.Item";

export const Label = forwardRef<
  ElementRef<typeof Styled.Label>,
  RadioGroupOldLabelProps
>(({ children, ...rest }: RadioGroupOldLabelProps, ref) => {
  return (
    <Styled.Label ref={ref} {...rest}>
      {children}
    </Styled.Label>
  );
});
Label.displayName = "RadioGroupOld.Label";

export const ItemContent = forwardRef<
  ElementRef<typeof Styled.ItemContent>,
  RadioGroupOldItemContentProps
>((props: RadioGroupOldItemContentProps, ref) => {
  const { text, subtext, ...rest } = props;
  return (
    <Styled.ItemContent ref={ref} {...rest}>
      {/* ToDo: Text scales, also could use own styled component with fixed fontsize */}
      <Text as="div" variant="bold" size="large">
        {text}
      </Text>
      {subtext && (
        <Text as="div" variant="light" size="large">
          {subtext}
        </Text>
      )}
    </Styled.ItemContent>
  );
});
ItemContent.displayName = "RadioGroupOld.ItemContent";

export const RadioGroupOld = {
  Root,
  Item,
  Label,
  ItemContent,
};
