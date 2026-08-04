"use client";

import { Placement, useComboBox, useFilter, useId } from "react-aria";
import { Item, useComboBoxState } from "react-stately";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ComboBoxPopover } from "./components/Popover/ComboBoxPopover";
import { ComboBoxListBox } from "./components/ListBox/ComboBoxListBox";
import * as Styled from "./ComboBox.styles";
import * as TextFieldShared from "../shared/TextField.styles";
import { useFieldMessages } from "../shared/FieldMessages";
import { ComboBoxProps, PopoverAlignment } from "./ComboBox.types";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import { useTheme } from "styled-components";
import { LoaderSpinner } from "../../Loader/LoaderSpinner";
import { ChevronOpenIndicator, crossOffset } from "../shared/Popover.styles";
import { isAnyListAvailable } from "../shared/utils";
import { useResizeObserver } from "@react-aria/utils";

const popoverMapping: Record<
  PopoverAlignment,
  { placement: Placement; crossOffset: number }
> = {
  left: {
    placement: "bottom left",
    crossOffset: -crossOffset,
  },
  right: {
    placement: "bottom right",
    crossOffset,
  },
};

const Root = <T extends object>({
  messages,
  name,
  style,
  className,
  id,
  comboboxRef,
  inputRef,
  size,
  disabled = false,
  fullWidth,
  ariaLabel,
  defaultInputValue,
  inputValue,
  autoComplete,
  placeholder,
  isLoading,
  hideChevron,
  buttonAriaLabel,
  popoverAlignment = "left",
  children,
  items,
  defaultItems,
  label,
  shouldFocusFirstItem,
  ...rest
}: ComboBoxProps<T>) => {
  const [menuWidth, setMenuWidth] = useState<string | null>(null);
  const labelId = useId();
  const {
    contextSpecific: { backgroundColor },
  } = useTheme();

  const {
    FieldMessages,
    inputProps: FieldMessageInputProps,
    wrapperProps,
  } = useFieldMessages(messages, name);

  const { contains } = useFilter({ sensitivity: "base" });

  const hasChildrenAsFunction = !!children && typeof children === "function";
  // This is a workaround to ensure that every async api result will be shown in the popover, see https://github.com/adobe/react-spectrum/issues/5234
  const allowsEmptyCollection = hasChildrenAsFunction;

  const isListAvailable = isAnyListAvailable(
    hasChildrenAsFunction,
    children,
    items,
    defaultItems,
  );

  const isInputValueFilled =
    (inputValue && inputValue.length > 0) ||
    (defaultInputValue && defaultInputValue.length > 0);

  const isInitialLoading = isLoading && !isListAvailable && !isInputValueFilled;

  const state = useComboBoxState({
    ...rest,
    allowsEmptyCollection,
    children,
    items,
    inputValue,
    defaultItems,
    defaultInputValue,
    defaultFilter: contains,
  });

  const { selectionManager } = state;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRefInternal = useRef<HTMLInputElement | null>(null);

  const { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...rest,
      inputRef: inputRefInternal,
      buttonRef,
      listBoxRef,
      popoverRef,
      "aria-label": ariaLabel,
    },
    state,
  );

  const onResize = useCallback(() => {
    if (inputRefInternal.current) {
      const inputRect = inputRefInternal.current.offsetWidth;
      setMenuWidth(inputRect + "px");
    }
  }, [inputRefInternal, setMenuWidth]);

  useResizeObserver({
    ref: inputRefInternal,
    onResize,
  });

  const focusFirstItem = () => {
    if (state.isOpen && state.collection.size && !selectionManager.focusedKey) {
      const firstItem = state.collection.getFirstKey();
      selectionManager.setFocusedKey(firstItem);
    }
  };

  useEffect(() => {
    if (shouldFocusFirstItem) {
      focusFirstItem();
    }
  }, [state.isOpen, state.inputValue, state.collection.size]);

  const inputRefCombined = useCallback((element: HTMLInputElement | null) => {
    inputRefInternal.current = element;
    if (typeof inputRef === "function") {
      inputRef(element);
    } else if (inputRef) {
      (inputRef as React.MutableRefObject<HTMLInputElement | null>).current =
        element;
    }
  }, []);

  return (
    <TextFieldShared.InputContainer
      {...wrapperProps}
      style={style}
      className={className}
    >
      <div ref={comboboxRef}>
        <Styled.InputWrapper $size={size} $fullWidth={fullWidth}>
          <ThemeProvider backgroundColor={backgroundColor}>
            <Styled.Input
              {...inputProps}
              role="combobox"
              id={id}
              aria-label={ariaLabel}
              aria-labelledby={labelId}
              disabled={disabled}
              readOnly={isInitialLoading}
              $size={size}
              ref={inputRefCombined}
              autoComplete={autoComplete}
              data-focused={state.isFocused ? true : undefined}
              {...FieldMessageInputProps}
            />
            <Styled.Label
              {...labelProps}
              $size={size}
              $disabled={disabled}
              htmlFor={id}
              id={labelId}
            >
              {isInitialLoading ? "Wird geladen ..." : placeholder}
            </Styled.Label>
            {isLoading ? (
              <TextFieldShared.IconWrapper $disabled={disabled}>
                <LoaderSpinner size="medium" />
              </TextFieldShared.IconWrapper>
            ) : (
              isListAvailable &&
              !hideChevron && (
                <TextFieldShared.IconWrapper $disabled={disabled}>
                  <Styled.Button
                    {...buttonProps}
                    $isListExpanded={state.isOpen}
                    aria-label={buttonAriaLabel}
                  >
                    <ChevronOpenIndicator />
                  </Styled.Button>
                </TextFieldShared.IconWrapper>
              )
            )}
          </ThemeProvider>
        </Styled.InputWrapper>
        {state.isOpen && state.collection.size > 0 && (
          <ComboBoxPopover
            state={state}
            triggerRef={inputRefInternal}
            popoverRef={popoverRef}
            isNonModal
            crossOffset={popoverMapping[popoverAlignment].crossOffset}
            offset={10}
            placement={popoverMapping[popoverAlignment].placement}
            fullWidth={fullWidth}
            style={{ "--trigger-width": menuWidth } as React.CSSProperties}
          >
            <ComboBoxListBox.Root
              {...listBoxProps}
              shouldUseVirtualFocus
              listBoxRef={listBoxRef}
              aria-label={`ListWrapper ${placeholder}`}
              state={state}
            />
          </ComboBoxPopover>
        )}
      </div>
      <FieldMessages />
    </TextFieldShared.InputContainer>
  );
};

// The ComboBox Item component can not be wrapped inside another component
// see https://github.com/adobe/react-spectrum/issues/2746
export const ComboBox = { Root, Item };
