"use client";

import { ElementRef, forwardRef } from "react";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import * as Styled from "./Select.styles";
import { SelectItemProps, SelectProps } from "./Select.types";
import { ChevronOpenIndicator, IndicatorCheck } from "../shared/Popover.styles";
import * as TextFieldShared from "../shared/TextField.styles";
import { useFieldMessages } from "../shared/FieldMessages";
import { useTheme } from "styled-components";
import { Popover } from "react-aria-components";
import { popoverMapping } from "./mappings";
import { useId } from "react-aria";

/**
 Note: The `Select` component uses the React Aria library for its core functionality.

 Refer to this [Documentation](https://react-spectrum.adobe.com/react-aria/Select.html#popover)
 */
export const Root = ({
  id,
  name,
  children,
  size,
  messages,
  placeholder,
  disabled = false,
  fullWidth = false,
  required = false,
  popoverAlignment = "left",
  style,
  className,
  value,
  defaultValue,
  onChange,
  ...rest
}: SelectProps) => {
  const {
    contextSpecific: { backgroundColor },
  } = useTheme();
  const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
    messages,
    name,
  );
  const selectedValueID = useId();
  const labelID = useId();

  return (
    <TextFieldShared.InputContainer
      {...wrapperProps}
      style={style}
      className={className}
    >
      <Styled.Select
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...rest}
        isDisabled={disabled}
        isRequired={required}
        isInvalid={!!inputProps["aria-invalid"]}
        {...inputProps}
      >
        <Styled.InputWrapper
          $size={size}
          $fullWidth={fullWidth}
          aria-labelledby={`${labelID} ${selectedValueID}`}
        >
          <ThemeProvider backgroundColor={backgroundColor}>
            <Styled.SelectValue $size={size} id={selectedValueID}>
              {({ isPlaceholder, selectedText }) =>
                isPlaceholder ? "" : selectedText
              }
            </Styled.SelectValue>
            <Styled.Label
              $size={size}
              $disabled={disabled}
              id={labelID}
              aria-hidden
            >
              {placeholder}
              {required && " *"}
            </Styled.Label>
            <TextFieldShared.IconWrapper $disabled={disabled}>
              <ChevronOpenIndicator />
            </TextFieldShared.IconWrapper>
          </ThemeProvider>
        </Styled.InputWrapper>
        <Popover
          crossOffset={popoverMapping[popoverAlignment].crossOffset}
          offset={10}
          placement={popoverMapping[popoverAlignment].placement}
        >
          <Styled.PopoverChild>
            <Styled.ListBox>{children}</Styled.ListBox>
          </Styled.PopoverChild>
        </Popover>
      </Styled.Select>
      <FieldMessages />
    </TextFieldShared.InputContainer>
  );
};
Root.displayName = "Select.Root";

const Item = forwardRef<ElementRef<typeof Styled.ListBoxItem>, SelectItemProps>(
  ({ textValue, children, ...rest }, ref) => {
    return (
      <Styled.ListBoxItem ref={ref} textValue={textValue} {...rest}>
        {({ isSelected }) => (
          <>
            {children || textValue}
            {isSelected && <IndicatorCheck />}
          </>
        )}
      </Styled.ListBoxItem>
    );
  },
);
Item.displayName = "Select.Item";

export const Select = {
  Root,
  Item,
};
