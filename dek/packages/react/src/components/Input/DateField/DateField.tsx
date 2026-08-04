"use client";

import React, {
  ElementRef,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { DateFieldInternalProps, DateFieldProps } from "./DateField.types";
import {
  DateField as AriaDateField,
  DateFieldStateContext,
} from "react-aria-components";
import * as Styled from "./DateField.styles";
import { useFieldMessages } from "../shared/FieldMessages";
import { CalendarDate } from "@internationalized/date";
import * as TextFieldShared from "../shared/TextField.styles";

/**
 * Note: This component uses the [React Aria DateField Component](https://react-spectrum.adobe.com/react-aria/DateField.html) for its core functionality.
 */
export const DateField = forwardRef<
  ElementRef<typeof AriaDateField>,
  DateFieldProps
>(
  (
    {
      shouldForceLeadingZeros = true,
      placeholder,
      size,
      messages,
      disabled,
      fullWidth,
      required,
      onValueChange,
      onChange,
      name,
      style,
      className,
      styleDateField,
      classNameDateField,
      ...rest
    },
    ref,
  ) => {
    const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
      messages,
      name,
    );

    return (
      <TextFieldShared.InputContainer
        {...wrapperProps}
        style={style}
        className={className}
      >
        <Styled.DateField
          name={name}
          style={styleDateField}
          className={classNameDateField}
          {...rest}
          shouldForceLeadingZeros={shouldForceLeadingZeros}
          placeholderValue={new CalendarDate(2000, 1, 1)}
          isDisabled={disabled}
          isRequired={required}
          $size={size}
          $fullWidth={fullWidth}
          ref={ref}
          onChange={onValueChange}
        >
          <DateFieldInternal
            placeholder={placeholder}
            size={size}
            isDisabled={disabled}
            required={required}
            onChange={onChange}
            {...inputProps}
          />
        </Styled.DateField>

        <FieldMessages />
      </TextFieldShared.InputContainer>
    );
  },
);

const DateFieldInternal = ({
  placeholder,
  size,
  required,
  onChange,
  isDisabled,
  ...rest
}: DateFieldInternalProps) => {
  const [isDirty, setIsDirty] = useState(false);
  const state = useContext(DateFieldStateContext);
  // Exclude all literal segments (like "." or "/"), then check if any of those are filled
  const isEditing =
    state?.segments
      .filter((segment) => segment.type !== "literal")
      .some((segment) => !segment.isPlaceholder) ?? false;

  useEffect(() => {
    if (onChange) {
      const date =
        state?.segments.map((segment) => segment.text).join("") ?? "";
      if (isDirty) {
        onChange(date);
      } else {
        if (state?.segments.some((segment) => parseInt(segment.text))) {
          onChange(date);
          setIsDirty(true);
        }
      }
    }
  }, [state?.dateValue]);

  return (
    <>
      <Styled.DateInput $size={size} $isEditing={isEditing} {...rest}>
        {(segment) => (
          <Styled.DateSegment segment={segment} $isEditing={isEditing} />
        )}
      </Styled.DateInput>

      <Styled.Placeholder
        $size={size}
        $isEditing={isEditing}
        $disabled={isDisabled}
      >
        {placeholder}
        {required && " *"}
      </Styled.Placeholder>
    </>
  );
};
DateField.displayName = "DateField";
