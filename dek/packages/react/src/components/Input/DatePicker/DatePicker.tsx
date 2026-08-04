"use client";

import { CalendarFill } from "@fair/icons";
import { getLocalTimeZone } from "@internationalized/date";
import React, {
  ElementRef,
  forwardRef,
  KeyboardEventHandler,
  useState,
} from "react";
import { DateValue } from "react-aria-components";
import { TextField } from "../TextField";
import * as Styled from "./DatePicker.styles";
import { DatePickerProps } from "./DatePicker.types";
import { Calendar } from "./components/Calendar/Calendar";
import { useObjectRef } from "react-aria";
import { crossOffset } from "../shared/Popover.styles";

const formatDateValue = (dateValue?: DateValue | null) =>
  dateValue
    ? new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(dateValue.toDate(getLocalTimeZone()))
    : "";

/**
 * Note: This component uses the [React Aria Calendar Component](https://react-spectrum.adobe.com/react-aria/Calendar.html) for its core functionality.
 * In order to use the CalendarDate type in the calendar props, the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package is required.
 */
export const DatePicker = forwardRef<
  ElementRef<typeof TextField>,
  DatePickerProps
>(
  (
    {
      id,
      name,
      value,
      onChange,
      messages,
      placeholder,
      disabled,
      style,
      className,
      fullWidth,
      calendarProps,
      textFieldProps,
    }: DatePickerProps,
    ref,
  ) => {
    const textFieldRef = useObjectRef(ref);
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    const handleChange = (value: DateValue) => {
      onChange?.(value);

      setIsPopoverOpen(false);
    };

    const openPopover = () => {
      if (!disabled) {
        setIsPopoverOpen(true);
      }
    };

    const handleTriggerClick: KeyboardEventHandler = (event) => {
      if (["Enter", "ArrowDown", "ArrowUp", " "].includes(event.key)) {
        openPopover();
      }
    };

    return (
      <>
        <Styled.TextFieldTrigger
          ref={textFieldRef}
          id={id}
          name={name}
          icon={<CalendarFill />}
          value={formatDateValue(value)}
          messages={messages}
          placeholder={placeholder}
          disabled={disabled}
          fullWidth={fullWidth}
          style={style}
          className={className}
          readOnly
          {...textFieldProps}
          onClick={openPopover}
          onKeyDown={handleTriggerClick}
          aria-haspopup="menu"
        />
        <Styled.Popover
          isOpen={isPopoverOpen}
          triggerRef={textFieldRef}
          onOpenChange={setIsPopoverOpen}
          crossOffset={-crossOffset}
          offset={10}
          placement="bottom left"
          aria-label={placeholder}
        >
          <Styled.PopoverContent>
            <Calendar
              {...calendarProps}
              value={value}
              onChange={handleChange}
            />
          </Styled.PopoverContent>
        </Styled.Popover>
      </>
    );
  },
);
DatePicker.displayName = "DatePicker";
