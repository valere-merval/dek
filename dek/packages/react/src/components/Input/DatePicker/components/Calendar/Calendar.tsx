import * as Styled from "./Calendar.styles";
import React, { ElementRef, forwardRef, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "@fair/icons";
import { CalenderMonth } from "../CalendarMonth/CalendarMonth";
import { CalendarProps, DateValue } from "react-aria-components";
import { useResizeWindow } from "../../../../../hooks/useResizeWindow";
import { getBreakpointAsNumber } from "../../../../../theme/mappings/mediaBreakpoints";

const checkIsSecondMonthVisible = () => {
  if (window) {
    return window.innerWidth >= getBreakpointAsNumber("md");
  }
  return false;
};

export const Calendar = forwardRef<
  ElementRef<typeof Styled.Calendar>,
  CalendarProps<DateValue>
>(
  (
    {
      autoFocus = true,
      value,
      defaultFocusedValue,
      ...calendarRest
    }: CalendarProps<DateValue>,
    ref,
  ) => {
    const [isSecondMonthVisible, setIsSecondMonthVisible] = useState(
      checkIsSecondMonthVisible(),
    );

    const handleResize = useCallback(() => {
      if (window) {
        setIsSecondMonthVisible(checkIsSecondMonthVisible);
      }
    }, []);

    useResizeWindow(handleResize);

    return (
      <Styled.Calendar
        visibleDuration={{ months: isSecondMonthVisible ? 2 : 1 }}
        pageBehavior="single"
        autoFocus={autoFocus}
        value={value}
        defaultFocusedValue={value || defaultFocusedValue}
        {...calendarRest}
        ref={ref}
      >
        <Styled.CalendarHeading>
          <Styled.CalendarNavigationButton slot="previous">
            <ChevronLeft />
          </Styled.CalendarNavigationButton>
          <Styled.CalendarNavigationButton slot="next">
            <ChevronRight />
          </Styled.CalendarNavigationButton>
        </Styled.CalendarHeading>
        <Styled.CalendarGridContainer>
          <CalenderMonth index={0} />
          {isSecondMonthVisible && <CalenderMonth index={1} />}
        </Styled.CalendarGridContainer>
      </Styled.Calendar>
    );
  },
);
Calendar.displayName = "DatePicker.Calendar";
