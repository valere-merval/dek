"use client";

import { ElementRef, forwardRef } from "react";
import { TextFieldProps } from "./TextField.types";
import * as Styled from "./TextField.styles";
import * as TextFieldShared from "../shared/TextField.styles";

import { useFieldMessages } from "../shared/FieldMessages";

export const TextField = forwardRef<
  ElementRef<typeof Styled.Input>,
  TextFieldProps
>((props: TextFieldProps, ref) => {
  const {
    placeholder,
    size,
    fullWidth,
    icon,
    messages,
    disabled,
    buttonAriaLabel,
    onIconClick,
    required,
    name,
    style,
    className,
    onClick,
    ...rest
  } = props;

  const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
    messages,
    name,
  );

  return (
    <Styled.Root
      $fullWidth={fullWidth}
      style={style}
      className={className}
      onClick={onClick}
      {...wrapperProps}
    >
      <TextFieldShared.InputContainer>
        <Styled.InputWrapper $fullWidth={fullWidth} $size={size}>
          <Styled.Input
            ref={ref}
            $size={size}
            aria-label={placeholder}
            disabled={disabled}
            required={required}
            $hasIcon={!!icon}
            type="text"
            placeholder={placeholder}
            name={name}
            {...inputProps}
            {...rest}
          />

          {placeholder && (
            <Styled.Placeholder
              htmlFor={props.id}
              $size={size}
              $disabled={disabled}
            >
              {placeholder}
              {required && " *"}
            </Styled.Placeholder>
          )}

          {icon &&
            (onIconClick ? (
              <TextFieldShared.IconWrapper $disabled={disabled}>
                <Styled.IconButton
                  onClick={onIconClick}
                  aria-label={buttonAriaLabel}
                  disabled={disabled}
                  type="button"
                >
                  {icon}
                </Styled.IconButton>
              </TextFieldShared.IconWrapper>
            ) : (
              <TextFieldShared.IconWrapper $disabled={disabled}>
                {icon}
              </TextFieldShared.IconWrapper>
            ))}
        </Styled.InputWrapper>
        <FieldMessages />
      </TextFieldShared.InputContainer>
    </Styled.Root>
  );
});
TextField.displayName = "TextField";
